import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const faqs = [
  {
    q: 'How long does it take to get started?',
    a: 'Most teams are up and running in under 10 minutes. Our guided onboarding walks you through connecting your data, setting up your first dashboard, and inviting team members. No technical setup required.',
  },
  {
    q: 'Can I migrate from another platform?',
    a: 'Yes. We provide automated migration tools for over 20 popular platforms, plus a dedicated migration team for Enterprise customers. Most migrations complete within 48 hours with zero downtime.',
  },
  {
    q: 'Is my data secure?',
    a: 'Security is our top priority. We are SOC 2 Type II certified, GDPR compliant, and HIPAA ready. All data is encrypted in transit and at rest with AES-256. We also support SSO, SAML, and custom retention policies.',
  },
  {
    q: 'What happens when I hit my plan limits?',
    a: 'We will notify you before you reach any limits. You can upgrade your plan at any time with prorated billing. We never cut off service unexpectedly — if you exceed limits, we will reach out to find the right plan for you.',
  },
  {
    q: 'Do you offer a free trial?',
    a: 'Yes. The Pro plan comes with a 14-day free trial — no credit card required. You get full access to all Pro features during the trial. The Starter plan is free forever with no time limit.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Absolutely. Cancel with one click from your dashboard. There are no cancellation fees and no contracts. If you cancel mid-cycle, you keep access until the end of your billing period.',
  },
  {
    q: 'Do you offer discounts for startups or nonprofits?',
    a: 'Yes. We offer 50% off for verified nonprofits and up to 80% off for early-stage startups (under 2 years old, under 10 employees). Contact our sales team to apply.',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const { ref, visible } = useScrollReveal();

  return (
    <section id="faq" className="relative py-28 px-6">
      <div ref={ref} className={`max-w-3xl mx-auto ${visible ? 'visible' : ''} reveal`}>
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-blue-400 uppercase tracking-widest">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-4 mb-4">
            Questions? <span className="gradient-text">Answered.</span>
          </h2>
          <p className="text-lg text-[#8a93a8] max-w-2xl mx-auto">
            Everything you need to know about the platform. Can not find what you are looking for? Reach out to our team.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                openIdx === i
                  ? 'bg-[#111621] border-[#2a3344]'
                  : 'bg-[#111621] border-[#1c2333] hover:border-[#2a3344]'
              }`}
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-medium text-base">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#8a93a8] flex-shrink-0 transition-transform duration-300 ${
                    openIdx === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  openIdx === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-[#8a93a8] leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
