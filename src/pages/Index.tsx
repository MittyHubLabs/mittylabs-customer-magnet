import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Sparkles, Workflow, Phone } from "lucide-react";
import logo from "@/assets/mittylabs-logo.png";

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
    desc: "Custom AI assistants that handle support, qualify leads, and book appointments around the clock.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "Automate repetitive tasks and connect your tools so your team can focus on high-impact work.",
  },
  {
    icon: Sparkles,
    title: "Digital Solutions",
    desc: "Modern websites, dashboards, and integrations designed to grow your business.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16 px-6">
          <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="MittyLabs logo" className="h-8 w-auto" />
            <span className="font-display text-xl font-bold text-foreground tracking-tight">
              Mitty<span className="text-accent">Labs</span>
            </span>
          </a>
          <a href="tel:4072470720">
            <Button variant="hero" size="sm">
              <Phone className="w-4 h-4 mr-1" />
              Get in Touch
            </Button>
          </a>
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
              AI & Digital Solutions
            </motion.p>
            <motion.h1
              custom={1}
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold text-foreground leading-[1.08] mb-6"
            >
              AI-powered solutions that{" "}
              <span className="text-accent">scale your business</span>
            </motion.h1>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              We design intelligent agents, automations, and digital experiences
              that save time and unlock growth.
            </motion.p>
            <motion.div custom={3} variants={fadeUp}>
              <a href="mailto:mittylabsco@gmail.com">
                <Button variant="hero" size="xl">
                  Upgrade Your Business
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
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
                Ready to put AI to work?
              </motion.h2>
              <motion.p
                custom={1}
                variants={fadeUp}
                className="text-primary-foreground/70 text-lg mb-8 max-w-md mx-auto"
              >
                Let's build intelligent solutions that work as hard as you do.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="MittyLabs logo" className="h-7 w-auto" />
            <span className="font-display text-lg font-bold text-foreground">
              Mitty<span className="text-accent">Labs</span>
            </span>
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
