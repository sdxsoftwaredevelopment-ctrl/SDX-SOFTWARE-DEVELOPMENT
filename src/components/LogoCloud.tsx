const logos = ['Vercel', 'Linear', 'Notion', 'Figma', 'Stripe', 'Loom', 'Raycast', 'Supabase'];

export default function LogoCloud() {
  return (
    <section className="relative py-16 border-y border-[#1c2333] bg-[#0c1018]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm text-[#5a6378] uppercase tracking-widest mb-10">
          Trusted by industry-leading teams
        </p>
        <div className="relative overflow-hidden">
          <div className="flex gap-16 animate-marquee">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 text-2xl font-bold text-[#3a4358] hover:text-[#8a93a8] transition-colors duration-300 cursor-default"
              >
                {logo}
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0c1018] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0c1018] to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
