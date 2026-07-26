import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getRouteBySlug } from '../data/routesData';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import { 
  Phone, 
  Clock, 
  MapPin, 
  Navigation, 
  CheckCircle2, 
  Car, 
  Users, 
  ShieldCheck, 
  Sparkles,
  ChevronRight,
  ArrowRight,
  Compass
} from 'lucide-react';

// Vehicle images
import corollaImg from '../assets/Corolla.jpg';
import galaxyImg from '../assets/Galaxy.jpg';
import minivanImg from '../assets/Hyundai i800 Brabazon.png';
import mercedesvclassImg from '../assets/Mercedes-V-Class.jpeg';

// Official WhatsApp SVG Icon
const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-current">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const RouteLandingPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const route = slug ? getRouteBySlug(slug) : undefined;

  // Lifecycle for meta tags & JSON-LD schema cleanup
  useEffect(() => {
    if (!route) return;

    // Document Title & Description
    const originalTitle = document.title;
    document.title = route.title;

    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    let originalMetaDesc = metaDesc ? metaDesc.content : '';

    if (metaDesc) {
      metaDesc.content = route.metaDescription;
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      metaDesc.content = route.metaDescription;
      document.head.appendChild(metaDesc);
    }

    // Clean JSON-LD Schema injection
    const existingScript = document.getElementById('route-json-ld');
    if (existingScript) {
      existingScript.remove();
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "TaxiService",
          "@id": `https://www.brabazoncars.co.uk/transfers/${route.slug}#service`,
          "name": `Brabazon Cars - ${route.h1}`,
          "provider": {
            "@type": "Organization",
            "name": "Brabazon Cars",
            "telephone": "+447872910318",
            "url": "https://www.brabazoncars.co.uk"
          },
          "areaServed": [
            { "@type": "AdministrativeArea", "name": route.origin },
            { "@type": "AdministrativeArea", "name": route.destination }
          ],
          "description": route.metaDescription
        },
        {
          "@type": "Trip",
          "name": route.h1,
          "itinerary": {
            "@type": "ItemList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": route.origin },
              { "@type": "ListItem", "position": 2, "name": route.destination }
            ]
          }
        }
      ]
    };

    const script = document.createElement('script');
    script.id = 'route-json-ld';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    // Cleanup on unmount / route change
    return () => {
      document.title = originalTitle;
      if (metaDesc) {
        metaDesc.content = originalMetaDesc;
      }
      const scriptToRemove = document.getElementById('route-json-ld');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [route]);

  if (!route) {
    return <Navigate to="/" replace />;
  }

  const waMessage = `Hi Brabazon Cars, I would like to get a quote for a taxi from ${route.origin} to ${route.destination}.`;
  const waLink = `https://wa.me/447872910318?text=${encodeURIComponent(waMessage)}`;

  const vehicles = [
    {
      name: "Executive Saloon",
      capacity: "Up to 4 Passengers",
      image: corollaImg,
      desc: "Ideal for executive travel & small group airport runs."
    },
    {
      name: "Executive SUV",
      capacity: "Up to 6 Passengers",
      image: galaxyImg,
      desc: "Extra luggage capacity & luxury family comfort."
    },
    {
      name: "8-Seater Executive Minivan",
      capacity: "Up to 7 Passengers",
      image: minivanImg,
      desc: "Maximum space for large groups & extensive baggage."
    }
  ];

  const paragraphs = route.description.split('\n\n');

  return (
    <div className="min-h-screen pb-14 md:pb-0 bg-neutral-50 text-neutral-900">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-neutral-900 via-neutral-800 to-primary-950 text-white overflow-hidden">
        {/* Background Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-overlay"
          style={{ backgroundImage: `url(${mercedesvclassImg})` }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-sm text-neutral-400 mb-6">
            <Link to="/" className="hover:text-primary-400 transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-neutral-400">Transfers</span>
            <ChevronRight className="h-4 w-4" />
            <span className="text-primary-400 font-medium truncate max-w-[200px] sm:max-w-none">{route.origin} to {route.destination}</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-primary-500/20 border border-primary-400/30 text-primary-300 text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              <span>Dedicated Private Hire Route</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              {route.h1}
            </h1>

            <p className="text-lg md:text-xl text-neutral-300 mb-8 max-w-3xl leading-relaxed">
              Professional 24/7 private transfer service between <strong className="text-white">{route.origin}</strong> and <strong className="text-white">{route.destination}</strong>. Guaranteed punctuality, flight monitoring, and executive comfort.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon />
                <span>Get Instant Quote on WhatsApp</span>
              </a>

              <a
                href="tel:+447872910318"
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <Phone className="h-5 w-5 text-primary-400" />
                <span>Call Now: +44 7872 910318</span>
              </a>
            </div>

            {/* Minimal Nationwide Service Notice */}
            <div className="mt-8 bg-neutral-900/60 border border-neutral-800 rounded-xl p-4 md:p-5 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between text-left gap-4 text-sm text-neutral-300">
              <div className="flex items-start space-x-3">
                <Compass className="h-5 w-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong className="text-white font-semibold">Looking for a custom pickup?</strong> While this page details our popular {route.h1} transfer, we operate 24/7 across <span className="text-neutral-200">ALL postcodes</span> in Bristol, South Gloucestershire, Bath, and nationwide.
                </p>
              </div>
              <a
                href={`https://wa.me/447872910318?text=${encodeURIComponent('Hi Brabazon Cars, I would like to get a quote for a custom pickup route.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-primary-400 hover:text-primary-300 font-medium whitespace-nowrap text-xs transition-colors flex-shrink-0 group"
              >
                <span>Get custom route quote</span>
                <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts Grid (NO PRICES) */}
      <section className="py-10 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-neutral-50 to-primary-50/50 border border-neutral-200/80 flex items-center space-x-4">
              <div className="p-3 bg-primary-500/10 text-primary-600 rounded-xl">
                <Navigation className="h-7 w-7" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider font-semibold text-neutral-500">Distance</div>
                <div className="text-lg font-bold text-neutral-900">{route.distance}</div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-neutral-50 to-primary-50/50 border border-neutral-200/80 flex items-center space-x-4">
              <div className="p-3 bg-primary-500/10 text-primary-600 rounded-xl">
                <Clock className="h-7 w-7" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider font-semibold text-neutral-500">Est. Time</div>
                <div className="text-lg font-bold text-neutral-900">{route.estimatedTime}</div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-neutral-50 to-primary-50/50 border border-neutral-200/80 flex items-center space-x-4">
              <div className="p-3 bg-primary-500/10 text-primary-600 rounded-xl">
                <MapPin className="h-7 w-7" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider font-semibold text-neutral-500">Routing</div>
                <div className="text-lg font-bold text-neutral-900">Direct Motorway</div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-neutral-50 to-primary-50/50 border border-neutral-200/80 flex items-center space-x-4">
              <div className="p-3 bg-primary-500/10 text-primary-600 rounded-xl">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider font-semibold text-neutral-500">Availability</div>
                <div className="text-lg font-bold text-neutral-900">24/7 round-the-clock</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Map Embed */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-neutral-900 mb-6">
                  Private Taxi & Transfer Overview
                </h2>
                {paragraphs.map((p, idx) => (
                  <p key={idx} className="text-lg text-neutral-700 leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
              </div>

              {/* Highlights Box */}
              <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm">
                <h3 className="text-xl font-display font-bold text-neutral-900 mb-4 flex items-center space-x-2">
                  <Sparkles className="h-5 w-5 text-primary-600" />
                  <span>Key Route Benefits</span>
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {route.routeHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3 text-neutral-700">
                      <CheckCircle2 className="h-5 w-5 text-primary-600 flex-shrink-0" />
                      <span className="font-medium text-sm md:text-base">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Interactive Map Embed */}
            <div className="lg:col-span-5 bg-white p-4 rounded-2xl border border-neutral-200 shadow-md">
              <h3 className="text-lg font-display font-bold text-neutral-900 mb-3 px-2 flex items-center justify-between">
                <span>Route Preview</span>
                <span className="text-xs font-normal text-neutral-500">{route.origin} → {route.destination}</span>
              </h3>
              <div className="w-full h-80 rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200">
                <iframe
                  title={`Map showing route from ${route.origin} to ${route.destination}`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src={`https://maps.google.com/maps?q=${route.mapQuery}&t=&z=9&ie=UTF8&iwloc=&output=embed`}
                ></iframe>
              </div>
              <div className="mt-4 p-4 rounded-xl bg-primary-50/70 border border-primary-100 text-sm text-neutral-700">
                <p className="flex items-center space-x-2 font-medium text-primary-900 mb-1">
                  <Car className="h-4 w-4 text-primary-600" />
                  <span>Door-to-Door Convenience</span>
                </p>
                <p>Our drivers handle your luggage and navigate real-time traffic so you arrive completely stress-free.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Vehicles Section */}
      <section className="py-12 md:py-16 bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold text-neutral-900 mb-4">
              Select Your Vehicle for this Journey
            </h2>
            <p className="text-lg text-neutral-600">
              We maintain a versatile fleet to comfortably accommodate solo passengers, executive groups, and families with extensive luggage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {vehicles.map((v, i) => (
              <div key={i} className="bg-neutral-50 rounded-2xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
                <img src={v.image} alt={v.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display font-bold text-xl text-neutral-900">{v.name}</h3>
                    <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2.5 py-1 rounded-full">{v.capacity}</span>
                  </div>
                  <p className="text-neutral-600 text-sm mb-6">{v.desc}</p>
                  <a
                    href={`https://wa.me/447872910318?text=${encodeURIComponent(`Hi Brabazon Cars, I would like to book a ${v.name} for my trip from ${route.origin} to ${route.destination}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-sm font-semibold flex items-center justify-center space-x-2 transition-colors"
                  >
                    <span>Request Vehicle Quote</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Book CTA Banner */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 via-primary-950 to-neutral-900 border border-primary-800/40 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
            {/* Soft Ambient Brand Glows */}
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-primary-500/15 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-[#25D366]/15 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
                Ready to Book Your Transfer?
              </h2>
              <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
                Get an instant, fixed-rate quote directly on WhatsApp or call our team 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 transform hover:-translate-y-0.5"
                >
                  <WhatsAppIcon />
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href="tel:+447872910318"
                  className="w-full sm:w-auto bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <Phone className="h-5 w-5 text-primary-400" />
                  <span>Call +44 7872 910318</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default RouteLandingPage;
