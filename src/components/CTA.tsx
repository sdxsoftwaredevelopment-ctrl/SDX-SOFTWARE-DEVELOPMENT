import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function CTA() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div ref={ref} className={`max-w-5xl mx-auto ${visible ? 'visible' : ''} reveal`}>
        <div className="relative rounded-3xl bg-gradient-to-br from-blue-500/10 via-[#111621] to-emerald-500/10 border border-[#1c2333] p-12 md:p-16 text-center overflow-hidden">
          {/* Glow effects */}
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/15 rounded-full blur-[100px] animate-pulse-glow" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-[100px] animate-pulse-glow delay-300" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Ready to build <span className="gradient-text">something great?</span>
            </h2>
            <p className="text-lg text-[#8a93a8] max-w-2xl mx-auto mb-10">
              Join 12,000+ teams already using Nexus to ship faster, scale smarter, and grow without limits.
              Start your free trial today — no credit card required.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 glow-blue hover:scale-105"
              >
                Start free trial
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-white font-medium px-8 py-4 rounded-xl border border-[#1c2333] hover:bg-white/5 transition-all duration-300"
              >
                Talk to sales
              </a>
            </div>

            <p className="text-sm text-[#5a6378] mt-6">
              14-day free trial · No credit card required · Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
