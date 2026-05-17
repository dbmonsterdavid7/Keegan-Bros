import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useParams } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import { serviceDetails } from './data/serviceDetails';
import { services, areas, phoneNumber } from './data/constants';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function ServiceDetailWrapper() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? serviceDetails[serviceId] : null;

  if (!service) {
    return <div className="pt-32 text-center min-h-[60vh] flex items-center justify-center font-serif text-2xl">Service not found</div>;
  }

  return <ServiceDetailPage service={service} phoneNumber={phoneNumber} />;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={
            <HomePage 
              services={services} 
              areas={areas} 
            />
          } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={
            <ServicesPage 
              services={services} 
              phoneNumber={phoneNumber} 
            />
          } />
          <Route path="/services/:serviceId" element={<ServiceDetailWrapper />} />
          <Route path="/contact" element={<ContactPage phoneNumber={phoneNumber} />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
