/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Droplets, 
  Trees, 
  Shovel, 
  LayoutGrid,
  CheckCircle2,
  Instagram,
  Facebook,
  Twitter,
  ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const services = [
  {
    title: "Landscaping",
    icon: <Trees className="w-6 h-6" />,
    items: ["Landscape Design & Build", "Landscape Maintenance", "Designs & Renderings", "Sod Installation", "Plant & Tree Installation"]
  },
  {
    title: "Lawn Care",
    icon: <Shovel className="w-6 h-6" />,
    items: ["Lawn Mowing", "Yard Cleanups", "Mulching", "Plant Trimming & Pruning"]
  },
  {
    title: "Irrigation",
    icon: <Droplets className="w-6 h-6" />,
    items: ["Sprinkler Repairs", "Sprinkler Startups", "System Maintenance"]
  }
];

const areas = ["Plymouth", "Canton", "Northville", "Livonia", "Ann Arbor", "Novi"];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-brand-bg text-white py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm font-medium">
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-brand-accent" />
              <span>(734) 865-8608</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-brand-accent" />
              <span>Plymouth, MI 48170</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-brand-accent" />
            <span>Mon – Fri: 7:00am – 5:00pm</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className={`glass-header transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2 group">
            <div className="bg-brand-primary p-2 rounded group-hover:rotate-12 transition-transform">
              <Trees className="text-white" size={24} />
            </div>
            <span className="text-2xl font-serif font-bold text-brand-text tracking-tighter">
              Keegan Bros<span className="text-brand-accent">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <div 
              className="relative group py-4"
              onMouseEnter={() => setActiveMegaMenu('services')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button className="flex items-center gap-1 font-medium hover:text-brand-primary transition-colors">
                Services <ChevronDown size={16} className={`transition-transform duration-300 ${activeMegaMenu === 'services' ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {activeMegaMenu === 'services' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] bg-white shadow-2xl rounded border border-gray-100 p-8 grid grid-cols-3 gap-8"
                  >
                    {services.map((service) => (
                      <div key={service.title}>
                        <div className="flex items-center gap-2 text-brand-primary mb-4">
                          {service.icon}
                          <h4 className="font-serif font-bold text-lg">{service.title}</h4>
                        </div>
                        <ul className="space-y-2">
                          {service.items.map((item) => (
                            <li key={item}>
                              <a href="#" className="text-sm text-gray-500 hover:text-brand-primary transition-colors flex items-center gap-1 group">
                                <ArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#" className="font-medium hover:text-brand-primary transition-colors">Areas</a>
            <a href="#" className="font-medium hover:text-brand-primary transition-colors">Blog</a>
            <a href="#" className="font-medium hover:text-brand-primary transition-colors">FAQ</a>
            <a href="#" className="font-medium hover:text-brand-primary transition-colors">About</a>
            <a href="#" className="btn-primary">Get a Quote</a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-white lg:hidden pt-24 px-6"
          >
            <nav className="flex flex-col gap-6 text-xl font-serif font-bold">
              <a href="#" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#" onClick={() => setIsMenuOpen(false)}>Areas</a>
              <a href="#" onClick={() => setIsMenuOpen(false)}>Blog</a>
              <a href="#" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#" onClick={() => setIsMenuOpen(false)} className="text-brand-primary">Get a Quote</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1558904541-efa8c1965f1e?auto=format&fit=crop&q=80&w=2000" 
              alt="Beautiful landscape" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-bg/90 via-brand-bg/40 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <span className="inline-block px-4 py-1 rounded bg-brand-accent/20 text-brand-accent font-mono text-sm mb-6 border border-brand-accent/30">
                Licensed & Insured
              </span>
              <h1 className="text-5xl md:text-7xl text-white font-bold leading-[1.1] mb-8">
                Plymouth’s High-End <br />
                <span className="text-brand-accent">Outdoor Specialists.</span>
              </h1>
              <p className="text-xl text-gray-200 mb-10 leading-relaxed">
                Premium landscaping and irrigation solutions built for Michigan seasons and soil. 
                Transforming Southeast Michigan properties for over two decades.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="btn-primary text-lg px-8 py-4">
                  Request a Quote <ArrowUpRight className="ml-2" size={20} />
                </a>
                <a href="#" className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-brand-bg text-lg px-8 py-4">
                  Our Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats / Trust Section */}
        <section className="py-12 bg-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Years Experience", value: "24+" },
                { label: "Projects Completed", value: "1.2k+" },
                { label: "Service Areas", value: "6+" },
                { label: "Happy Clients", value: "98%" }
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold text-brand-text mb-6">
                  Professional Services <br />
                  You Can Depend On
                </h2>
                <p className="text-lg text-gray-600">
                  From custom designs and renderings to sod, plant, and tree installation, 
                  our landscaping services create and maintain beautiful outdoor spaces built to last.
                </p>
              </div>
              <a href="#" className="flex items-center gap-2 text-brand-primary font-bold group">
                View All Services <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <motion.div 
                  key={service.title}
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all p-8"
                >
                  <div className="bg-brand-primary/10 text-brand-primary w-14 h-14 rounded flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <ul className="space-y-3 mb-8">
                    {service.items.slice(0, 3).map(item => (
                      <li key={item} className="flex items-center gap-2 text-gray-500 text-sm">
                        <CheckCircle2 size={14} className="text-brand-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href="#" className="absolute bottom-8 right-8 w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-brand-bg group-hover:text-white transition-all">
                    <ArrowRight size={18} />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us / Difference */}
        <section className="py-24 bg-brand-bg text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-square rounded overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&q=80&w=1000" 
                    alt="Team working" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-brand-accent p-8 rounded text-brand-bg max-w-xs hidden md:block">
                  <h4 className="text-2xl font-bold mb-2">Local Expertise</h4>
                  <p className="text-sm font-medium opacity-80">
                    We understand Michigan’s unique lawn care challenges and deliver customized solutions.
                  </p>
                </div>
              </div>

              <div>
                <span className="text-brand-accent font-mono text-sm uppercase tracking-widest mb-4 block">THE KEEGAN BROS DIFFERENCE</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  Unmatched Quality, <br />
                  Local Expertise
                </h2>
                <div className="space-y-8">
                  {[
                    {
                      title: "Reliability",
                      desc: "Your time matters to us. We arrive on schedule and complete each job with care, leaving your property clean and well-maintained."
                    },
                    {
                      title: "Professionalism",
                      desc: "Our Plymouth team brings skilled expertise to every property, ensuring clear communication and quality results."
                    },
                    {
                      title: "Local Knowledge",
                      desc: "As your neighbors in Southeast Michigan, we understand the specific challenges in Plymouth, Canton, and Northville."
                    }
                  ].map((item) => (
                    <div key={item.title} className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-brand-accent font-bold">
                        {item.title[0]}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                        <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We take pride in our work and our reputation across Plymouth and surrounding areas.
            </p>
          </div>
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Juliana Leland",
                text: "Creative Edge has been taking care of my lawn for about a year now. They are always there same time every week. It is such a relief to come home from work and see such an amazing job done."
              },
              {
                name: "Tiffany Mathers",
                text: "Creative Edge did an amazing job getting my sprinkler system back up and running at our home in Plymouth MI. The same day service made it super nice."
              },
              {
                name: "Chris Binney",
                text: "We’ve been using them for lawn care and irrigation repair. The difference has been incredible. Our yard has never looked this healthy."
              }
            ].map((t) => (
              <div key={t.name} className="bg-white p-8 rounded shadow-sm border border-gray-100 flex flex-col justify-between">
                <p className="text-gray-600 italic mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold">
                    {t.name[0]}
                  </div>
                  <div className="font-bold text-brand-text">{t.name}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-brand-primary rounded p-12 md:p-20 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
              <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-8">Serving Our <br />Communities</h2>
                  <p className="text-lg text-white/80 mb-12">
                    We provide high-end landscaping and irrigation services across Southeast Michigan. 
                    Check if we serve your neighborhood.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {areas.map(area => (
                      <div key={area} className="flex items-center gap-2 text-lg font-medium">
                        <MapPin size={18} className="text-brand-accent" />
                        {area}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-6">Request a Free Estimate</h3>
                  <form className="space-y-4">
                    <input type="text" placeholder="Full Name" className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors placeholder:text-white/50" />
                    <input type="email" placeholder="Email Address" className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors placeholder:text-white/50" />
                    <select className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors text-white/50">
                      <option>Select Service</option>
                      <option>Landscaping</option>
                      <option>Irrigation</option>
                      <option>Lawn Maintenance</option>
                    </select>
                    <textarea placeholder="Message" rows={4} className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors placeholder:text-white/50"></textarea>
                    <button className="w-full bg-brand-accent text-brand-bg font-bold py-4 rounded hover:bg-white transition-colors">
                      Send Request
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <h2 className="text-4xl font-bold">Latest from the Blog</h2>
              <a href="#" className="text-brand-primary font-bold flex items-center gap-2 group">
                Read All Posts <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Best Landscaping Plants for Plymouth MI",
                  date: "March 21, 2026",
                  image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1000"
                },
                {
                  title: "Complete Guide to Outdoor Lighting",
                  date: "March 15, 2026",
                  image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&q=80&w=1000"
                }
              ].map(post => (
                <a key={post.title} href="#" className="group block">
                  <div className="aspect-[16/9] rounded overflow-hidden mb-6">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="text-sm text-gray-500 font-mono mb-2 uppercase tracking-wider">{post.date}</div>
                  <h3 className="text-2xl font-bold group-hover:text-brand-primary transition-colors">{post.title}</h3>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-bg text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-1">
              <a href="/" className="flex items-center gap-2 mb-6">
                <div className="bg-brand-primary p-2 rounded">
                  <Trees className="text-white" size={20} />
                </div>
                <span className="text-2xl font-serif font-bold tracking-tighter">
                  Keegan Bros<span className="text-brand-accent">.</span>
                </span>
              </a>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Transforming outdoor spaces with quality and local expertise since 2002. 
                Your trusted partner for landscaping and irrigation in Southeast Michigan.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-colors">
                  <Twitter size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Services</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Landscaping</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Lawn Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Irrigation</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Resources</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Service Areas</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-brand-accent" />
                  (734) 865-8608
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-brand-accent mt-1" />
                  123 Main St.<br />Plymouth, MI 48170
                </li>
                <li className="flex items-center gap-3">
                  <Clock size={18} className="text-brand-accent" />
                  Mon – Fri: 7am – 5pm
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Keegan Bros Landscaping. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
