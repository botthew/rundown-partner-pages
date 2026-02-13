import { notFound } from 'next/navigation';
import { getPartner, getAllPartnerSlugs } from '@/lib/partners';
import { Hero, About, ContentFeed, Footer, TryAPrompt, RundownNav } from '@/components';
import { Metadata } from 'next';

// Layout variant mapping for each partner
const partnerVariants: Record<string, {
  hero: 'default' | 'gradient' | 'split' | 'minimal';
  about: 'default' | 'card' | 'inline' | 'feature';
  content: 'default' | 'cards' | 'list' | 'timeline';
}> = {
  chatgpt: { hero: 'gradient', about: 'feature', content: 'cards' },
  higgsfield: { hero: 'split', about: 'card', content: 'timeline' },
  suno: { hero: 'default', about: 'inline', content: 'cards' },
  'claude-code': { hero: 'minimal', about: 'card', content: 'list' },
};

export async function generateStaticParams() {
  return getAllPartnerSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const partner = getPartner(slug);
  
  if (!partner) {
    return { title: 'Partner Not Found' };
  }

  return {
    title: `${partner.name} | The Rundown AI Partner`,
    description: partner.tagline,
    openGraph: {
      title: `${partner.name} - Exclusive Offer from The Rundown AI`,
      description: partner.tagline,
    },
  };
}

export default async function PartnerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const partner = getPartner(slug);

  if (!partner) {
    notFound();
  }

  const variants = partnerVariants[slug] || { hero: 'default', about: 'default', content: 'default' };

  return (
    <main className="min-h-screen">
      <RundownNav />
      <div className="pt-20">
        <Hero partner={partner} variant={variants.hero} />
        <About partner={partner} variant={variants.about} />
        {slug === 'chatgpt' && <TryAPrompt />}
        <ContentFeed partner={partner} variant={variants.content} />
        <Footer partner={partner} />
      </div>
    </main>
  );
}
