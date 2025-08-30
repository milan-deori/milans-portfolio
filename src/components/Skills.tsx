import { Progress } from '@/components/ui/progress';
import { 
  Code, 
  Database, 
  Server, 
  Zap, 
  PenTool,
  Settings,
  BarChart3,
  BrainCircuit
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Development',
      icon: Code,
      skills: [
        { name: 'HTML & CSS', level: 90, color: 'from-primary to-primary-glow' },
        { name: 'JavaScript (ES6+)', level: 75, color: 'from-secondary to-accent' },
        { name: 'React.js', level: 70, color: 'from-accent to-secondary' },
        { name: 'Node.js & Express.js', level: 70, color: 'from-primary-glow to-primary' },
        { name: 'MongoDB (Atlas)', level: 65, color: 'from-secondary to-primary' }
      ]
    },
    {
      title: 'Additional Skills',
      icon: BrainCircuit,
      skills: [
        { name: 'Java (OOPs)', level: 80, color: 'from-primary to-secondary' },
        { name: 'C Programming', level: 75, color: 'from-secondary to-primary-glow' },
        { name: 'Python (Basics)', level: 60, color: 'from-accent to-primary' },
        { name: 'SQL (Basics)', level: 50, color: 'from-primary-glow to-accent' },
        { name: 'Android Development (Basics)', level: 45, color: 'from-secondary to-accent' }
      ]
    }
  ];

  const tools = [
    { name: 'Git & GitHub', icon: Settings },
    { name: 'VS Code', icon: Code },
    { name: 'MongoDB Atlas', icon: Database },
    { name: 'Cloudinary', icon: Server },
    { name: 'Netlify', icon: Zap },
    { name: 'Figma', icon: PenTool }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here's a breakdown of my technical expertise, programming skills, and the tools I use to build impactful projects
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="glass-card hover:shadow-elegant transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${(categoryIndex * 4 + skillIndex) * 0.1}s` }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground font-bold">{skill.level}%</span>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={skill.level} 
                        className="h-3 bg-muted/30"
                      />
                      <div 
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Tools & Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <div 
                key={tool.name}
                className="glass-card p-6 text-center hover:shadow-glow-primary transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <tool.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="text-sm font-medium text-foreground">{tool.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications or Additional Info */}
        <div className="mt-16 text-center glass-card p-8">
          <h3 className="text-2xl font-bold text-gradient mb-4">Always Learning</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Technology evolves rapidly, and so do I. I’m currently pursuing BCA (3nd Year), contributing to 
            open-source via GSSoC’25, and preparing for my Next internship. My focus is on mastering 
            AI/ML, strengthening core CS fundamentals, and building scalable projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              BCA (2026 Batch)
            </span>
            <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
              GSSoC’25 Contributor
            </span>
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
              AICTE–Shell Intern 
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
