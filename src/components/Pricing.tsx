import { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const plans = [
  {
    name: 'Starter',
    description: 'For individuals and small projects',
    monthly: 0,
    yearly: 0,
    features: [
      'Up to 3 projects',
      '1GB storage',
      'Community support',
      'Basic analytics',
      '1 team member',
    ],
    cta: 'Get started',
    highlighted: false,
  },
  {
    name: 'Pro',
    description: 'For growing teams that need more power',
    monthly: 29,
    yearly: 24,
    features: [
      'Unlimited projects',
      '100GB storage',
      'Priority support',
      'Advanced analytics',
      'Up to 10 team members',
      'Custom domains',
      'API access',
      'Version control',
    ],
    cta: 'Start free trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with custom needs',
    monthly: 99,
    yearly: 82,
    features: [
      'Everything in Pro',
      'Unlimited storage',
      'Dedicated support',
      'SSO & SAML',
      'Unlimited team members',
      'Custom integrations',
      'SLA guarantee',
      'On-premise option',
    ],
    cta: 'Contact sales',
    highlighted: false,
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(true);
  const { ref, visible } = useScrollReveal();

  return (
    <section id="pricing" className="relative py-28 px-6">
      <div ref={ref} className={`max-w-7xl mx-auto ${visible ? 'visible' : ''} reveal`}>
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-blue-400 uppercase tracking-widest">Pricing</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-4 mb-4">
            Simple, <span className="gradient-text">transparent</span> pricing
          </h2>
          <p className="text-lg text-[#8a93a8] max-w-2xl mx-auto mb-8">
            Start free, upgrade when you need. No hidden fees, no surprises.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-3 p-1 rounded-xl bg-[#111621] border border-[#1c2333]">
            <button
              onClick={() => setYearly(false)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                !yearly ? 'bg-white/10 text-white' : 'text-[#8a93a8]'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                yearly ? 'bg-white/10 text-white' : 'text-[#8a93a8]'
              }`}
            >
              Yearly
              <span className="text-xs px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-2xl border transition-all duration-500 ${
                plan.highlighted
                  ? 'bg-[#111621] border-blue-500/40 lg:scale-105 glow-blue'
                  : 'bg-[#111621] border-[#1c2333] hover:border-[#2a3344]'
              } ${visible ? 'animate-fade-up' : ''}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 text-xs font-medium text-white">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>
              )}

              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-sm text-[#8a93a8] mb-6 min-h-[40px]">{plan.description}</p>

              <div className="mb-6">
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold">
                    ${yearly ? plan.yearly : plan.monthly}
                  </span>
                  <span className="text-[#5a6378] mb-1.5">/mo</span>
                </div>
                {yearly && plan.monthly > 0 && (
                  <p className="text-xs text-emerald-400 mt-1">
                    Billed annually (${plan.yearly * 12}/yr)
                  </p>
                )}
              </div>

              <a
                href="#"
                className={`block text-center font-medium px-5 py-3 rounded-xl transition-all duration-300 mb-6 ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-400 hover:to-blue-500 glow-blue'
                    : 'bg-white/5 text-white border border-[#1c2333] hover:bg-white/10'
                }`}
              >
                {plan.cta}
              </a>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.highlighted ? 'bg-blue-500/20' : 'bg-emerald-500/10'
                    }`}>
                      <Check className={`w-3 h-3 ${plan.highlighted ? 'text-blue-400' : 'text-emerald-400'}`} />
                    </div>
                    <span className="text-[#8a93a8]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
