import React, { useEffect } from 'react';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactPageProps {
  phoneNumber: string;
}

export default function ContactPage({ phoneNumber }: ContactPageProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script on unmount
      const existingScript = document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]');
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []);

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
            <div className="bg-white rounded-xl border border-gray-100 shadow-xl p-8 md:p-12">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/WmFafjY1fDuJCiwEIXGI"
                style={{ width: '100%', height: '750px', border: 'none', borderRadius: '3px' }}
                id="inline-WmFafjY1fDuJCiwEIXGI" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Contact Us"
                data-height="670"
                data-layout-iframe-id="inline-WmFafjY1fDuJCiwEIXGI"
                data-form-id="WmFafjY1fDuJCiwEIXGI"
                title="Contact Us"
              ></iframe>
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
