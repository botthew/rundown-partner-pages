'use client';

import { useState } from 'react';

const SAMPLE_PROMPTS = [
  'Write a cold email to a potential client for a software development project',
  'Create a detailed study plan for learning a new programming language',
  'Brainstorm unique marketing strategies for a tech startup',
  'Draft a professional resignation letter',
  'Develop a step-by-step business plan for an online coaching service',
];

export function TryAPrompt() {
  const [selectedPrompt, setSelectedPrompt] = useState(SAMPLE_PROMPTS[0]);

  return (
    <section className="bg-gradient-to-br from-emerald-900/10 to-green-900/10 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">Try a ChatGPT Prompt</h2>
          <p className="text-xl text-white/80">See how ChatGPT can supercharge your productivity</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-emerald-700/30">
            <h3 className="text-2xl font-semibold mb-4 text-white">Sample Prompts</h3>
            <ul className="space-y-2">
              {SAMPLE_PROMPTS.map((prompt, index) => (
                <li 
                  key={index} 
                  className={`
                    cursor-pointer p-3 rounded-lg transition-all
                    ${selectedPrompt === prompt 
                      ? 'bg-emerald-600/30 text-white' 
                      : 'hover:bg-emerald-600/10 text-white/70'}
                  `}
                  onClick={() => setSelectedPrompt(prompt)}
                >
                  {prompt}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-emerald-700/30">
            <h3 className="text-2xl font-semibold mb-4 text-white">Current Prompt</h3>
            <div className="bg-black/20 rounded-lg p-4 mb-4 min-h-[200px]">
              <p className="text-white/90">{selectedPrompt}</p>
            </div>
            <div className="flex space-x-4">
              <a 
                href="https://chat.openai.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-lg transition-colors hover:green-glow"
              >
                Try in ChatGPT
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}