import { ArrowRight, Play, Sparkles, TrendingUp, Users, Zap } from 'lucide-react';

const stats = [
  { icon: Users, value: '12,000+', label: 'Active teams' },
  { icon: TrendingUp, value: '99.9%', label: 'Uptime SLA' },
  { icon: Zap, value: '50ms', label: 'Avg latency' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden noise-overlay pt-24 pb-16">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Floating glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/8 rounded-full blur-[120px] animate-pulse-glow delay-300" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-[#1c2333] text-sm text-[#8a93a8] mb-8 animate-fade-up">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span>Now with AI-powered analytics</span>
          <span className="text-emerald-400 font-medium">New</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6 animate-fade-up delay-100">
          The platform that
          <br />
          <span className="gradient-text">scales with your vision</span>
        </h1>

        <p className="text-lg md:text-xl text-[#8a93a8] max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-up delay-200">
          Nexus unifies your data, automates your workflows, and delivers insights in real-time.
          Build faster, ship smarter, and grow without limits.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up delay-300">
          <a
            href="#"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-medium px-7 py-3.5 rounded-xl transition-all duration-300 glow-blue hover:scale-105"
          >
            Start free trial
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#platform"
            className="group inline-flex items-center gap-2 text-white font-medium px-7 py-3.5 rounded-xl border border-[#1c2333] hover:border-[#2a3344] hover:bg-white/5 transition-all duration-300"
          >
            <Play className="w-4 h-4 fill-current" />
            Watch demo
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 animate-fade-up delay-500">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-[#1c2333] flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-blue-400" />
              </div>
              <div className="text-left">
                <div className="text-xl font-bold">{stat.value}</div>
                <div className="text-xs text-[#5a6378] uppercase tracking-wider">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-[#1c2333] flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-[#8a93a8] animate-pulse" />
        </div>
      </div>
    </section>
  );
}
