import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight, Bot, Sparkles, Workflow, Phone,
  CheckCircle2, ShoppingCart, HeartPulse, Building2,
  PhoneCall, MessageSquare, Rocket, Sun, Moon, Menu, X,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useTheme } from "@/hooks/use-theme";

import logo from "@/assets/mittylabs-logo.png";

const HeroVisual = () => (
  <div className="relative w-full h-[480px] flex items-center justify-center">
    <div className="absolute inset-0 bg-accent/5 rounded-3xl blur-3xl" />

    {/* Main chat card */}
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="relative z-10 w-72 rounded-2xl border border-border bg-card p-5 shadow-2xl"
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
        </span>
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">AI Agent Active</span>
      </div>
      <div className="space-y-3">
        <div className="flex gap-2 items-end">
          <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
            <Bot className="w-3 h-3 text-accent" />
          </div>
          <div className="bg-accent/10 rounded-2xl rounded-bl-none px-3 py-2 text-xs text-foreground max-w-[190px]">
            Hi! How can I help you today?
          </div>
        </div>
        <div className="flex gap-2 items-end justify-end">
          <div className="bg-primary/30 rounded-2xl rounded-br-none px-3 py-2 text-xs text-foreground max-w-[190px]">
            I'd like to book an appointment
          </div>
        </div>
        <div className="flex gap-2 items-end">
          <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
            <Bot className="w-3 h-3 text-accent" />
          </div>
          <div className="bg-accent/10 rounded-2xl rounded-bl-none px-3 py-2 text-xs text-foreground max-w-[190px]">
            Of course! I have availability Thursday at 2pm or Friday at 10am — which works for you?
          </div>
        </div>
      </div>
    </motion.div>

    {/* Lead captured notification */}
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      className="absolute top-10 -right-4 z-20 w-56 rounded-xl border border-border bg-card p-3 shadow-xl"
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-4 h-4 text-green-400" />
        </div>
        <div>
          <p className="text-xs font-semibold text-foreground">New Lead Captured</p>
          <p className="text-xs text-muted-foreground">Qualification complete</p>
        </div>
      </div>
    </motion.div>

    {/* Workflow card */}
    <motion.div
      animate={{ y: [0, -7, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      className="absolute bottom-10 -right-4 z-20 w-56 rounded-xl border border-border bg-card p-3 shadow-xl"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
          <Workflow className="w-4 h-4 text-accent" />
        </div>
        <div>
          <p className="text-xs font-semibold text-foreground">Automation Running</p>
          <p className="text-xs text-muted-foreground">3 of 4 steps done</p>
        </div>
      </div>
      <div className="w-full bg-border rounded-full h-1">
        <motion.div
          className="bg-accent h-1 rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: "75%" }}
          transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  </div>
);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  }),
};

const services = [
  {
    icon: Bot,
    title: "AI Agents & Chatbots",
    desc: "Custom AI assistants that work for your business around the clock — no breaks, no missed leads.",
    features: [
      "24/7 customer support & FAQ handling",
      "Lead qualification and capture",
      "Appointment booking & scheduling",
      "Automated follow-up sequences",
      "Multi-platform deployment",
    ],
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "Cut the manual work out of your operations so your team can focus on what actually moves the needle.",
    features: [
      "Eliminate repetitive manual tasks",
      "Connect your apps and data sources",
      "Auto-route leads and notifications",
      "Invoice, onboarding & follow-up flows",
      "Save hours every week on operations",
    ],
  },
  {
    icon: Sparkles,
    title: "Digital Solutions",
    desc: "Modern websites, dashboards, and integrations built to make your business look and perform its best.",
    features: [
      "Custom business websites",
      "Landing pages built to convert",
      "Client portals & dashboards",
      "CRM and tool integrations",
      "Mobile-responsive design",
    ],
  },
];

const industries = [
  {
    icon: Building2,
    title: "Small Businesses",
    desc: "From local shops to growing service providers, we help small businesses compete smarter through automation and modern digital tools.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    desc: "Automate order flows, customer support, and marketing sequences so your store runs efficiently at any scale.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    desc: "Streamline appointment scheduling, patient follow-ups, and administrative tasks so your staff can focus on care.",
  },
];

const steps = [
  {
    icon: PhoneCall,
    step: "01",
    title: "Discovery Call",
    desc: "We start with a conversation to understand your business, your goals, and where you're losing time or money.",
  },
  {
    icon: MessageSquare,
    step: "02",
    title: "Questions & Custom Plan",
    desc: "We ask the right questions and map out a tailored solution — no templates, no guesswork. You'll know exactly what you're getting before we build anything.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "We Build & Launch",
    desc: "We handle the entire build and get your automation or digital solution live. You stay focused on running your business.",
  },
];

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#who-we-serve", label: "Who We Serve" },
  { href: "#contact", label: "Contact" },
];

const Index = () => {
  const { theme, toggle } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    try {
      const res = await fetch("https://formspree.io/f/xzdowwvy", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      setFormState(res.ok ? "success" : "error");
    } catch {
      setFormState("error");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16 px-6">
          <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="MittyLabs logo" className="h-11 w-auto transition-all" style={theme === 'light' ? { filter: 'invert(1) hue-rotate(180deg)' } : {}} />
            <span className="font-display text-xl font-bold text-foreground tracking-tight">
              Mitty<span className="text-accent">Labs</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">{l.label}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a href="tel:4072470720" className="hidden md:block">
              <Button variant="hero" size="sm">
                <Phone className="w-4 h-4 mr-1" />
                Get in Touch
              </Button>
            </a>
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="md:hidden w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur-md"
            >
              <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground py-3 border-b border-border last:border-0 transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
                <a href="tel:4072470720" onClick={() => setMobileOpen(false)} className="mt-3">
                  <Button variant="hero" size="sm" className="w-full">
                    <Phone className="w-4 h-4 mr-1" />
                    Get in Touch
                  </Button>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-card pointer-events-none z-10" />
        <motion.div
          className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.25) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.2) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.25, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        <div className="container mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={{}}>
              <motion.div custom={0} variants={fadeUp} className="mb-6">
                <Badge variant="outline" className="text-accent border-accent/30 bg-accent/5 px-3 py-1 text-xs font-semibold tracking-widest uppercase">
                  AI & Digital Solutions — Est. 2026
                </Badge>
              </motion.div>
              <motion.h1
                custom={1}
                variants={fadeUp}
                className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-foreground leading-[1.08] mb-6"
              >
                AI-powered solutions that{" "}
                <span className="text-accent">scale your business</span>
              </motion.h1>
              <motion.p
                custom={2}
                variants={fadeUp}
                className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed"
              >
                MittyLabs builds intelligent agents, automations, and digital experiences
                for small businesses, e-commerce stores, healthcare providers, and anyone
                ready to work smarter.
              </motion.p>
              <motion.div custom={3} variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <a href="#contact">
                  <Button variant="hero" size="xl">
                    Work With Us
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
                <a href="#how-it-works">
                  <Button variant="outline" size="xl">
                    See How It Works
                  </Button>
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              className="hidden md:block"
            >
              <HeroVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="border-y border-border bg-card py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap w-max">
          {[...Array(2)].map((_, gi) => (
            <div key={gi} className="flex items-center">
              {["AI Agents", "Lead Capture", "Workflow Automation", "24/7 Availability", "Custom Websites", "Appointment Booking", "Business Automation", "Digital Solutions", "AI Chatbots", "Client Portals"].map((item) => (
                <span key={item} className="flex items-center gap-4 mx-6 text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <section id="services" className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mb-14"
          >
            <motion.p custom={0} variants={fadeUp} className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">
              What We Do
            </motion.p>
            <motion.h2 custom={1} variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold text-foreground max-w-xl">
              Everything your business needs to run smarter
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                variants={fadeUp}
                className="group p-8 rounded-2xl border border-border bg-background hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all duration-500 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <s.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {s.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-2 mt-auto">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mb-14"
          >
            <motion.p custom={0} variants={fadeUp} className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">
              The Process
            </motion.p>
            <motion.h2 custom={1} variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold text-foreground max-w-xl">
              Simple steps, real results
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                custom={i}
                variants={fadeUp}
                className="relative p-8 rounded-2xl border border-border bg-card"
              >
                <span className="text-6xl font-display font-extrabold text-accent/10 absolute top-6 right-8 leading-none select-none">
                  {s.step}
                </span>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <s.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Who We Serve */}
      <section id="who-we-serve" className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mb-14"
          >
            <motion.p custom={0} variants={fadeUp} className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">
              Who We Serve
            </motion.p>
            <motion.h2 custom={1} variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold text-foreground max-w-xl">
              Built for businesses of all kinds
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {industries.map((ind, i) => (
              <motion.div
                key={ind.title}
                custom={i}
                variants={fadeUp}
                className="p-6 rounded-2xl border border-border bg-background hover:border-accent/40 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <ind.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{ind.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-2 gap-16 items-start"
          >
            {/* Left */}
            <div>
              <motion.p custom={0} variants={fadeUp} className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">
                Get In Touch
              </motion.p>
              <motion.h2 custom={1} variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to put AI to work?
              </motion.h2>
              <motion.p custom={2} variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed mb-10">
                Tell us about your business and what you're looking to improve. We'll reach back out to schedule a discovery call.
              </motion.p>
              <motion.div custom={3} variants={fadeUp} className="space-y-4">
                <a href="mailto:contact@mittylabs.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-sm">contact@mittylabs.com</span>
                </a>
                <a href="tel:4072470720" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-sm">407-247-0720</span>
                </a>
              </motion.div>
            </div>

            {/* Form */}
            <motion.div custom={2} variants={fadeUp}>
              {formState === "success" ? (
                <div className="rounded-2xl border border-accent/30 bg-accent/5 p-10 text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">Message sent!</h3>
                  <p className="text-muted-foreground text-sm">We'll be in touch within 1 business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-8 space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      required
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">How can we help?</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your business and what you'd like to improve..."
                      rows={5}
                      required
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    />
                  </div>
                  {formState === "error" && (
                    <p className="text-sm text-destructive">Something went wrong. Please try emailing us directly.</p>
                  )}
                  <Button variant="hero" size="lg" type="submit" disabled={formState === "loading"} className="w-full">
                    {formState === "loading" ? "Sending..." : "Send Message"}
                    {formState !== "loading" && <ArrowRight className="w-4 h-4 ml-2" />}
                  </Button>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="MittyLabs logo" className="h-10 w-auto transition-all" style={theme === 'light' ? { filter: 'invert(1) hue-rotate(180deg)' } : {}} />
            <span className="font-display text-lg font-bold text-foreground">
              Mitty<span className="text-accent">Labs</span>
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="mailto:contact@mittylabs.com" className="hover:text-foreground transition-colors">contact@mittylabs.com</a>
            <a href="tel:4072470720" className="hover:text-foreground transition-colors">407-247-0720</a>
          </div>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} MittyLabs. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
