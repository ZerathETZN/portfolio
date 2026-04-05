import { ExternalLink, Github, Brain, Eye, MessageSquare, Workflow } from "lucide-react"
import Link from "next/link"

const projects = [
  // {
  //   title: "LLM Agent Framework",
  //   description:
  //     "An open-source framework for building autonomous AI agents with tool use, memory, and multi-step reasoning capabilities. Features modular architecture and extensive plugin system.",
  //   icon: <Brain className="size-5" />,
  //   tags: ["Python", "LangChain", "OpenAI", "Vector DB"],
  //   github: "https://github.com",
  //   demo: "https://example.com",
  //   featured: true,
  // },
  {
    title: "Facial Expression Indicator API : Visage",
    description:
      "Production-ready computer vision API supporting object detection, segmentation, and image classification. Handles 100K+ requests daily with sub-100ms latency.",
    icon: <Eye className="size-5" />,
    tags: ["PyTorch", "FastAPI", "ONNX", "Docker"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
  },
  // {
  //   title: "Conversational AI Platform",
  //   description:
  //     "End-to-end platform for building and deploying conversational AI systems. Includes intent classification, entity extraction, and dialogue management.",
  //   icon: <MessageSquare className="size-5" />,
  //   tags: ["Transformers", "Rasa", "PostgreSQL", "Redis"],
  //   github: "https://github.com",
  //   featured: true,
  // },
  // {
  //   title: "ML Pipeline Orchestrator",
  //   description:
  //     "Kubernetes-native ML pipeline orchestration tool for automating training, evaluation, and deployment workflows. Supports distributed training and auto-scaling.",
  //   icon: <Workflow className="size-5" />,
  //   tags: ["Kubernetes", "Argo", "MLflow", "Prometheus"],
  //   github: "https://github.com",
  //   featured: false,
  // },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {project.icon}
                </div>
                <div className="flex items-center gap-2">
                  {project.github && (
                    <Link
                      href={project.github}
                      className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="GitHub repository"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="size-4" />
                    </Link>
                  )}
                  {project.demo && (
                    <Link
                      href={project.demo}
                      className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Live demo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="size-4" />
                    </Link>
                  )}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="https://github.com"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            View all projects on GitHub
            <ExternalLink className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
