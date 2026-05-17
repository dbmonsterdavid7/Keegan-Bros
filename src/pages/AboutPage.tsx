import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Award, Users, Shield } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { label: "Years Experience", value: "15+" },
    { label: "Projects Completed", value: "1,200+" },
    { label: "Satisfied Clients", value: "950+" },
    { label: "Service Areas", value: "10+" }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&q=80&w=2000"
            alt="About Keegan Bros"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-4"
          >
            About Keegan Bros
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 bg-brand-accent mx-auto"
          />
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-primary font-bold tracking-widest uppercase mb-4 block">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Expertise Rooted in Passion & Precision</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded and operated by brothers with a shared vision for excellence, Keegan Bros Landscaping started with a simple goal: to provide Southeast Michigan with professional, high-end landscaping and irrigation services that truly last.
              </p>
              <p>
                What began as a small family operation has grown into a premier landscaping firm known for our attention to detail, innovative designs, and unmatched customer service. We treat every yard as if it were our own, ensuring that every project meets our rigorous standards.
              </p>
              <p>
                Today, we continue to serve Plymouth and the surrounding communities, bringing modern landscaping solutions to homeowners who value quality craftsmanship and reliability.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1558904541-efa8c1965f1e?auto=format&fit=crop&q=80&w=1000"
              alt="Team at work"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-brand-primary text-white p-8 rounded-xl shadow-xl hidden lg:block">
              <p className="text-3xl font-bold">15+</p>
              <p className="text-sm uppercase tracking-wider">Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">These principles guide every decision we make and every project we undertake.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-brand-primary rounded-lg flex items-center justify-center mb-6">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Integrity</h3>
              <p className="text-gray-600">We are honest, transparent, and we do what we say we're going to do. No shortcuts, just quality work.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-brand-primary rounded-lg flex items-center justify-center mb-6">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Quality</h3>
              <p className="text-gray-600">We use the best materials and techniques to ensure your landscape thrives and remains beautiful for years.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-brand-primary rounded-lg flex items-center justify-center mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Community</h3>
              <p className="text-gray-600">As a local business, we are invested in our community and take pride in beautifying our local neighborhoods.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-brand-primary text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-brand-accent mb-2">{stat.value}</div>
              <div className="text-sm md:text-base text-gray-300 font-medium uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
