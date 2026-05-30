import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  Users,
  TrendingUp,
  Briefcase,
  BarChart3,
  Truck,
  HardHat,
  Landmark,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Organisational Structure",
  description:
    "Explore Lamarje Investments' organisational structure — Board of Directors, CEO, CFO, COO, CTO, and division heads across Lamarje Capital, Infrastructure, Supply Chain, and Consulting.",
  openGraph: {
    title: "Organisational Structure | Lamarje Investments",
    description:
      "Discover how Lamarje Investments is organised — from Board leadership through executive management to our four core operating divisions.",
  },
};

interface OrgNode {
  title: string;
  subtitle?: string;
  icon: React.ComponentType<{ className?: string }>;
  level: "board" | "executive" | "divisionHead" | "division";
  children?: string[];
}

const orgData: OrgNode[] = [
  {
    title: "Board of Directors",
    subtitle: "Strategic Governance",
    icon: Users,
    level: "board",
  },
  {
    title: "Chief Executive Officer",
    subtitle: "CEO",
    icon: Briefcase,
    level: "executive",
  },
];

const cSuite: OrgNode[] = [
  {
    title: "Chief Financial Officer",
    subtitle: "CFO",
    icon: Landmark,
    level: "executive",
    children: ["Finance", "Compliance & Risk", "Investor Relations"],
  },
  {
    title: "Chief Operating Officer",
    subtitle: "COO",
    icon: BarChart3,
    level: "executive",
    children: ["Operations", "Procurement", "Logistics"],
  },
  {
    title: "Chief Technology Officer",
    subtitle: "CTO",
    icon: TrendingUp,
    level: "executive",
    children: ["IT & Systems", "Innovation", "Digital Strategy"],
  },
];

interface Division {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  teams: string[];
  href: string;
}

const divisions: Division[] = [
  {
    name: "Lamarje Capital",
    icon: Landmark,
    description:
      "Forex trading, indices, commodities, and innovative financing solutions for African businesses and governments.",
    teams: ["Forex & Trading Desk", "Commodities", "Structured Finance", "Portfolio Management"],
    href: "/divisions/capital",
  },
  {
    name: "Lamarje Infrastructure",
    icon: HardHat,
    description:
      "Roads, housing, airports, hospitals, and solar energy — from inception through to commissioning.",
    teams: ["Civil Engineering", "Project Management", "Solar Energy", "Housing Development"],
    href: "/divisions/infrastructure",
  },
  {
    name: "Supply Chain Solutions",
    icon: Truck,
    description:
      "Mining procurement, logistics, and FMCG distribution — adding value through effective supply chain management.",
    teams: ["Mining Procurement", "Logistics & Transport", "FMCG Distribution", "Warehousing"],
    href: "/divisions/supply-chain",
  },
  {
    name: "Lamarje Consulting",
    icon: BarChart3,
    description:
      "Strategic advisory, M&A, transaction structuring, and expert guidance for private equity and infrastructure portfolios.",
    teams: ["Strategic Advisory", "M&A", "Transaction Structuring", "Market Entry"],
    href: "/divisions/consulting",
  },
];

export default function StructurePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-navy">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy-light" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold via-transparent to-transparent" />

        <div className="absolute top-20 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-8 relative z-10 pt-24 pb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur text-gold text-sm mb-8 animate-fade-in">
              <Building2 className="h-4 w-4" />
              Organisational Structure
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white leading-tight mb-6 animate-fade-in-up">
              How We&apos;re
              <br />
              <span className="text-gold">Organised</span>
            </h1>

            <p className="text-lg text-white/70 max-w-2xl animate-fade-in-up leading-relaxed">
              Lamarje Investments operates with a clear governance structure led
              by an experienced Board of Directors, executive leadership, and
              dedicated division heads driving excellence across our four core
              divisions.
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-2.5 bg-gold rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Organisational Chart */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Our Hierarchy
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy mt-4 mb-6 leading-tight">
              Leadership
              <span className="text-gold"> Structure</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              From the Board of Directors through executive management to our
              operating divisions — every level is designed for accountability,
              efficiency, and impact.
            </p>
          </div>

          {/* Org Chart */}
          <div className="max-w-5xl mx-auto">
            {/* Board of Directors */}
            <div className="flex flex-col items-center mb-0">
              <div className="w-full max-w-xs">
                <Card className="bg-navy border-navy-light/30 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <CardContent className="p-5 text-center">
                    <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-3">
                      <Users className="h-6 w-6 text-gold" />
                    </div>
                    <h3 className="text-white font-heading font-bold text-base">
                      Board of Directors
                    </h3>
                    <p className="text-white/60 text-xs mt-1">Strategic Governance</p>
                  </CardContent>
                </Card>
              </div>

              {/* Vertical connector */}
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-10 bg-border" />
                <ChevronDown className="h-5 w-5 text-gold -mt-1" />
              </div>

              {/* CEO */}
              <div className="w-full max-w-xs">
                <Card className="bg-gradient-to-br from-navy to-navy-light border-gold/30 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <CardContent className="p-5 text-center">
                    <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-3">
                      <Briefcase className="h-6 w-6 text-gold" />
                    </div>
                    <Badge className="mb-2 bg-gold/20 text-gold border-gold/30 text-xs">
                      Executive
                    </Badge>
                    <h3 className="text-white font-heading font-bold text-base">
                      Chief Executive Officer
                    </h3>
                    <p className="text-white/60 text-xs mt-1">CEO</p>
                  </CardContent>
                </Card>
              </div>

              {/* Horizontal line from CEO to C-Suite */}
              <div className="flex flex-col items-center w-full">
                {/* Connector: CEO down then horizontal split */}
                <div className="w-0.5 h-10 bg-border" />
                <div className="relative w-full max-w-3xl h-0.5 bg-border">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gold" />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gold" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gold" />
                </div>
              </div>

              {/* Three vertical connectors down to C-Suite */}
              <div className="grid grid-cols-3 gap-4 w-full max-w-3xl mt-2">
                {cSuite.map((exec) => (
                  <div key={exec.title} className="flex flex-col items-center">
                    <div className="w-0.5 h-6 bg-border" />
                  </div>
                ))}
              </div>

              {/* C-Suite Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl mt-2">
                {cSuite.map((exec) => (
                  <div key={exec.title} className="flex flex-col items-center">
                    <Card className="w-full bg-card border-border hover:border-gold/30 hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-4 text-center">
                        <div className="h-10 w-10 rounded-lg bg-navy/5 flex items-center justify-center mx-auto mb-2">
                          <exec.icon className="h-5 w-5 text-navy" />
                        </div>
                        <h4 className="text-navy font-heading font-bold text-sm">
                          {exec.title}
                        </h4>
                        <p className="text-muted-foreground text-xs mt-0.5">
                          {exec.subtitle}
                        </p>
                        {exec.children && (
                          <div className="mt-3 pt-3 border-t border-border">
                            <div className="flex flex-wrap gap-1 justify-center">
                              {exec.children.map((child) => (
                                <Badge
                                  key={child}
                                  variant="secondary"
                                  className="text-[10px] px-2 py-0"
                                >
                                  {child}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Divisions Section Header */}
            <div className="relative mt-16 mb-12">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center">
                <div className="bg-muted/30 px-6 flex flex-col items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                    <div className="w-0.5 h-6 bg-border" />
                  </div>
                  <Badge
                    variant="outline"
                    className="border-gold/50 text-navy font-bold text-sm"
                  >
                    Operating Divisions
                  </Badge>
                </div>
              </div>

              {/* Horizontal connectors to 4 divisions */}
              <div className="flex justify-center mt-4">
                <div className="relative w-full max-w-4xl h-0.5 bg-border">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gold" />
                  <div className="absolute left-[calc(25%-3px)] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gold" />
                  <div className="absolute left-[calc(50%-3px)] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gold" />
                  <div className="absolute left-[calc(75%-3px)] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gold" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gold" />
                </div>
              </div>
            </div>

            {/* Division Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {divisions.map((div, i) => (
                <Link key={div.name} href={div.href} className="group block">
                  <Card className="h-full border-border hover:border-gold/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                    <div className="h-1.5 bg-gradient-to-r from-navy to-gold" />
                    <CardContent className="p-5">
                      <div className="h-10 w-10 rounded-xl bg-navy/5 flex items-center justify-center mb-3 group-hover:bg-gold/10 group-hover:scale-110 transition-all duration-300">
                        <div.icon className="h-5 w-5 text-navy" />
                      </div>
                      <h3 className="font-heading font-bold text-navy text-sm mb-2">
                        {div.name}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                        {div.description}
                      </p>
                      <div className="space-y-1.5">
                        {div.teams.map((team) => (
                          <div
                            key={team}
                            className="text-[11px] text-muted-foreground/80 flex items-center gap-1.5"
                          >
                            <div className="w-1 h-1 rounded-full bg-gold/50 shrink-0" />
                            {team}
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 flex items-center gap-1 text-gold text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Explore division <ArrowRight className="h-3 w-3" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Governance Details */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                Governance
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy mt-4 mb-6 leading-tight">
                Built for
                <br />
                <span className="text-gold">Accountability</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our organisational structure is designed to ensure clear lines of
                authority, accountability, and efficient decision-making across
                all markets and divisions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The Board of Directors provides strategic oversight and governance,
                while the CEO leads the executive team in executing our vision.
                Each executive — CFO, COO, and CTO — oversees critical functions
                that span all four operating divisions.
              </p>
              <Link href="/about">
                <Button
                  variant="ghost"
                  className="text-navy hover:text-gold group rounded-full"
                >
                  Learn more about us
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="Lamarje executive leadership"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gold/20 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-navy rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy-light to-navy" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold via-transparent to-transparent" />

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <Building2 className="h-10 w-10 text-gold/50 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
            Interested in Partnering
            <br />
            <span className="text-gold">With Our Team?</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            Reach out to discuss how Lamarje Investments can bring world-class
            expertise and execution to your next project across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold-light text-navy font-semibold px-10 py-6 text-base rounded-full group"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 hover:text-white px-10 py-6 text-base rounded-full"
              >
                View Our Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
