import { Brain, Cpu, Network, Sparkles } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-8">
          About
        </h2>
        
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            {"I'm"} a machine learning engineer passionate about building AI systems that make a real impact. 
            My work lies at the intersection of <HighlightedText>research and production</HighlightedText>, 
            creating solutions that are not only technically sound but also scalable and maintainable.
          </p>
          
          <p>
            Currently, {"I'm"} focused on <HighlightedText>large language models</HighlightedText> and 
            their applications in natural language understanding. {"I've"} had the opportunity to work 
            with teams building everything from <HighlightedText>autonomous systems</HighlightedText> to 
            recommendation engines.
          </p>
          
          <p>
            When {"I'm"} not training models or optimizing inference pipelines, you can find me 
            reading research papers, contributing to open source, or experimenting with new architectures.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          <StatCard icon={<Brain className="size-5" />} label="Models Trained" value="0" />
          <StatCard icon={<Cpu className="size-5" />} label="GPU Hours" value="10K+" />
          <StatCard icon={<Network className="size-5" />} label="Papers Published" value="0" />
          <StatCard icon={<Sparkles className="size-5" />} label="Accuracy Improvements" value="25%" />
        </div>
      </div>
    </section>
  )
}

function HighlightedText({ children }: { children: React.ReactNode }) {
  return <span className="text-foreground font-medium">{children}</span>
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="p-4 rounded-lg bg-card border border-border">
      <div className="flex items-center gap-2 text-primary mb-2">
        {icon}
      </div>
      <p className="text-2xl font-bold text-foreground">{value}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  )
}
