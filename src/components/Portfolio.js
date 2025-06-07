import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  // Helper function for asset paths
  const getAssetPath = (path) => `${process.env.PUBLIC_URL}${path}`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: "Stridr",
      subtitle: "iOS Run Tracker App",
      tech: ["SwiftUI", "Supabase", "MapKit", "HealthKit"],
      description: "Full-stack iOS mobile application featuring real-time GPS tracking, interactive route mapping, and comprehensive workout analytics with cloud synchronization.",
      images: [
        getAssetPath("/stridrApp1.png"),
        getAssetPath("/stridrApp2.png"),
        getAssetPath("/stridrApp3.png"),
        getAssetPath("/stridrApp4.png")
      ],
      link: "https://github.com/JimmyChen02/Stridr"
    },
    {
      title: "Munch!",
      subtitle: "iOS Food Discovery App",
      tech: ["SwiftUI", "Firebase", "MapKit", "REST APIs"],
      description: "Award-winning iOS app that won Best UI/UX Award at Cornell AppDev Hackathon among 19 teams (80+ participants).",
      award: "Best UI/UX Award",
      images: [
        getAssetPath("/munchApp1.png"),
        getAssetPath("/munchApp2.png"),
        getAssetPath("/munchApp3.png"),
        getAssetPath("/munchApp4.png")
      ],
      link: "https://github.com/AndrewG828/munch-ios"
    }
  ];

  const skills = [
    // Languages
    "HTML", "CSS", "JavaScript", "Python", "Java", "Swift", "SQL",
    // Frameworks/Libraries
    "Bootstrap", "jQuery", "Drupal", "React.js", "SwiftUI", "Firebase", "Supabase", "Core Location", "MapKit", "HealthKit", "NumPy", "BeautifulSoup",
    // Developer Tools
    "Git", "Docker", "VS Code", "Xcode", "Supabase CLI", "MySQL", "PostgreSQL",
    // Cloud/Backend
    "RESTful APIs", "Apple Developer Services"
  ];

  const nextImage = (projectIndex) => {
    const project = projects[projectIndex];
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) + 1) % project.images.length
    }));
  };

  const prevImage = (projectIndex) => {
    const project = projects[projectIndex];
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) - 1 + project.images.length) % project.images.length
    }));
  };

  const goToImage = (projectIndex, imageIndex) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: imageIndex
    }));
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
            >
              Jimmy Chen
            </button>
            <div className="flex space-x-8">
            {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'projects', label: 'Projects' }
                ].map((item) => (
                <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.id ? 'text-blue-600' : 'text-gray-600'
                    }`}
                >
                    {item.label}
                </button>
            ))}
<Link
  to="/photography"
  className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
>
  Photography
</Link>
              <a
                href={getAssetPath("/JimmyChen_resume.pdf")}
                download
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            {/* Profile Image */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-100 h-100 md:w-64 md:h-64 overflow-hidden border-4 border-grey rounded-2xl shadow-xl bg-gradient-to-br from-blue-400 to-slate-600">
                  <img 
                    src={getAssetPath("/jimmy-profile.png")}
                    alt="Jimmy Chen"
                    className="w-full h-full object-cover"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100' height='100' fill='%23667085'/%3e%3ctext x='50' y='60' font-family='system-ui' font-size='40' fill='white' text-anchor='middle'%3eJC%3c/text%3e%3c/svg%3e")`,
                      backgroundSize: 'cover'
                    }}
                    onLoad={(e) => e.target.style.backgroundImage = 'none'}
                    onError={(e) => {
                      console.log('Profile image failed to load:', getAssetPath("/jimmy-profile.png"));
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-[1.2] pb-2 bg-gradient-to-r from-slate-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Hey, I'm Jimmy 👋
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              I'm a Computer Science student at<span className="text-blue-600 font-semibold bg-blue-50 px-2 py-1 rounded-lg">Cornell University</span>
              with a strong interest in iOS and full-stack development, and a growing passion for artificial intelligence — particularly how it can be integrated into real-world applications to enhance user experience and decision-making!
            </p>
          </div>
          
          <div className="flex justify-center space-x-4 mb-12">
            <a 
              href="mailto:jc3673@cornell.edu" 
              className="p-3 bg-white/80 backdrop-blur-sm rounded-full hover:bg-slate-100 transition-all duration-300 group shadow-lg hover:shadow-xl border border-slate-200"
              title="Email"
            >
              <Mail className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors" />
            </a>
            <a 
              href="https://linkedin.com/in/jimmychen02/" 
              className="p-3 bg-white/80 backdrop-blur-sm rounded-full hover:bg-slate-100 transition-all duration-300 group shadow-lg hover:shadow-xl border border-slate-200"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors" />
            </a>
            <a 
              href="https://github.com/JimmyChen02" 
              className="p-3 bg-white/80 backdrop-blur-sm rounded-full hover:bg-slate-100 transition-all duration-300 group shadow-lg hover:shadow-xl border border-slate-200"
              title="GitHub"
            >
              <Github className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors" />
            </a>
            <a 
              href="tel:646-733-6188" 
              className="p-3 bg-white/80 backdrop-blur-sm rounded-full hover:bg-slate-100 transition-all duration-300 group shadow-lg hover:shadow-xl border border-slate-200"
              title="Phone"
            >
              <Phone className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors" />
            </a>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get to know me
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-slate-700 to-blue-600 bg-clip-text text-transparent">About Me</h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Other than computer science, I find myself very interested in things like fashion and photography! 
                Check out some of my photos in the photos tab!!!
            </p>
          </div>
          
           <div className="space-y-8 mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-slate-800">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-slate-800">Cornell University</h4>
                  <p className="text-slate-600">College of Engineering</p>
                  <p className="text-slate-600">B.S. in Computer Science</p>
                  <p className="text-sm text-slate-500">Expected May 2028 • GPA: 3.51/4.0</p>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-sm font-medium text-slate-700 mb-2">Relevant Coursework:</p>
                  <p className="text-sm text-slate-600">OOP & Data Structures (Java), Functional Programming (OCaml), Digital Logic & Computer Organization, Intro to Python, iOS Development, Linear Algebra, Probability Models & Inference</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-slate-800">Experience</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-slate-800">Web Developer</h4>
                  <p className="text-slate-600">New York Tutoring Center</p>
                  <p className="text-sm text-slate-500 mb-2">Jun 2023 – Nov 2023</p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Led cross-functional team of 5 developers, delivering scalable web solutions 
                    using modern frameworks and agile development practices.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8 text-slate-800">Technical Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-slate-700 border border-slate-200 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gradient-to-br from-white to-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-slate-700 to-blue-600 bg-clip-text text-transparent">My Work</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Here are some of the projects I've worked on, showcasing my skills in iOS development 
              and web technologies.
            </p>
          </div>
          
          <div className="space-y-8">
            {projects.map((project, projectIndex) => (
              <div key={projectIndex} className="group">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col">
                    <div className="aspect-video bg-gradient-to-br from-slate-100 to-blue-100 flex items-center justify-center relative overflow-hidden">
                      {/* Image Slideshow */}
                      <div className="relative w-full h-full flex items-center justify-center">
                        <img 
                          src={project.images[currentImageIndex[projectIndex] || 0]} 
                          alt={`${project.title} - Image ${(currentImageIndex[projectIndex] || 0) + 1}`}
                          className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            console.log('Project image failed to load:', project.images[currentImageIndex[projectIndex] || 0]);
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="hidden items-center justify-center w-full h-full absolute inset-0">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-3">
                              <span className="text-2xl">📱</span>
                            </div>
                            <p className="text-slate-500 text-sm">Project Preview</p>
                          </div>
                        </div>
                        
                        {/* Navigation Arrows */}
                        {project.images.length > 1 && (
                          <>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                prevImage(projectIndex);
                              }}
                              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                            >
                              <ChevronLeft className="w-4 h-4 text-white" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                nextImage(projectIndex);
                              }}
                              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                            >
                              <ChevronRight className="w-4 h-4 text-white" />
                            </button>
                          </>
                        )}
                        
                        {/* Dot Indicators */}
                        {project.images.length > 1 && (
                          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            {project.images.map((_, imageIndex) => (
                              <button
                                key={imageIndex}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  goToImage(projectIndex, imageIndex);
                                }}
                                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                  imageIndex === (currentImageIndex[projectIndex] || 0)
                                    ? 'bg-white scale-125'
                                    : 'bg-white/60 hover:bg-white/80'
                                }`}
                              />
                            ))}
                          </div>
                        )}
                        
                        {/* Image Counter */}
                        {project.images.length > 1 && (
                          <div className="absolute top-3 left-3 bg-black/20 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            {(currentImageIndex[projectIndex] || 0) + 1} / {project.images.length}
                          </div>
                        )}
                      </div>
                      
                      {project.award && (
                        <div className="absolute top-3 right-3 z-10">
                          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
                            🏆 {project.award}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-8">
                      <div className="mb-3">
                        <h3 className="text-2xl font-bold text-slate-800 mb-1">{project.title}</h3>
                        <p className="text-slate-500">{project.subtitle}</p>
                      </div>
                      
                      <p className="text-slate-600 leading-relaxed mb-6">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-slate-100 rounded-md text-sm font-medium text-slate-600 border border-slate-200">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <a 
                        href={project.link} 
                        className="inline-flex items-center text-blue-600 hover:text-indigo-600 transition-colors font-medium"
                      >
                        View Project <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Let's connect and build something amazing together!
            </p>
            <div className="flex justify-center space-x-4 mb-6">
              <a 
                href="mailto:jc3673@cornell.edu" 
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                jc3673@cornell.edu
              </a>
              <span className="text-gray-300">•</span>
              <a 
                href="tel:646-733-6188" 
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                (646) 733-6188
              </a>
            </div>
            <p className="text-sm text-gray-400">
              © 2025 Jimmy Chen
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;