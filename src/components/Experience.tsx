import { Calendar, MapPin, Award, TrendingUp, Users, Code2 } from 'lucide-react';

const Experience = () => {
  const timeline = [
    {
      year: '2022',
      title: 'Started Coding Journey',
      company: 'Self-Learning',
      location: 'Online',
      description: 'Began journey in programming with C, Java, HTML, CSS and gradually expanded into full-stack development.',
      achievements: [
        'Learned basics of programming in C & Java',
        'Created small projects with HTML, CSS',
        'Laid foundation for full-stack learning'
      ],
      icon: Users,

    },
    {
      year: '2023',
      title: 'Mastered MERN & Full-Stack Projects',
      company: 'Self-Learning & Practice',
      location: 'Remote',
      description: 'Focused on mastering MERN stack and building full-stack projects.',
      achievements: [
        'Built Wanderlust (Airbnb-style platform)',
        'Built Tuition Notes (notes-sharing full-stack website)',
        'Learned authentication, authorization, Cloudinary integration'
      ],
      icon: Code2,
      status: 'completed'
    },
    {
      year: '2024',
      title: 'AI Internship – AICTE Microsoft & SAP TechSaksham',
      company: 'Edunet Foundation',
      location: 'Remote',
      description: 'Completed AI-focused internship program under AICTE, Microsoft, and SAP TechSaksham initiative. Worked on real-world projects applying artificial intelligence and modern technologies.',
      achievements: [
        'Developed AI-driven project solutions',
        'Gained practical experience in AI tools and techniques',
        'Strengthened problem-solving and project-building skills'
      ],
      icon: TrendingUp,
      status: 'completed'
    },
    {
      year: '2025',
      title: 'Shell–Edunet Skills4Future AICTE Internship (AI & Green Skills)',
      company: 'Edunet Foundation & AICTE in collaboration with Shell',
      location: 'Remote',
      description: '4-week internship focused on developing green skills using AI technologies. Worked on an independent project under mentor guidance, aimed at building sustainable and AI-driven solutions.',
      achievements: [
        'Selected for prestigious Skills4Future internship',
        'Worked independently on AI & Green Tech project',
        'Received mentorship from industry experts in AI & sustainability'
      ],
      icon: Award,
      status: 'current'
    },
    {
      year: '2025',
      title: 'Team Leader – AIgnite 2025 Hackathon',
      company: 'Inspira Knowledge Campus',
      location: 'Siliguri',
      description: 'Led a 4-member team in AIgnite 2025, East India’s largest AI Hackathon, working on a Generative AI-based project under mentor guidance.',
      achievements: [
        'Successfully passed multiple review rounds',
        'Worked on Generative AI-based project',
        'Achieved 28th rank out of 117 teams'
      ],
      icon: Award,
      status: 'completed'
    },
    {
      year: '2025',
      title: 'Contributor – GirlScript Summer of Code (GSSoC \'25)',
      company: 'GirlScript Foundation',
      location: 'Remote',
      description: 'Selected as an official contributor in GSSoC 2025, a 4-month open-source program to collaborate on impactful projects and enhance development skills.',
      achievements: [
        'Collaborating with mentors and contributors on open-source projects',
        'Enhancing Git, GitHub, and software development practices',
        'Showcasing contributions on GitHub and improving coding skills'
      ],
      icon: Code2,
      status: 'current'
    },





  ];

  const stats = [
    { label: 'Years Experience', value: '2+', icon: Calendar },
    { label: 'Projects Completed', value: '15+', icon: Award },
    { label: 'Hackathons Participated', value: '1+', icon: Users },
    { label: 'Internships Done', value: '2+', icon: TrendingUp }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-1/3 h-1/2 bg-gradient-to-r from-primary/5 to-transparent"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Experience Timeline</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey from learning basics of coding to contributing in open-source, internships, and hackathons.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card text-center p-6 hover:shadow-glow-primary transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2"></div>

            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-12 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline icon */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 z-10">
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping"></div>
                </div>

                {/* Content card */}
                <div className={`glass-card p-6 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} md:w-5/12 relative group hover:shadow-elegant transition-all duration-300`}>
                  {/* Year badge */}
                  <div className="absolute -top-3 left-6 px-4 py-1 bg-gradient-primary text-white text-sm font-bold rounded-full">
                    {item.year}
                  </div>

                  {/* Status indicator */}
                  <div className={`absolute -top-3 right-6 px-3 py-1 text-xs font-medium rounded-full ${item.status === 'current'
                    ? 'bg-accent/20 text-accent'
                    : 'bg-secondary/20 text-secondary'
                    }`}>
                    {item.status === 'current' ? 'Current' : 'Completed'}
                  </div>

                  <div className="mt-4 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-colors duration-300">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                          <span className="font-medium">{item.company}</span>
                          <div className="flex items-center gap-1">
                            <MapPin size={12} />
                            {item.location}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-foreground">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {item.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future goals section */}
        <div className="mt-20 text-center glass-card p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gradient mb-4">Looking Ahead</h3>
          <p className="text-lg text-muted-foreground mb-6">
            I’m excited to keep building impactful projects, contribute more to open-source, and explore cutting-edge technologies.
            My upcoming goals include mastering React.js, Next.js, and building scalable AI-powered applications.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              React.js & Next.js
            </span>
            <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
              Open-Source Growth
            </span>
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
              AI & Cloud Integration
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

