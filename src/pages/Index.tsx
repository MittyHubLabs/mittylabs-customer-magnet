import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Zap, Users, Phone } from "lucide-react";

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
    icon: Globe,
    title: "Custom Websites",
    desc: "Handcrafted sites that reflect your brand and convert visitors into paying customers.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    desc: "Optimized for speed and SEO so customers find you first.",
  },
  {
    icon: Users,
    title: "Built to Convert",
    desc: "Every element designed with one goal — getting you more calls and bookings.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16 px-6">
          <span className="font-display text-xl font-bold text-foreground tracking-tight">
            mitty<span className="text-accent">labs</span>
          </span>
          <Button variant="hero" size="sm">
            <Phone className="w-4 h-4 mr-1" />
            Get in Touch
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-6 relative">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={{}}
          >
            <motion.p
              custom={0}
              variants={fadeUp}
              className="text-accent font-semibold tracking-widest uppercase text-sm mb-6"
            >
              Web Design Studio
            </motion.p>
            <motion.h1
              custom={1}
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold text-foreground leading-[1.08] mb-6"
            >
              We build websites that bring you{" "}
              <span className="text-accent">more customers</span>
            </motion.h1>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              Clean, modern sites designed to turn visitors into calls and
              bookings.
            </motion.p>
            <motion.div custom={3} variants={fadeUp} className="flex gap-4 flex-wrap">
              <Button variant="hero" size="xl">
                View Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="heroOutline" size="xl">
                Our Work
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                variants={fadeUp}
                className="group p-8 rounded-2xl border border-border bg-background hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <s.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {s.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative rounded-3xl bg-primary p-12 md:p-20 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5" />
            <div className="relative">
              <motion.h2
                custom={0}
                variants={fadeUp}
                className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4"
              >
                Ready to grow your business?
              </motion.h2>
              <motion.p
                custom={1}
                variants={fadeUp}
                className="text-primary-foreground/70 text-lg mb-8 max-w-md mx-auto"
              >
                Let's build a website that works as hard as you do.
              </motion.p>
              <motion.div custom={2} variants={fadeUp}>
                <Button variant="hero" size="xl">
                  Start a Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-lg font-bold text-foreground">
            mitty<span className="text-accent">labs</span>
          </span>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} MittyLabs. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
