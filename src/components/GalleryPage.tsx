import React from 'react';
import { motion } from 'motion/react';
import { Camera, ArrowRight, ExternalLink } from 'lucide-react';

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1558904541-efa8c1965f1e?auto=format&fit=crop&q=80&w=1000",
    title: "Modern Landscape Design",
    category: "Landscaping",
    location: "Plymouth, MI"
  },
  {
    url: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&q=80&w=1000",
    title: "Custom Irrigation Install",
    category: "Irrigation",
    location: "Canton, MI"
  },
  {
    url: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1000",
    title: "Premium Sod Installation",
    category: "Lawn Care",
    location: "Northville, MI"
  },
  {
    url: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&q=80&w=1000",
    title: "Outdoor Lighting & Patio",
    category: "Landscaping",
    location: "Ann Arbor, MI"
  },
  {
    url: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=1000",
    title: "Retaining Wall Project",
    category: "Hardscaping",
    location: "Livonia, MI"
  },
  {
    url: "https://images.unsplash.com/photo-1599110906885-b024c90c2773?auto=format&fit=crop&q=80&w=1000",
    title: "Spring Cleanup & Mulching",
    category: "Maintenance",
    location: "Novi, MI"
  }
];

export default function GalleryPage() {
  return (
    <div className="pt-24 pb-24">
      {/* Hero Section */}
      <section className="bg-brand-bg text-white py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded bg-brand-accent/20 text-brand-accent font-mono text-sm mb-6 border border-brand-accent/30">
              <Camera size={16} />
              Our Portfolio
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Previous Work</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore our gallery of completed projects across Southeast Michigan. 
              From custom designs to routine maintenance, we take pride in every detail.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg border border-gray-100"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/90 via-brand-bg/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-brand-accent font-mono text-xs uppercase tracking-widest mb-2">
                  {image.category} • {image.location}
                </span>
                <h3 className="text-xl font-bold text-white mb-4">{image.title}</h3>
                <div className="flex items-center gap-2 text-white text-sm font-medium">
                  View Details <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-24 max-w-5xl mx-auto px-4">
        <div className="bg-brand-primary rounded-2xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your project?</h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Let's transform your outdoor space together. Contact us today for a free estimate 
              and custom design consultation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="btn-primary bg-brand-accent text-brand-bg hover:bg-white px-8 py-4">
                Get a Free Quote
              </button>
              <button className="btn-secondary border-white text-white hover:bg-white hover:text-brand-primary px-8 py-4">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
