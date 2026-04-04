export function Skills() {
  const skillCategories = [
    {
      title: "Machine Learning",
      skills: ["PyTorch", "TensorFlow", "JAX", "scikit-learn", "XGBoost", "LightGBM"],
    },
    {
      title: "Deep Learning",
      skills: ["Transformers", "CNNs", "RNNs/LSTMs", "GANs", "Diffusion Models", "RL"],
    },
    {
      title: "NLP",
      skills: ["LLMs", "BERT/GPT", "Hugging Face", "LangChain", "RAG", "Embeddings"],
    },
    {
      title: "MLOps",
      skills: ["MLflow", "Weights & Biases", "Docker", "Kubernetes", "AWS SageMaker", "Vertex AI"],
    },
    {
      title: "Languages",
      skills: ["Python", "SQL", "C++", "Rust", "TypeScript", "CUDA"],
    },
    {
      title: "Tools",
      skills: ["Git", "Linux", "Jupyter", "VS Code", "FastAPI", "PostgreSQL"],
    },
  ]

  return (
    <section id="skills" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-foreground font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground border border-border hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
