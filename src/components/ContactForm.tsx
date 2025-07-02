import React, { useState, useEffect } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    passengers: '',
    contactNumber: '',
    journeyDetails: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [placeholderText, setPlaceholderText] = useState('');
  const [currentExampleIndex, setCurrentExampleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const placeholderExamples = [
    "Airport Pickup for family of 5 (1 baby seat required) at London Gatwick on Saturday 28th July at around 5pm...",
    "Airport Drop Off at Stansted Airport for 4 people on 23rd July at 3am...",
    "Private day trip of London Central for 3 people on the 31st January...",
    "Trip from Bristol City Centre to London Central 1st April morning, return trip back to Bristol 4 April evening..."
  ];

  useEffect(() => {
    let typingTimer: NodeJS.Timeout;
    let pauseTimer: NodeJS.Timeout;
    let cycleTimer: NodeJS.Timeout;

    const typeText = (text: string, index: number = 0) => {
      if (index <= text.length) {
        setPlaceholderText(text.substring(0, index));
        setIsTyping(true);
        typingTimer = setTimeout(() => typeText(text, index + 1), 50);
      } else {
        setIsTyping(false);
        pauseTimer = setTimeout(() => {
          clearText(text.length);
        }, 3000);
      }
    };

    const clearText = (length: number) => {
      if (length >= 0) {
        setPlaceholderText(placeholderExamples[currentExampleIndex].substring(0, length));
        typingTimer = setTimeout(() => clearText(length - 2), 30);
      } else {
        cycleTimer = setTimeout(() => {
          setCurrentExampleIndex((prev) => (prev + 1) % placeholderExamples.length);
        }, 500);
      }
    };

    typeText(placeholderExamples[currentExampleIndex]);

    return () => {
      clearTimeout(typingTimer);
      clearTimeout(pauseTimer);
      clearTimeout(cycleTimer);
    };
  }, [currentExampleIndex]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        passengers: '',
        contactNumber: '',
        journeyDetails: ''
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4 fade-in-up">
            Plan Your Journey Today
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto fade-in-up stagger-1">
            Fill out the form below for a no-obligation quote. We'll get back to you promptly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 fade-in-left">
            <div>
              <h3 className="text-2xl font-display font-bold text-neutral-900 mb-6">
                Get In Touch
              </h3>
              <p className="text-lg text-neutral-600 mb-8">
                Ready to book your journey? Contact us directly or fill out the quote form and we'll respond promptly.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-br from-primary-100 to-accent-100 p-3 rounded-xl">
                  <Phone className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">Phone</div>
                  <div className="text-neutral-600">+44 7872 910318</div>
                  <div className="text-neutral-600">+44 7515 347262</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-br from-primary-100 to-accent-100 p-3 rounded-xl">
                  <Mail className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">Email</div>
                  <div className="text-neutral-600">brabazoncars@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-br from-primary-100 to-accent-100 p-3 rounded-xl">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">Service Area</div>
                  <div className="text-neutral-600">Bristol, Surrounding Areas & All UK Airports</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-6 rounded-2xl border border-primary-100">
              <h4 className="font-display font-bold text-neutral-900 mb-2">24/7 Availability</h4>
              <p className="text-neutral-700">
                We're available around the clock for bookings and emergency transport needs. 
                Don't hesitate to contact us anytime.
              </p>
            </div>
          </div>

          {/* Quote Form */}
          <div className="bg-gradient-to-br from-neutral-50 to-primary-50 p-8 rounded-2xl border border-white/20 card-hover fade-in-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-neutral-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="passengers" className="block text-sm font-semibold text-neutral-900 mb-2">
                  Number of Passengers *
                </label>
                <select
                  id="passengers"
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm"
                >
                  <option value="">Select number of passengers</option>
                  <option value="1">1 Passenger</option>
                  <option value="2">2 Passengers</option>
                  <option value="3">3 Passengers</option>
                  <option value="4">4 Passengers</option>
                  <option value="5">5 Passengers</option>
                  <option value="6">6 Passengers</option>
                  <option value="7">7 Passengers</option>
                  <option value="8">8 Passengers</option>
                  <option value="9">9 Passengers</option>
                </select>
              </div>

              <div>
                <label htmlFor="contactNumber" className="block text-sm font-semibold text-neutral-900 mb-2">
                  Contact Number *
                </label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="journeyDetails" className="block text-sm font-semibold text-neutral-900 mb-2">
                  Journey Details *
                </label>
                <div className="relative">
                  <textarea
                    id="journeyDetails"
                    name="journeyDetails"
                    value={formData.journeyDetails}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none bg-white/80 backdrop-blur-sm"
                    placeholder=""
                  />
                  {!formData.journeyDetails && (
                    <div className="absolute top-3 left-4 pointer-events-none text-neutral-500">
                      <span className="typing-placeholder">
                        {placeholderText}
                        <span className={`typing-cursor ${isTyping ? 'animate-pulse' : ''}`}>|</span>
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 button-hover ${
                  isSubmitted
                    ? 'bg-green-500 text-white'
                    : isSubmitting
                    ? 'bg-neutral-400 text-white cursor-not-allowed'
                    : 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 transform hover:scale-105 shadow-lg hover:shadow-xl'
                }`}
              >
                {isSubmitted ? (
                  <span>Quote Request Sent!</span>
                ) : isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Get Your Quote</span>
                    <Send className="h-5 w-5 icon-hover" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .typing-placeholder {
          font-family: inherit;
          font-size: inherit;
          line-height: inherit;
        }
        
        .typing-cursor {
          color: #0ea5e9;
          font-weight: bold;
          animation: blink 1s infinite;
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default ContactForm;