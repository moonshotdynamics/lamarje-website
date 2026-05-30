import Link from "next/link";
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const divisions = [
  { title: "Lamarje Capital", href: "/divisions/capital" },
  { title: "Lamarje Infrastructure", href: "/divisions/infrastructure" },
  { title: "Supply Chain Solutions", href: "/divisions/supply-chain" },
  { title: "Lamarje Consulting", href: "/divisions/consulting" },
  { title: "FMCG & Food Distribution", href: "/divisions/fmcg" },
  { title: "Procurement & Products", href: "/divisions/procurement" },
];

const quickLinks = [
  { title: "About Us", href: "/about" },
  { title: "Our Projects", href: "/projects" },
  { title: "Organisational Structure", href: "/structure" },
  { title: "Contact Us", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 md:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <img src="/logo.png" alt="Lamarje Investments" className="h-12 w-auto" />
              <div>
                <h3 className="text-lg font-bold font-heading">Lamarje</h3>
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">Investments</p>
              </div>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed mt-4">
              A diversified company established in 2010 with competencies in Consulting, Supply Chain, Trading, Infrastructure Development and Financing across Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-gold transition-colors inline-flex items-center gap-1 group"
                  >
                    <ChevronRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Divisions */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-5">
              Our Divisions
            </h4>
            <ul className="space-y-3">
              {divisions.map((div) => (
                <li key={div.title}>
                  <Link
                    href={div.href}
                    className="text-sm text-white/70 hover:text-gold transition-colors inline-flex items-center gap-1 group"
                  >
                    <ChevronRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {div.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-5">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="mb-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-2">South Africa</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-sm text-white/70">
                    <MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                    <span>356 Rivonia Boulevard, Edenburg, Sandton, 2125</span>
                  </div>
                  <a href="tel:+27879705555" className="flex items-center gap-2 text-sm text-white/70 hover:text-gold transition-colors">
                    <Phone className="h-4 w-4 text-gold shrink-0" />
                    <span>+27 87 970 5555</span>
                  </a>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-2">DR Congo</p>
                <a href="tel:+243851238586" className="flex items-center gap-2 text-sm text-white/70 hover:text-gold transition-colors">
                  <Phone className="h-4 w-4 text-gold shrink-0" />
                  <span>+243 85 123 8586</span>
                </a>
              </div>
              <a href="mailto:info@lamarje.com" className="flex items-center gap-2 text-sm text-white/70 hover:text-gold transition-colors">
                <Mail className="h-4 w-4 text-gold shrink-0" />
                <span>info@lamarje.com</span>
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Lamarje Investments (Pty) Ltd. All rights reserved.</p>
          <p>Designed with precision. Built for Africa&apos;s future.</p>
        </div>
      </div>
    </footer>
  );
}
