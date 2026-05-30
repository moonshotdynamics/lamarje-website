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
  MapPin,
  Building2,
  Wrench,
  Hammer,
  Plane,
  Stethoscope,
  Sun,
  ShoppingBag,
  Fish,
  Landmark,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Current infrastructure, supply chain, and development projects by Lamarje Investments across Central African Republic, South Africa, and Democratic Republic of Congo.",
};

const projects = [
  {
    title: "Runway Renovation — Bangui Mpoko International Airport",
    location: "Bangui, Central African Republic",
    category: "Infrastructure",
    icon: Plane,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    description:
      "Comprehensive runway renovation and upgrade of Bangui Mpoko International Airport, enhancing safety, capacity, and operational efficiency for Central African Republic's primary aviation gateway.",
    tags: ["Aviation", "Runway", "Civil Engineering"],
  },
  {
    title: "Road Renovation — Bangui Airport to CBD",
    location: "Bangui, Central African Republic",
    category: "Infrastructure",
    icon: Hammer,
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    description:
      "Major road renovation project connecting Bangui Mpoko International Airport to the Central Business District, improving urban mobility and economic connectivity for the capital city.",
    tags: ["Roads", "Urban Development", "Transport"],
  },
  {
    title: "Food Depot — Pretoria",
    location: "Pretoria, South Africa",
    category: "FMCG & Logistics",
    icon: ShoppingBag,
    image:
      "https://images.unsplash.com/photo-1562327029-2ef87028e6a3?w=800&q=80",
    description:
      "State-of-the-art food distribution depot in Pretoria serving as a strategic logistics hub for meat, fish, and commodity food products across the Gauteng province and beyond.",
    tags: ["Logistics", "Food Distribution", "Cold Chain"],
  },
  {
    title: "Medical Diagnostic Centre",
    location: "Central African Republic",
    category: "Healthcare",
    icon: Stethoscope,
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    description:
      "Development of a modern medical diagnostic centre equipped with advanced imaging and laboratory facilities, improving healthcare accessibility for communities in CAR.",
    tags: ["Healthcare", "Medical", "Diagnostics"],
  },
  {
    title: "Housing with Solar Roofing",
    location: "Democratic Republic of Congo",
    category: "Housing & Energy",
    icon: Sun,
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
    description:
      "Sustainable housing development integrating solar roofing solutions for clean, reliable energy — addressing both residential needs and energy access challenges in the DRC.",
    tags: ["Housing", "Solar Energy", "Sustainability"],
  },
  {
    title: "Mining Equipment Supply — Lubumbashi",
    location: "Lubumbashi, Democratic Republic of Congo",
    category: "Procurement & Supply",
    icon: Wrench,
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    description:
      "Ongoing supply and delivery of mining equipment including pumps, control panels, safety gear, and mechanical components to mines in the Lubumbashi mining region.",
    tags: ["Mining", "Equipment", "Industrial"],
  },
  {
    title: "Salted Fish Supply — Katanga",
    location: "Katanga, Democratic Republic of Congo",
    category: "FMCG & Logistics",
    icon: Fish,
    image:
      "https://images.unsplash.com/photo-1534043464124-3be32fe000c9?w=800&q=80",
    description:
      "Reliable supply and distribution of salted fish products to markets and communities throughout the Katanga province, ensuring food security and consistent availability.",
    tags: ["Food Supply", "Fish", "Distribution"],
  },
  {
    title: "Project Funding — SA & DRC",
    location: "South Africa & Democratic Republic of Congo",
    category: "Financing",
    icon: Landmark,
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    description:
      "Funding and financial structuring for small to large-scale projects across South Africa and the DRC, combining capital solutions with strategic project oversight.",
    tags: ["Finance", "Investment", "Development"],
  },
];

const categoryColors: Record<string, string> = {
  Infrastructure: "bg-blue-100 text-blue-800",
  "FMCG & Logistics": "bg-orange-100 text-orange-800",
  Healthcare: "bg-red-100 text-red-800",
  "Housing & Energy": "bg-green-100 text-green-800",
  "Procurement & Supply": "bg-purple-100 text-purple-800",
  Financing: "bg-gold/20 text-navy",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-navy">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy-light" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold via-transparent to-transparent" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-8 relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur text-gold text-sm mb-8">
              <Building2 className="h-4 w-4" />
              Active Portfolio
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white leading-tight mb-6">
              Transforming
              <span className="text-gold"> Africa</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
              The following are some of the projects Lamarje Investments is
              currently working on across the African continent — spanning
              infrastructure, housing, healthcare, logistics, mining supply,
              and project financing.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge
                      variant="secondary"
                      className={categoryColors[project.category] || "bg-muted text-muted-foreground"}
                    >
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground mb-1">
                    <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                    <span>{project.location}</span>
                  </div>
                  <CardTitle className="text-navy text-xl leading-tight">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-xs border-border"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Our Impact
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy mt-4 mb-6 leading-tight">
              Delivering
              <span className="text-gold"> Results</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Every project is driven by our commitment to quality, cost
              reduction, job creation, and local empowerment across the
              communities we serve.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "8", label: "Active Projects", icon: Building2 },
              { value: "3", label: "Countries", icon: MapPin },
              { value: "4", label: "Sectors", icon: Hammer },
              { value: "100+", label: "Jobs Created", icon: Sun },
            ].map((stat) => (
              <div key={stat.label}>
                <stat.icon className="h-8 w-8 text-gold mx-auto mb-4" />
                <div className="text-4xl md:text-5xl font-bold font-heading text-navy">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-2 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold via-transparent to-transparent" />

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
            Partner With Us on Your
            <span className="text-gold"> Next Project</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            Whether you are a government agency, private enterprise, or
            institutional investor — we bring expertise, capital, and execution
            capability to deliver transformative projects across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold-light text-navy font-semibold px-10 py-6 text-base rounded-full group"
              >
                Start a Conversation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="/divisions/consulting">
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 hover:text-white px-10 py-6 text-base rounded-full"
              >
                Explore Our Capabilities
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
