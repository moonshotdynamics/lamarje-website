import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Building2,
  ArrowRight,
  ArrowLeft,
  HardHat,
  Wrench,
  Sun,
  Shield,
  CheckCircle2,
  Globe,
  Activity,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Lamarje Infrastructure",
  description:
    "Full lifecycle infrastructure development across Africa — roads, housing, airports, hospitals, railways, and bridges — from inception through design, build, and commissioning.",
  openGraph: {
    title: "Lamarje Infrastructure | Building Africa's Future",
    description:
      "End-to-end infrastructure development with innovative technology solutions including solar energy, waste-to-energy, and sustainable housing across Africa.",
  },
};

const stats = [
  { value: "15+", label: "Projects Completed", icon: Building2 },
  { value: "6", label: "African Countries", icon: Globe },
  { value: "4", label: "Lifecycle Stages", icon: Activity },
  { value: "2010", label: "Building Since", icon: TrendingUp },
];

const lifecycleStages = [
  {
    step: "01",
    title: "Inception",
    description:
      "Feasibility studies, site assessments, environmental impact analysis, and stakeholder engagement. We validate every project before committing resources.",
    icon: TrendingUp,
    color: "from-gold to-gold-light",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Architectural and engineering design, structural calculations, cost estimation, and regulatory approvals. Our designs prioritize sustainability and local context.",
    icon: Wrench,
    color: "from-navy to-navy-light",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Construction management, quality assurance, supply chain coordination, and on-site execution. We deliver projects on time and within budget.",
    icon: HardHat,
    color: "from-navy to-navy-light",
  },
  {
    step: "04",
    title: "Commissioning",
    description:
      "Testing, handover, training, and operational readiness. We ensure every asset performs to specification before the keys are handed over.",
    icon: CheckCircle2,
    color: "from-gold to-gold-light",
  },
];

const sectors = [
  {
    title: "Roads & Highways",
    description:
      "Design and construction of national highways, urban roads, and rural access routes — connecting communities and enabling commerce.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
  },
  {
    title: "Housing",
    description:
      "Residential developments from affordable housing estates to luxury communities, with integrated utilities and community infrastructure.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
  },
  {
    title: "Airports",
    description:
      "Runway renovations, terminal buildings, air traffic control towers, and airport support infrastructure meeting ICAO standards.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
  },
  {
    title: "Hospitals & Healthcare",
    description:
      "Medical diagnostic centres, hospital construction, clinic networks, and healthcare infrastructure serving underserved communities.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
  },
  {
    title: "Railways",
    description:
      "Rail line construction and rehabilitation, station buildings, signaling systems, and railway logistics infrastructure.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
  },
  {
    title: "Bridges",
    description:
      "Bridge design, construction, and rehabilitation — connecting communities across rivers, valleys, and urban divides.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
  },
];

const technologies = [
  {
    title: "Solar Energy",
    description:
      "Utility-scale solar farms and distributed solar generation providing clean, reliable electricity to communities and industries.",
    icon: Sun,
  },
  {
    title: "Solar Housing",
    description:
      "Integrated solar roofing on residential developments — reducing energy costs and enabling off-grid living with sustainable design.",
    icon: Sun,
  },
  {
    title: "Waste-to-Energy",
    description:
      "Converting municipal and industrial waste into electricity and heat, reducing landfill burden while generating power.",
    icon: Activity,
  },
  {
    title: "Solar Boreholes",
    description:
      "Solar-powered water boreholes delivering clean water to rural and peri-urban communities, powered entirely by renewable energy.",
    icon: Sun,
  },
  {
    title: "Solar Morgues",
    description:
      "Solar-powered mortuary facilities for hospitals and communities, ensuring dignified care with reliable, sustainable energy.",
    icon: Shield,
  },
  {
    title: "Green Building",
    description:
      "Sustainable construction practices, energy-efficient design, and environmentally responsible materials across all projects.",
    icon: Building2,
  },
];

const projectShowcase = [
  "Runway renovation of the Bangui Mpoko International Airport, Central African Republic",
  "Road renovation from Bangui Mpoko Airport to Central Business District, CAR",
  "Housing development with solar roofing, Democratic Republic of Congo",
  "Medical Diagnostic Centre, Central African Republic",
  "Railway infrastructure assessment and rehabilitation planning",
  "Bridge construction and renovation across multiple African nations",
];

export default function LamarjeInfrastructurePage() {
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
              <Building2 className="h-3.5 w-3.5 mr-2" />
              Our Infrastructure Division
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6 animate-fade-in-up">
              Lamarje
              <br />
              <span className="text-gold">Infrastructure</span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-10 animate-fade-in-up leading-relaxed">
              Building Africa&apos;s future from the ground up — full lifecycle
              infrastructure development from inception through design, build,
              and commissioning across the continent.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-6 text-base rounded-full group"
                >
                  Start a Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="#lifecycle">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white hover:border-white/60 px-8 py-6 text-base rounded-full"
                >
                  Our Process
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 motion-safe:animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-2.5 bg-gold rounded-full motion-safe:animate-pulse" />
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

      {/* Project Lifecycle Section */}
      <section id="lifecycle" className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy mt-4 mb-6 leading-tight">
              Full Project
              <span className="text-gold"> Lifecycle</span>
            </h2>
            <p className="text-muted-foreground">
              Every Lamarje Infrastructure project follows a rigorous four-stage
              process — ensuring quality, accountability, and on-time delivery
              at every phase.
            </p>
          </div>

          {/* Lifecycle visual steps */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-20 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-gold via-navy to-gold" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {lifecycleStages.map((stage) => (
                <div key={stage.step} className="relative text-center group">
                  {/* Step number circle */}
                  <div className="relative z-10 mx-auto mb-6">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${stage.color} flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      <span className="text-white font-heading font-bold text-xl">
                        {stage.step}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-3 mb-3">
                    <stage.icon className="h-5 w-5 text-gold" />
                    <h3 className="font-heading font-bold text-navy text-xl">
                      {stage.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Lifecycle image */}
          <div className="mt-16 relative rounded-2xl overflow-hidden aspect-[21/9] bg-navy">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1400&q=80"
              alt="Construction site with cranes"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-transparent to-navy/80" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-8">
                <HardHat className="h-12 w-12 text-gold mx-auto mb-4" />
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
                  From Blueprint to Reality
                </h3>
                <p className="text-white/70 max-w-lg mx-auto">
                  Our integrated approach ensures seamless transitions between
                  every stage — eliminating delays, reducing costs, and
                  delivering exactly what was promised.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors We Build */}
      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy mt-4 mb-6 leading-tight">
              Sectors
              <span className="text-gold"> We Build</span>
            </h2>
            <p className="text-muted-foreground">
              From roads and railways to hospitals and airports — our
              infrastructure portfolio spans the critical sectors that power
              African economic growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector) => (
              <Card
                key={sector.title}
                className="border-border hover:shadow-lg transition-shadow group overflow-hidden"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-heading text-navy">
                    {sector.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {sector.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Innovation */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                Innovation
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy mt-4 mb-6 leading-tight">
                Technology at the
                <span className="text-gold"> Core</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Lamarje Infrastructure integrates cutting-edge technology into
                every project. Our commitment to sustainable development drives
                us to pioneer solar energy solutions, waste-to-energy systems,
                and green building practices.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From solar-powered housing estates to solar boreholes delivering
                clean water to rural communities, we leverage innovation to
                create lasting impact — reducing costs, protecting the
                environment, and improving quality of life.
              </p>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80"
                  alt="Solar panels in Africa"
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
            {technologies.map((tech) => (
              <Card
                key={tech.title}
                className="border-border hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                    <tech.icon className="h-6 w-6 text-gold" />
                  </div>
                  <CardTitle className="font-heading text-navy text-lg">
                    {tech.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tech.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-20 md:py-32 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold via-transparent to-transparent" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Our Work
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mt-4 mb-6 leading-tight">
              Active
              <span className="text-gold"> Projects</span>
            </h2>
            <p className="text-white/70">
              Selected infrastructure projects currently underway across the
              African continent.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {projectShowcase.map((project, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl bg-white/5 backdrop-blur border border-white/10"
              >
                <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-white/80">{project}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-6 text-base rounded-full group"
              >
                Discuss Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy-light to-navy" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold via-transparent to-transparent" />

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <Building2 className="h-12 w-12 text-gold mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
            Let&apos;s Build
            <span className="text-gold"> Africa&apos;s Future</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            From roads and bridges to solar-powered housing and hospitals — partner
            with Lamarje Infrastructure for world-class development executed to
            the highest standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold-light text-navy font-semibold px-10 py-6 text-base rounded-full group"
              >
                Contact Our Infrastructure Team
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/divisions/supply-chain">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white hover:border-white/60 px-10 py-6 text-base rounded-full"
              >
                Explore Supply Chain
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
