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
  CheckCircle2,
  MapPin,
  Truck,
  ShoppingBag,
  Globe,
  Shield,
  Fish,
  Drumstick,
  Wheat,
  Anchor,
} from "lucide-react";

export const metadata: Metadata = {
  title: "FMCG & Food Distribution",
  description:
    "Turnkey fast-moving consumer goods and food logistics solutions — sourcing, shipping, finance management, and distribution of meat, fish, and commodity products across Africa.",
};

const productCategories = [
  {
    title: "Meat & Poultry",
    description:
      "Premium-quality chicken, mutton, lamb, beef, and turkey — sourced from trusted suppliers with rigorous quality standards.",
    icon: Drumstick,
    image:
      "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&q=80",
    items: ["Chicken", "Mutton", "Lamb", "Beef", "Turkey"],
  },
  {
    title: "Fish & Seafood",
    description:
      "Fresh and salted fish products sourced sustainably from reliable fisheries for markets across Africa.",
    icon: Fish,
    image:
      "https://images.unsplash.com/photo-1534043464124-3be32fe000c9?w=600&q=80",
    items: ["Fresh Fish", "Salted Fish", "Processed Fish", "Seafood Products"],
  },
  {
    title: "Oils & Commodities",
    description:
      "Cooking oils, sweet potatoes, and staple commodities — ensuring consistent supply for wholesale and retail distribution.",
    icon: Wheat,
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80",
    items: ["Cooking Oil", "Sweet Potato", "Grain Products", "Staple Foods"],
  },
  {
    title: "Exotic & Specialty Foods",
    description:
      "Curated selection of exotic and specialty food products to meet diverse consumer demand in growing African urban markets.",
    icon: ShoppingBag,
    image:
      "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=600&q=80",
    items: ["Imported Specialties", "Exotic Produce", "Premium Ingredients", "Gourmet Products"],
  },
];

const distributionLocations = [
  {
    city: "Johannesburg",
    country: "South Africa",
    description:
      "Primary distribution hub serving Gauteng province and the greater South African market with extensive cold-chain logistics.",
    flag: "🇿🇦",
    image:
      "https://images.unsplash.com/photo-1521436312420-3a94f5877304?w=600&q=80",
  },
  {
    city: "Pretoria",
    country: "South Africa",
    description:
      "Key distribution node servicing the Tshwane metropolitan area and northern South African corridors.",
    flag: "🇿🇦",
    image:
      "https://images.unsplash.com/photo-1562327029-2ef87028e6a3?w=600&q=80",
  },
  {
    city: "Cape Town",
    country: "South Africa",
    description:
      "Strategic coastal hub for import/export logistics and distribution to Western Cape and surrounding regions.",
    flag: "🇿🇦",
    image:
      "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600&q=80",
  },
  {
    city: "Kinshasa",
    country: "DR Congo",
    description:
      "Central African distribution hub serving the DRC market with integrated logistics and last-mile delivery capabilities.",
    flag: "🇨🇩",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80",
  },
];

const turnkeyServices = [
  {
    title: "Global Sourcing",
    description:
      "We identify and vet international suppliers to ensure competitive pricing, consistent quality, and reliable supply chains.",
    icon: Globe,
  },
  {
    title: "International Shipping",
    description:
      "End-to-end logistics management including freight forwarding, customs clearance, and cold-chain preservation.",
    icon: Anchor,
  },
  {
    title: "Finance Management",
    description:
      "Trade finance facilitation, currency management, and working capital solutions tailored to food logistics operations.",
    icon: Shield,
  },
  {
    title: "Nationwide Distribution",
    description:
      "No minimum order quantities — we deliver to businesses of all sizes across South Africa and the DRC.",
    icon: Truck,
  },
];

export default function FMCGPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-navy">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy-light" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold via-transparent to-transparent" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-8 relative z-10 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur text-gold text-sm mb-8">
                <ShoppingBag className="h-4 w-4" />
                Food & FMCG Division
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white leading-tight mb-6">
                Food Distribution
                <br />
                <span className="text-gold">Across Africa</span>
              </h1>
              <p className="text-lg text-white/70 max-w-xl leading-relaxed mb-8">
                Lamarje provides turnkey FMCG solutions — from global sourcing
                and international shipping through to finance management and
                last-mile distribution of meat, fish, oils, and specialty foods.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge
                  variant="outline"
                  className="border-gold/30 text-gold bg-gold/5"
                >
                  Meat & Poultry
                </Badge>
                <Badge
                  variant="outline"
                  className="border-gold/30 text-gold bg-gold/5"
                >
                  Fish & Seafood
                </Badge>
                <Badge
                  variant="outline"
                  className="border-gold/30 text-gold bg-gold/5"
                >
                  Oils & Commodities
                </Badge>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1488459717020-0df7bd2d4a8e?w=800&q=80"
                  alt="Food distribution and logistics"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 border-2 border-gold/20 rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gold/10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Turnkey Solutions */}
      <section className="relative z-20 -mt-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-card rounded-2xl shadow-xl border border-border p-8">
            {turnkeyServices.map((service) => (
              <div key={service.title} className="text-center">
                <service.icon className="h-6 w-6 text-gold mx-auto mb-3" />
                <h3 className="text-sm font-bold font-heading text-navy">
                  {service.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Mix */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Product Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy mt-4 mb-6 leading-tight">
              Quality Products,
              <span className="text-gold"> Reliable Supply</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our product mix is anchored by 60% meat products — chicken,
              mutton, lamb, beef, turkey, and fish — with the remainder
              covering oils, sweet potatoes, and exotic foods for diverse
              consumer markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {productCategories.map((category) => (
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
                    <CardTitle className="text-navy text-xl">
                      {category.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="mt-1">
                    {category.description}
                  </CardDescription>
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

      {/* Key Highlights */}
      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                Why Partner With Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy mt-4 mb-6 leading-tight">
                Turnkey Solutions,
                <span className="text-gold"> Zero Headaches</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We handle every aspect of the food logistics value chain — from
                sourcing through to delivery. Focus on your business while we
                ensure reliable, cost-effective supply of quality products.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "No Minimum Order Quantities",
                    desc: "Whether you are a small retailer or a large wholesaler, we serve businesses of every scale across the continent.",
                  },
                  {
                    title: "Nationwide Distribution",
                    desc: "Our logistics network reaches all major cities and towns across South Africa and key regions in the DRC.",
                  },
                  {
                    title: "Cold-Chain Integrity",
                    desc: "Temperature-controlled logistics ensure meat and fish products maintain premium quality from source to destination.",
                  },
                  {
                    title: "Integrated Finance Solutions",
                    desc: "Trade finance, currency hedging, and flexible payment terms tailored to your operational requirements.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-navy text-sm">
                        {item.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?w=800&q=80"
                  alt="African food market and distribution"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Distribution Locations */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Our Reach
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy mt-4 mb-6 leading-tight">
              Distribution
              <span className="text-gold"> Hubs</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Strategically positioned distribution centers across South Africa
              and the Democratic Republic of Congo enable rapid, reliable
              delivery to your doorstep.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {distributionLocations.map((location) => (
              <Card
                key={location.city}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={location.image}
                    alt={`${location.city}, ${location.country}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">{location.flag}</span>
                    <div>
                      <CardTitle className="text-navy text-base">
                        {location.city}
                      </CardTitle>
                      <CardDescription className="text-xs">
                        {location.country}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {location.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Split Visual */}
      <section className="py-20 md:py-32 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold via-transparent to-transparent" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                Product Mix
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mt-4 mb-6 leading-tight">
                Built Around
                <span className="text-gold"> Quality Protein</span>
              </h2>
              <p className="text-white/70 leading-relaxed mb-8">
                Our product mix is designed to meet the growing demand for
                quality protein and staple foods across African markets. We
                prioritise consistent supply, competitive pricing, and
                uncompromising quality.
              </p>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/80">Meat & Poultry</span>
                    <span className="text-gold font-bold">60%</span>
                  </div>
                  <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-[60%] rounded-full bg-gold" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/80">Oils & Commodities</span>
                    <span className="text-gold font-bold">25%</span>
                  </div>
                  <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-[25%] rounded-full bg-gold/80" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/80">
                      Exotic & Specialty Foods
                    </span>
                    <span className="text-gold font-bold">15%</span>
                  </div>
                  <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-[15%] rounded-full bg-gold/60" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=600&q=80"
                    alt="Meat products"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                  <img
                    src="https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=600&q=80"
                    alt="Cooking oil"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?w=600&q=80"
                    alt="Fresh fish"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                  <img
                    src="https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=600&q=80"
                    alt="Fresh produce"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-6 leading-tight">
            Let&apos;s Stock Your
            <span className="text-gold"> Shelves</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            From a single order to ongoing supply, our team is ready to
            deliver quality food products wherever you need them — with no
            minimum order quantities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <Button
                size="lg"
                className="bg-navy hover:bg-navy-light text-white font-semibold px-10 py-6 text-base rounded-full group"
              >
                Enquire Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
