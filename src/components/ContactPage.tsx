import React from 'react';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactPageProps {
  phoneNumber: string;
}

export default function ContactPage({ phoneNumber }: ContactPageProps) {
  return (
    <div className="bg-white pt-28 lg:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-4 block">Get in Touch</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-text mb-6">
              Request a Free Estimate
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Ready to transform your outdoor space? Fill out the form below and our team will get back to you 
              within 24-48 hours to discuss your project and provide a detailed estimate.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-brand-bg text-white p-8 rounded-xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <h3 className="text-2xl font-serif font-bold mb-8 relative z-10">Contact Information</h3>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-primary/20 p-3 rounded-lg text-brand-accent">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wider font-bold mb-1">Call Us</p>
                    <p className="text-lg font-medium">{phoneNumber}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-primary/20 p-3 rounded-lg text-brand-accent">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wider font-bold mb-1">Email Us</p>
                    <p className="text-lg font-medium">john@keegantrans.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-primary/20 p-3 rounded-lg text-brand-accent">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wider font-bold mb-1">Visit Us</p>
                    <p className="text-lg font-medium">123 Main St.<br />Plymouth, MI 48170</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-primary/20 p-3 rounded-lg text-brand-accent">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wider font-bold mb-1">Working Hours</p>
                    <p className="text-lg font-medium">Mon – Fri: 7am – 5pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h4 className="text-xl font-serif font-bold text-brand-text mb-4">Why Choose Keegan Bros?</h4>
              <ul className="space-y-4">
                {[
                  "Small, specialized team of six",
                  "Direct communication with owners",
                  "Personalized attention to detail",
                  "Local Plymouth expertise",
                  "High-quality, tailored results"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-xl border border-gray-100 shadow-xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">First Name*</label>
                    <input 
                      type="text" 
                      placeholder="Enter your first name" 
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-4 focus:outline-none focus:border-brand-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Last Name*</label>
                    <input 
                      type="text" 
                      placeholder="Enter your last name" 
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-4 focus:outline-none focus:border-brand-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Email Address*</label>
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-4 focus:outline-none focus:border-brand-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="Enter your phone number" 
                      className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-4 focus:outline-none focus:border-brand-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Project Address*</label>
                  <input 
                    type="text" 
                    placeholder="Street address, city, state, zip" 
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-4 focus:outline-none focus:border-brand-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Service Interested In*</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-4 focus:outline-none focus:border-brand-primary transition-colors text-black">
                    <option className="text-black">Select a service</option>
                    <option className="text-black">Landscape Design & Build</option>
                    <option className="text-black">Landscape Maintenance</option>
                    <option className="text-black">Lawn Care Services</option>
                    <option className="text-black">Irrigation & Sprinklers</option>
                    <option className="text-black">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Project Details*</label>
                  <textarea 
                    placeholder="Tell us about your vision, specific needs, or any questions you have." 
                    required
                    rows={6}
                    className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-4 focus:outline-none focus:border-brand-primary transition-colors"
                  ></textarea>
                </div>
                
                <button className="w-full bg-brand-primary text-white font-bold py-5 rounded-lg hover:bg-brand-bg transition-all uppercase tracking-widest shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Submit Estimate Request
                </button>
                
                <p className="text-xs text-gray-400 text-center leading-relaxed">
                  By submitting this form, you agree to be contacted by Keegan Bros regarding your request. 
                  We respect your privacy and will never share your information with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Service Area Map */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-brand-text mb-4">Our Service Area</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We proudly serve residential and commercial properties across <strong>Wayne</strong> and <strong>Washtenaw</strong> counties in Michigan.
            </p>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 h-[500px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d377464.3824424361!2d-83.7483861!3d42.3174031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824967394627377%3A0x6e2e50587627377!2sWayne%20County%2C%20MI!5e0!3m2!1sen!2sus!4v1711995000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Keegan Bros Service Area Map"
            ></iframe>
            
            {/* Map Overlay Info */}
            <div className="absolute bottom-8 left-8 right-8 md:right-auto bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-gray-100 max-w-md">
              <div className="flex items-center gap-3 text-brand-primary mb-3">
                <MapPin size={24} className="text-brand-accent" />
                <h4 className="text-xl font-bold">Our Service Cities</h4>
              </div>
              <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Plymouth</li>
                  <li>• Canton</li>
                  <li>• Northville</li>
                  <li>• Livonia</li>
                  <li>• Novi</li>
                </ul>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Ann Arbor</li>
                  <li>• Farmington Hills</li>
                  <li>• Westland</li>
                  <li>• Ypsilanti</li>
                  <li>• South Lyon</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
