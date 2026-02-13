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
      <main className="min-h-screen bg-[#0A0A0A] text-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <span className="text-sm text-white/70">Trusted by 4M+ readers</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Exclusive Partner
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Deals & Resources
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              Hand-picked AI tools and exclusive offers from companies we trust. 
              Each partner is vetted and featured in The Rundown newsletter.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap justify-center gap-8 sm:gap-12 text-center">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">4M+</div>
                <div className="text-sm text-white/50">Daily Readers</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">#1</div>
                <div className="text-sm text-white/50">AI Newsletter</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">{partnerList.length}</div>
                <div className="text-sm text-white/50">Partners</div>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-sm font-medium text-white/50 uppercase tracking-wider">
                Featured Partners
              </h2>
              <div className="h-px flex-1 bg-white/10 ml-4" />
            </div>
            
            {/* Mobile: Stack, Tablet+: 2 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {partnerList.map((partner) => (
                <Link
                  key={partner.slug}
                  href={`/partners/${partner.slug}`}
                  className="group block p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.04] active:scale-[0.98]"
                >
                  <div className="flex items-start gap-4">
                    <img 
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg sm:text-xl font-semibold truncate group-hover:text-purple-400 transition-colors">
                          {partner.name}
                        </h3>
                        <svg className="w-4 h-4 text-white/30 group-hover:text-purple-400 group-hover:translate-x-0.5 transition-all shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      <p className="text-white/50 text-sm mb-3 line-clamp-2">
                        {partner.tagline}
                      </p>
                      <div className="flex flex-wrap items-center gap-2">
                        <span 
                          className="px-3 py-1 rounded-full text-xs font-semibold"
                          style={{ 
                            backgroundColor: partner.colors.primary, 
                            color: isLightColor(partner.colors.primary) ? '#000000' : '#FFFFFF' 
                          }}
                        >
                          {partner.ctaText}
                        </span>
                        <span className="text-white/30 text-xs">
                          {partner.content.length} featured articles
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/20 p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Want to become a partner?
              </h2>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                Join the fastest-growing AI newsletter and reach 4M+ engaged readers who are actively looking for AI tools and solutions.
              </p>
              <a 
                href="https://therundown.ai/advertise"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-colors"
              >
                Partner with us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
            <div className="flex items-center gap-2">
              <img src="/logos/rundown-bw.jpg" alt="The Rundown" className="w-6 h-6 rounded" />
              <span>© 2026 The Rundown AI</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="https://therundown.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Newsletter
              </a>
              <a href="https://therundown.ai/advertise" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Advertise
              </a>
              <a href="https://twitter.com/theaboringai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
