import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import milan from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Floating shapes background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl float-animation"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-accent/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-accent animate-fade-in-up">
                <Sparkles size={20} className="animate-pulse" />
                <span className="text-sm font-medium tracking-wider uppercase">
                  Welcome to my portfolio
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Hi, I'm <span className="text-gradient">Milan</span> 👋
              </h1>

              <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-secondary">
                  Full-Stack Web Developer | BCA Student
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                  Aspiring Full-Stack Developer | AI Enthusiast | GSSoC Contributor 2025.
                </p>

              </div>

            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <a
                href="https://github.com/milan-deori"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="btn-glow text-lg px-10 py-6"

                >
                  View Github
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>

              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/milans_resume.pdf'; // ✅ points to public folder file
                  link.download = 'Milan_Deori_Resume.pdf'; // ✅ rename file on download
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient">15+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Avatar/Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in" style={{ animationDelay: '1s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative z-10 glass-card p-4 rounded-full">
                <img
                  src={milan}
                  alt="milan"
                  className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover shadow-elegant hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 glass-card p-3 rounded-full animate-bounce">
                <div className="text-2xl">💻</div>
              </div>
              <div className="absolute -bottom-4 -left-4 glass-card p-3 rounded-full animate-bounce" style={{ animationDelay: '1s' }}>
                <div className="text-2xl">🚀</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;