import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  TrendingUp,
  ArrowRight,
  ArrowLeft,
  Shield,
  DollarSign,
  BarChart3,
  Globe,
  CheckCircle2,
  Activity,
  Sun,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Lamarje Capital",
  description:
    "Forex trading, indices, commodities, and innovative financing solutions — bridging Africa's capital access gap with structured finance, collateral lending, bond issues, and debt/equity solutions.",
  openGraph: {
    title: "Lamarje Capital | Forex Trading & Financing Solutions",
    description:
      "Expert forex trading across global indices and commodities, plus innovative financing for African businesses and governments.",
  },
};

const stats = [
  { value: "5+", label: "Global Markets", icon: Globe },
  { value: "6", label: "African Countries", icon: Activity },
  { value: "2010", label: "Trading Since", icon: BarChart3 },
  { value: "4", label: "Asset Classes", icon: TrendingUp },
];

const markets = [
  {
    name: "Indices",
    items: ["JSE Top 40", "FTSE 100", "DAX 40", "CAC 40", "Dow Jones"],
    description:
      "We trade major global indices with deep market intelligence, offering clients exposure to equity benchmarks across Africa, Europe, and North America.",
    icon: BarChart3,
  },
  {
    name: "Commodities",
    items: ["Gold", "Brent Crude", "Copper", "Platinum", "Cocoa"],
    description:
      "Leveraging Africa's resource wealth, we provide commodity trading desks for precious metals, energy, and agricultural products — connecting producers to global markets.",
    icon: DollarSign,
  },
  {
    name: "Currencies",
    items: ["USD/ZAR", "EUR/USD", "GBP/USD", "USD/NGN", "USD/KES"],
    description:
      "Active forex trading across major, minor, and African currency pairs with institutional-grade execution and risk management.",
    icon: Globe,
  },
  {
    name: "Derivatives",
    items: ["Futures", "Options", "CFDs", "Swaps"],
    description:
      "Sophisticated derivative instruments for hedging, speculation, and portfolio diversification across all major asset classes.",
    icon: Activity,
  },
];

const financingSolutions = [
  {
    title: "Collateral Lending",
    description:
      "Asset-backed lending structures that unlock liquidity for African enterprises, using physical assets, receivables, and inventory as collateral.",
    icon: Shield,
  },
  {
    title: "Bond Issuance",
    description:
      "Structuring and placement of corporate and sovereign bonds, connecting African issuers with international debt capital markets.",
    icon: TrendingUp,
  },
  {
    title: "Debt & Equity Financing",
    description:
      "Tailored capital stacks blending senior debt, mezzanine, and equity to fund growth-stage African businesses and infrastructure projects.",
    icon: DollarSign,
  },
  {
    title: "Structured Finance",
    description:
      "Complex, multi-tranche financing solutions for governments, parastatals, and large corporates — including project finance and securitization.",
    icon: BarChart3,
  },
];

const differentiators = [
  {
    title: "Africa-First Mandate",
    description:
      "We understand African markets deeply — regulatory environments, currency dynamics, and political economies — giving our clients a decisive advantage.",
  },
  {
    title: "Institutional Rigour",
    description:
      "Our trading and financing operations are built on institutional-grade infrastructure, risk frameworks, and compliance standards.",
  },
  {
    title: "Capital Access Bridge",
    description:
      "We connect African enterprises to global capital pools, bridging the structural gap that constrains growth across the continent.",
  },
  {
    title: "Full-Spectrum Solutions",
    description:
      "From short-term trade finance to long-dated bond issuance, we structure the right solution for every stage of the capital lifecycle.",
  },
];

export default function LamarjeCapitalPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-navy">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy-light" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold via-transparent to-transparent" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-8 relative z-10 pt-24 pb-16">
          {/* Breadcrumb */}
          <div className="mb-8 animate-fade-in">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/60 hover:text-gold text-sm transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>

          <div className="max-w-4xl">
            <Badge className="bg-white/10 backdrop-blur text-gold hover:bg-white/20 border-0 mb-6 px-4 py-2 text-sm rounded-full">
              <TrendingUp className="h-3.5 w-3.5 mr-2" />
              Our Capital Division
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6 animate-fade-in-up">
              Lamarje
              <br />
              <span className="text-gold">Capital</span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-10 animate-fade-in-up leading-relaxed">
              Bridging Africa&apos;s capital access gap with innovative financing
              solutions — from forex trading across global indices and commodities
              to structured finance for African businesses and governments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-6 text-base rounded-full group"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="#markets">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/15 hover:text-white hover:border-white/50 px-8 py-6 text-base rounded-full"
                >
                  Explore Markets
                </Button>
              </a>
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

      {/* Trading Markets Section */}
      <section id="markets" className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Trading Desk
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy mt-4 mb-6 leading-tight">
              Global Markets,
              <span className="text-gold"> African Expertise</span>
            </h2>
            <p className="text-muted-foreground">
              Our trading desk provides institutional-grade execution across
              indices, commodities, currencies, and derivatives — with a
              particular focus on African and emerging market instruments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {markets.map((market) => (
              <Card
                key={market.name}
                className="border-border hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-lg bg-gold/10 flex items-center justify-center">
                      <market.icon className="h-5 w-5 text-gold" />
                    </div>
                    <CardTitle className="font-heading text-navy text-xl">
                      {market.name}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {market.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {market.items.map((item) => (
                      <Badge
                        key={item}
                        variant="secondary"
                        className="bg-muted text-navy font-medium"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Market image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[21/9] bg-navy">
            <img
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1400&q=80"
              alt="Financial trading floor"
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-transparent to-navy/80" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-8">
                <Activity className="h-12 w-12 text-gold mx-auto mb-4" />
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
                  Real-Time Trading Infrastructure
                </h3>
                <p className="text-white/70 max-w-lg mx-auto">
                  Our traders operate on state-of-the-art platforms with direct
                  market access, advanced charting, and algorithmic execution
                  capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Solutions */}
      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                Financing Solutions
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy mt-4 mb-6 leading-tight">
                Bridging Africa&apos;s
                <br />
                <span className="text-gold">Capital Gap</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Access to capital remains the single greatest constraint on
                African enterprise growth. Lamarje Capital exists to bridge this
                gap — deploying innovative financing structures that connect
                African borrowers with global capital markets.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From short-term trade finance facilities to long-dated sovereign
                bond issuance, we structure, price, and place capital across the
                full risk spectrum — always with an Africa-first understanding
                of the underlying credit, jurisdiction, and opportunity.
              </p>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&q=80"
                  alt="African financial district"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 border-2 border-gold/20 rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-navy rounded-2xl -z-10" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {financingSolutions.map((solution) => (
              <Card
                key={solution.title}
                className="border-border hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                    <solution.icon className="h-6 w-6 text-gold" />
                  </div>
                  <CardTitle className="font-heading text-navy text-lg">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Lamarje Capital */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy mt-4 mb-6 leading-tight">
              The Lamarje
              <span className="text-gold"> Capital Edge</span>
            </h2>
            <p className="text-muted-foreground">
              Our unique combination of global market access, African depth, and
              institutional discipline sets us apart.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {differentiators.map((diff, i) => (
              <div key={diff.title} className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-navy text-lg mb-2">
                    {diff.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy-light to-navy" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold via-transparent to-transparent" />

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <Sun className="h-12 w-12 text-gold mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
            Ready to
            <span className="text-gold"> Unlock Capital</span>?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            Whether you need institutional forex execution, commodity hedging,
            or structured financing for your next project — our team is ready
            to deliver.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold-light text-navy font-semibold px-10 py-6 text-base rounded-full group"
              >
                Contact Our Capital Team
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/divisions/infrastructure">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/15 hover:text-white hover:border-white/50 px-10 py-6 text-base rounded-full"
              >
                Explore Infrastructure
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
