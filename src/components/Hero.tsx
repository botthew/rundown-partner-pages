'use client';

import { Partner } from '@/lib/partners';

interface HeroProps {
  partner: Partner;
  variant?: 'default' | 'gradient' | 'split' | 'minimal';
}

export function Hero({ partner, variant = 'default' }: HeroProps) {
  const { name, tagline, ctaText, ctaUrl, colors, logo } = partner;

  // Base styles that all variants share
  const ctaButtonStyle = {
    backgroundColor: colors.primary,
    color: colors.accent,
  };

  if (variant === 'gradient') {
    return (
      <section 
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, ${colors.background} 0%, ${colors.primary}33 50%, ${colors.secondary}66 100%)` 
        }}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: colors.primary }} />
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: colors.secondary }} />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 rounded-2xl flex items-center justify-center text-4xl font-bold" style={{ backgroundColor: colors.primary, color: colors.accent }}>
                {name[0]}
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: colors.text }}>
              {name}
            </h1>
            <p className="text-xl md:text-2xl mb-10 opacity-90" style={{ color: colors.text }}>
              {tagline}
            </p>
            <a 
              href={ctaUrl}
              className="inline-block px-10 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 hover:shadow-2xl hover:green-glow"
              style={ctaButtonStyle}
            >
              {ctaText}
            </a>
          </div>
          <div className="hidden md:flex items-center justify-center relative">
            <div className="w-96 h-96 rounded-full bg-gradient-to-r from-emerald-500/30 to-green-600/30 animate-blob absolute blur-2xl"></div>
            <div className="relative z-10 w-72 h-72 bg-gradient-to-br from-emerald-400/20 to-green-600/20 rounded-full flex items-center justify-center">
              <div className="w-56 h-56 bg-gradient-to-br from-emerald-500/40 to-green-700/40 rounded-full flex items-center justify-center">
                <div className="w-40 h-40 bg-gradient-to-br from-emerald-600/60 to-green-800/60 rounded-full flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-emerald-700/80 to-green-900/80 rounded-full animate-pulse-slow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'split') {
    return (
      <section 
        className="min-h-[70vh] grid md:grid-cols-2"
        style={{ backgroundColor: colors.background }}
      >
        <div className="flex items-center justify-center p-12 md:p-20">
          <div className="max-w-xl">
            <div className="mb-6 w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold" style={{ backgroundColor: colors.primary, color: colors.accent }}>
              {name[0]}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ color: colors.text }}>
              {name}
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-80" style={{ color: colors.text }}>
              {tagline}
            </p>
            <a 
              href={ctaUrl}
              className="inline-block px-8 py-3 rounded-lg text-lg font-semibold transition-all hover:opacity-90"
              style={ctaButtonStyle}
            >
              {ctaText}
            </a>
          </div>
        </div>
        <div 
          className="hidden md:flex items-center justify-center"
          style={{ backgroundColor: colors.primary }}
        >
          <div className="text-9xl font-bold opacity-20" style={{ color: colors.accent }}>
            {name[0]}
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'minimal') {
    return (
      <section 
        className="py-32 px-6 relative"
        style={{ backgroundColor: colors.background }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div 
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-gray-100 to-transparent opacity-20"
            style={{ transform: 'rotate(-15deg) scale(1.5)' }}
          />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="bg-[#1E1E2E] rounded-xl border border-gray-800 shadow-2xl overflow-hidden mb-12">
            <div className="bg-[#2C2C3E] px-4 py-2 flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <div className="text-xs text-gray-400 ml-4">./claude-code</div>
            </div>
            <div className="p-6 font-mono text-sm text-green-400">
              <div><span className="text-blue-400">➜</span> npm create claude-code@latest</div>
              <div className="opacity-70">✔ Project name: my-awesome-project</div>
              <div className="opacity-70">✔ Framework: Next.js</div>
              <div className="opacity-70">✔ TypeScript: Yes</div>
              <div className="animate-pulse"><span className="text-blue-400">➜</span> Generating project structure...</div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6 inline-flex w-14 h-14 rounded-lg items-center justify-center text-xl font-bold" style={{ backgroundColor: colors.primary, color: colors.accent }}>
              {name[0]}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.text }}>
              {name}
            </h1>
            <p className="text-lg mb-8 opacity-70" style={{ color: colors.text }}>
              {tagline}
            </p>
            <a 
              href={ctaUrl}
              className="inline-block px-6 py-3 rounded-md text-base font-medium transition-all hover:opacity-90"
              style={ctaButtonStyle}
            >
              {ctaText}
            </a>
          </div>
        </div>
      </section>
    );
  }

  // Default variant
  return (
    <section 
      className="min-h-[60vh] flex items-center justify-center px-6"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-4xl text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold" style={{ backgroundColor: colors.primary, color: colors.accent }}>
            {name[0]}
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: colors.text }}>
          {name}
        </h1>
        <p className="text-xl md:text-2xl mb-10 opacity-80" style={{ color: colors.text }}>
          {tagline}
        </p>
        <a 
          href={ctaUrl}
          className="inline-block px-8 py-4 rounded-xl text-lg font-semibold transition-transform hover:scale-105"
          style={ctaButtonStyle}
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
}
