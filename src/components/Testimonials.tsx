import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Play, Pause } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  
  const testimonials = [
    {
      text: "A fantastic and reliable service. The driver was professional and the vehicle was immaculate. Will definitely use again for our next holiday.",
      author: "Sarah L.",
      rating: 5,
      service: "Airport Transfer",
      location: "Bristol to Heathrow"
    },
    {
      text: "Brabazon Cars made our UK tour absolutely perfect. The driver's local knowledge was incredible and the service was first-class throughout.",
      author: "Michael & Janet R.",
      rating: 5,
      service: "Private UK Tour",
      location: "7-Day England Tour"
    },
    {
      text: "Punctual, professional, and great value. I use them regularly for business trips and they never let me down. Highly recommended!",
      author: "David C.",
      rating: 5,
      service: "Local Journeys",
      location: "Bristol Business Travel"
    },
    {
      text: "Outstanding service from start to finish. The booking process was seamless and the driver arrived exactly on time. The vehicle was spotless and comfortable.",
      author: "Emma T.",
      rating: 5,
      service: "Airport Transfer",
      location: "Bristol to Gatwick"
    },
    {
      text: "We used Brabazon Cars for our wedding day transportation. They went above and beyond to make our special day perfect. Truly exceptional service!",
      author: "James & Sophie M.",
      rating: 5,
      service: "Special Events",
      location: "Wedding Transportation"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || isPaused) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000); // 4 seconds per slide
    
    return () => clearInterval(timer);
  }, [testimonials.length, isPlaying, isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Pause on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
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

        <div className="relative max-w-5xl mx-auto fade-in-up stagger-2">
          {/* Main Carousel Container */}
          <div 
            className="relative overflow-hidden rounded-2xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-white/90 backdrop-blur-sm shadow-xl p-8 md:p-12 border border-white/20 mx-2">
                    {/* Rating Stars */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 text-yellow-400 fill-current mx-0.5" />
                      ))}
                    </div>
                    
                    {/* Testimonial Text */}
                    <blockquote className="text-xl md:text-2xl text-neutral-800 text-center mb-8 leading-relaxed font-medium">
                      "{testimonial.text}"
                    </blockquote>
                    
                    {/* Author Info */}
                    <div className="text-center">
                      <div className="font-display font-bold text-lg text-neutral-900 mb-1">
                        {testimonial.author}
                      </div>
                      <div className="text-primary-600 font-medium mb-1">
                        {testimonial.service}
                      </div>
                      <div className="text-neutral-500 text-sm">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 space-x-6">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="bg-white/90 backdrop-blur-sm shadow-lg rounded-full p-3 hover:bg-white transition-all duration-200 border border-white/20 button-hover group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-neutral-600 group-hover:text-primary-600 transition-colors duration-200" />
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full p-3 hover:from-primary-600 hover:to-primary-700 transition-all duration-200 shadow-lg button-hover group"
              aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
            >
              {isPlaying ? (
                <Pause className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
              ) : (
                <Play className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
              )}
            </button>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="bg-white/90 backdrop-blur-sm shadow-lg rounded-full p-3 hover:bg-white transition-all duration-200 border border-white/20 button-hover group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-neutral-600 group-hover:text-primary-600 transition-colors duration-200" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 scale-125' 
                    : 'bg-neutral-300 hover:bg-neutral-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              >
                {/* Progress indicator for current slide */}
                {index === currentSlide && isPlaying && !isPaused && (
                  <div 
                    className="absolute inset-0 rounded-full bg-white/30"
                    style={{
                      animation: 'progress 4s linear infinite'
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Testimonial Counter */}
          <div className="text-center mt-4">
            <span className="text-sm text-neutral-500 font-medium">
              {currentSlide + 1} of {testimonials.length}
            </span>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center fade-in-up stagger-3">
          <div className="inline-flex items-center space-x-8 bg-white/80 backdrop-blur-sm px-8 py-6 rounded-2xl shadow-lg card-hover">
            <div className="text-center">
              <div className="text-3xl font-display font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                500+
              </div>
              <div className="text-sm text-neutral-600 font-medium">Happy Customers</div>
            </div>
            <div className="h-8 w-px bg-neutral-300"></div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                5★
              </div>
              <div className="text-sm text-neutral-600 font-medium">Average Rating</div>
            </div>
            <div className="h-8 w-px bg-neutral-300"></div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-sm text-neutral-600 font-medium">Support</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;