import React from 'react';
import { Clock, Car, Tag, Headphones } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Clock className="h-12 w-12" />,
      title: "Reliable & Punctual",
      description: "Always on time, every time. We track flights and monitor traffic to ensure you never miss your connection."
    },
    {
      icon: <Car className="h-12 w-12" />,
      title: "Versatile Modern Fleet",
      description: "From comfort saloons to spacious minivans, our well-maintained vehicles are comfortable and immaculate."
    },
    {
      icon: <Tag className="h-12 w-12" />,
      title: "Fixed Fares & Clear Pricing",
      description: "No hidden charges or surge pricing. Know exactly what you'll pay with our transparent, competitive rates."
    },
    {
      icon: <Headphones className="h-12 w-12" />,
      title: "24/7 Customer Service",
      description: "Round-the-clock support for bookings, changes, and assistance. We're here when you need us most."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-100 via-accent-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4 fade-in-up">
            Why Choose Brabazon Cars?
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto fade-in-up stagger-1">
            Experience the difference with our commitment to excellence
          </p>
        </div>

        <div className="space-y-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-16 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              } ${index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'}`}
            >
              {/* Icon Section */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-accent-200 rounded-full blur-xl opacity-50"></div>
                  <div className="relative bg-gradient-to-br from-primary-500 to-accent-500 p-8 rounded-full text-white shadow-2xl icon-hover icon-pulse">
                    {benefit.icon}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className={`flex-1 text-center lg:text-left ${
                index % 2 === 1 ? 'lg:ml-auto' : ''
              }`}>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-neutral-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Section */}
        <div className="mt-20 text-center fade-in-up">
          <div className="inline-flex items-center space-x-8 bg-white/80 backdrop-blur-sm px-8 py-6 rounded-2xl shadow-lg card-hover">
            <div className="text-center">
              <div className="text-3xl font-display font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-sm text-neutral-600 font-medium">Satisfaction</div>
            </div>
            <div className="h-8 w-px bg-neutral-300"></div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-sm text-neutral-600 font-medium">Support</div>
            </div>
            <div className="h-8 w-px bg-neutral-300"></div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                5★
              </div>
              <div className="text-sm text-neutral-600 font-medium">Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;