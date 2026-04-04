"use client"

import { Github, Linkedin, Mail, FileText } from "lucide-react"
import Link from "next/link"
import { NeuralNetwork } from "./neural-network"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Neural Network Background */}
      <div className="absolute inset-0 overflow-hidden">
        <NeuralNetwork />
      </div>
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-mono text-sm tracking-wider uppercase">
                AI & Machine Learning Engineer
              </p>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight text-balance">
                Alex Chen
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Building intelligent systems that learn, adapt, and solve complex problems. 
                Specializing in deep learning, NLP, and computer vision.
              </p>
            </div>
            
            <nav className="space-y-3">
              <NavLink href="#about" label="About" />
              <NavLink href="#skills" label="Skills" />
              <NavLink href="#experience" label="Experience" />
              <NavLink href="#projects" label="Projects" />
              <NavLink href="#contact" label="Contact" />
            </nav>
            
            <div className="flex items-center gap-4 pt-4">
              <SocialLink href="https://github.com" icon={<Github className="size-5" />} label="GitHub" />
              <SocialLink href="https://linkedin.com" icon={<Linkedin className="size-5" />} label="LinkedIn" />
              <SocialLink href="mailto:hello@example.com" icon={<Mail className="size-5" />} label="Email" />
              <SocialLink href="#" icon={<FileText className="size-5" />} label="Resume" />
            </div>
          </div>
          
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link 
      href={href}
      className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
    >
      <span className="h-px w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-primary transition-all duration-300" />
      <span className="text-xs font-mono uppercase tracking-widest">{label}</span>
    </Link>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link 
      href={href}
      className="p-3 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
      aria-label={label}
    >
      {icon}
    </Link>
  )
}
