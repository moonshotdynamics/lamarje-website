import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Eye,
  Target,
  TrendingUp,
  Shield,
  Users,
  Award,
  Globe,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Building2,
  Quote,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Lamarje Investments (Pty) Ltd — established in 2010. A diversified African investment group providing Consulting, Supply Chain, Infrastructure Development, Trading, and Financing solutions. Operating in South Africa, DRC, Congo, Angola, Uganda, and the Central African Republic.",
  openGraph: {
    title: "About Us | Lamarje Investments",
    description:
      "Learn about Lamarje Investments — our vision, mission, values, and the team driving Africa's growth through diversified solutions.",
  },
};

const benefits = [
  {
    title: "Cost Reduction",
    description:
      "Efficient procurement and supply chain solutions that reduce operational costs across the value chain.",
    icon: TrendingUp,
  },
  {
    title: "Improved Efficiency",
    description:
      "Streamlined processes, expert project management, and integrated delivery across all divisions.",
    icon: Shield,
  },
  {
    title: "Job Creation",
    description:
      "Creating sustainable, dignified employment opportunities in the communities we serve.",
    icon: Users,
  },
  {
    title: "Local Empowerment",
    description:
      "Building local capacity and strengthening communities through strategic partnerships and skills transfer.",
    icon: Award,
  },
];

const countries = [
  "South Africa",
  "Democratic Republic of Congo",
  "Congo Brazzaville",
  "Angola",
  "Uganda",
  "Central African Republic",
];

const evolution = [
  {
    year: "2010",
    title: "Founded",
    description:
      "Lamarje Investments established in South Africa, initially focused on supply chain management and procurement solutions.",
    icon: Building2,
  },
  {
    year: "2014",
    title: "Geographic Expansion",
    description:
      "Expanded operations into the DRC, Congo, and Angola — building local partnerships and regional expertise.",
    icon: Globe,
  },
  {
    year: "2017",
    title: "Division Growth",
    description:
      "Launched dedicated Infrastructure and Consulting divisions, broadening beyond supply chain into full-service delivery.",
    icon: TrendingUp,
  },
  {
    year: "2020",
    title: "Capital & Financing",
    description:
      "Established Lamarje Capital division offering forex trading, indices, commodities, and innovative financing solutions.",
    icon: Star,
  },
  {
    year: "2025",
    title: "Pan-African Vision",
    description:
      "Operating in six countries with four core divisions — driving Africa's growth through integrated, sustainable solutions.",
    icon: Target,
  },
];

const values = [
  {
    title: "Integrity",
    description:
      "We uphold the highest standards of honesty and transparency in every engagement.",
    icon: Shield,
    color: "from-navy to-navy-light",
  },
  {
    title: "Excellence",
    description:
      "We pursue exceptional quality in everything we do — from strategy to execution.",
    icon: Star,
    color: "from-navy-light to-navy",
  },
  {
    title: "Innovation",
    description:
      "We embrace creative thinking and fresh approaches to solve Africa's complex challenges.",
    icon: Lightbulb,
    color: "from-navy to-navy-light",
  },
  {
    title: "Partnership",
    description:
      "We build lasting relationships rooted in mutual respect, trust, and shared success.",
    icon: Users,
    color: "from-navy-light to-navy",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-navy">
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
              Established 2010
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6 animate-fade-in-up">
              About Lamarje
              <br />
              <span className="text-gold">Investments</span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-6 animate-fade-in-up leading-relaxed">
              A diversified African investment group with deep expertise spanning
              Consulting, Supply Chain, Infrastructure Development, Trading, and
              Financing — operating across six countries since 2010.
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

      {/* Vision & Mission */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Our Purpose
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy mt-4 mb-6 leading-tight">
              Vision <span className="text-gold">&</span> Mission
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Guided by a clear sense of purpose, we strive to deliver lasting
              value to our stakeholders and the communities we serve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Vision Card */}
            <Card className="border-border/60 hover:shadow-xl transition-shadow duration-500 overflow-hidden group">
              <div className="h-2 bg-gradient-to-r from-navy to-gold" />
              <CardContent className="p-8 md:p-10">
                <div className="h-14 w-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="h-7 w-7 text-gold" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-navy mb-4">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg font-medium">
                  &ldquo;To become Africa&apos;s solution provider.&rdquo;
                </p>
                <p className="text-muted-foreground/70 text-sm mt-4 leading-relaxed">
                  We envision an Africa empowered by integrated solutions — where
                  infrastructure, capital, supply chains, and strategic advisory
                  converge to unlock the continent&apos;s full potential.
                </p>
              </CardContent>
            </Card>

            {/* Mission Card */}
            <Card className="border-border/60 hover:shadow-xl transition-shadow duration-500 overflow-hidden group">
              <div className="h-2 bg-gradient-to-r from-navy to-gold" />
              <CardContent className="p-8 md:p-10">
                <div className="h-14 w-14 rounded-2xl bg-navy/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-7 w-7 text-navy" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-navy mb-4">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg font-medium">
                  &ldquo;To serve stakeholders through growth and prosperity
                  solutions.&rdquo;
                </p>
                <p className="text-muted-foreground/70 text-sm mt-4 leading-relaxed">
                  We are committed to delivering sustainable value across every
                  engagement — from governments and institutions to businesses
                  and local communities — through excellence, integrity, and
                  innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <div className="relative order-2 md:order-1">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80"
                  alt="Lamarje team collaborating on African solutions"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-gold/20 rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gold/10 rounded-2xl -z-10" />

              {/* Stats badge */}
              <div className="absolute -bottom-4 right-6 bg-card shadow-xl rounded-2xl p-4 border border-border">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-navy flex items-center justify-center">
                    <Award className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-xl font-bold font-heading text-navy">12+</div>
                    <div className="text-xs text-muted-foreground">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 md:order-2">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy mt-4 mb-6 leading-tight">
                Delivering Real
                <br />
                <span className="text-gold">Value Across Africa</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Lamarje is anchored by a team of highly qualified professionals
                with deep local knowledge and strong strategic partnerships. Our
                community engagement philosophy ensures every project creates
                meaningful, lasting impact.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:shadow-md hover:border-gold/30 transition-all duration-300 group"
                  >
                    <div className="h-10 w-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                      <benefit.icon className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy text-sm mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Evolution Timeline */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy mt-4 mb-6 leading-tight">
              From <span className="text-gold">Supply Chain</span> to
              <br />
              Pan-African Solutions
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Lamarje has evolved from a focused supply chain management company
              into a fully diversified investment group serving markets across
              the African continent.
            </p>
          </div>

          {/* Desktop timeline */}
          <div className="hidden md:block relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

            <div className="space-y-16">
              {evolution.map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div
                    key={item.year}
                    className={`relative flex items-center ${
                      isLeft ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    {/* Content */}
                    <div className={`w-1/2 ${isLeft ? "pr-16 text-right" : "pl-16"}`}>
                      <Badge
                        variant="outline"
                        className="mb-3 border-gold/50 text-navy font-bold text-sm"
                      >
                        {item.year}
                      </Badge>
                      <h3 className="text-xl font-heading font-bold text-navy mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Dot */}
                    <div className="absolute left-1/2 -translate-x-1/2 z-10">
                      <div className="h-8 w-8 rounded-full bg-navy border-4 border-gold flex items-center justify-center shadow-lg">
                        <item.icon className="h-3.5 w-3.5 text-gold" />
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="w-1/2" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile timeline */}
          <div className="md:hidden space-y-10 relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />
            {evolution.map((item) => (
              <div key={item.year} className="relative flex gap-6 pl-14">
                <div className="absolute left-0 z-10">
                  <div className="h-12 w-12 rounded-full bg-navy border-4 border-gold flex items-center justify-center shadow-lg">
                    <item.icon className="h-5 w-5 text-gold" />
                  </div>
                </div>
                <div>
                  <Badge
                    variant="outline"
                    className="mb-3 border-gold/50 text-navy font-bold text-sm"
                  >
                    {item.year}
                  </Badge>
                  <h3 className="text-lg font-heading font-bold text-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-32 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gold via-transparent to-transparent" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold/80 font-semibold text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mt-4 mb-6 leading-tight">
              The Principles That
              <br />
              <span className="text-gold">Guide Us</span>
            </h2>
            <p className="text-white/60 leading-relaxed">
              These core values shape every decision we make and every
              relationship we build across the African continent.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value) => (
              <Card
                key={value.title}
                className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors duration-300 group backdrop-blur"
              >
                <CardContent className="p-6 text-center">
                  <div className="h-14 w-14 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-7 w-7 text-gold" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Where We Operate */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Where We Operate
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy mt-4 mb-6 leading-tight">
              Active Across
              <br />
              <span className="text-gold">Six African Nations</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our footprint spans Southern, Central, and East Africa —
              delivering solutions where they matter most.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {countries.map((country, i) => (
              <div
                key={country}
                className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-gold/30 hover:shadow-md transition-all duration-300 group"
              >
                <div className="h-10 w-10 rounded-full bg-navy/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                  <MapPin className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">
                    Country {i + 1}
                  </div>
                  <div className="font-semibold text-navy text-sm">{country}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Africa map visual */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-muted">
              <img
                src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80"
                alt="African continent"
                className="w-full h-full object-cover opacity-60"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white/80 text-sm font-medium px-4 text-center">
                  Delivering integrated solutions across Southern Africa, Central
                  Africa, and East Africa.
                </p>
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
          <Quote className="h-10 w-10 text-gold/50 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
            Let&apos;s Build
            <span className="text-gold"> Africa&apos;s Future</span> Together
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            Whether you&apos;re a government institution, a multinational
            corporation, or a local enterprise — Lamarje Investments has the
            expertise, network, and commitment to drive your success across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold-light text-navy font-semibold px-10 py-6 text-base rounded-full group"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/15 hover:text-white hover:border-white/50 px-10 py-6 text-base rounded-full"
              >
                Explore Our Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
