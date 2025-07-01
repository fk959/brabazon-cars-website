import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      text: "A fantastic and reliable service. The driver was professional and the vehicle was immaculate. Will definitely use again for our next holiday.",
      author: "Sarah L.",
      rating: 5,
      service: "Airport Transfer"
    },
    {
      text: "Brabazon Cars made our UK tour absolutely perfect. The driver's local knowledge was incredible and the service was first-class throughout.",
      author: "Michael & Janet R.",
      rating: 5,
      service: "Private UK Tour"
    },
    {
      text: "Punctual, professional, and great value. I use them regularly for business trips and they never let me down. Highly recommended!",
      author: "David C.",
      rating: 5,
      service: "Local Journeys"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4 fade-in-up">
            What Our Customers Say
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto fade-in-up stagger-1">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto fade-in-up stagger-2">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-white/20">
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl text-neutral-800 text-center mb-8 leading-relaxed">
              "{testimonials[currentSlide].text}"
            </blockquote>
            
            <div className="text-center">
              <div className="font-display font-bold text-lg text-neutral-900">
                {testimonials[currentSlide].author}
              </div>
              <div className="text-primary-600 font-medium">
                {testimonials[currentSlide].service}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white/90 backdrop-blur-sm shadow-lg rounded-full p-3 hover:bg-white transition-all duration-200 border border-white/20 button-hover"
          >
            <ChevronLeft className="h-6 w-6 text-neutral-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white/90 backdrop-blur-sm shadow-lg rounded-full p-3 hover:bg-white transition-all duration-200 border border-white/20 button-hover"
          >
            <ChevronRight className="h-6 w-6 text-neutral-600" />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-gradient-to-r from-primary-500 to-accent-500' : 'bg-neutral-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;