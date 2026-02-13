# The Rundown AI - Partner Landing Pages

Customizable landing page templates for The Rundown AI newsletter sponsors and partners.

## Features

- **Dynamic partner pages** - Each partner gets a unique URL at `/partners/[slug]`
- **Brand customization** - Partner colors, logos, and CTAs
- **Content feed** - Featured guides and newsletter mentions
- **4 layout variants** - Different hero, about, and content layouts
- **Responsive design** - Mobile-first, works on all devices
- **Static generation** - Fast, SEO-friendly pages

## Partners

| Partner | URL | Layout Style |
|---------|-----|--------------|
| ChatGPT | `/partners/chatgpt` | Gradient hero, feature about, card grid |
| Higgsfield AI | `/partners/higgsfield` | Split hero, card about, timeline feed |
| Suno | `/partners/suno` | Default hero, inline about, card grid |
| Claude Code | `/partners/claude-code` | Minimal hero, card about, list feed |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Adding a New Partner

1. Add partner data to `src/lib/partners.ts`
2. Choose layout variants in `src/app/partners/[slug]/page.tsx`
3. Add logo to `public/logos/`
4. Deploy!

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Static Site Generation

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Homepage with partner index
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   └── partners/
│       └── [slug]/
│           └── page.tsx      # Dynamic partner page
├── components/
│   ├── Hero.tsx              # Hero section (4 variants)
│   ├── About.tsx             # About section (4 variants)
│   ├── ContentFeed.tsx       # Content list (4 variants)
│   └── Footer.tsx            # Footer
└── lib/
    └── partners.ts           # Partner data + types
```

## Deployment

Ready for deployment to:
- Vercel (zero config)
- Fly.io
- Any Node.js hosting

---

Built for [The Rundown AI](https://therundown.ai) newsletter.
