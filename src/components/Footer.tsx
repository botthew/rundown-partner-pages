'use client';

import { Partner } from '@/lib/partners';

interface FooterProps {
  partner: Partner;
}

export function Footer({ partner }: FooterProps) {
  const { colors, ctaText, ctaUrl } = partner;

  return (
    <footer 
      className="py-16 px-6 border-t"
      style={{ 
        backgroundColor: colors.background,
        borderColor: `${colors.primary}20`,
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <img 
                src="/logos/rundown-bw.jpg" 
                alt="The Rundown" 
                className="w-8 h-8 rounded-lg object-cover"
              />
              <span className="text-2xl font-bold" style={{ color: colors.text }}>
                The Rundown AI
              </span>
            </div>
            <p className="text-sm opacity-60" style={{ color: colors.text }}>
              Get the latest AI news, understand why it matters, and learn how to apply it.
            </p>
          </div>
          <a
            href={ctaUrl}
            className="px-6 py-3 rounded-lg font-medium transition-opacity hover:opacity-90"
            style={{ backgroundColor: colors.primary, color: colors.accent }}
          >
            {ctaText}
          </a>
        </div>
        <div 
          className="mt-10 pt-6 border-t text-center text-sm opacity-50"
          style={{ borderColor: `${colors.primary}10`, color: colors.text }}
        >
          <p>© 2026 The Rundown AI. All rights reserved.</p>
          <p className="mt-1">
            This is an exclusive partner page. Learn more at{' '}
            <a href="https://therundown.ai" className="underline hover:no-underline">
              therundown.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
