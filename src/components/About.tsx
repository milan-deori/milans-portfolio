import { Code, Database, GraduationCap, Rocket } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Proficient in MERN stack (MongoDB, Express.js, React.js, Node.js), HTML5, CSS3, Tailwind, and Bootstrap.'
    },
    {
      icon: Database,
      title: 'AI & Machine Learning',
      description: 'Built AI projects like Potato Leaf Disease Detection using CNN, TensorFlow, and FastAPI.'
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Pursuing BCA (2023–2026) at Siliguri College, with a focus on full-stack development and AI.'
    },
    {
      icon: Rocket,
      title: 'Hackathons & Leadership',
      description: 'Led a 4-member team at AIgnite 2025, East India’s largest AI hackathon, achieving 28th rank out of 117 teams.'
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
                Passionate <span className="text-gradient-accent">Full-Stack Developer</span> & AI Enthusiast
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I’m Milan Deori, a BCA student and aspiring full-stack web developer. I specialize in building scalable web apps with the MERN stack and have hands-on experience in AI/ML projects.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My mission is to combine my development skills with AI innovation to create meaningful digital solutions. I’ve worked on projects ranging from travel rental platforms to AI-based plant disease detection apps.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground">Highlights:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Internship experience with Microsoft & SAP (TechSaksham AI Program, 2025)
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  Leader at AIgnite 2025 Hackathon, secured 28th rank
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  15+ full-stack and AI-based projects completed
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                  Strong foundation in C, Java, JavaScript, Python, and SQL
                </li>
              </ul>
            </div>
          </div>

          {/* Right side - Feature cards */}
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="glass-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h5 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h5>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech stack icons */}
        <div className="mt-20 text-center">
          <h4 className="text-xl font-semibold text-foreground mb-8">Technologies I Work With</h4>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind', 'GitHub', 'TensorFlow'].map((tech, index) => (
              <div 
                key={tech}
                className="glass-card p-4 rounded-xl hover:shadow-glow-primary transition-all duration-300 transform hover:scale-110"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-lg font-medium text-gradient">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
