import React from 'react';
import { motion } from 'motion/react';
import { Camera, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import serviceHero from '../assets/images/regenerated_image_1779044339654.png';

const galleryImages = [
  {
    url: serviceHero,
    title: "Modern Landscape Architecture",
    category: "Landscaping",
    location: "Plymouth, MI"
  },
  {
    url: "https://lh3.googleusercontent.com/d/1D-ve1iDfFCqGtvlq310iKt2ug29QO7ca",
    title: "Premium Design & Build",
    category: "Landscaping",
    location: "Canton, MI"
  },
  {
    url: "https://lh3.googleusercontent.com/d/1to92Hu9nkaSgKr6XCH4tYXbig5a5gET5",
    title: "Lush Sod Installation",
    category: "Landscaping",
    location: "Northville, MI"
  },
  {
    url: "https://lh3.googleusercontent.com/d/1uXp5OR_fSvrsYzzDHMCcHpcZQ55Hl29w",
    title: "Irrigation System Repair",
    category: "Irrigation",
    location: "Ann Arbor, MI"
  },
  {
    url: "https://lh3.googleusercontent.com/d/1k0sHv2SWw1ASxaTvQ8wVSdYjEIYb2fdR",
    title: "Decorative Bark Mulching",
    category: "Maintenance",
    location: "Livonia, MI"
  },
  {
    url: "https://lh3.googleusercontent.com/d/1ZfzScxKam6aYFNZdsxo0j8AZEd8OgPR-",
    title: "Foundation Drainage Solution",
    category: "Irrigation",
    location: "Plymouth, MI"
  },
  {
    url: "https://lh3.googleusercontent.com/d/190azt9SiEjpSOkatvb2vhXGPWaxB6D1u",
    title: "Full Landscape Maintenance",
    category: "Maintenance",
    location: "Novi, MI"
  },
  {
    url: "https://lh3.googleusercontent.com/d/16sfZUJnE7E_kPXJcl5PSqVx0PbA2VXJ8",
    title: "Seasonal Sprinkler Startup",
    category: "Irrigation",
    location: "South Lyon, MI"
  },
  {
    url: "https://lh3.googleusercontent.com/d/1m3ZsJWu351lBtc0n6XXJv7bmJr7YHwTs",
    title: "Ornamental Tree Planting",
    category: "Landscaping",
    location: "Farmington Hills, MI"
  }
];

export default function GalleryPage() {
  return (
    <div className="pb-24">
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
            <div className="flex justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-brand-primary font-bold px-10 py-4 rounded-lg hover:bg-brand-accent transition-all shadow-xl inline-block"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
