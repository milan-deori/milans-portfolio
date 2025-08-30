import { useState, useEffect } from 'react';
import { ArrowUp, Heart, Code, Mail, Linkedin, Github, MessageSquare } from 'lucide-react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  const services = [
    'Full-Stack Web Development',
    'MERN Stack Projects',
    'API Integration',
    'Database Management (MongoDB, SQL)',
    'Responsive UI/UX Design',
    'Open Source Contributions'
  ];

  const socialLinks = [
    {
      icon: Mail,
      href: 'mailto:miland390@gmail.com',
      label: 'Email'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/milan-deori-939a832a1',
      label: 'LinkedIn'
    },
    {
      icon: Github,
      href: 'https://github.com/milan-deori',
      label: 'GitHub'
    },
    {
      icon: MessageSquare,
      href: 'https://wa.me/9083231422',
      label: 'WhatsApp'
    }
  ];

  return (
  
    <footer id="contact" className="relative overflow-hidden bg-gradient-to-t from-background/95 to-background/80 backdrop-blur-xl border-t border-border/20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand section */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gradient mb-3">Milan Deori</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Full-Stack Developer passionate about building modern web apps, 
                  solving real-world problems, and contributing to open-source projects.
                </p>
              </div>
              
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-glow-primary"
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2"
                    >
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-foreground">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="text-muted-foreground flex items-center gap-2">
                    <div className="w-1 h-1 bg-secondary rounded-full"></div>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-foreground">Get In Touch</h4>
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  Let’s build something amazing together 🚀
                </p>
                <a
                  href="mailto:miland390@gmail.com"
                  className="text-primary hover:text-primary-glow transition-colors duration-300 font-medium"
                >
                  milandeori803@gmail.com
                </a>
                <div className="glass-card p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-accent mb-2">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Available for Freelance & Internships</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Typical response time: &lt; 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="py-6 border-t border-border/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and</span>
              <Code className="w-4 h-4 text-primary" />
              <span>by Milan Deori</span>
            </div>
            
            <div className="text-center text-muted-foreground text-sm">
              <p>&copy; {new Date().getFullYear()} Milan Deori. All rights reserved.</p>
            </div>

            <div className="text-muted-foreground text-sm">
              <p>Made with React & Tailwind CSS</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-elegant hover:shadow-glow-primary transition-all duration-300 hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 text-white" />
        </button>
      )}
    </footer>
   
  );
};

export default Footer;
