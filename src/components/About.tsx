'use client';

import { Partner } from '@/lib/partners';

interface AboutProps {
  partner: Partner;
  variant?: 'default' | 'card' | 'inline' | 'feature';
}

export function About({ partner, variant = 'default' }: AboutProps) {
  const { name, description, colors } = partner;

  if (variant === 'card') {
    return (
      <section className="py-20 px-6" style={{ backgroundColor: colors.background }}>
        <div className="max-w-4xl mx-auto">
          <div 
            className="rounded-2xl p-10 md:p-14"
            style={{ 
              backgroundColor: `${colors.primary}15`,
              borderLeft: `4px solid ${colors.primary}`,
            }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: colors.text }}>
              About {name}
            </h2>
            <p className="text-lg leading-relaxed opacity-80" style={{ color: colors.text }}>
              {description}
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'inline') {
    return (
      <section className="py-16 px-6" style={{ backgroundColor: colors.background }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 items-start">
          <div>
            <h2 className="text-xl font-bold mb-2" style={{ color: colors.primary }}>
              About
            </h2>
            <h3 className="text-2xl font-bold" style={{ color: colors.text }}>
              {name}
            </h3>
          </div>
          <div className="md:col-span-2">
            <p className="text-lg leading-relaxed opacity-80" style={{ color: colors.text }}>
              {description}
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'feature') {
    return (
      <section 
        className="py-24 px-6"
        style={{ 
          background: `linear-gradient(180deg, ${colors.background} 0%, ${colors.primary}10 100%)` 
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <span 
            className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-6"
            style={{ backgroundColor: `${colors.primary}20`, color: colors.primary }}
          >
            Featured Partner
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: colors.text }}>
            Why We Recommend {name}
          </h2>
          <p className="text-lg md:text-xl leading-relaxed opacity-80" style={{ color: colors.text }}>
            {description}
          </p>
        </div>
      </section>
    );
  }

  // Default variant
  return (
    <section className="py-20 px-6" style={{ backgroundColor: colors.background }}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6" style={{ color: colors.text }}>
          About {name}
        </h2>
        <p className="text-lg leading-relaxed opacity-80" style={{ color: colors.text }}>
          {description}
        </p>
      </div>
    </section>
  );
}
