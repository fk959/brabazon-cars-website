import React from 'react';
import { Users } from 'lucide-react';

// Fix the import paths to correctly reference assets in the root directory
import corollaImg from '../assets/Corolla.jpg';
import galaxyImg from '../assets/Galaxy.jpg';
import vivaroImg from '../assets/Vivaro.jpg';

const Fleet = () => {
  const vehicles = [
    {
      name: "5-Seater Premium Saloon",
      capacity: "Up to 5 passengers",
      description: "Perfect for business trips or small groups. Comfortable, professional, and efficient.",
      image: corollaImg,
      altText: "Toyota Corolla 5-seater premium saloon car - professional private hire vehicle",
      features: ["Executive comfort", "Professional service", "Airport transfers"]
    },
    {
      name: "7-Seater Comfort SUV",
      capacity: "Up to 7 passengers",
      description: "Spacious and versatile for families or medium groups with extra luggage space.",
      image: galaxyImg,
      altText: "Ford Galaxy 7-seater comfort SUV - spacious family vehicle for private hire",
      features: ["Extra luggage space", "Family-friendly", "All-weather capability"]
    },
    {
      name: "9-Seater Touring Minivan",
      capacity: "Up to 9 passengers",
      description: "Ideal for large groups, corporate events, or extended family travel with maximum comfort.",
      image: vivaroImg,
      altText: "Vauxhall Vivaro 9-seater touring minivan - large group transportation vehicle",
      features: ["Large groups", "Corporate events", "Maximum comfort"]
    }
  ];

  return (
    <section id="fleet" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4 fade-in-up">
            A Vehicle for Every Need
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto fade-in-up stagger-1">
            From solo business trips to large family holidays, our modern and comfortable fleet has you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br from-neutral-50 to-primary-50 rounded-2xl overflow-hidden shadow-md fleet-card-hover fade-in-up ${
                index === 0 ? 'stagger-1' : index === 1 ? 'stagger-2' : 'stagger-3'
              }`}
            >
              <div className="aspect-w-16 aspect-h-10 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.altText}
                  className="w-full h-48 object-cover fleet-image-hover"
                  loading="lazy"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-display font-bold text-neutral-900">
                    {vehicle.name}
                  </h3>
                  <div className="flex items-center text-primary-600 fleet-icon-hover">
                    <Users className="h-5 w-5 mr-1" />
                    <span className="font-semibold text-sm">
                      {vehicle.capacity.split(' ')[2]}
                    </span>
                  </div>
                </div>
                
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  {vehicle.description}
                </p>
                
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-neutral-900 mb-2">
                    Key Features:
                  </div>
                  {vehicle.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-neutral-600">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mr-3 fleet-dot-hover"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;