/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useNavigate, useLocation, useParams } from 'react-router-dom';
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
  Instagram,
  Facebook,
  Twitter,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import ServiceDetailPage from './components/ServiceDetailPage';
import ContactPage from './components/ContactPage';
import GalleryPage from './components/GalleryPage';
import { serviceDetails } from './data/serviceDetails';

const services = [
  {
    title: "Landscaping",
    icon: <Trees className="w-6 h-6" />,
    items: ["Landscape Design & Build", "Landscape Maintenance", "Designs & Renderings", "Sod Installation", "Plant & Tree Installation"]
  },
  {
    title: "Lawn & Garden Care",
    icon: <Shovel className="w-6 h-6" />,
    items: ["Yard Cleanups", "Mulching", "Plant Trimming & Pruning"]
  },
  {
    title: "Irrigation",
    icon: <Droplets className="w-6 h-6" />,
    items: ["Sprinkler Repairs", "Sprinkler Startups", "System Maintenance", "French Drain Installation"]
  }
];

const areas = ["Plymouth", "Canton", "Northville", "Livonia", "Novi", "Ann Arbor", "Farmington Hills", "Westland", "Ypsilanti", "South Lyon"];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSubcategoryOpen, setMobileSubcategoryOpen] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close menus on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveMegaMenu(null);
    setMobileServicesOpen(false);
    setMobileSubcategoryOpen(null);
  }, [location.pathname]);

  const navigateToService = (item: string) => {
    const id = item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
    navigate(`/services/${id}`);
  };

  // Header states
  const isHomePage = location.pathname === '/';
  const isTransparent = !scrolled && isHomePage && !isMenuOpen;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className={`bg-brand-bg text-white px-4 hidden md:block transition-all duration-300 ${scrolled ? 'h-0 py-0 opacity-0 overflow-hidden' : 'py-2 opacity-100'}`}>
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
      <header className={`transition-all duration-300 ${isMenuOpen ? 'bg-white py-3 border-b border-gray-100 text-gray-900' : (scrolled ? 'glass-header-scrolled py-1.5' : `glass-header-transparent py-3 ${isTransparent ? 'text-white' : 'text-gray-900 bg-white'}`)}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src={isTransparent && !isMenuOpen ? "https://lh3.googleusercontent.com/d/1VHEG7JRlpedJanRJlpssfKTow6plN5Ds" : "https://lh3.googleusercontent.com/d/1VHEG7JRlpedJanRJlpssfKTow6plN5Ds"} 
              alt="Keegan Bros Landscaping Logo" 
              className={`h-10 md:h-12 w-auto object-contain transition-all duration-300 ${(isTransparent && !isMenuOpen) ? 'brightness-0 invert' : ''}`}
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <div 
              className="relative group py-4"
              onMouseEnter={() => setActiveMegaMenu('services')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <Link 
                to="/services"
                className={`flex items-center gap-1 font-medium transition-colors ${isTransparent ? 'hover:text-brand-accent' : 'hover:text-brand-primary'}`}
                onMouseEnter={() => setActiveMegaMenu('services')}
              >
                Services <ChevronDown size={16} className={`transition-transform duration-300 ${activeMegaMenu === 'services' ? 'rotate-180' : ''}`} />
              </Link>
              
              <AnimatePresence>
                {activeMegaMenu === 'services' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] bg-white shadow-2xl rounded border border-gray-100 p-8 grid grid-cols-3 gap-8 text-gray-900"
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
                              <button 
                                onClick={() => navigateToService(item)}
                                className="text-sm text-gray-500 hover:text-brand-primary transition-colors flex items-center gap-1 group w-full text-left"
                              >
                                <ArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                {item}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              to="/contact"
              className={`font-medium transition-colors ${isTransparent ? 'hover:text-brand-accent' : 'hover:text-brand-primary'}`}
            >
              Contact
            </Link>
            <a href="#" className={`font-medium transition-colors ${isTransparent ? 'hover:text-brand-accent' : 'hover:text-brand-primary'}`}>About</a>
            <Link 
              to="/gallery"
              className={`font-medium transition-colors ${isTransparent ? 'hover:text-brand-accent' : 'hover:text-brand-primary'}`}
            >
              Gallery
            </Link>
            <Link 
              to="/contact"
              className={`btn-primary ${isTransparent ? 'bg-white text-brand-bg hover:bg-brand-accent shadow-[0_0_30px_rgba(255,255,255,0.5),0_0_10px_rgba(255,255,255,0.3)]' : ''}`}
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <a 
              href="tel:7348658608" 
              className={`p-2 transition-colors ${isTransparent ? 'text-white hover:text-brand-accent' : 'text-brand-primary hover:text-brand-accent'}`}
              aria-label="Call Us"
            >
              <Phone size={24} />
            </a>
            <button 
              id="mobile-menu-toggle"
              className={`p-2 transition-all duration-300 relative z-[60] ${isMenuOpen ? 'text-gray-900' : (isTransparent ? 'text-white' : 'text-gray-900')}`} 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-white lg:hidden pt-24 px-6 overflow-y-auto"
          >
            <nav className="flex flex-col gap-6 text-xl font-sans font-bold pb-12">
              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full text-left"
                >
                  Services 
                  <ChevronDown size={20} className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden flex flex-col gap-4 pl-4 border-l-2 border-brand-primary/20"
                    >
                      {services.map((service) => (
                        <div key={service.title} className="flex flex-col gap-3">
                          <button 
                            onClick={() => setMobileSubcategoryOpen(mobileSubcategoryOpen === service.title ? null : service.title)}
                            className="flex items-center justify-between w-full text-lg text-brand-primary"
                          >
                            {service.title}
                            <ChevronDown size={18} className={`transition-transform duration-300 ${mobileSubcategoryOpen === service.title ? 'rotate-180' : ''}`} />
                          </button>
                          
                          <AnimatePresence>
                            {mobileSubcategoryOpen === service.title && (
                              <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden flex flex-col gap-2 pl-4"
                              >
                                {service.items.map((item) => (
                                  <button 
                                    key={item} 
                                    onClick={() => navigateToService(item)}
                                    className="text-base text-left text-gray-500 font-sans font-normal hover:text-brand-primary transition-colors py-1"
                                  >
                                    {item}
                                  </button>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link 
                to="/contact"
                className="text-left"
              >
                Contact
              </Link>
              <a href="#" onClick={() => setIsMenuOpen(false)}>About</a>
              <Link 
                to="/gallery"
                className="text-left"
              >
                Gallery
              </Link>
              <Link 
                to="/contact"
                className="text-brand-primary text-left"
              >
                Get a Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ServiceDetailWrapper({ phoneNumber }: { phoneNumber: string }) {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? serviceDetails[serviceId] : null;

  if (!service) {
    return <div className="pt-32 text-center">Service not found</div>;
  }

  return <ServiceDetailPage service={service} phoneNumber={phoneNumber} />;
}

function AppContent() {
  const phoneNumber = "(734) 865-8608";
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className={isHomePage ? '' : 'pt-24 lg:pt-32'}>
        <Routes>
          <Route path="/" element={
            <HomePage 
              services={services} 
              areas={areas} 
            />
          } />
          <Route path="/services" element={
            <ServicesPage 
              services={services} 
              phoneNumber={phoneNumber} 
            />
          } />
          <Route path="/services/:serviceId" element={<ServiceDetailWrapper phoneNumber={phoneNumber} />} />
          <Route path="/contact" element={<ContactPage phoneNumber={phoneNumber} />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-brand-bg text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-6">
                <img 
                  src="https://lh3.googleusercontent.com/d/1VHEG7JRlpedJanRJlpssfKTow6plN5Ds" 
                  alt="Keegan Bros Landscaping Logo" 
                  className="h-12 w-auto object-contain brightness-0 invert"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Tailored services that enhance your landscape in every season, we ensure your outdoor spaces are stunning year-round.
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
                <li><Link to="/services" className="hover:text-white transition-colors">Landscaping</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Lawn & Garden Care</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Irrigation</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Resources</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
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

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}
