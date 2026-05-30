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
  ArrowRight,
  Shield,
  Truck,
  Wrench,
  Settings,
  Fan,
  Cable,
  Cog,
  HardHat,
  Flame,
  Zap,
  Droplets,
  Gauge,
  Wind,
  Search,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Procurement & Products",
  description:
    "Comprehensive procurement of mining equipment, industrial supplies, safety gear, pumps, generators, and general mining equipment for operations across Africa.",
};

const equipmentCategories = [
  {
    title: "Pumps & Fluid Systems",
    description:
      "Industrial and vacuum pumps for mining dewatering, slurry handling, and process applications.",
    icon: Droplets,
    image:
      "https://images.unsplash.com/photo-1581092160607-ee234a7b0b73?w=600&q=80",
    items: ["Vacuum Pumps", "Slurry Pumps", "Dewatering Pumps", "Blowers", "Pipeline Components"],
  },
  {
    title: "Electrical & Control",
    description:
      "Control panels, generators, cables, and electrical infrastructure for mining and industrial operations.",
    icon: Zap,
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
    items: ["Control Panels", "Generators", "Switchgear", "Cables", "Distribution Boards"],
  },
  {
    title: "Safety & Protective Equipment",
    description:
      "Complete range of personal protective equipment and safety gear for mining and industrial environments.",
    icon: HardHat,
    image:
      "https://images.unsplash.com/photo-1575517111478-7f6afd0973db?w=600&q=80",
    items: ["Hard Hats", "Safety Boots", "Respirators", "Gloves & Eyewear", "Fire Fighting Gear"],
  },
  {
    title: "Mechanical Components",
    description:
      "Bearings, chains, pneumatic brakes, wire ropes, lifting equipment, and mechanical spares for mining operations.",
    icon: Cog,
    image:
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=600&q=80",
    items: ["Bearings", "Chains", "Wire Rope", "Lifting Equipment", "Pneumatic Brakes"],
  },
  {
    title: "Structural & Support",
    description:
      "Roof bolting systems, wire-mesh, steel cables, pipes, and structural components for underground and surface mining.",
    icon: Wrench,
    image:
      "https://images.unsplash.com/photo-1581092335871-4c7b80ef83d7?w=600&q=80",
    items: ["Roof Bolting", "Wire-Mesh", "Steel Cables", "Pipes & Fittings", "Strainers"],
  },
  {
    title: "Ventilation & Environmental",
    description:
      "Fans, dust control systems, blowers, and environmental monitoring equipment for safe working conditions.",
    icon: Wind,
    image:
      "https://images.unsplash.com/photo-1576153192396-1d7f0f7a3ef6?w=600&q=80",
    items: ["Industrial Fans", "Dust Control", "Blowers", "Air Quality Monitors", "Compressors"],
  },
];

const procurementProcess = [
  {
    step: "01",
    title: "Requirements Analysis",
    description:
      "We work with your procurement and engineering teams to understand exact specifications, operational requirements, and delivery timelines.",
  },
  {
    step: "02",
    title: "Global Sourcing",
    description:
      "Our international supply network identifies qualified manufacturers and suppliers with proven quality and competitive pricing.",
  },
  {
    step: "03",
    title: "Quality Assurance",
    description:
      "Rigorous quality checks, certification verification, and compliance auditing before any equipment leaves the supplier.",
  },
  {
    step: "04",
    title: "Logistics & Delivery",
    description:
      "End-to-end logistics including freight forwarding, customs clearance, and transportation to your mine site or facility.",
  },
];

export default function ProcurementPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-navy">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy-light" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold via-transparent to-transparent" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-8 relative z-10 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur text-gold text-sm mb-8">
                <Wrench className="h-4 w-4" />
                Procurement Division
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white leading-tight mb-6">
                Mining Equipment
                <br />
                <span className="text-gold">& Industrial Supply</span>
              </h1>
              <p className="text-lg text-white/70 max-w-xl leading-relaxed mb-8">
                Lamarje Procurement delivers comprehensive sourcing and supply
                of mining equipment, safety gear, industrial components, and
                operational supplies to mines and industrial operations across
                Africa.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge
                  variant="outline"
                  className="border-gold/30 text-gold bg-gold/5"
                >
                  Pumps & Fluid Systems
                </Badge>
                <Badge
                  variant="outline"
                  className="border-gold/30 text-gold bg-gold/5"
                >
                  Safety Equipment
                </Badge>
                <Badge
                  variant="outline"
                  className="border-gold/30 text-gold bg-gold/5"
                >
                  Mechanical Components
                </Badge>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80"
                  alt="Mining equipment and industrial supplies"
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

      {/* Stats */}
      <section className="relative z-20 -mt-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-card rounded-2xl shadow-xl border border-border p-8">
            {[
              { value: "100+", label: "Product Categories", icon: Cog },
              {
                value: "6",
                label: "African Markets Served",
                icon: Truck,
              },
              {
                value: "15+",
                label: "Years of Procurement",
                icon: Shield,
              },
              {
                value: "24/7",
                label: "Supply Chain Support",
                icon: Settings,
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

      {/* Equipment Categories */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Equipment Range
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy mt-4 mb-6 leading-tight">
              Comprehensive
              <span className="text-gold"> Mining Supply</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              From pumps and control panels to safety equipment and
              heavy-duty mechanical components — we supply everything mining
              operations need to run safely and efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipmentCategories.map((category) => (
              <Card
                key={category.title}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[16/7] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                      <category.icon className="h-5 w-5 text-gold" />
                    </div>
                    <CardTitle className="text-navy text-lg">
                      {category.title}
                    </CardTitle>
                  </div>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <Badge
                        key={item}
                        variant="secondary"
                        className="bg-muted text-muted-foreground"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Procurement Process */}
      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              How We Procure
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy mt-4 mb-6 leading-tight">
              Our Procurement
              <span className="text-gold"> Process</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our disciplined four-phase procurement methodology ensures
              quality, cost-effectiveness, and timely delivery for every order.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-16 left-1/2 -translate-x-1/2 w-[75%] h-px bg-gold/20" />

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {procurementProcess.map((phase) => (
                <div key={phase.title} className="relative text-center group">
                  <div className="relative mx-auto mb-6 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-navy flex items-center justify-center group-hover:bg-gold transition-all duration-500 shadow-lg">
                      <span className="text-gold group-hover:text-navy font-heading font-bold text-2xl transition-colors duration-500">
                        {phase.step}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-navy text-lg mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Equipment List */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                Full Capability
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy mt-4 mb-6 leading-tight">
                Everything Your
                <span className="text-gold"> Mine Needs</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our extensive product catalogue covers the complete spectrum of
                mining operational requirements. Each item is sourced from
                trusted manufacturers with proven quality and compliance
                certifications.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Wrench, label: "Roof Bolting Systems" },
                  { icon: Cable, label: "Wire-Mesh & Steel Cables" },
                  { icon: Settings, label: "Pneumatic Brakes" },
                  { icon: Cog, label: "Chains & Bearings" },
                  { icon: HardHat, label: "Safety Gear" },
                  { icon: Droplets, label: "Pipes & Fittings" },
                  { icon: Zap, label: "Generators" },
                  { icon: Gauge, label: "Wire Rope & Lifting" },
                  { icon: Droplets, label: "Vacuum Pumps" },
                  { icon: Wind, label: "Blowers & Dust Control" },
                  { icon: Fan, label: "Industrial Fans" },
                  { icon: Flame, label: "Fire Fighting Equipment" },
                  { icon: Settings, label: "Compressors" },
                  { icon: Search, label: "Strainers & Filters" },
                  { icon: Zap, label: "Control Panels" },
                  { icon: Truck, label: "Mining Buses & Vehicles" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <item.icon className="h-4 w-4 text-gold shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                  alt="Industrial mining equipment and machinery"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold/10 rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-48 h-48 border-2 border-gold/20 rounded-2xl -z-10" />
            </div>
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
              <span className="text-gold"> Supply Advantage</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Global Sourcing Network",
                description:
                  "Access to hundreds of qualified international manufacturers ensuring competitive pricing without compromising on quality.",
                icon: Truck,
              },
              {
                title: "Quality Assured",
                description:
                  "Every product undergoes rigorous quality verification with full certification and compliance documentation provided.",
                icon: Shield,
              },
              {
                title: "Africa Logistics Expertise",
                description:
                  "Deep experience in cross-border logistics, customs clearance, and last-mile delivery to remote mine sites across Africa.",
                icon: Settings,
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
            Ready to Source
            <span className="text-gold"> Equipment</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you need a single component or a complete mining supply
            package, our procurement team is ready to source, quality-check, and
            deliver — on time and on budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <Button
                size="lg"
                className="bg-navy hover:bg-navy-light text-white font-semibold px-10 py-6 text-base rounded-full group"
              >
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
