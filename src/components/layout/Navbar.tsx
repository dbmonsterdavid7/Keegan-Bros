import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  MapPin, 
  Clock, 
  ArrowRight
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { services, phoneNumber } from '../../data/constants';

export default function Navbar() {
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
              <a href={`tel:${phoneNumber.replace(/\D/g, '')}`} className="hover:text-brand-accent transition-colors">{phoneNumber}</a>
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
          <Link 
            to="/" 
            className="flex items-center gap-2 group"
            onClick={(e) => {
              if (isHomePage) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            <img 
              src="https://lh3.googleusercontent.com/d/1VHEG7JRlpedJanRJlpssfKTow6plN5Ds" 
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
              to="/about"
              className={`font-medium transition-colors ${isTransparent ? 'hover:text-brand-accent' : 'hover:text-brand-primary'}`}
            >
              About
            </Link>
            <Link 
              to="/gallery"
              className={`font-medium transition-colors ${isTransparent ? 'hover:text-brand-accent' : 'hover:text-brand-primary'}`}
            >
              Gallery
            </Link>
            <Link 
              to="/contact"
              className={`font-medium transition-colors ${isTransparent ? 'hover:text-brand-accent' : 'hover:text-brand-primary'}`}
            >
              Contact
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
              href={`tel:${phoneNumber.replace(/\D/g, '')}`} 
              className={`p-2 transition-colors ${isTransparent ? 'text-white hover:text-brand-accent' : 'text-brand-primary hover:text-brand-accent'}`}
              aria-label="Call Us"
            >
              <Phone size={24} />
            </a>
            <button 
              id="mobile-menu-toggle"
              className={`p-2 relative z-[60] flex items-center justify-center transition-colors duration-300 ${isMenuOpen ? 'text-gray-900' : (isTransparent ? 'text-white' : 'text-gray-900')}`} 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={28} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={28} />
                  </motion.div>
                )}
              </AnimatePresence>
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

              <Link to="/about">About</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/contact">Contact</Link>
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
