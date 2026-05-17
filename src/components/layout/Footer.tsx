import { Link } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Instagram,
  Facebook,
  Twitter,
} from 'lucide-react';
import { phoneNumber } from '../../data/constants';

export default function Footer() {
  return (
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
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-accent" />
                <a href={`tel:${phoneNumber.replace(/\D/g, '')}`} className="hover:text-white transition-colors">{phoneNumber}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-accent mt-1" />
                46502 Darwood Ct, Plymouth, MI 48170
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
  );
}
