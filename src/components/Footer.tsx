import { Zap } from 'lucide-react';

const columns = [
  {
    title: 'Product',
    links: ['Features', 'Platform', 'Pricing', 'Integrations', 'Changelog', 'Roadmap'],
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Customers', 'Partners', 'Contact'],
  },
  {
    title: 'Resources',
    links: ['Documentation', 'API Reference', 'Guides', 'Tutorials', 'Community', 'Support'],
  },
  {
    title: 'Legal',
    links: ['Privacy', 'Terms', 'Security', 'Cookies', 'GDPR', 'Status'],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[#1c2333] bg-[#0c1018]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" fill="white" />
              </div>
              <span className="text-xl font-bold tracking-tight">Nexus</span>
            </a>
            <p className="text-sm text-[#8a93a8] leading-relaxed max-w-xs mb-6">
              The platform that scales with your vision. Build faster, ship smarter, and grow without limits.
            </p>
            <div className="flex gap-3">
              {['twitter', 'github', 'linkedin', 'youtube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-[#1c2333] flex items-center justify-center text-[#8a93a8] hover:text-white hover:border-[#2a3344] hover:bg-white/5 transition-all duration-300 text-xs font-medium"
                >
                  {social[0].toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[#8a93a8] hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-[#1c2333] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#5a6378]">
            © 2026 Nexus, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm text-[#5a6378]">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
