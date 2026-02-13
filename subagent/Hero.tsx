'use client';

import { Partner } from '@/lib/partners';
import { motion } from 'framer-motion';

interface HeroProps {
  partner: Partner;
}

export function Hero({ partner }: HeroProps) {
  const { name, tagline, ctaText, ctaUrl, colors, logo } = partner;

  const backgroundVariants = {
    initial: { 
      background: `linear-gradient(45deg, ${colors.background} 0%, ${colors.primary}20 50%, ${colors.secondary}20 100%)`,
      opacity: 0.8 
    },
    hover: { 
      background: `linear-gradient(135deg, ${colors.primary}30 0%, ${colors.secondary}30 50%, ${colors.background} 100%)`,
      opacity: 1
    }
  };

  return (
    <motion.section 
      initial="initial"
      whileHover="hover"
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden p-6"
      style={{ backgroundColor: colors.background }}
    >
      {/* Video-themed film strip overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-b from-transparent via-purple-500 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-2 bg-gradient-to-b from-transparent via-purple-500 to-transparent" />
      </div>

      {/* Play button overlay */}
      <motion.div 
        className="absolute top-10 right-10 z-10 rounded-full p-4 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        style={{ 
          backgroundColor: `${colors.primary}20`, 
          border: `2px solid ${colors.primary}50` 
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
      </motion.div>

      <motion.div 
        className="relative z-20 max-w-4xl text-center"
        variants={backgroundVariants}
        style={{ 
          padding: '2rem',
          borderRadius: '1.5rem',
          boxShadow: `0 25px 50px -12px ${colors.primary}20`,
          background: backgroundVariants.initial.background 
        }}
      >
        {/* Shimmer/Glow effect */}
        <motion.div 
          className="absolute inset-0 rounded-2xl opacity-50 blur-3xl pointer-events-none"
          style={{ 
            background: `radial-gradient(circle at center, ${colors.primary}50 0%, transparent 70%)`,
            zIndex: -1
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="mb-8 flex justify-center">
          <motion.div 
            className="w-24 h-24 rounded-2xl flex items-center justify-center text-4xl font-bold"
            style={{ 
              backgroundColor: colors.primary, 
              color: colors.accent,
              boxShadow: `0 10px 25px -5px ${colors.primary}50`
            }}
            whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
          >
            {name[0]}
          </motion.div>
        </div>
        
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ color: colors.text }}
        >
          {name}
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-10 opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ color: colors.text }}
        >
          {tagline}
        </motion.p>
        
        <motion.a 
          href={ctaUrl}
          className="inline-block px-10 py-4 rounded-full text-lg font-semibold transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ 
            backgroundColor: colors.primary, 
            color: colors.accent,
            boxShadow: `0 15px 30px -10px ${colors.primary}50`
          }}
        >
          {ctaText}
        </motion.a>
      </motion.div>
    </motion.section>
  );
}