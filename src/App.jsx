import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Droplet, 
  Wrench, 
  Flame, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  CheckCircle,
  Clock,
  Shield,
  Star,
  Award,
  Users,
  Zap,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';

const BUSINESS_CONFIG = {
  BUSINESS_NAME: "AquaFlow Pro",
  TAGLINE: "Premium Plumbing Solutions for Modern Living",
  PHONE: "(555) 123-4567",
  EMAIL: "contact@aquaflow.com",
  CITY: "Los Angeles, CA"
};

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.8]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-950 to-cyan-950"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzFmNmZlZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full z-50 transition-all duration-300"
      >
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500 blur-xl opacity-50"></div>
                <Droplet className="h-10 w-10 text-cyan-400 relative" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {BUSINESS_CONFIG.BUSINESS_NAME}
                </span>
                <p className="text-xs text-cyan-400/60">Premium Service</p>
              </div>
            </motion.div>
            
            <div className="hidden lg:flex space-x-8">
              {['Home', 'About', 'Services', 'Reviews', 'Contact'].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-slate-300 hover:text-cyan-400 transition-colors font-medium relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
            </div>

            <motion.a
              href={`tel:${BUSINESS_CONFIG.PHONE}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-full font-semibold shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-shadow"
            >
              <Phone className="h-4 w-4" />
              <span>{BUSINESS_CONFIG.PHONE}</span>
            </motion.a>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-cyan-400"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          className="fixed inset-y-0 right-0 z-40 w-full bg-slate-900/95 backdrop-blur-xl lg:hidden"
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {['Home', 'About', 'Services', 'Reviews', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              style={{ opacity: heroOpacity, scale: heroScale }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6"
                >
                  <Zap className="h-4 w-4 text-cyan-400" />
                  <span className="text-sm text-cyan-400 font-medium">24/7 Emergency Service</span>
                </motion.div>

                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-none">
                  <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                    Expert
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
                    Plumbing
                  </span>
                  <br />
                  <span className="text-white">Solutions</span>
                </h1>

                <p className="text-xl text-slate-400 mb-8 leading-relaxed max-w-lg">
                  Transform your space with premium plumbing services. Fast, reliable, and built for excellence.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-full font-bold text-lg shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <span>Get Started</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </motion.a>

                  <motion.a
                    href={`tel:${BUSINESS_CONFIG.PHONE}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-cyan-400/50 backdrop-blur-sm px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-400/10 transition-all text-center"
                  >
                    Call Now
                  </motion.a>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  {[
                    { icon: Award, text: '15+ Years' },
                    { icon: Users, text: '5000+ Clients' },
                    { icon: Star, text: '5.0 Rating' }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      className="text-center"
                    >
                      <div className="flex justify-center mb-2">
                        <div className="relative">
                          <div className="absolute inset-0 bg-cyan-500/20 blur-xl"></div>
                          <item.icon className="h-8 w-8 text-cyan-400 relative" />
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-slate-300">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-3xl"></div>
                <div className="relative h-[600px] bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl rounded-3xl border border-cyan-500/20 overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMWY2ZmVmIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ 
                        rotate: 360,
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        scale: { duration: 3, repeat: Infinity }
                      }}
                    >
                      <Droplet className="h-64 w-64 text-cyan-400/30" />
                    </motion.div>
                  </div>
                  
                  {/* Floating Cards */}
                  <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-10 left-10 bg-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-4 shadow-2xl"
                  >
                    <Clock className="h-8 w-8 text-cyan-400 mb-2" />
                    <p className="text-sm font-bold">24/7 Available</p>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute bottom-10 right-10 bg-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-4 shadow-2xl"
                  >
                    <Shield className="h-8 w-8 text-cyan-400 mb-2" />
                    <p className="text-sm font-bold">Licensed Pro</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-32">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block text-cyan-400 font-semibold mb-4"
            >
              WHAT WE OFFER
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                Premium Services
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Droplet,
                title: "Leak Repair",
                description: "Advanced leak detection and repair using cutting-edge technology"
              },
              {
                icon: Wrench,
                title: "Drain Solutions",
                description: "Professional drain cleaning and maintenance services"
              },
              {
                icon: Flame,
                title: "Water Heaters",
                description: "Expert installation of modern tankless and traditional systems"
              },
              {
                icon: Zap,
                title: "Emergency",
                description: "Round-the-clock emergency plumbing support"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-cyan-500/20 blur-xl group-hover:blur-2xl transition-all"></div>
                      <div className="relative bg-gradient-to-br from-cyan-500/20 to-blue-500/20 w-16 h-16 rounded-2xl flex items-center justify-center border border-cyan-500/30">
                        <service.icon className="h-8 w-8 text-cyan-400" />
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center space-x-2 text-cyan-400 font-semibold group-hover:text-cyan-300"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="relative py-32 bg-gradient-to-b from-transparent via-cyan-950/20 to-transparent">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block text-cyan-400 font-semibold mb-4"
            >
              TESTIMONIALS
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                Client Success Stories
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                location: "Downtown LA",
                review: "Absolutely phenomenal service! The team arrived promptly and resolved our emergency with incredible professionalism. Highly recommended!"
              },
              {
                name: "Michael Chen",
                location: "West Hollywood",
                review: "From consultation to completion, everything was flawless. The attention to detail and quality of work exceeded all expectations."
              },
              {
                name: "Emily Rodriguez",
                location: "Santa Monica",
                review: "Best plumbing service in LA! Their expertise and customer care are unmatched. Will definitely use them for all future needs."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed italic">
                  "{testimonial.review}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500"></div>
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-cyan-400">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block text-cyan-400 font-semibold mb-4"
            >
              GET IN TOUCH
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                Start Your Project
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {[
                { icon: Phone, label: 'Phone', value: BUSINESS_CONFIG.PHONE, href: `tel:${BUSINESS_CONFIG.PHONE}` },
                { icon: Mail, label: 'Email', value: BUSINESS_CONFIG.EMAIL, href: `mailto:${BUSINESS_CONFIG.EMAIL}` },
                { icon: MapPin, label: 'Location', value: BUSINESS_CONFIG.CITY }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-6"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-cyan-500/20 blur-xl"></div>
                    <div className="relative bg-gradient-to-br from-cyan-500/20 to-blue-500/20 w-16 h-16 rounded-2xl flex items-center justify-center border border-cyan-500/30">
                      <item.icon className="h-6 w-6 text-cyan-400" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-lg font-semibold text-white hover:text-cyan-400 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-lg font-semibold text-white">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl p-8 rounded-2xl border border-cyan-500/20"
            >
              <div className="space-y-6">
                {[
                  { name: 'name', type: 'text', placeholder: 'Your Name' },
                  { name: 'email', type: 'email', placeholder: 'Your Email' },
                  { name: 'phone', type: 'tel', placeholder: 'Your Phone' }
                ].map((field) => (
                  <input
                    key={field.name}
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-slate-900/50 border border-cyan-500/20 rounded-xl focus:outline-none focus:border-cyan-400/50 text-white placeholder-slate-500 transition-colors"
                    placeholder={field.placeholder}
                  />
                ))}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-6 py-4 bg-slate-900/50 border border-cyan-500/20 rounded-xl focus:outline-none focus:border-cyan-400/50 text-white placeholder-slate-500 transition-colors resize-none"
                  placeholder="Describe your needs..."
                ></textarea>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 py-4 rounded-xl font-bold shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all"
                >
                  Send Message
                </motion.button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-cyan-500/20 py-12">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Droplet className="h-8 w-8 text-cyan-400" />
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {BUSINESS_CONFIG.BUSINESS_NAME}
                </span>
              </div>
              <p className="text-slate-400">
                Premium plumbing solutions for modern living. Available 24/7 for all your needs.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-slate-400 hover:text-cyan-400 transition-colors">Home</a></li>
                <li><a href="#about" className="text-slate-400 hover:text-cyan-400 transition-colors">About</a></li>
                <li><a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors">Services</a></li>
                <li><a href="#contact" className="text-slate-400 hover:text-cyan-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-white">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: '#' },
                  { icon: Twitter, href: '#' },
                  { icon: Instagram, href: '#' },
                  { icon: Linkedin, href: '#' }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="bg-slate-900/50 border border-cyan-500/20 p-3 rounded-xl hover:border-cyan-400/50 transition-all"
                  >
                    <social.icon className="h-5 w-5 text-cyan-400" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-cyan-500/20 pt-8 text-center">
            <p className="text-slate-400">
              &copy; {new Date().getFullYear()} {BUSINESS_CONFIG.BUSINESS_NAME}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;