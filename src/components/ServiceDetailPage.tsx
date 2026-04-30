import React from 'react';
import { Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface ServiceDetail {
  title: string;
  subtitle: string;
  description: string;
  sections: {
    title: string;
    content: string;
  }[];
  image: string;
  category: string;
}

interface ServiceDetailPageProps {
  service: ServiceDetail;
  phoneNumber: string;
}

export default function ServiceDetailPage({ service, phoneNumber }: ServiceDetailPageProps) {
  return (
    <div className="bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-serif font-bold text-brand-text mb-4">
                {service.title}
              </h1>
              <p className="text-brand-primary font-bold mb-8">
                {service.subtitle}
              </p>
              <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                <p>{service.description}</p>
                
                {service.sections.slice(0, 2).map((section, idx) => (
                  <div key={idx} className="space-y-4 pt-4">
                    <h2 className="text-2xl font-serif font-bold text-brand-text">
                      {section.title}
                    </h2>
                    <p>{section.content}</p>
                  </div>
                ))}

                <div className="my-12 rounded-xl overflow-hidden aspect-video shadow-lg">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {service.sections.slice(2).map((section, idx) => (
                  <div key={idx} className="space-y-4 pt-4">
                    <h2 className="text-2xl font-serif font-bold text-brand-text">
                      {section.title}
                    </h2>
                    <p>{section.content}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <a 
                  href={`tel:${phoneNumber.replace(/\D/g, '')}`}
                  className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded font-bold hover:bg-brand-bg transition-colors"
                >
                  <Phone size={18} />
                  Call {phoneNumber}
                </a>
              </div>
            </motion.div>
          </div>

          {/* Sidebar Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
                <div className="text-center mb-8">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">REQUEST A</span>
                  <h3 className="text-3xl font-serif font-bold text-brand-primary">Free Estimate</h3>
                </div>

                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="First Name*" 
                      required
                      className="w-full bg-white border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors text-sm"
                    />
                    <input 
                      type="text" 
                      placeholder="Last Name*" 
                      required
                      className="w-full bg-white border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors text-sm"
                    />
                  </div>
                  <input 
                    type="email" 
                    placeholder="Email*" 
                    required
                    className="w-full bg-white border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors text-sm"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone" 
                    className="w-full bg-white border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors text-sm"
                  />
                  <input 
                    type="text" 
                    placeholder="Address*" 
                    required
                    className="w-full bg-white border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors text-sm"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="City*" 
                      required
                      className="w-full bg-white border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors text-sm"
                    />
                    <input 
                      type="text" 
                      placeholder="State*" 
                      required
                      className="w-full bg-white border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors text-sm"
                    />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Zip Code*" 
                    required
                    className="w-full bg-white border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors text-sm"
                  />
                  <select className="w-full bg-white border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors text-sm text-black">
                    <option className="text-black">How Did You Hear About Us?*</option>
                    <option className="text-black">Google Search</option>
                    <option className="text-black">Social Media</option>
                    <option className="text-black">Referral</option>
                    <option className="text-black">Yard Sign</option>
                    <option className="text-black">Other</option>
                  </select>
                  <textarea 
                    placeholder="Tell Us About Your Project*" 
                    required
                    rows={4}
                    className="w-full bg-white border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors text-sm"
                  ></textarea>
                  
                  <button className="w-full bg-brand-primary text-white font-bold py-4 rounded hover:bg-brand-bg transition-colors uppercase tracking-widest text-sm">
                    Submit Request
                  </button>
                  
                  <p className="text-[10px] text-gray-400 text-center mt-4 leading-tight">
                    By submitting this form, I agree to the terms of use and privacy policy to OPT IN to be contacted by call, SMS text, or email related to my submission.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
