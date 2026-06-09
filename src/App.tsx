/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Menu, 
  X, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Layout, 
  BookOpen, 
  Briefcase, 
  Type, 
  Award,
  Sun,
  Moon,
  Instagram,
  Linkedin
} from 'lucide-react';

// --- Types ---

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  focusPoints: string[];
}

interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
}

interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
}

// --- Data ---

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Design India Interior Expo 2024',
    category: 'Design Lead',
    description: 'Led branding and large-scale marketing visuals across print and digital media for a premier interior design exhibition.',
    image: 'https://i.ibb.co/XftmS4mq/PHOTO-2026-06-05-17-33-36-6.jpg',
    focusPoints: ['Large-scale Print Systems', 'Event Branding', 'Signage Design']
  },
  {
    id: '2',
    title: 'Contento Kids Carnival',
    category: 'Visual Identity',
    description: 'Developed complete event branding and promotional creatives for the 2023-2024 season.',
    image: 'https://i.ibb.co/QFGwR3Wy/PHOTO-2026-06-05-17-33-34.jpg',
    focusPoints: ['Visual Identity', 'Typography', 'Promotional Assets']
  },
  {
    id: '3',
    title: 'Modern Diagnostic & Research Center, Jaipur',
    category: 'Branding Campaign',
    description: 'Designed healthcare awareness visuals focusing on clarity and trust to establish a reliable institutional identity.',
    image: 'https://i.ibb.co/p6xtwDn3/PHOTO-2026-06-05-17-33-35-3.jpg',
    focusPoints: ['Institutional Branding', 'Information Design', 'Trust-focused Visuals']
  },
  {
    id: '4',
    title: 'St. Wilfred Group (2025-Present)',
    category: 'Prospectus Design',
    description: 'Created a structured academic publication aligned with institutional branding, focusing on editorial flow.',
    image: 'https://i.ibb.co/fGVDLjn1/PHOTO-2026-06-05-17-47-27.jpg',
    focusPoints: ['Editorial Layout', 'Print Production', 'Typography Hierarchy']
  },
  {
    id: '5',
    title: 'Aayojan College of Architecture (2025-26)',
    category: 'Catalogue & Calendar',
    description: 'Designed clean editorial layouts with strong typography and hierarchy for architectural catalogues and calendars.',
    image: 'https://i.ibb.co/sd6qfbFT/PHOTO-2026-06-05-17-47-26-2.jpg',
    focusPoints: ['Grid Systems', 'Catalogue Design', 'Institutional Communication']
  },
  {
    id: '6',
    title: 'Curry Leaf Café',
    category: 'Branding',
    description: 'Developed logo applications, menu design, and a cohesive café identity for a modern dining establishment.',
    image: 'https://i.ibb.co/6JX462jv/PHOTO-2026-06-05-17-47-26.jpg',
    focusPoints: ['Identity Design', 'Menu Layout', 'Print Collaterals']
  }
];

const EXPERIENCES: Experience[] = [
  {
    id: 'e1',
    role: 'Freelance Graphic Designer',
    company: 'Self-employed',
    period: 'Aug 2024 – Current'
  },
  {
    id: 'e2',
    role: 'Graphic Designer',
    company: 'Skyhawk Arts',
    period: 'Feb 2023 – Aug 2024'
  },
  {
    id: 'e3',
    role: 'Design Assistant',
    company: 'KSG IAS',
    period: 'Nov 2022 – Feb 2023'
  },
  {
    id: 'e4',
    role: 'Intern - Design & Exhibition Assistant',
    company: 'Secrets of Tutankhamun Exhibition',
    period: 'Sep 2022 – Oct 2022'
  }
];

const EDUCATIONS: Education[] = [
  {
    id: 'edu1',
    degree: 'MVA, Applied Art',
    institution: 'Rajasthan School of Art, Jaipur',
    period: 'Aug 2023 – July 2025'
  },
  {
    id: 'edu2',
    degree: 'BVA, Applied Art',
    institution: 'NIMS University, Jaipur',
    period: 'Aug 2019 – July 2023'
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-black/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="font-display font-bold text-xl tracking-tighter uppercase">
          Sachin Saharan
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setIsOpen(!isOpen)} className="p-1">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-white border-b border-black/5 md:hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-2xl font-display font-medium uppercase tracking-tight"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <div className="bg-brand-white text-brand-black transition-colors duration-500">
        <Navbar />

        <main className="smooth-scroll">
          {/* 1️⃣ Hero Section */}
          <section className="min-h-screen flex flex-col justify-center section-padding relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-screen bg-black/[0.02] -z-10 border-l border-black/5 hidden lg:block" />
            
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h2 className="text-sm uppercase tracking-[0.4em] mb-6 font-medium opacity-50">
                  Brand & Editorial Graphic Designer
                </h2>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter leading-[0.9] mb-8">
                  Sachin<br />Saharan
                </h1>
                <p className="text-xl md:text-2xl font-light max-w-2xl mb-12 opacity-80 leading-relaxed">
                  Designing visual systems for institutions, events, and brands.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="#work" 
                    className="bg-brand-black text-white px-8 py-4 text-sm uppercase tracking-widest font-semibold rounded-sm flex items-center gap-3 hover:scale-[1.02] transition-transform"
                  >
                    View Work <ArrowRight size={16} />
                  </a>
                  <a 
                    href="#contact" 
                    className="border border-brand-black px-8 py-4 text-sm uppercase tracking-widest font-semibold rounded-sm hover:bg-brand-black hover:text-white transition-all"
                  >
                    Contact
                  </a>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.05 }}
              transition={{ delay: 1, duration: 2 }}
              className="absolute bottom-20 right-10 pointer-events-none hidden lg:block"
            >
              <span className="text-[20vw] font-display font-black leading-none uppercase select-none">
                Design
              </span>
            </motion.div>
          </section>

          {/* 2️⃣ About Section */}
          <section id="about" className="section-padding bg-zinc-50">
            <div className="editorial-grid items-center">
              <div className="md:col-span-4">
                <h3 className="text-sm uppercase tracking-[0.4em] font-medium opacity-40 mb-4 md:mb-0">
                  01 // About
                </h3>
              </div>
              <div className="md:col-span-8">
                <motion.p 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-2xl md:text-4xl font-light leading-snug md:leading-tight"
                >
                  I design structured, clear, and scalable visual identities for institutions, events, and brands. My work focuses on typography, layout hierarchy, and brand consistency across print and digital media. I specialize in editorial publications, event branding, and institutional communication design.
                </motion.p>
              </div>
            </div>
          </section>

          {/* 3️⃣ Expertise Section */}
          <section id="expertise" className="section-padding border-y border-black/5">
            <div className="editorial-grid">
              <div className="md:col-span-4">
                <h3 className="text-sm uppercase tracking-[0.4em] font-medium opacity-40 mb-8 md:mb-0">
                  02 // Expertise
                </h3>
              </div>
              <div className="md:col-span-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                  {[
                    { title: 'Visual Identity Systems', icon: <Layout className="mb-4 opacity-50" /> },
                    { title: 'Editorial & Publication Design', icon: <BookOpen className="mb-4 opacity-50" /> },
                    { title: 'Event & Exhibition Branding', icon: <Award className="mb-4 opacity-50" /> },
                    { title: 'Print Communication Design', icon: <Briefcase className="mb-4 opacity-50" /> },
                    { title: 'Typography & Layout Hierarchy', icon: <Type className="mb-4 opacity-50" /> }
                  ].map((skill, index) => (
                    <motion.div 
                      key={skill.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {skill.icon}
                      <h4 className="text-xl font-display font-bold uppercase tracking-tight mb-2">{skill.title}</h4>
                      <div className="h-px w-12 bg-brand-black/20" />
                    </motion.div>
                  ))}
                </div>

                <div className="mt-20">
                  <h5 className="text-xs uppercase tracking-widest font-bold mb-6 opacity-30">Technical Tools</h5>
                  <div className="flex flex-wrap gap-4">
                    {['Corel Draw', 'Adobe Photoshop', 'Adobe Illustrator', 'Canva', 'Figma (Basic)'].map((tool) => (
                      <span key={tool} className="px-5 py-2 border border-black/10 rounded-full text-sm font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4️⃣ Featured Projects */}
          <section id="work" className="section-padding">
            <div className="mb-16">
              <h3 className="text-sm uppercase tracking-[0.4em] font-medium opacity-40 mb-4">
                03 // Featured Projects
              </h3>
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter uppercase">Selected Work</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {PROJECTS.map((project, index) => (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: index % 2 * 0.2 }}
                  className="project-card group"
                >
                  <div className="aspect-[16/10] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-30 block mb-1">
                          {project.category}
                        </span>
                        <h4 className="text-2xl md:text-3xl font-display font-bold tracking-tight uppercase group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h4>
                      </div>
                      <button className="p-3 bg-black/5 rounded-full hover:bg-black hover:text-white transition-all">
                        <ExternalLink size={18} />
                      </button>
                    </div>
                    <p className="text-brand-gray mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.focusPoints.map(point => (
                        <span key={point} className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 bg-black/5 rounded-sm">
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* 5️⃣ Experience & Education */}
          <section id="experience" className="section-padding bg-zinc-950 text-white">
            <div className="editorial-grid">
              <div className="md:col-span-4">
                <h3 className="text-sm uppercase tracking-[0.4em] font-medium opacity-40 mb-12 md:mb-0">
                  04 // Background
                </h3>
              </div>
              
              <div className="md:col-span-8">
                <div className="mb-24">
                  <h4 className="text-xs uppercase tracking-widest font-black mb-10 opacity-30">Work Experience</h4>
                  <div className="space-y-12">
                    {EXPERIENCES.map((exp, index) => (
                      <motion.div 
                        key={exp.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-white/10 pb-8"
                      >
                        <div>
                          <h5 className="text-2xl font-display font-bold tracking-tight uppercase">{exp.role}</h5>
                          <p className="opacity-60 font-medium mb-4">{exp.company}</p>
                          {exp.company === 'Skyhawk Arts' && (
                            <ul className="text-sm space-y-2 opacity-50 mb-4 max-w-xl">
                              <li>• Researched design trends for modern aesthetics.</li>
                              <li>• Designed print materials (brochures, flyers, posters) for marketing campaigns.</li>
                              <li>• Edited photographs for digital media platforms and web banners.</li>
                              <li>• Developed on-brand visual elements focused on concept and messaging.</li>
                            </ul>
                          )}
                          {exp.company === 'KSG IAS' && (
                            <ul className="text-sm space-y-2 opacity-50 mb-4 max-w-xl">
                              <li>• Designed advertising creatives and branding materials.</li>
                              <li>• Collaborated with marketing teams for identity consistency.</li>
                              <li>• Delivered print and digital assets within tight deadlines.</li>
                            </ul>
                          )}
                          {exp.company === 'Secrets of Tutankhamun Exhibition' && (
                            <ul className="text-sm space-y-2 opacity-50 mb-4 max-w-xl">
                              <li>• Assisted in exhibition setup, signage, and visitor experience design.</li>
                              <li>• Created informational and promotional graphics.</li>
                              <li>• Coordinated with vendors for visual consistency.</li>
                            </ul>
                          )}
                        </div>
                        <span className="text-sm font-mono opacity-40 whitespace-nowrap">{exp.period}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-widest font-black mb-10 opacity-30">Education</h4>
                  <div className="space-y-12">
                    {EDUCATIONS.map((edu, index) => (
                      <motion.div 
                        key={edu.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-8"
                      >
                        <div>
                          <h5 className="text-2xl font-display font-bold tracking-tight uppercase">{edu.degree}</h5>
                          <p className="opacity-50 font-medium">{edu.institution}</p>
                        </div>
                        <span className="text-sm font-mono opacity-40 whitespace-nowrap">{edu.period}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 6️⃣ Contact Section */}
          <section id="contact" className="section-padding overflow-hidden relative">
            <div className="editorial-grid">
              <div className="md:col-span-4">
                <h3 className="text-sm uppercase tracking-[0.4em] font-medium opacity-40 mb-12 md:mb-0">
                  05 // Contact
                </h3>
              </div>
              
              <div className="md:col-span-8 relative z-10">
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-none uppercase mb-16"
                >
                  Let’s build <br />
                  meaningful <br />
                  visual communication.
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-20">
                  <a href="mailto:Sachinsaharan3110@gmail.com" className="group">
                    <div className="flex items-center gap-4 mb-4">
                      <Mail className="opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                      <span className="text-xs uppercase tracking-widest font-bold opacity-30">Email</span>
                    </div>
                    <p className="text-2xl font-medium border-b border-transparent group-hover:border-black inline-block transition-all">
                      Sachinsaharan3110@gmail.com
                    </p>
                  </a>
                  
                  <div className="group">
                    <div className="flex items-center gap-4 mb-4">
                      <Phone className="opacity-30" />
                      <span className="text-xs uppercase tracking-widest font-bold opacity-30">Phone</span>
                    </div>
                    <p className="text-2xl font-medium">+91 740 4411 579</p>
                  </div>

                  <div className="group">
                    <div className="flex items-center gap-4 mb-4">
                      <MapPin className="opacity-30" />
                      <span className="text-xs uppercase tracking-widest font-bold opacity-30">Location</span>
                    </div>
                    <p className="text-2xl font-medium">Jaipur, Rajasthan, India</p>
                  </div>

                  <div className="group">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-xs uppercase tracking-widest font-bold opacity-30">Socials</span>
                    </div>
                    <div className="flex gap-6">
                      <Instagram className="cursor-pointer hover:scale-110 transition-transform" />
                      <Linkedin className="cursor-pointer hover:scale-110 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-20 -right-20 opacity-[0.02] pointer-events-none select-none">
              <span className="text-[40vw] font-display font-black leading-none uppercase">
                Sachin
              </span>
            </div>
          </section>
        </main>

        <footer className="py-12 px-6 md:px-12 border-t border-black/5 bg-zinc-50">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-xs uppercase tracking-[0.3em] font-medium opacity-40">
              © 2026 Sachin Saharan. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              <a href="#" className="text-xs uppercase tracking-widest font-bold opacity-40 hover:opacity-100 transition-opacity">Back to top</a>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-[10px] uppercase tracking-widest font-bold opacity-40">Available for projects</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
