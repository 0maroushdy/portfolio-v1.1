import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Github, Linkedin, ExternalLink, Code2, Palette, Rocket, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// --- Simple design tokens ---
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

const sectionTitle = (title, subtitle) => (
  <div className="mb-10 text-center">
    <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold tracking-tight">
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="mt-2 text-slate-300 max-w-2xl mx-auto">
        {subtitle}
      </motion.p>
    )}
  </div>
);

const projects = [
  {
    title: "Campaign Dashboard",
    type: "Web App",
    link: "#",
    repo: "#",
    summary: "Analytics-heavy React dashboard with role-based access and real-time charts.",
    stack: ["React", "TypeScript", "Tailwind", "Recharts"],
  },
  {
    title: "Real Estate Listing UI",
    type: "Website",
    link: "#",
    repo: "#",
    summary: "High-converting landing pages with map filters and property cards.",
    stack: ["Next.js", "Mapbox", "Zustand", "Tailwind"],
  },
  {
    title: "Graphics Micro‑brand Kit",
    type: "Design",
    link: "#",
    repo: null,
    summary: "Identity system, social templates, and motion snippets for a startup.",
    stack: ["Figma", "Illustrator", "After Effects"],
  },
];

const skills = [
  { name: "React", level: "Strong" },
  { name: "TypeScript", level: "Good" },
  { name: "Tailwind CSS", level: "Strong" },
  { name: "Next.js", level: "Good" },
  { name: "Node/Express", level: "Good" },
  { name: "UI/UX & Figma", level: "Strong" },
];

const process = [
  { icon: <Rocket className="h-5 w-5" />, title: "Discover", desc: "Clarify goals, users, constraints. Turn fuzzy ideas into a sharp scope." },
  { icon: <Palette className="h-5 w-5" />, title: "Design", desc: "Wireframes → high‑fidelity UI. Reusable components and accessible patterns." },
  { icon: <Code2 className="h-5 w-5" />, title: "Build", desc: "Clean React + TypeScript, state management, integration, and testing." },
  { icon: <CheckCircle2 className="h-5 w-5" />, title: "Ship", desc: "Perf polish, handoff, docs. Ongoing enhancements by data and feedback." },
];

export default function Portfolio() {
  return (
    <div className="relative min-h-screen text-slate-100">
      {/* Dark gradient background with purple/blue blurred glows */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-slate-950"/>
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-br from-indigo-700/30 to-fuchsia-600/30 blur-3xl"/>
        <div className="absolute top-1/3 -right-16 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-500/25 to-sky-500/25 blur-3xl"/>
        <div className="absolute -bottom-24 left-1/3 h-96 w-96 rounded-full bg-gradient-to-tr from-fuchsia-500/20 to-indigo-500/20 blur-3xl"/>
      </div>
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">Omar Mahmoud</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#work" className="hover:opacity-80">Work</a>
            <a href="#skills" className="hover:opacity-80">Skills</a>
            <a href="#process" className="hover:opacity-80">Process</a>
            <a href="#about" className="hover:opacity-80">About</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="rounded-2xl bg-violet-600 hover:bg-violet-500">
              <a href="#contact"><Mail className="h-4 w-4 mr-1"/>Hire me</a>
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="container mx-auto px-4 pt-16 pb-8 md:pt-24 md:pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeUp}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs mb-4 bg-white/5 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
              Available for freelance & junior roles
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Frontend Developer & Software Project Manager
            </h1>
            <p className="mt-4 text-slate-300 text-lg max-w-xl">
              I build smooth, performant React websites & web apps, and manage delivery with clear processes.
              Creativity, real quality tests, and professional polish.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="rounded-2xl">
                <a href="#work">See my work <ArrowRight className="h-4 w-4 ml-1"/></a>
              </Button>
              <Button asChild variant="outline" className="rounded-2xl">
                <a href="#contact">Let’s talk</a>
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-300">
              <a href="#" className="inline-flex items-center hover:opacity-80"><Github className="h-4 w-4 mr-1"/>GitHub</a>
              <a href="#" className="inline-flex items-center hover:opacity-80"><Linkedin className="h-4 w-4 mr-1"/>LinkedIn</a>
              <a href="#" className="inline-flex items-center hover:opacity-80"><ExternalLink className="h-4 w-4 mr-1"/>Resume</a>
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/10 to-transparent border border-white/10 shadow-sm backdrop-blur"/>
              <div className="absolute -bottom-4 -right-4 hidden md:block">
                <Card className="rounded-2xl shadow-lg">
                  <CardContent className="p-4 text-sm">
                    <div className="font-semibold">Current focus</div>
                    <div className="text-slate-300">React + TypeScript, clean UI, delivery speed</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="container mx-auto px-4 py-12 md:py-20">
        {sectionTitle("Selected Work", "Websites & web apps with React. Each project includes real quality tests and a smooth UX.")}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div key={p.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.06 }}>
              <Card className="rounded-2xl overflow-hidden group hover:shadow-xl transition-shadow border-white/10 bg-white/5 backdrop-blur">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center justify-between text-base">
                    <span>{p.title}</span>
                    <Badge variant="secondary" className="rounded-full">{p.type}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-indigo-600/10 via-slate-800/40 to-fuchsia-600/10 border border-white/10 mb-4"/>
                  <p className="text-sm text-slate-300 mb-4">{p.summary}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.stack.map((t) => (
                      <Badge key={t} variant="outline" className="rounded-full">{t}</Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    {p.link && (
                      <Button asChild size="sm" className="rounded-2xl">
                        <a href={p.link} target="_blank" rel="noreferrer">Live <ExternalLink className="h-4 w-4 ml-1"/></a>
                      </Button>
                    )}
                    {p.repo && (
                      <Button asChild variant="outline" size="sm" className="rounded-2xl">
                        <a href={p.repo} target="_blank" rel="noreferrer"><Github className="h-4 w-4 mr-1"/>Code</a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="container mx-auto px-4 py-12 md:py-20">
        {sectionTitle("Skills", "Focused on React/TypeScript + clean UI. I also handle product grooming and delivery as a PM.")}
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((s, i) => (
            <motion.div key={s.name} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.05 }}>
              <Card className="rounded-2xl">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{s.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-300">
                  Proficiency: <span className="text-foreground font-medium">{s.level}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="container mx-auto px-4 py-12 md:py-20">
        {sectionTitle("How I Work", "A lightweight, professional delivery cycle: discover → design → build → ship.")}
        <div className="grid md:grid-cols-4 gap-6">
          {process.map((step, i) => (
            <motion.div key={step.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.05 }}>
              <Card className="rounded-2xl h-full">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 text-violet-400">{step.icon}<span className="text-xs uppercase tracking-wide">Step {i+1}</span></div>
                  <CardTitle className="text-base mt-2">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-300">{step.desc}</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="container mx-auto px-4 py-12 md:py-20">
        {sectionTitle("About me", "Frontend dev who cares about clarity, speed, and reliable releases.")}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          <motion.div {...fadeUp} className="md:col-span-2">
            <Card className="rounded-2xl">
              <CardContent className="p-6 text-sm md:text-base leading-7 text-slate-300">
                <p>
                  I’m Omar Mahmoud — a frontend developer and software project manager. I build React UIs that feel fast and clean, and I keep delivery on track with crisp scope, daily check‑ins, and visual progress.
                </p>
                <p className="mt-4">
                  My toolkit includes React, TypeScript, Tailwind, and a strong eye for design (Figma). I write reusable components, accessible interfaces, and maintainable code.
                </p>
                <p className="mt-4">
                  If you need a junior frontend dev who can also organize the work and communicate clearly, I’m your guy.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
            <Card className="rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Highlights</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-300 space-y-3">
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-violet-400"/> React + TS component systems</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-violet-400"/> Design → Dev handoff in Figma</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-violet-400"/> Basic backend integrations</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-violet-400"/> QA checklists & lighthouse passes</div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="container mx-auto px-4 py-12 md:py-20">
        {sectionTitle("Let’s build something", "Tell me about your project — websites, web apps, or a quick UI revamp.")}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.form {...fadeUp} onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-white/10 p-6 bg-white/5 backdrop-blur">
            <div className="grid gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input required placeholder="Your name" />
                <Input required type="email" placeholder="Email" />
              </div>
              <Input placeholder="Company" />
              <Textarea required placeholder="What are we building?" rows={5} />
              <div className="flex items-center gap-3">
                <Button type="submit" className="rounded-2xl">Send inquiry</Button>
                <a href="mailto:hi@example.com" className="text-sm inline-flex items-center gap-2 hover:opacity-80"><Mail className="h-4 w-4"/>or email directly</a>
              </div>
            </div>
          </motion.form>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="rounded-2xl border border-white/10 p-6 bg-white/5 backdrop-blur">
            <div className="space-y-3 text-sm text-slate-300">
              <div className="font-medium text-foreground">Quick facts</div>
              <div>Based in Egypt • Open to remote</div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4"/><span>WhatsApp available on request</span></div>
              <div>Typical stack: React, TypeScript, Tailwind, Next.js</div>
              <div>Also: Figma, basic Node/Express, Git/GitHub</div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="container mx-auto px-4 py-8 text-sm text-slate-300 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} Omar Mahmoud. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="inline-flex items-center hover:opacity-80"><Github className="h-4 w-4 mr-1"/>GitHub</a>
            <a href="#" className="inline-flex items-center hover:opacity-80"><Linkedin className="h-4 w-4 mr-1"/>LinkedIn</a>
            <a href="#home" className="hover:opacity-80">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
