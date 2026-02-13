'use client';

export function SocialProof() {
  const companies = [
    'Google', 'Meta', 'Cisco', 'HubSpot', 'IBM', 'Microsoft'
  ];

  return (
    <section className="py-16 px-6 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-white/70 text-lg mb-8">
          Join over <span className="text-white font-semibold">2,000,000+</span> readers from companies like:
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {companies.map((company) => (
            <span 
              key={company} 
              className="text-white/50 font-bold text-xl md:text-2xl tracking-wide"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
