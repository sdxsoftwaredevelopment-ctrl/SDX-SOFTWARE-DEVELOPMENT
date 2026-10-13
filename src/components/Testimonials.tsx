import { Quote, Star } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const testimonials = [
  {
    quote: 'Nexus transformed how our team operates. We shipped 3x faster in the first month alone. The real-time analytics alone justify the cost.',
    name: 'Sarah Chen',
    role: 'VP Engineering',
    company: 'TechFlow',
    initials: 'SC',
    color: 'from-blue-500 to-blue-600',
    rating: 5,
  },
  {
    quote: 'The automation workflows saved us 20+ hours per week. What used to take a full engineering sprint now happens automatically in the background.',
    name: 'Marcus Lee',
    role: 'CTO',
    company: 'DataSync',
    initials: 'ML',
    color: 'from-emerald-500 to-emerald-600',
    rating: 5,
  },
  {
    quote: 'We evaluated six platforms. Nexus was the only one that checked every box — security, speed, and a UI our entire team actually enjoys using.',
    name: 'Aria Patel',
    role: 'Head of Product',
    company: 'CloudPeak',
    initials: 'AP',
    color: 'from-amber-500 to-amber-600',
    rating: 5,
  },
  {
    quote: 'Migration took two days, not two months. The team was up and running with zero training needed. Best onboarding experience I have seen in 15 years.',
    name: 'James Kim',
    role: 'Director of Ops',
    company: 'BrightLine',
    initials: 'JK',
    color: 'from-purple-500 to-purple-600',
    rating: 5,
  },
  {
    quote: 'Our infra costs dropped 40% after switching to Nexus. The edge network alone handles what we used to pay three vendors for.',
    name: 'Lisa Wang',
    role: 'Founder & CEO',
    company: 'Streamline',
    initials: 'LW',
    color: 'from-cyan-500 to-cyan-600',
    rating: 5,
  },
  {
    quote: 'The version control system is genius. We can experiment freely, roll back instantly, and never worry about breaking production. Game changer.',
    name: 'Tom Garcia',
    role: 'Lead DevOps',
    company: 'Apex Labs',
    initials: 'TG',
    color: 'from-red-500 to-red-600',
    rating: 5,
  },
];

export default function Testimonials() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="testimonials" className="relative py-28 px-6 bg-[#0c1018] border-y border-[#1c2333]">
      <div ref={ref} className={`max-w-7xl mx-auto ${visible ? 'visible' : ''} reveal`}>
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-emerald-400 uppercase tracking-widest">Customers</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-4 mb-4">
            Loved by teams <span className="gradient-text">worldwide</span>
          </h2>
          <p className="text-lg text-[#8a93a8] max-w-2xl mx-auto">
            Join thousands of companies that trust Nexus to power their most critical operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`group relative p-7 rounded-2xl bg-[#111621] border border-[#1c2333] hover:border-[#2a3344] transition-all duration-500 hover:-translate-y-1 ${
                visible ? 'animate-fade-up' : ''
              }`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#1c2333] group-hover:text-[#2a3344] transition-colors" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-[#c4cad6] leading-relaxed mb-6 relative z-10">"{t.quote}"</p>

              <div className="flex items-center gap-3 pt-4 border-t border-[#1c2333]">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-sm font-bold text-white`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-[#5a6378]">{t.role} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
