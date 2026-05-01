import React, { useEffect } from 'react';
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
              <div className="bg-white rounded-xl border border-gray-100 shadow-xl overflow-hidden min-h-[700px]">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/WmFafjY1fDuJCiwEIXGI"
                  style={{ width: '100%', height: '100%', minHeight: '700px', border: 'none', borderRadius: '3px' }}
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
        </div>
      </div>
    </div>
  );
}
