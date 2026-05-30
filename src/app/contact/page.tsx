import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Globe,
  ArrowRight,
  Building2,
  Send,
  MessageSquare,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Lamarje Investments — offices in Sandton, South Africa and Kinshasa, DRC. Contact us for consulting, procurement, infrastructure, and financing inquiries.",
};

const offices = [
  {
    country: "South Africa",
    flag: "🇿🇦",
    address: "356 Rivonia Boulevard, Edenburg, Sandton, 2125",
    tel: "+27 87 970 5555",
    fax: "+27 86 611 4009",
    email: "info@lamarje.com",
    image:
      "https://images.unsplash.com/photo-1521436312420-3a94f5877304?w=600&q=80",
    mapUrl: "https://maps.google.com/?q=356+Rivonia+Boulevard+Edenburg+Sandton+2125",
  },
  {
    country: "DR Congo",
    flag: "🇨🇩",
    address: "18 Kingu, Av de la Liberation, UPN, Kinshasa",
    tel: "+243 85 123 8586",
    fax: null,
    email: "info@lamarje.com",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80",
    mapUrl: "https://maps.google.com/?q=18+Kingu+Av+de+la+Liberation+UPN+Kinshasa",
  },
];

const quickFacts = [
  {
    icon: Clock,
    label: "Operating Hours",
    value: "Mon–Fri: 08:00 – 17:00 (SAST)",
  },
  {
    icon: MessageSquare,
    label: "Response Time",
    value: "We aim to respond within 24 hours",
  },
  {
    icon: Globe,
    label: "Countries",
    value: "South Africa, DRC, Congo, Angola, Uganda, CAR",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[45vh] flex items-center overflow-hidden bg-navy">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy-light" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold via-transparent to-transparent" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-8 relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur text-gold text-sm mb-8">
              <Mail className="h-4 w-4" />
              Get in Touch
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white leading-tight mb-6">
              Let&apos;s Build
              <span className="text-gold"> Together</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
              Whether you have a project enquiry, partnership opportunity, or
              would like to learn more about our services — our team is ready
              to connect with you.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Facts Bar */}
      <section className="relative z-20 -mt-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-card rounded-2xl shadow-xl border border-border p-8">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                  <fact.icon className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {fact.label}
                  </p>
                  <p className="text-sm font-medium text-navy mt-0.5">
                    {fact.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Cards */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Our Offices
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy mt-4 mb-6 leading-tight">
              Visit
              <span className="text-gold"> Us</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our offices in South Africa and the Democratic Republic of Congo
              are strategically positioned to serve clients across the
              continent.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {offices.map((office) => (
              <Card
                key={office.country}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[16/7] overflow-hidden relative">
                  <img
                    src={office.image}
                    alt={`Lamarje ${office.country} office`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="secondary"
                      className="bg-white/20 backdrop-blur text-white border-0 text-lg"
                    >
                      {office.flag} {office.country}
                    </Badge>
                  </div>
                </div>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">
                        Address
                      </p>
                      <p className="text-sm text-navy font-medium leading-relaxed">
                        {office.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">
                        Phone
                      </p>
                      <a
                        href={`tel:${office.tel.replace(/\s/g, "")}`}
                        className="text-sm text-navy font-medium hover:text-gold transition-colors"
                      >
                        {office.tel}
                      </a>
                      {office.fax && (
                        <p className="text-sm text-muted-foreground mt-0.5">
                          Fax: {office.fax}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">
                        Email
                      </p>
                      <a
                        href={`mailto:${office.email}`}
                        className="text-sm text-navy font-medium hover:text-gold transition-colors"
                      >
                        {office.email}
                      </a>
                    </div>
                  </div>

                  <Separator />

                  <a
                    href={office.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-gold font-medium hover:text-gold-light transition-colors"
                  >
                    <Globe className="h-4 w-4" />
                    View on Map
                    <ArrowRight className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                Send a Message
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mt-4 mb-6 leading-tight">
                We&apos;d Love to
                <span className="text-gold"> Hear From You</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Fill in the form below and a member of our team will get back
                to you as soon as possible.
              </p>
            </div>

            <Card className="p-6 md:p-8">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-navy font-medium">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      className="h-11 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-navy font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="h-11 rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-navy font-medium">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="How can we help you?"
                    className="h-11 rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-navy font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project, enquiry, or partnership opportunity..."
                    className="min-h-[140px] rounded-xl resize-y"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-navy hover:bg-navy-light text-white font-semibold text-base rounded-full group"
                >
                  <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Response Promise */}
      <section className="py-20 md:py-32 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold via-transparent to-transparent" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: "Prompt Response",
                description:
                  "We understand that time is critical. Our team commits to responding to all enquiries within 24 hours during business days.",
                icon: Clock,
              },
              {
                title: "Right Person, Every Time",
                description:
                  "Your enquiry is routed to the most relevant division lead — ensuring you speak directly to the expert who can help.",
                icon: Building2,
              },
              {
                title: "Global Reach, Local Presence",
                description:
                  "With offices in South Africa and DRC, plus operations across 6 African countries, we are always close by.",
                icon: Globe,
              },
            ].map((item) => (
              <div key={item.title} className="group">
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
    </>
  );
}
