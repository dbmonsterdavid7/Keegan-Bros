import React from 'react';
import { Phone, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCategory {
  title: string;
  items: string[];
}

interface ServicesPageProps {
  services: ServiceCategory[];
  phoneNumber: string;
}

export default function ServicesPage({ services, phoneNumber }: ServicesPageProps) {
  const getServiceId = (name: string) => name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 pt-28 lg:pt-32">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Main Content */}
        <div className="lg:w-2/3">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-text mb-8 leading-tight">
            Transforming Your Outdoors with Expert Landscaping, Lawn Care, and Irrigation Solutions
          </h1>
          
          <div className="mb-12 overflow-hidden rounded-xl shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1558905619-17153c2462b7?auto=format&fit=crop&q=80&w=1200" 
              alt="Beautiful landscape design" 
              className="w-full h-[400px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-brand-text mb-6">
              Comprehensive Outdoor Services for Year-Round Beauty
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              At Keegan Bros., we specialize in a variety of landscaping and outdoor solutions designed to transform your property into an inviting, well-planned space. Our expert team brings local expertise and creativity to every project, ensuring your outdoor environment thrives in the Michigan climate.
            </p>

            <div className="space-y-8 mb-12">
              {services.map((category) => (
                <div key={category.title} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-2xl font-bold text-brand-primary mb-4">{category.title} Services</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="mt-1.5 bg-brand-accent/20 p-1 rounded-full">
                          <ChevronRight size={14} className="text-brand-primary" />
                        </div>
                        <div>
                          <Link to={`/services/${getServiceId(item)}`} className="font-bold text-brand-text hover:text-brand-primary transition-colors block mb-1">
                            {item}:
                          </Link>
                          <span className="text-gray-600">
                            {item === "Landscape Design & Build" && "We create custom designs and install landscapes that reflect your vision and elevate curb appeal."}
                            {item === "Landscape Maintenance" && "Keep your landscape healthy and attractive with regular care, including trimming, weeding, and inspections."}
                            {item === "Designs & Renderings" && "Visualize your future landscape with detailed designs and 3D renderings."}
                            {item === "Sod Installation" && "Establish lush, green lawns with professional sod installation suited to Michigan conditions."}
                            {item === "Plant & Tree Installation" && "Select from a range of native and ornamental plants for optimal growth and beauty."}
                            {item === "Yard Cleanups" && "Comprehensive seasonal cleanups to keep your property looking its best year-round."}
                            {item === "Mulching" && "Professional mulch installation to suppress weeds and retain soil moisture."}
                            {item === "Plant Trimming & Pruning" && "Expert pruning to promote healthy growth and maintain the shape of your plants."}
                            {item === "Sprinkler Repairs" && "Fast and reliable repairs for all types of sprinkler systems to ensure optimal performance."}
                            {item === "Sprinkler Startups" && "Professional seasonal startups to get your irrigation system ready for the growing season."}
                            {item === "System Maintenance" && "Regular maintenance to prevent issues and keep your irrigation system running efficiently."}
                            {item === "French Drain Installation" && "Effective drainage solutions to manage water runoff and protect your property's foundation."}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <Link 
              to="/contact"
              className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold hover:bg-brand-primary/90 transition-all inline-block shadow-lg"
            >
              Get a Quote
            </Link>
          </div>

          <div className="mt-16 overflow-hidden rounded-xl shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&q=80&w=1200" 
              alt="Lawn maintenance in progress" 
              className="w-full h-[300px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:w-1/3 space-y-8">
          {/* Call to Action Box */}
          <div className="bg-brand-primary text-white p-8 rounded-xl shadow-xl text-center border-t-8 border-brand-accent">
            <p className="text-sm font-medium mb-2 opacity-90 uppercase tracking-wider">Call or Text Now!</p>
            <a href={`tel:${phoneNumber}`} className="text-3xl md:text-4xl font-bold hover:text-brand-accent transition-colors block">
              {phoneNumber}
            </a>
          </div>

          {/* Service Categories Sidebar */}
          {services.map((category) => (
            <div key={category.title} className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <div className="bg-white px-6 py-4 border-b border-gray-200">
                <h4 className="text-lg font-bold text-brand-primary">{category.title === 'Lawn Care' ? 'Lawn Care & Maintenance' : category.title + ' Services'}</h4>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item}>
                      <Link to={`/services/${getServiceId(item)}`} className="flex items-center gap-3 text-gray-600 hover:text-brand-primary transition-colors group">
                        <ChevronRight size={16} className="text-brand-accent group-hover:translate-x-1 transition-transform" />
                        <span className="text-sm font-medium">{item}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="h-2 bg-brand-primary"></div>
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
}
