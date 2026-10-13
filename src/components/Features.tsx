import { BarChart3, GitBranch, Globe, Lock, Workflow, Zap } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const features = [
  {
    icon: Zap,
    title: 'Lightning fast',
    description: 'Sub-50ms response times globally. Edge-deployed infrastructure ensures your team never waits.',
    color: 'from-blue-500/20 to-blue-500/5',
    iconColor: 'text-blue-400',
  },
  {
    icon: BarChart3,
    title: 'Real-time analytics',
    description: 'Live dashboards that update as events happen. Make decisions with data, not guesses.',
    color: 'from-emerald-500/20 to-emerald-500/5',
    iconColor: 'text-emerald-400',
  },
  {
    icon: Workflow,
    title: 'Smart automation',
    description: 'Build visual workflows that trigger on any event. Connect 200+ apps without writing code.',
    color: 'from-amber-500/20 to-amber-500/5',
    iconColor: 'text-amber-400',
  },
  {
    icon: Lock,
    title: 'Enterprise security',
    description: 'SOC 2 Type II, GDPR, and HIPAA compliant. End-to-end encryption with SSO and SAML support.',
    color: 'from-red-500/20 to-red-500/5',
    iconColor: 'text-red-400',
  },
  {
    icon: GitBranch,
    title: 'Version control',
    description: 'Every change is tracked. Roll back in one click. Branch, review, and merge with confidence.',
    color: 'from-purple-500/20 to-purple-500/5',
    iconColor: 'text-purple-400',
  },
  {
    icon: Globe,
    title: 'Global CDN',
    description: 'Deployed to 300+ edge locations worldwide. Your data is always close to your users.',
    color: 'from-cyan-500/20 to-cyan-500/5',
    iconColor: 'text-cyan-400',
  },
];

export default function Features() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="features" className="relative py-28 px-6">
      <div ref={ref} className={`max-w-7xl mx-auto ${visible ? 'visible' : ''} reveal`}>
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-blue-400 uppercase tracking-widest">Features</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-4 mb-4">
            Everything you need to <span className="gradient-text">scale</span>
          </h2>
          <p className="text-lg text-[#8a93a8] max-w-2xl mx-auto">
            A complete platform with all the tools your team needs to build, ship, and grow — all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`group relative p-8 rounded-2xl bg-[#111621] border border-[#1c2333] hover:border-[#2a3344] transition-all duration-500 hover:-translate-y-1 ${
                visible ? 'animate-fade-up' : ''
              }`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-[#1c2333] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-[#8a93a8] leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
