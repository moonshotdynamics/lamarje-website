import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Truck,
  ArrowRight,
  ArrowLeft,
  Shield,
  CheckCircle2,
  HardHat,
  Package,
  Globe,
  TrendingUp,
  Wrench,
  Sun,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Supply Chain Solutions",
  description:
    "Comprehensive supply chain management — mining procurement, logistics, quality management, FMCG distribution, and food retail across Africa. Adding value through effective supply chain solutions.",
  openGraph: {
    title: "Supply Chain Solutions | Lamarje Investments",
    description:
      "End-to-end supply chain solutions including mining procurement, logistics, quality management, and FMCG distribution across African markets.",
  },
};

const stats = [
  { value: "6", label: "Countries Served", icon: Globe },
  { value: "4+", label: "Core Services", icon: Package },
  { value: "2010", label: "Operating Since", icon: TrendingUp },
  { value: "100%", label: "Client Retention", icon: Shield },
];

const coreServices = [
  {
    title: "Procurement",
    description:
      "Strategic sourcing and procurement management for mining, industrial, and FMCG sectors. We negotiate favourable terms, ensure quality compliance, and manage supplier relationships across global markets.",
    icon: Package,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
  {
    title: "Quality Management",
    description:
      "Rigorous quality assurance and control systems embedded at every stage of the supply chain — from supplier vetting and factory inspections to incoming goods inspection and final delivery verification.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  },
  {
    title: "Logistics & Distribution",
    description:
      "End-to-end logistics management including freight forwarding, warehousing, last-mile delivery, and cross-border transportation across African corridors.",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
];

const miningServices = [
  {
    title: "Shaft Sinking",
    description:
      "Vertical shaft construction for underground mining operations — from feasibility and design through to excavation, lining, and equipping.",
    icon: Wrench,
  },
  {
    title: "Underground Development",
    description:
      "Tunnel development, stope access, ventilation systems, and underground infrastructure for efficient, safe mining operations.",
    icon: HardHat,
  },
  {
    title: "Contract Mining",
    description:
      "Full-scope contract mining services including drill and blast, load and haul, and mine planning — reducing capital expenditure for mine owners.",
    icon: TrendingUp,
  },
  {
    title: "Opencast Mining",
    description:
      "Surface mining operations including overburden removal, ore extraction, rehabilitation, and environmental management.",
    icon: Sun,
  },
  {
    title: "Mineral Processing",
    description:
      "Crushing, milling, flotation, leaching, and refining — extracting maximum value from ore through optimized processing circuits.",
    icon: BarChart3,
  },
  {
    title: "Acid Mine Drainage",
    description:
      "AMD treatment and management solutions that protect water resources and ensure environmental compliance for mining operations.",
    icon: Shield,
  },
];

const fmcgProducts = [
  {
    name: "Maize",
    description:
      "White and yellow maize sourcing, storage, and distribution for food processing and retail across Southern and Central Africa.",
  },
  {
    name: "Vegetables",
    description:
      "Fresh and processed vegetable supply chains from farm to table — serving retailers, food service, and institutional buyers.",
  },
  {
    name: "Palm Oil",
    description:
      "Crude and refined palm oil procurement and distribution for food manufacturing and consumer markets throughout Africa.",
  },
  {
    name: "Cereals",
    description:
      "Wheat, rice, sorghum, and millet — comprehensive grain supply chains connecting African producers with regional and international markets.",
  },
];

const valuePropositions = [
  {
    title: "Cost Efficiency",
    description:
      "We drive down procurement and logistics costs through strategic sourcing, bulk negotiation, and optimized routing — savings passed directly to our clients.",
  },
  {
    title: "Quality Assurance",
    description:
      "Every shipment, every batch, every delivery is verified against international quality standards. Our reputation is built on reliability.",
  },
  {
    title: "African Reach",
    description:
      "Six-country operational footprint with deep knowledge of local regulations, customs procedures, and logistics corridors across the continent.",
  },
  {
    title: "End-to-End Integration",
    description:
      "From procurement to delivery, we manage the entire supply chain — single-point accountability with full visibility at every stage.",
  },
];

export default function SupplyChainPage() {
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
              <Truck className="h-3.5 w-3.5 mr-2" />
              Our Supply Chain Division
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6 animate-fade-in-up">
              Supply Chain
              <br />
              <span className="text-gold">Solutions</span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-10 animate-fade-in-up leading-relaxed">
              Adding value through effective supply chain management — procurement,
              quality assurance, logistics, mining supplies, and FMCG distribution
              across the African continent.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-6 text-base rounded-full group"
                >
                  Partner With Us
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="#services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 hover:text-white px-8 py-6 text-base rounded-full"
                >
                  Our Services
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

      {/* Core Services Section */}
      <section id="services" className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy mt-4 mb-6 leading-tight">
              Core
              <span className="text-gold"> Services</span>
            </h2>
            <p className="text-muted-foreground">
              Our supply chain division delivers procurement, quality management,
              and logistics solutions that reduce costs, ensure reliability, and
              add measurable value to every client relationship.
            </p>
          </div>

          <div className="space-y-16">
            {coreServices.map((service, i) => (
              <div
                key={service.title}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 text-gold text-xs font-semibold mb-4">
                    <service.icon className="h-3.5 w-3.5" />
                    Service {i + 1}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-navy mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <Link href="/contact">
                    <Button
                      variant="ghost"
                      className="mt-6 text-navy hover:text-gold group rounded-full"
                    >
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>

                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-muted">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mining Services */}
      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                Mining Sector
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy mt-4 mb-6 leading-tight">
                Mining
                <span className="text-gold"> Supply Chain</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The African mining sector demands supply chain partners who
                understand the unique challenges of remote operations, heavy
                equipment logistics, and strict safety standards. Lamarje
                delivers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From shaft sinking and underground development to mineral
                processing and environmental management, we provide procurement,
                logistics, and operational support that keeps mines running
                safely, efficiently, and profitably.
              </p>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1578319439584-104c94d37305?w=800&q=80"
                  alt="Mining operations in Africa"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 border-2 border-gold/20 rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-navy rounded-2xl -z-10" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {miningServices.map((service) => (
              <Card
                key={service.title}
                className="border-border hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-gold" />
                  </div>
                  <CardTitle className="font-heading text-navy text-lg">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FMCG & Food Distribution */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div className="relative md:order-2">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80"
                  alt="Food retail and FMCG distribution"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-gold/20 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-navy rounded-2xl -z-10" />
            </div>

            <div className="md:order-1">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                FMCG & Food
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy mt-4 mb-6 leading-tight">
                Food Distribution
                <span className="text-gold"> in DRC</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Lamarje operates a growing FMCG distribution network in the
                Democratic Republic of Congo, connecting food producers and
                processors with retail outlets, institutional buyers, and
                consumers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our food retail operations bring essential commodities to
                market — from maize and vegetables to palm oil and cereals —
                ensuring consistent quality, competitive pricing, and reliable
                supply across the DRC and neighboring markets.
              </p>
            </div>
          </div>

          {/* Product cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fmcgProducts.map((product) => (
              <Card
                key={product.name}
                className="border-border hover:shadow-lg transition-shadow text-center"
              >
                <CardHeader>
                  <div className="h-14 w-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-3">
                    <Package className="h-7 w-7 text-gold" />
                  </div>
                  <CardTitle className="font-heading text-navy text-lg">
                    {product.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 md:py-32 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold via-transparent to-transparent" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mt-4 mb-6 leading-tight">
              Adding Value Through
              <span className="text-gold"> Every Link</span>
            </h2>
            <p className="text-white/70">
              Our supply chain solutions are built on a simple premise: every
              link in the chain should add measurable value for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {valuePropositions.map((vp) => (
              <div
                key={vp.title}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10"
              >
                <div className="h-12 w-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-lg mb-2">
                    {vp.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {vp.description}
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
          <Package className="h-12 w-12 text-gold mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
            Ready to
            <span className="text-gold"> Optimize Your Supply Chain</span>?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            Whether you need mining procurement, logistics management, or FMCG
            distribution — our team delivers supply chain solutions that reduce
            costs and improve reliability across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold-light text-navy font-semibold px-10 py-6 text-base rounded-full group"
              >
                Contact Our Supply Chain Team
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/divisions/capital">
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 hover:text-white px-10 py-6 text-base rounded-full"
              >
                Explore Capital Division
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
