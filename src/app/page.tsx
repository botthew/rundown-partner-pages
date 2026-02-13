import Link from 'next/link';
import { partners } from '@/lib/partners';
import { RundownNav } from '@/components/RundownNav';

// Helper to determine if a color is light or dark
function isLightColor(hex: string): boolean {
  const c = hex.replace('#', '');
  const r = parseInt(c.substring(0, 2), 16);
  const g = parseInt(c.substring(2, 4), 16);
  const b = parseInt(c.substring(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5;
}

export default function Home() {
  const partnerList = Object.values(partners);

  return (
    <>
      <RundownNav />
      <main className="min-h-screen bg-[#0A0A0A] text-white pt-20">

      {/* Hero */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Partner Landing Pages
        </h2>
        <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
          Exclusive landing pages for The Rundown AI newsletter sponsors. 
          Each partner gets a customized page with their branding and featured content.
        </p>
      </section>

      {/* Partner Grid */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-8">
            Active Partners
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {partnerList.map((partner) => (
              <Link
                key={partner.slug}
                href={`/partners/${partner.slug}`}
                className="group block p-8 rounded-2xl border border-white/10 transition-all hover:border-white/30 hover:bg-white/5"
              >
                <div className="flex items-start gap-4">
                  <img 
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="w-14 h-14 rounded-xl object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xl font-semibold mb-1 group-hover:underline">
                      {partner.name}
                    </h4>
                    <p className="text-white/60 text-sm mb-3">
                      {partner.tagline}
                    </p>
                    <div className="flex items-center gap-2">
                      <span 
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{ 
                          backgroundColor: partner.colors.primary, 
                          color: isLightColor(partner.colors.primary) ? '#000000' : '#FFFFFF' 
                        }}
                      >
                        {partner.ctaText}
                      </span>
                      <span className="text-white/40 text-xs">
                        {partner.content.length} articles
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-white/10 mt-20">
          <div className="max-w-6xl mx-auto text-center text-white/40 text-sm">
            <p>© 2026 The Rundown AI. Partner landing page templates.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
