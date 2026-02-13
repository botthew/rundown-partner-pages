'use client';

import { useState } from 'react';

export function RundownNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="https://therundown.ai" className="flex items-center gap-3">
          <img 
            src="/logos/rundown-bw.jpg" 
            alt="The Rundown" 
            className="w-10 h-10 rounded-lg object-cover"
          />
          <span className="text-white font-semibold text-lg">The Rundown</span>
        </a>

        {/* Hamburger */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-10 h-10 bg-white rounded-lg flex flex-col items-center justify-center gap-1"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className="w-5 h-0.5 bg-black" aria-hidden="true" />
          <span className="w-5 h-0.5 bg-black" aria-hidden="true" />
          <span className="w-5 h-0.5 bg-black" aria-hidden="true" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="bg-black/95 border-t border-white/10 px-6 py-4">
          <div className="flex flex-col gap-4">
            <a href="https://therundown.ai" className="text-white/80 hover:text-white">Home</a>
            <a href="https://therundown.ai/newsletter" className="text-white/80 hover:text-white">Newsletter</a>
            <a href="https://therundown.ai/guides" className="text-white/80 hover:text-white">Guides</a>
            <a href="https://therundown.ai/tools" className="text-white/80 hover:text-white">Tools</a>
          </div>
        </div>
      )}
    </nav>
  );
}
