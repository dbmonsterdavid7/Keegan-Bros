
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface HomePageProps {
  services: any[];
  areas: string[];
}

export default function HomePage({ services, areas }: HomePageProps) {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/d/1RHYTnhW3UFxMu3KQ1G6uJG3WKWEB9-WG" 
            alt="Beautiful landscape" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-bg/90 via-brand-bg/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto md:mx-0 text-center md:text-left"
          >
            <span className="inline-block px-4 py-1 rounded bg-brand-accent/20 text-brand-accent font-mono text-sm mb-4 mt-4 md:mt-0 border border-brand-accent/30">
              Licensed & Insured
            </span>
            <h1 className="text-4xl md:text-7xl text-white font-bold leading-[1.1] mb-6">
              Southeast Michigan's <br className="hidden md:block" />
              <span className="text-brand-accent">Leading Landscaping Company</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
              Premium landscaping and irrigation solutions built for Michigan seasons and soil. 
              Transforming Southeast Michigan properties for over half a decade.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Link 
                to="/contact"
                className="btn-primary text-lg px-8 py-4 w-full sm:w-auto flex items-center justify-center"
              >
                Request a Quote <ArrowUpRight className="ml-2" size={20} />
              </Link>
              <Link 
                to="/services"
                className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-brand-bg text-lg px-8 py-4 w-full sm:w-auto flex items-center justify-center"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats / Trust Section */}
      <section className="py-8 md:py-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Years Experience", value: "24+" },
              { label: "Projects Completed", value: "1.2k+" },
              { label: "Service Areas", value: "6+" },
              { label: "Happy Clients", value: "98%" }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-brand-primary mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-brand-text mb-6">
                Professional Services <br />
                You Can Depend On
              </h2>
              <p className="text-lg text-gray-600">
                From custom designs and renderings to sod, plant, and tree installation, 
                our landscaping services create and maintain beautiful outdoor spaces built to last.
              </p>
            </div>
            <Link 
              to="/services"
              className="flex items-center gap-2 text-brand-primary font-bold group"
            >
              View All Services <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <motion.div 
                key={service.title}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all p-8"
              >
                <div className="bg-brand-primary/10 text-brand-primary w-14 h-14 rounded flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <ul className="space-y-3 mb-8">
                  {service.items.slice(0, 3).map(item => (
                    <li key={item} className="flex items-center gap-2 text-gray-500 text-sm">
                      <CheckCircle2 size={14} className="text-brand-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/services"
                  className="absolute bottom-8 right-8 w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-brand-bg group-hover:text-white transition-all"
                >
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Difference */}
      <section className="py-24 bg-brand-bg text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded overflow-hidden">
                <img 
                  src="/regenerated_image_1777586429598.png" 
                  alt="Team working" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-brand-accent p-8 rounded text-brand-bg max-w-xs hidden md:block">
                <h4 className="text-2xl font-bold mb-2">Local Expertise</h4>
                <p className="text-sm font-medium opacity-80">
                  We understand Michigan’s unique landscaping challenges and deliver customized solutions.
                </p>
              </div>
            </div>

            <div>
              <span className="text-brand-accent font-mono text-sm uppercase tracking-widest mb-4 block">THE KEEGAN BROS DIFFERENCE</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Unmatched Quality, <br />
                Local Expertise
              </h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  At Keegan Bros, we’re a small, specialized team of six based right here in Plymouth, MI. 
                  With years of combined experience in landscaping and home services, we pride ourselves 
                  on our personalized approach and attention to detail.
                </p>
                <p>
                  We believe in building strong relationships with our clients and providing high-quality, 
                  tailored services that transform your outdoor spaces. No job is too big or small — 
                  when you work with us, you’re working directly with the people who care most about 
                  your vision and your property.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We take pride in our work and our reputation across Plymouth and surrounding areas.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Juliana Leland",
              text: "Keegan Bros has been taking care of my lawn for about a year now. They are always there same time every week. It is such a relief to come home from work and see such an amazing job done."
            },
            {
              name: "Tiffany Mathers",
              text: "Keegan Bros did an amazing job getting my sprinkler system back up and running at our home in Plymouth MI. The same day service made it super nice."
            },
            {
              name: "Chris Binney",
              text: "We’ve been using them for lawn care and irrigation repair. The difference has been incredible. Our yard has never looked this healthy."
            }
          ].map((t) => (
            <div key={t.name} className="bg-white p-8 rounded shadow-sm border border-gray-100 flex flex-col justify-between">
              <p className="text-gray-600 italic mb-6 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold">
                  {t.name[0]}
                </div>
                <div className="font-bold text-brand-text">{t.name}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-brand-primary rounded p-12 md:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Serving Our <br />Communities</h2>
                <p className="text-lg text-white/80 mb-12">
                  We provide high-end landscaping and irrigation services across Southeast Michigan. 
                  Check if we serve your neighborhood.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {areas.map(area => (
                    <div key={area} className="flex items-center gap-2 text-lg font-medium">
                      <MapPin size={18} className="text-brand-accent" />
                      {area}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Request a Free Estimate</h3>
                <form className="space-y-4">
                  <input type="text" placeholder="Full Name" className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors placeholder:text-white/50" />
                  <input type="email" placeholder="Email Address" className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors placeholder:text-white/50" />
                  <select className="w-full bg-white border border-white/20 rounded px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors text-black">
                    <option className="text-black">Select Service</option>
                    <option className="text-black">Landscaping</option>
                    <option className="text-black">Irrigation</option>
                    <option className="text-black">Lawn Care</option>
                  </select>
                  <textarea placeholder="Message" rows={4} className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors placeholder:text-white/50"></textarea>
                  <button className="w-full bg-brand-accent text-brand-bg font-bold py-4 rounded hover:bg-white transition-colors">
                    Send Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-bold">Latest from the Blog</h2>
            <a href="#" className="text-brand-primary font-bold flex items-center gap-2 group">
              Read All Posts <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Best Landscaping Plants for Plymouth MI",
                date: "March 21, 2026",
                image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1000"
              },
              {
                title: "Complete Guide to Outdoor Lighting",
                date: "March 15, 2026",
                image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&q=80&w=1000"
              }
            ].map(post => (
              <a key={post.title} href="#" className="group block">
                <div className="aspect-[16/9] rounded overflow-hidden mb-6">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-sm text-gray-500 font-mono mb-2 uppercase tracking-wider">{post.date}</div>
                <h3 className="text-2xl font-bold group-hover:text-brand-primary transition-colors">{post.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
