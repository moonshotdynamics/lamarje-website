import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Building2,
  TrendingUp,
  Truck,
  BarChart3,
  Globe,
  Award,
  Users,
  Shield,
  CheckCircle2,
} from "lucide-react";

const stats = [
  { value: "2010", label: "Established", icon: Building2 },
  { value: "6", label: "Countries", icon: Globe },
  { value: "4", label: "Core Divisions", icon: BarChart3 },
  { value: "12+", label: "Years of Excellence", icon: Award },
];

const divisions = [
  {
    title: "Lamarje Capital",
    description: "Forex trading, indices, commodities, and innovative financing solutions for African businesses and governments.",
    icon: TrendingUp,
    href: "/divisions/capital",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
    gradient: "from-navy to-navy-light",
  },
  {
    title: "Lamarje Infrastructure",
    description: "Roads, housing, airports, hospitals and solar energy projects — from inception through to commissioning.",
    icon: Building2,
    href: "/divisions/infrastructure",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
    gradient: "from-navy-light to-navy",
  },
  {
    title: "Supply Chain Solutions",
    description: "Mining procurement, logistics, and FMCG distribution — adding value through effective supply chain management.",
    icon: Truck,
    href: "/divisions/supply-chain",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    gradient: "from-navy to-navy-light",
  },
  {
    title: "Lamarje Consulting",
    description: "Strategic advisory, M&A, transaction structuring, and expert guidance for private equity and infrastructure portfolios.",
    icon: BarChart3,
    href: "/divisions/consulting",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    gradient: "from-navy-light to-navy",
  },
];

const projects = [
  "Runway renovation of the Bangui Mpoko International Airport, Central African Republic",
  "Road renovation from Bangui Mpoko Airport to Central Business District, CAR",
  "Food depot in Pretoria, South Africa",
  "Medical Diagnostic Centre, Central African Republic",
  "Housing with solar roofing, Democratic Republic of Congo",
  "Supplies of equipment to mines in Lubumbashi, DRC",
  "Supplies of salted fish to Katanga, Democratic Republic of Congo",
  "Funding of small to large scale projects in South Africa and the DRC",
];

const differentiators = [
  {
    title: "Cost Reduction",
    description: "Efficient procurement and supply chain solutions that reduce operational costs for our clients.",
    icon: TrendingUp,
  },
  {
    title: "Improved Efficiency",
    description: "Streamlined processes and expert project management across all our divisions.",
    icon: Shield,
  },
  {
    title: "Job Creation",
    description: "Creating sustainable employment opportunities in the communities we serve.",
    icon: Users,
  },
  {
    title: "Local Empowerment",
    description: "Building local capacity and empowering African communities through strategic partnerships.",
    icon: Award,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-navy">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy-light" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold via-transparent to-transparent" />

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-8 relative z-10 pt-24 pb-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur text-gold text-sm mb-8 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
              </span>
              Diversified African Investment Group
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6 animate-fade-in-up">
              Building Africa&apos;s
              <br />
              <span className="text-gold">Future Today</span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-10 animate-fade-in-up leading-relaxed">
              Lamarje Investments is a diversified company with competencies in Consulting, Supply Chain, Trading, 
              Infrastructure Development and Financing — operating across South Africa, DRC, Congo, Angola, Uganda 
              and Central African Republic.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
              <Link href="/about">
                <Button
                  size="lg"
                  className="bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-6 text-base rounded-full group"
                >
                  Discover Our Story
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 hover:text-white px-8 py-6 text-base rounded-full"
                >
                  View Our Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-2.5 bg-gold rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-20 -mt-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-card rounded-2xl shadow-xl border border-border p-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="h-6 w-6 text-gold mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold font-heading text-navy">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">About Lamarje</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy mt-4 mb-6 leading-tight">
                Diversified Excellence
                <br />
                <span className="text-gold">Since 2010</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Lamarje Investments (Pty) Ltd has evolved from Supply Chain management into a fully diversified 
                investment group with expertise spanning Consulting, Infrastructure Development, Financing, and 
                Trading across African markets.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our dedication lies in providing the best solution to our valued clients and business partners, 
                delivered through strategic partnerships with strong expertise in various areas of business.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {differentiators.map((diff) => (
                  <div key={diff.title} className="flex items-start gap-3 p-3">
                    <div className="h-10 w-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                      <diff.icon className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy text-sm">{diff.title}</h4>
                      <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{diff.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80"
                  alt="African infrastructure development"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-48 h-48 border-2 border-gold/20 rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-navy rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Divisions Grid */}
      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">Our Divisions</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy mt-4 mb-6 leading-tight">
              Four Pillars of
              <span className="text-gold"> Excellence</span>
            </h2>
            <p className="text-muted-foreground">
              Each division operates with its own dedicated team, delivering world-class solutions 
              to governments, businesses, and communities across Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {divisions.map((div, i) => (
              <Link key={div.title} href={div.href} className="group block">
                <div className="relative rounded-2xl overflow-hidden bg-card border border-border hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                  <div className="aspect-[16/7] overflow-hidden relative">
                    <img
                      src={div.image}
                      alt={div.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${div.gradient} opacity-60`} />
                    <div className="absolute inset-0 flex items-center p-8">
                      <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur text-white text-xs mb-3">
                          <div.icon className="h-3.5 w-3.5" />
                          Division {i + 1}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
                          {div.title}
                        </h3>
                        <p className="text-white/80 max-w-md text-sm leading-relaxed">
                          {div.description}
                        </p>
                        <div className="mt-4 inline-flex items-center gap-2 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                          Learn more <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">Active Projects</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy mt-4 mb-6 leading-tight">
                Transforming
                <span className="text-gold"> Africa</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                The following are some of the projects Lamarje Investments is currently working on 
                across the African continent.
              </p>
              <div className="space-y-3">
                {projects.slice(0, 6).map((project, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground">{project}</span>
                  </div>
                ))}
              </div>
              <Link href="/projects">
                <Button variant="ghost" className="mt-8 text-navy hover:text-gold group rounded-full">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-square bg-muted">
                  <img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80" alt="Airport project" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-muted">
                  <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80" alt="Infrastructure" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-muted">
                  <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80" alt="Solar housing" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-muted">
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80" alt="Mining equipment" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy-light to-navy" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold via-transparent to-transparent" />

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
            Ready to Build
            <span className="text-gold"> Africa&apos;s Future</span>?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            Partner with Lamarje Investments for world-class consulting, infrastructure development, 
            supply chain solutions, and financing across the African continent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-gold hover:bg-gold-light text-navy font-semibold px-10 py-6 text-base rounded-full group">
                Contact Us Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/divisions/capital">
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 hover:text-white px-10 py-6 text-base rounded-full"
              >
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
