'use client';

import { Partner } from '@/lib/partners';
import { motion } from 'framer-motion';

interface ContentFeedProps {
  partner: Partner;
}

const VIDEO_AI_CONTENT = [
  {
    title: 'Revolutionizing Video Creation with AI-Powered Tools',
    type: 'guide' as const,
    url: '#',
    date: new Date().toISOString(),
    excerpt: 'Discover how AI is transforming the video production landscape, making high-quality content creation faster and more accessible than ever before.',
    thumbnail: 'video-ai-creation.jpg'
  },
  {
    title: 'From Script to Screen: AI Video Generation Techniques',
    type: 'newsletter' as const,
    url: '#',
    date: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
    excerpt: 'Learn advanced techniques for using AI to generate video content, from initial scripting to final render, with real-world case studies.',
    thumbnail: 'ai-video-workflow.jpg'
  },
  {
    title: 'The Future of Personalized Video Content',
    type: 'guide' as const,
    url: '#',
    date: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
    excerpt: 'Explore how AI-driven personalization is creating more engaging, targeted video experiences across different platforms and industries.',
    thumbnail: 'personalized-video.jpg'
  }
];

export function ContentFeed({ partner }: ContentFeedProps) {
  const { name, colors } = partner;

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <section 
      className="py-20 px-6 relative overflow-hidden" 
      style={{ 
        backgroundColor: colors.background,
        backgroundImage: `radial-gradient(${colors.primary}20 1px, transparent 1px)`,
        backgroundSize: '20px 20px'
      }}
    >
      {/* Purple video-themed glow effect */}
      <div 
        className="absolute top-0 left-0 right-0 h-96 opacity-20 blur-3xl pointer-events-none"
        style={{ 
          background: `radial-gradient(circle at center, ${colors.primary}50 0%, transparent 70%)`,
          zIndex: 0 
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center" 
          style={{ color: colors.text }}
        >
          AI Video Revolution with {name}
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {VIDEO_AI_CONTENT.map((item, i) => (
            <motion.a
              key={i}
              href={item.url}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: i * 0.2 
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: `0 15px 30px -10px ${colors.primary}50`
              }}
              className="block rounded-2xl overflow-hidden transition-all group"
              style={{ 
                backgroundColor: `${colors.primary}08`,
                border: `1px solid ${colors.primary}20`
              }}
            >
              {/* Thumbnail placeholder with video gradient */}
              <div 
                className="h-48 w-full relative overflow-hidden"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.primary}30 0%, ${colors.secondary}30 100%)` 
                }}
              >
                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse" />
                </div>
                
                {/* Video play button */}
                <div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                    w-16 h-16 rounded-full flex items-center justify-center transition-all
                    group-hover:scale-110 group-hover:shadow-2xl"
                  style={{ 
                    backgroundColor: `${colors.primary}50`,
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="40" 
                    height="40" 
                    viewBox="0 0 24 24" 
                    fill={colors.primary} 
                    stroke={colors.primary} 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="px-2 py-1 rounded text-xs font-medium uppercase tracking-wide"
                    style={{
                      backgroundColor: item.type === 'guide' ? `${colors.primary}20` : `${colors.secondary}20`,
                      color: item.type === 'guide' ? colors.primary : colors.secondary,
                    }}
                  >
                    {item.type}
                  </span>
                  <span 
                    className="text-sm opacity-60" 
                    style={{ color: colors.text }}
                  >
                    {formatDate(item.date)}
                  </span>
                </div>
                
                <h3 
                  className="text-lg font-semibold mb-3 group-hover:underline" 
                  style={{ color: colors.text }}
                >
                  {item.title}
                </h3>
                
                <p 
                  className="text-sm opacity-70 leading-relaxed" 
                  style={{ color: colors.text }}
                >
                  {item.excerpt}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}