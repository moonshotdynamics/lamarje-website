"use client";

import { useState, type FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function validate(): boolean {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!EMAIL_REGEX.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleChange(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
  }

  function handleReset() {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setErrors({});
    setIsSuccess(false);
  }

  // --- Success State ---
  if (isSuccess) {
    return (
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
                Fill in the form below and a member of our team will get back to
                you as soon as possible.
              </p>
            </div>

            <Card className="p-8 md:p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center">
                  <CheckCircle2 className="h-10 w-10 text-emerald-600" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-navy mb-4">
                Message Sent
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-md mx-auto mb-8">
                Thank you for reaching out. Our team will respond within 24
                hours.
              </p>
              <Button
                onClick={handleReset}
                variant="outline"
                className="border-gold text-gold hover:bg-gold/10 rounded-full px-8"
              >
                Send Another Message
              </Button>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  // --- Form State ---
  return (
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
              Fill in the form below and a member of our team will get back to
              you as soon as possible.
            </p>
          </div>

          <Card className="p-6 md:p-8">
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Name + Email row */}
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-navy font-medium"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    className="h-11 rounded-xl"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-600 mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-navy font-medium"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="h-11 rounded-xl"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-600 mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <Label
                  htmlFor="subject"
                  className="text-navy font-medium"
                >
                  Subject <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="How can we help you?"
                  className="h-11 rounded-xl"
                  value={formData.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                  aria-invalid={!!errors.subject}
                />
                {errors.subject && (
                  <p className="text-sm text-red-600 mt-1">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="text-navy font-medium"
                >
                  Message <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project, enquiry, or partnership opportunity..."
                  className="min-h-[140px] rounded-xl resize-y"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-navy hover:bg-navy-light text-white font-semibold text-base rounded-full group disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
