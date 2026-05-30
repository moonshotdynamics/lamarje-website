import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Target,
  Users,
  Shield,
  Award,
  Globe,
  Briefcase,
  FileText,
  Handshake,
  TrendingUp,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Lamarje Consulting",
  description:
    "Strategic advisory, M&A transaction structuring, private equity and debt advisory, and expert guidance for infrastructure portfolios across Africa.",
};

const processSteps = [
  {
    step: "01",
    title: "Strategic Assessment",
    description:
      "We evaluate your business objectives, market position, and growth aspirations to identify optimal strategic options tailored to your unique circumstances.",
    icon: Target,
  },
  {
    step: "02",
    title: "Transaction Structuring",
    description:
      "Our team designs the optimal sale strategy, deal structure, and payment terms — balancing risk, tax efficiency, and stakeholder alignment.",
    icon: Briefcase,
  },
  {
    step: "03",
    title: "Marketing & Due Diligence",
    description:
      "We prepare comprehensive marketing materials, manage data rooms, coordinate legal processes, and engage qualified counterparties and fund managers.",
    icon: FileText,
  },
  {
    step: "04",
    title: "Negotiation & Execution",
    description:
      "Our advisors lead negotiations with counterparties, legal counsel, and investment committees — securing optimal outcomes for all stakeholders.",
    icon: Handshake,
  },
  {
    step: "05",
    title: "Post-Transaction Support",
    description:
      "We provide ongoing strategic guidance through integration, portfolio optimization, and long-term value creation initiatives.",
    icon: TrendingUp,
  },
];

const expertiseAreas = [
  {
    title: "Strategic Advisory",
    description:
      "Comprehensive evaluation of strategic options including organic growth, partnerships, divestitures, and market expansion across African markets.",
    icon: BarChart3,
    items: [
      "Market entry strategy",
      "Growth & expansion planning",
      "Strategic partnerships",
      "Divestiture advisory",
    ],
  },
  {
    title: "M&A Transaction Services",
    description:
      "End-to-end transaction support from target identification and valuation through negotiation, closing, and post-merger integration.",
    icon: Handshake,
    items: [
      "Buy-side & sell-side advisory",
      "Valuation & deal structuring",
      "Payment term optimization",
      "Post-merger integration",
    ],
  },
  {
    title: "Private Capital Advisory",
    description:
      "Expert guidance for private equity, private debt, and infrastructure portfolios — connecting capital with opportunity across the continent.",
    icon: Building2,
    items: [
      "Private equity advisory",
      "Private debt structuring",
      "Infrastructure portfolio strategy",
      "Fund placement support",
    ],
  },
  {
    title: "Legal & Process Management",
    description:
      "Coordination of legal frameworks, regulatory compliance, data room management, and marketing material preparation for seamless execution.",
    icon: Shield,
    items: [
      "Data room management",
      "Legal process coordination",
      "Marketing material preparation",
      "Regulatory compliance",
    ],
  },
  {
    title: "Negotiation & Counterparty Engagement",
    description:
      "Skilled negotiation with counterparties, fund managers, investment committees, and legal advisors to achieve favorable transaction outcomes.",
    icon: Users,
    items: [
      "Counterparty identification",
      "Fund manager engagement",
      "Investment committee presentations",
      "Multi-party negotiations",
    ],
  },
  {
    title: "Cross-Border Expertise",
    description:
      "Deep understanding of African regulatory environments, currency considerations, and cross-border transaction mechanics across our operational footprint.",
    icon: Globe,
    items: [
      "Cross-border structuring",
      "Currency risk management",
      "Regional regulatory navigation",
      "Multi-jurisdiction coordination",
    ],
  },
];

export default function ConsultingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-navy">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy-light" />
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold via-transparent to-transparent" />
        <div className="absolute top-10 right-10 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-8 relative z-10 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur text-gold text-sm mb-8">
                <BarChart3 className="h-4 w-4" />
                Strategic Advisory Division
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white leading-tight mb-6">
                Expert Guidance
                <br />
                <span className="text-gold">For Complex Decisions</span>
              </h1>
              <p className="text-lg text-white/70 max-w-xl leading-relaxed mb-8">
                Lamarje Consulting provides world-class strategic advisory,
                M&A transaction services, and private capital guidance to
                businesses, governments, and investors operating across the
                African continent.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge
                  variant="outline"
                  className="border-gold/30 text-gold bg-gold/5"
                >
                  Strategic Advisory
                </Badge>
                <Badge
                  variant="outline"
                  className="border-gold/30 text-gold bg-gold/5"
                >
                  M&A Transactions
                </Badge>
                <Badge
                  variant="outline"
                  className="border-gold/30 text-gold bg-gold/5"
                >
                  Private Capital
                </Badge>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                  alt="Strategic consulting meeting"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 border-2 border-gold/20 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-gold/10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-20 -mt-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-card rounded-2xl shadow-xl border border-border p-8">
            {[
              { value: "50+", label: "Transactions Advised", icon: Briefcase },
              { value: "6", label: "African Markets", icon: Globe },
              { value: "15+", label: "Years of Expertise", icon: Award },
              {
                value: "100%",
                label: "Client Satisfaction",
                icon: Shield,
              },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="h-6 w-6 text-gold mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold font-heading text-navy">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy mt-4 mb-6 leading-tight">
              A Proven
              <span className="text-gold"> Process</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our structured five-phase methodology ensures every engagement
              receives rigorous analysis, creative structuring, and disciplined
              execution — from initial assessment through to sustained
              value creation.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-12 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gold/20" />

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
              {processSteps.map((step, i) => (
                <div key={step.title} className="relative text-center group">
                  <div className="relative mx-auto mb-6 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-navy flex items-center justify-center group-hover:bg-gold transition-[transform,box-shadow,background-color] duration-300 shadow-lg group-hover:shadow-gold/20">
                      <step.icon className="h-10 w-10 text-gold group-hover:text-navy transition-colors duration-300" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gold text-navy text-xs font-bold flex items-center justify-center">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-navy text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Expertise
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy mt-4 mb-6 leading-tight">
              Comprehensive
              <span className="text-gold"> Advisory Services</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our multidisciplinary team brings deep expertise across the full
              spectrum of strategic advisory, transaction execution, and
              private capital services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area) => (
              <Card key={area.title} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-3 group-hover:bg-gold/20 transition-colors">
                    <area.icon className="h-6 w-6 text-gold" />
                  </div>
                  <CardTitle className="text-navy text-lg">
                    {area.title}
                  </CardTitle>
                  <CardDescription>{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {area.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 md:py-32 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold via-transparent to-transparent" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mt-4 mb-6 leading-tight">
              The Lamarje
              <span className="text-gold"> Advantage</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Deep African Expertise",
                description:
                  "Unparalleled understanding of African markets, regulatory environments, and cultural dynamics across 6+ countries.",
                icon: Globe,
              },
              {
                title: "Multi-Disciplinary Team",
                description:
                  "Our advisors bring experience from top-tier consulting firms, investment banks, private equity funds, and legal practices.",
                icon: Users,
              },
              {
                title: "End-to-End Execution",
                description:
                  "From strategic assessment through negotiation and post-transaction support — we manage the complete advisory lifecycle.",
                icon: Target,
              },
            ].map((item) => (
              <div key={item.title} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <item.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="font-heading font-bold text-white text-lg mb-3">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-6 leading-tight">
            Ready to Explore Your
            <span className="text-gold"> Strategic Options</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you are considering a transaction, seeking growth capital,
            or evaluating market entry strategies — our team is ready to provide
            the expert guidance you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <Button
                size="lg"
                className="bg-navy hover:bg-navy-light text-white font-semibold px-10 py-6 text-base rounded-full group"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
