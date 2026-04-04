import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  { label: "Email", href: "mailto:hello@example.com", icon: Mail },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "GitHub", href: "https://github.com", icon: Github },
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-8">
          Contact
        </h2>

        <div className="max-w-xl">
          <p className="text-2xl md:text-3xl text-foreground font-semibold mb-4 text-balance">
            {"Let's"} build something intelligent together.
          </p>
          
          <p className="text-muted-foreground leading-relaxed mb-8">
            {"I'm"} always interested in discussing new projects, research collaborations, 
            or opportunities in AI and machine learning. Feel free to reach out.
          </p>

          <Link
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            <Mail className="size-4" />
            Get in Touch
          </Link>

          <div className="flex items-center gap-6 mt-12 pt-8 border-t border-border">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.icon className="size-5" />
              </Link>
            ))}
          </div>
        </div>

        <footer className="mt-24 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Alex Chen. Built with Next.js and deployed on Vercel.
          </p>
        </footer>
      </div>
    </section>
  )
}
