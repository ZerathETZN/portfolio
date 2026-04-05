import { ExternalLink } from "lucide-react"
import Link from "next/link"

const experiences = [
  // {
  //   period: "2023 — Present",
  //   title: "Senior ML Engineer",
  //   company: "Neural Labs",
  //   companyUrl: "https://example.com",
  //   description:
  //     "Leading the development of production-grade LLM systems. Architecting RAG pipelines and fine-tuning strategies for enterprise applications. Reduced inference latency by 40% through model optimization.",
  //   skills: ["PyTorch", "LangChain", "CUDA", "AWS", "Kubernetes"],
  // },
  // {
  //   period: "2021 — 2023",
  //   title: "Machine Learning Engineer",
  //   company: "DataFlow AI",
  //   companyUrl: "https://example.com",
  //   description:
  //     "Built computer vision models for autonomous systems achieving 98% accuracy. Developed MLOps infrastructure handling 1M+ daily predictions. Implemented real-time object detection systems.",
  //   skills: ["TensorFlow", "OpenCV", "MLflow", "Docker", "GCP"],
  // },
  // {
  //   period: "2019 — 2021",
  //   title: "Data Scientist",
  //   company: "TechCorp",
  //   companyUrl: "https://example.com",
  //   description:
  //     "Developed recommendation systems increasing user engagement by 35%. Created NLP pipelines for sentiment analysis across millions of documents. Built automated feature engineering pipelines.",
  //   skills: ["Python", "scikit-learn", "Spark", "SQL", "Airflow"],
  // },
  {
    period: "2025 — 2025",
    title: "Data Analyst Intern",
    company: "Kidocode",
    companyUrl: "https://www.kidocode.com/",
    description:
      "Learnt the fundamentals of data analytics. Learnt how to use Pandas and Seaborn to visualize data",
    skills: ["Docker","Seaborn", "Pandas", "Numpy","Crawl4AI"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-12">
          Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-[200px_1fr] gap-4 md:gap-8"
            >
              <div className="text-sm text-muted-foreground font-mono">
                {exp.period}
              </div>
              
              <div className="space-y-3">
                <div>
                  <h3 className="text-foreground font-semibold flex items-center gap-2 group-hover:text-primary transition-colors">
                    {exp.title} · 
                    <Link 
                      href={exp.companyUrl}
                      className="inline-flex items-center gap-1 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {exp.company}
                      <ExternalLink className="size-3" />
                    </Link>
                  </h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
