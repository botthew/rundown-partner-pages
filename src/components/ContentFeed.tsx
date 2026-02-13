'use client';

import { Partner } from '@/lib/partners';

interface ContentFeedProps {
  partner: Partner;
  variant?: 'default' | 'cards' | 'list' | 'timeline';
}

export function ContentFeed({ partner, variant = 'default' }: ContentFeedProps) {
  const { name, content, colors } = partner;

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const TypeBadge = ({ type }: { type: 'guide' | 'newsletter' }) => (
    <span
      className="px-2 py-1 rounded text-xs font-medium uppercase tracking-wide"
      style={{
        backgroundColor: type === 'guide' ? `${colors.primary}20` : `${colors.secondary}20`,
        color: type === 'guide' ? colors.primary : colors.secondary,
      }}
    >
      {type}
    </span>
  );

  if (variant === 'cards') {
    return (
      <section className="py-20 px-6" style={{ backgroundColor: colors.background }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: colors.text }}>
            {name} in The Rundown
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {content.map((item, i) => (
              <a
                key={i}
                href={item.url}
                className="block rounded-xl p-6 transition-all hover:scale-[1.02] hover:shadow-xl"
                style={{ 
                  backgroundColor: `${colors.primary}08`,
                  border: `1px solid ${colors.primary}20`,
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <TypeBadge type={item.type} />
                  <span className="text-sm opacity-60" style={{ color: colors.text }}>
                    {formatDate(item.date)}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>
                  {item.title}
                </h3>
                <p className="text-sm opacity-70 leading-relaxed" style={{ color: colors.text }}>
                  {item.excerpt}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'list') {
    return (
      <section className="py-20 px-6" style={{ backgroundColor: colors.background }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8" style={{ color: colors.text }}>
            {name} in The Rundown
          </h2>
          <div className="space-y-4">
            {content.map((item, i) => (
              <a
                key={i}
                href={item.url}
                className="flex items-start gap-4 p-4 rounded-lg transition-colors hover:bg-opacity-50"
                style={{ backgroundColor: `${colors.primary}05` }}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <TypeBadge type={item.type} />
                  </div>
                  <h3 className="font-semibold mb-1" style={{ color: colors.text }}>
                    {item.title}
                  </h3>
                  <p className="text-sm opacity-60" style={{ color: colors.text }}>
                    {item.excerpt}
                  </p>
                </div>
                <span className="text-sm opacity-50 whitespace-nowrap" style={{ color: colors.text }}>
                  {formatDate(item.date)}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'timeline') {
    return (
      <section className="py-20 px-6" style={{ backgroundColor: colors.background }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: colors.text }}>
            {name} Coverage
          </h2>
          <div className="relative">
            <div 
              className="absolute left-4 top-0 bottom-0 w-0.5"
              style={{ backgroundColor: `${colors.primary}30` }}
            />
            <div className="space-y-8">
              {content.map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  className="relative pl-12 block group"
                >
                  <div 
                    className="absolute left-2 top-2 w-5 h-5 rounded-full border-4 transition-colors group-hover:scale-110"
                    style={{ 
                      borderColor: colors.primary,
                      backgroundColor: colors.background,
                    }}
                  />
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-medium" style={{ color: colors.primary }}>
                      {formatDate(item.date)}
                    </span>
                    <TypeBadge type={item.type} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:underline" style={{ color: colors.text }}>
                    {item.title}
                  </h3>
                  <p className="text-sm opacity-70" style={{ color: colors.text }}>
                    {item.excerpt}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Default variant
  return (
    <section className="py-20 px-6" style={{ backgroundColor: colors.background }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center" style={{ color: colors.text }}>
          Featured Content
        </h2>
        <div className="space-y-6">
          {content.map((item, i) => (
            <a
              key={i}
              href={item.url}
              className="block p-6 rounded-xl border transition-all hover:shadow-lg"
              style={{ 
                borderColor: `${colors.primary}20`,
                backgroundColor: colors.background,
              }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <TypeBadge type={item.type} />
                <span className="text-sm opacity-50" style={{ color: colors.text }}>
                  {formatDate(item.date)}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: colors.text }}>
                {item.title}
              </h3>
              <p className="opacity-70" style={{ color: colors.text }}>
                {item.excerpt}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
