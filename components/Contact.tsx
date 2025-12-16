import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: 'Web Development',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      const response = await fetch("https://formspree.io/f/xrbnwkkk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormState({ name: '', email: '', service: 'Web Development', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const data = await response.json();
        if (data.errors && Array.isArray(data.errors)) {
             setErrorMessage(data.errors.map((err: any) => err.message).join(", "));
        } else {
             setErrorMessage("Oops! There was a problem submitting your form.");
        }
      }
    } catch (error) {
      setErrorMessage("Unable to connect to the server. Please check your internet connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-base font-bold text-primary-600 uppercase tracking-wide">Get in Touch</h2>
            <p className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Let's Discuss Your Project
            </p>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Whether you need a new website, a digital marketing strategy, or IT support, I'm here to help you achieve your goals. Fill out the form, and I'll get back to you within 24 hours.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-100 text-primary-600">
                    <Mail size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-slate-900">Email</p>
                  <p className="mt-1 text-slate-600">contact@newazahmed.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-100 text-primary-600">
                    <Phone size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-slate-900">Phone</p>
                  <p className="mt-1 text-slate-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-100 text-primary-600">
                    <MapPin size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-slate-900">Location</p>
                  <p className="mt-1 text-slate-600">New York, NY (Remote Friendly)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 rounded-2xl p-8 lg:p-10 shadow-lg border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Book a Consultation</h3>
            
            {submitted && (
              <div className="bg-green-100 border border-green-200 text-green-800 rounded-lg p-4 mb-6 flex items-center animate-fade-in-up">
                <span className="font-medium">Thanks! I'll be in touch soon.</span>
              </div>
            )}

            {errorMessage && (
              <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 mb-6 flex items-start animate-fade-in-up">
                <AlertCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <span className="font-medium text-sm">{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors bg-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors bg-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">Service Interested In</label>
                <select
                  name="service"
                  id="service"
                  value={formState.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors bg-white"
                >
                  <option>Web Development</option>
                  <option>Digital Marketing</option>
                  <option>IT Services</option>
                  <option>Google Admin Support</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors bg-white"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-all shadow-lg hover:shadow-primary-500/40 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message <Send size={18} className="ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;