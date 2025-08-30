import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Smartphone, Zap, Search, Code2 } from 'lucide-react';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';

const Projects = () => {
  const projects = [

      {
  title: '🍃 Leaf Disease Detection System',
  description: 'A full-stack deep learning project for detecting diseases in potato & pepper bell leaves. Built with a FastAPI backend and React frontend, it provides real-time predictions with confidence levels and multi-language support.',
  image: p1, 
  tags: ['React', 'FastAPI', 'TensorFlow', 'Deep Learning', 'Python'],
  features: [
    'Real-time Disease Prediction',
    'FastAPI Backend + React Frontend',
    'TensorFlow Model Integration',
   
  ],
  demoUrl: 'https://leaf-diseases-detection.netlify.app/',
  codeUrl: 'https://github.com/milan-deori/Leaf-Disease-Detection'
},

   {
  title: '💱 CurrenSync',
  description: 'A modern, responsive currency converter web application that allows users to convert between different currencies using real-time exchange rates. Designed with a clean UI, flags, and smooth transitions.',
  image: p3, 
  tags: ['JavaScript', 'HTML', 'CSS', 'API Integration'],
  features: [
    'Live Exchange Rates',
    'Country Flags',
    'Responsive Design',
   
  ],
  demoUrl: 'https://currensyncc.netlify.app/',
  codeUrl: 'https://github.com/milan-deori/CurrenSync'
},

   {
  title: '🌍 WanderSphere',
  description: 'A full-stack Node.js & Express web app for listing, reviewing, and managing travel accommodations. Features authentication, CRUD operations, Cloudinary image uploads, reviews, and responsive UI with EJS templates.',
  image: p2,
  tags: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'Cloudinary', 'Bootstrap'],
  features: [
    'User Authentication (Signup, Login, Logout)',
    'CRUD for Listings & Reviews',
    'Image Uploads with Cloudinary',
  ],
  demoUrl: 'https://wandersphere-eax5.onrender.com',
  codeUrl: 'https://github.com/milan-deori/WanderSphere'
},

  
   
  {
  title: '🛒 FreshBasket',
  description: 'A responsive grocery store front-end project built with HTML, CSS, and JavaScript. Includes product slider, reviews, categories, blog section, and interactive UI elements for a modern shopping experience.',
  image: p4,
  tags: ['HTML', 'CSS', 'JavaScript', 'Swiper.js', 'Font Awesome'],
  features: [
    'Responsive Mobile-Friendly Design',
    'Interactive Header with Search, Cart & Login Modal',
    'Product Slider & Customer Review Carousel',
  ],
  demoUrl: 'https://github.com/milan-deori/FreshBasket',
  codeUrl: 'https://freeshbasket.netlify.app/'
},
  ];

  const getFeatureIcon = (feature: string) => {
    if (feature.includes('Mobile') || feature.includes('Responsive')) return Smartphone;
    if (feature.includes('Fast') || feature.includes('Performance')) return Zap;
    if (feature.includes('SEO') || feature.includes('Search') || feature.includes('API')) return Search;
    return Code2;
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of my major projects showcasing skills in full-stack development, AI/ML, and creative coding.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group glass-card overflow-hidden hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover overlay with buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Button 
                    size="sm" 
                    className="btn-glow"
                    onClick={() => window.open(project.demoUrl, '_blank')}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-primary/20 hover:border-primary/40 hover:bg-primary/10"
                    onClick={() => window.open(project.codeUrl, '_blank')}
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {project.features.map((feature, featureIndex) => {
                    const IconComponent = getFeatureIcon(feature);
                    return (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <IconComponent size={14} className="text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="btn-glow text-lg px-8 py-6"
            onClick={() => window.open('https://github.com/milan-deori?tab=repositories', '_blank')}
          >
            View All Projects
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
