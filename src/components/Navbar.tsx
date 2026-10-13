import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';

const links = [
  { label: 'Features', href: '#features' },
  { label: 'Platform', href: '#platform' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Customers', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrollY = useScrollPosition();
  const scrolled = scrollY > 20;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass border-b border-[#1c2333] py-3' : 'py-5 border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <Zap className="w-5 h-5 text-white" fill="white" />
          </div>
          <span className="text-xl font-bold tracking-tight">Nexus</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm text-[#8a93a8] hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm text-[#8a93a8] hover:text-white transition-colors px-4 py-2">
            Sign in
          </a>
          <a
            href="#"
            className="text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 px-5 py-2.5 rounded-lg transition-all duration-300 glow-blue hover:shadow-blue-500/30"
          >
            Get Started
          </a>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass border-t border-[#1c2333] mt-3 animate-fade-in">
          <div className="px-6 py-4 flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-sm text-[#8a93a8] hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="h-px bg-[#1c2333] my-2" />
            <a href="#" className="px-4 py-3 text-sm text-[#8a93a8] hover:text-white transition-colors">
              Sign in
            </a>
            <a
              href="#"
              className="text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 px-5 py-3 rounded-lg text-center mt-1"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
