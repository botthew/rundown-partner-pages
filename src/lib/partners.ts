export interface Partner {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  logo: string; // URL or path
  ctaText: string;
  ctaUrl: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
    background: string;
  };
  content: {
    title: string;
    type: 'guide' | 'newsletter';
    date: string;
    excerpt: string;
    url: string;
  }[];
}

export const partners: Record<string, Partner> = {
  chatgpt: {
    slug: 'chatgpt',
    name: 'ChatGPT',
    tagline: 'The AI assistant that helps you get more done',
    description: 'ChatGPT is an AI-powered assistant developed by OpenAI that can help you write, learn, brainstorm, and more. With its advanced language capabilities, ChatGPT has become the go-to tool for millions of professionals and creators worldwide.',
    logo: '/logos/chatgpt.svg',
    ctaText: 'Try ChatGPT Free',
    ctaUrl: 'https://chat.openai.com',
    colors: {
      primary: '#10A37F',
      secondary: '#1A7F5A',
      accent: '#FFFFFF',
      text: '#FFFFFF',
      background: '#0D0D0D',
    },
    content: [
      {
        title: 'Mastering ChatGPT: 10 Advanced Prompting Techniques for Professionals',
        type: 'guide',
        date: '2026-02-10',
        excerpt: 'Transform your workflow with expert-level prompting strategies that unlock ChatGPT\'s true potential.',
        url: '#',
      },
      {
        title: 'ChatGPT Memory: Personalize Your AI Assistant Forever',
        type: 'newsletter',
        date: '2026-02-05',
        excerpt: 'New persistent memory feature lets you create a truly personalized AI companion that learns and adapts.',
        url: '#',
      },
      {
        title: 'AI Showdown: ChatGPT, Claude, and Gemini Put to the Ultimate Test',
        type: 'guide',
        date: '2026-01-28',
        excerpt: 'An exhaustive, task-by-task breakdown of the top AI models in problem-solving, creativity, and reasoning.',
        url: '#',
      },
    ],
  },
  higgsfield: {
    slug: 'higgsfield',
    name: 'Higgsfield AI',
    tagline: 'Create stunning AI videos in seconds',
    description: 'Higgsfield AI is a next-generation video creation platform that uses AI to transform your ideas into professional-quality videos. Perfect for marketers, creators, and teams who want to produce engaging video content without the complexity.',
    logo: '/logos/higgsfield.svg',
    ctaText: 'Start Creating Free',
    ctaUrl: 'https://higgsfield.ai',
    colors: {
      primary: '#7C3AED',
      secondary: '#5B21B6',
      accent: '#F3E8FF',
      text: '#FFFFFF',
      background: '#0F0F0F',
    },
    content: [
      {
        title: 'How Higgsfield is Changing Video Marketing',
        type: 'guide',
        date: '2026-02-08',
        excerpt: 'AI video tools are disrupting the $300B video production industry.',
        url: '#',
      },
      {
        title: 'Higgsfield Launches Text-to-Video 2.0',
        type: 'newsletter',
        date: '2026-02-01',
        excerpt: 'The new model produces cinema-quality videos from simple text prompts.',
        url: '#',
      },
      {
        title: '5 Ways to Use AI Video for Your Business',
        type: 'guide',
        date: '2026-01-20',
        excerpt: 'From ads to training videos, here\'s how companies are leveraging AI video.',
        url: '#',
      },
    ],
  },
  suno: {
    slug: 'suno',
    name: 'Suno',
    tagline: 'Make music with AI in seconds',
    description: 'Suno is the breakthrough AI music platform that lets anyone create original songs with just a text prompt. Whether you\'re a professional musician or have never played an instrument, Suno helps you bring your musical ideas to life.',
    logo: '/logos/suno.svg',
    ctaText: 'Create Music Free',
    ctaUrl: 'https://suno.ai',
    colors: {
      primary: '#F97316',
      secondary: '#EA580C',
      accent: '#FED7AA',
      text: '#FFFFFF',
      background: '#18181B',
    },
    content: [
      {
        title: 'Suno v4: The Most Realistic AI Music Yet',
        type: 'newsletter',
        date: '2026-02-12',
        excerpt: 'The latest Suno model produces songs indistinguishable from human artists.',
        url: '#',
      },
      {
        title: 'How Creators Are Monetizing AI-Generated Music',
        type: 'guide',
        date: '2026-02-03',
        excerpt: 'From YouTube to Spotify, AI music is finding its audience.',
        url: '#',
      },
      {
        title: 'The Best Suno Prompts for Every Genre',
        type: 'guide',
        date: '2026-01-15',
        excerpt: 'Our tested prompts for pop, rock, hip-hop, classical, and more.',
        url: '#',
      },
    ],
  },
  'claude-code': {
    slug: 'claude-code',
    name: 'Claude Code',
    tagline: 'Your AI pair programmer that ships',
    description: 'Claude Code by Anthropic is an agentic coding tool that lives in your terminal. It can understand your codebase, write features, fix bugs, and handle complex refactors—all while explaining its reasoning. Built on Claude\'s industry-leading safety and capability.',
    logo: '/logos/claude-code.svg',
    ctaText: 'Get 20% Off',
    ctaUrl: 'https://claude.ai/code',
    colors: {
      primary: '#DA7756',
      secondary: '#C4694B',
      accent: '#F5E6D3',
      text: '#1A1A1A',
      background: '#F5E6D3',
    },
    content: [
      {
        title: 'Claude Code: Anthropic\'s Answer to AI Coding',
        type: 'newsletter',
        date: '2026-02-11',
        excerpt: 'How Claude Code compares to GitHub Copilot, Cursor, and other AI coding tools.',
        url: '#',
      },
      {
        title: 'Building a Full App with Claude Code in 30 Minutes',
        type: 'guide',
        date: '2026-02-06',
        excerpt: 'We built a complete SaaS MVP using only natural language prompts.',
        url: '#',
      },
      {
        title: 'Why Developers Are Switching to Claude Code',
        type: 'guide',
        date: '2026-01-25',
        excerpt: 'The terminal-first approach and extended thinking make a difference.',
        url: '#',
      },
    ],
  },
};

export function getPartner(slug: string): Partner | undefined {
  return partners[slug];
}

export function getAllPartnerSlugs(): string[] {
  return Object.keys(partners);
}
