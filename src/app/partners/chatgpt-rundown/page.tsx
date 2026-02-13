import { Metadata } from 'next';
import { RundownNav } from '@/components/RundownNav';
import { SocialProof } from '@/components/SocialProof';

export const metadata: Metadata = {
  title: 'ChatGPT x The Rundown AI | Exclusive Partner Offer',
  description: 'Get exclusive ChatGPT tips and guides from The Rundown AI newsletter.',
};

const chatgptContent = [
  {
    title: '10 ChatGPT Prompts That Will 10x Your Productivity',
    type: 'guide' as const,
    date: '2026-02-10',
    excerpt: 'Master these prompts to unlock ChatGPT\'s full potential for work and creativity.',
    image: '💡',
  },
  {
    title: 'ChatGPT Gets Memory: What It Means for You',
    type: 'newsletter' as const,
    date: '2026-02-05',
    excerpt: 'OpenAI rolled out persistent memory across conversations. Here\'s how to use it.',
    image: '🧠',
  },
  {
    title: 'ChatGPT vs Claude vs Gemini: 2026 Comparison',
    type: 'guide' as const,
    date: '2026-01-28',
    excerpt: 'We tested all three on real-world tasks. The results might surprise you.',
    image: '⚔️',
  },
];

export default function ChatGPTRundownPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <RundownNav />
      
      {/* Hero Section - Rundown style with ChatGPT partnership */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Partner badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
            <div className="w-6 h-6 rounded bg-[#10A37F] flex items-center justify-center text-white text-xs font-bold">G</div>
            <span className="text-sm text-white/80">Official ChatGPT Partner</span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Master <span className="bg-gradient-to-r from-[#10A37F] to-[#1ED760] bg-clip-text text-transparent">ChatGPT</span> with The Rundown
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Get exclusive tips, prompts, and guides to unlock ChatGPT&apos;s full potential. 
            Delivered daily to 2M+ AI enthusiasts.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a 
              href="https://chat.openai.com" 
              className="px-8 py-4 bg-[#10A37F] hover:bg-[#0D8A6A] text-white font-semibold rounded-xl transition-all hover:scale-105 flex items-center gap-2"
            >
              <span>Try ChatGPT Free</span>
              <span>→</span>
            </a>
            <a 
              href="https://therundown.ai" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all"
            >
              Subscribe to The Rundown
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <SocialProof />

      {/* ChatGPT Highlights / Content Feed */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-zinc-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">ChatGPT in The Rundown</h2>
            <p className="text-white/60">Our most popular ChatGPT content and guides</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {chatgptContent.map((item, i) => (
              <a
                key={i}
                href="#"
                className="group block rounded-2xl bg-white/5 border border-white/10 p-6 transition-all hover:bg-white/10 hover:border-[#10A37F]/50 hover:scale-[1.02]"
              >
                <div className="text-4xl mb-4">{item.image}</div>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-2 py-1 rounded text-xs font-medium uppercase ${
                    item.type === 'guide' 
                      ? 'bg-[#10A37F]/20 text-[#10A37F]' 
                      : 'bg-purple-500/20 text-purple-400'
                  }`}>
                    {item.type}
                  </span>
                  <span className="text-white/40 text-sm">{item.date}</span>
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-[#10A37F] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-white/60">{item.excerpt}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-6 bg-zinc-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Learn AI in <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">5 minutes</span> a day
          </h2>
          <p className="text-white/60 mb-8">
            Get the latest AI news, understand why it matters, and learn how to apply it in your work.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-4 py-3 rounded-xl bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#10A37F]"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
            >
              Subscribe <span>✈️</span>
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black border-t border-white/10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-black font-bold">R</span>
            </div>
            <span className="text-white/60 text-sm">
              © 2026 The Rundown AI. ChatGPT is a trademark of OpenAI.
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://therundown.ai" className="text-white/60 hover:text-white text-sm">
              therundown.ai
            </a>
            <span className="text-white/20">|</span>
            <a href="https://chat.openai.com" className="text-[#10A37F] hover:text-[#1ED760] text-sm font-medium">
              Try ChatGPT →
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
