import { useState } from 'react';
import {
  Menu,
  X,
  TrendingUp,
  DollarSign,
  HeadphonesIcon,
  BookOpen,
  Link2,
  BarChart3,
  Wallet,
  Star,
  Phone,
  MessageCircle,
  Instagram,
  ChevronRight,
  CheckCircle,
  ArrowRight,
  Users,
  Award,
  Zap,
  PhoneCall,
} from 'lucide-react';

// Custom WhatsApp links with unique messages for each CTA
const WA_BASE = 'https://wa.me/2347037291509?text=';
const WA_HEADER = WA_BASE + encodeURIComponent('Hi Wisdom, I want to join your Affiliate Marketing program. Please send me details on how to get started.');
const WA_HERO = WA_BASE + encodeURIComponent('Hello Wisdom, I saw your website and I\'m ready to start learning affiliate marketing. Please guide me on the next steps.');
const WA_SERVICE = WA_BASE + encodeURIComponent('Hi Wisdom, I\'m interested in learning more about your training programs. Can you share more details?');
const WA_CONTACT = WA_BASE + encodeURIComponent('Hi Wisdom, I\'m ready to start my journey! Please enroll me in your Affiliate Marketing program.');
const WA_FOOTER = WA_BASE + encodeURIComponent('Hi Wisdom, I\'d like to connect with you about your Affiliate Marketing program.');
const WA_TESTIMONIAL = WA_BASE + encodeURIComponent('Hi Wisdom, I saw the success stories on your website and I want to be next! Please tell me how to join.');

const PHONE_NUMBER = '07037291509';
const PHONE_INTL = '+2347037291509';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#why-choose-us' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full gradient-gold flex items-center justify-center">
              <span className="text-dark font-bold text-sm">W</span>
            </div>
            <span className="font-heading font-bold text-sm md:text-base text-white uppercase tracking-wider">
              Wisdom <span className="text-gold">Affiliate Marketing</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-gold transition-colors duration-300 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={`tel:${PHONE_INTL}`}
              className="flex items-center space-x-2 text-gold border border-gold/40 hover:bg-gold/10 transition-all px-4 py-2 rounded-full text-sm font-semibold"
            >
              <PhoneCall size={16} />
              <span>Call Now</span>
            </a>
            <a
              href={WA_HEADER}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-gold text-dark font-semibold px-6 py-2.5 rounded-full text-sm hover:opacity-90 transition-opacity shadow-lg shadow-gold/20"
            >
              Join Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-light border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-white/80 hover:text-gold transition-colors py-2 text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href={`tel:${PHONE_INTL}`}
              className="flex items-center justify-center space-x-2 text-gold border border-gold/40 hover:bg-gold/10 transition-all px-6 py-3 rounded-full text-sm font-semibold mt-2"
            >
              <PhoneCall size={16} />
              <span>Call Now</span>
            </a>
            <a
              href={WA_HEADER}
              target="_blank"
              rel="noopener noreferrer"
              className="block gradient-gold text-dark font-semibold px-6 py-3 rounded-full text-center text-sm mt-2"
            >
              Join Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-light to-dark"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
        </div>
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle, #FFD700 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-6">
              <Zap size={16} className="text-gold" />
              <span className="text-gold text-sm font-medium">Trusted by 500+ Students</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Learn How to{' '}
              <span className="text-gradient-gold">Earn Money Online</span>{' '}
              with Proven Affiliate Marketing Strategies.
            </h1>

            <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed max-w-xl">
              Join <span className="text-gold font-semibold">Chukwuemeka Wisdom Izunna</span> today and start earning commissions from top brands. No experience needed!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WA_HERO}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-gold text-dark font-bold px-8 py-4 rounded-full text-center text-base hover:opacity-90 transition-all shadow-lg shadow-gold/30 animate-pulse-gold flex items-center justify-center space-x-2"
              >
                <MessageCircle size={20} />
                <span>Start Learning Today</span>
              </a>
              <a
                href={`tel:${PHONE_INTL}`}
                className="border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-full text-center text-base hover:border-gold hover:text-gold transition-all flex items-center justify-center space-x-2"
              >
                <PhoneCall size={20} />
                <span>Call Us Directly</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-gold">500+</p>
                <p className="text-white/60 text-sm">Students</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-gold">₦10M+</p>
                <p className="text-white/60 text-sm">Earned by Students</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-gold">50%</p>
                <p className="text-white/60 text-sm">Commission Rate</p>
              </div>
            </div>
          </div>

          {/* Right Content - Image Placeholder */}
          <div className="hidden lg:block relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 gradient-gold rounded-3xl opacity-20 blur-2xl"></div>
              <div className="relative bg-dark-light border border-white/10 rounded-3xl p-8 h-full flex flex-col items-center justify-center">
                <div className="w-24 h-24 rounded-full gradient-gold flex items-center justify-center mb-6 animate-float">
                  <TrendingUp size={48} className="text-dark" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Start Earning Today</h3>
                <p className="text-white/60 text-center">Join our community of successful affiliate marketers</p>
                
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                  +₦50,000
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gold text-dark px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                  50% Commission
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const features = [
    {
      icon: <BookOpen size={32} />,
      title: 'Proven Strategies',
      description: 'Step-by-step guides that actually work. Follow our tested methods and start seeing results from week one.',
    },
    {
      icon: <DollarSign size={32} />,
      title: 'High Commissions',
      description: 'Earn up to 50% commission on every sale. The more you sell, the more you earn. Unlimited income potential.',
    },
    {
      icon: <HeadphonesIcon size={32} />,
      title: '24/7 Support',
      description: 'Get help whenever you need it. Our team and community are always available to guide you through challenges.',
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-light"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Why Join Our <span className="text-gradient-gold">Program?</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            We provide everything you need to succeed in affiliate marketing, from training to ongoing support.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-hover bg-dark-light/50 border border-white/10 rounded-2xl p-8 text-center group"
            >
              <div className="w-16 h-16 rounded-2xl gradient-gold flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-dark">{feature.icon}</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: <Users size={28} />,
      title: 'Register',
      description: 'Sign up through our WhatsApp and get instant access to our training materials.',
    },
    {
      number: '02',
      icon: <BookOpen size={28} />,
      title: 'Learn the Basics',
      description: 'Follow our step-by-step training modules to master affiliate marketing fundamentals.',
    },
    {
      number: '03',
      icon: <Wallet size={28} />,
      title: 'Start Earning',
      description: 'Apply what you\'ve learned and start earning commissions from your first sale.',
    },
  ];

  return (
    <section className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-dark"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">Simple Process</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            How It <span className="text-gradient-gold">Works</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Getting started is easy. Follow these three simple steps to begin your journey.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 rounded-full bg-dark-light border-2 border-gold/30 flex items-center justify-center group-hover:border-gold transition-colors">
                  <span className="text-gold">{step.icon}</span>
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full gradient-gold flex items-center justify-center text-dark font-bold text-xs">
                  {step.number}
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-white/60 leading-relaxed max-w-xs mx-auto">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 -right-4">
                  <ChevronRight size={24} className="text-gold/50" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: <BarChart3 size={28} />,
      title: 'Trading Basics',
      description: 'Understand the markets and make informed decisions. Learn technical analysis and market trends.',
    },
    {
      icon: <Link2 size={28} />,
      title: 'Affiliate Link Creation',
      description: 'Learn how to generate and track your unique links. Maximize your earnings with proper link management.',
    },
    {
      icon: <TrendingUp size={28} />,
      title: 'Marketing Strategies',
      description: 'Master social media and email marketing to drive sales. Build an audience that converts.',
    },
    {
      icon: <Wallet size={28} />,
      title: 'Financial Growth',
      description: 'Build a sustainable income stream online. Scale your earnings and achieve financial freedom.',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-light to-dark"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            What You'll <span className="text-gradient-gold">Learn</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Our comprehensive training covers everything you need to become a successful affiliate marketer.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-hover bg-dark/80 border border-white/10 rounded-2xl p-6 group relative overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 gradient-gold opacity-0 group-hover:opacity-5 transition-opacity"></div>
              
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                  <span className="text-gold">{service.icon}</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-5">{service.description}</p>
                <a
                  href={WA_SERVICE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gold text-sm font-semibold hover:gap-3 gap-2 transition-all"
                >
                  Learn More <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      name: 'John D.',
      role: 'Affiliate Marketer',
      text: 'I earned my first ₦50,000 in just 2 weeks! Wisdom\'s training is practical and easy to follow. Best decision I ever made.',
      rating: 4,
      initials: 'JD',
    },
    {
      name: 'Amina K.',
      role: 'Student & Earner',
      text: 'Before joining, I was skeptical. But after 1 month, I was already earning ₦100,000+ monthly. The support is incredible!',
      rating: 3,
      initials: 'AK',
    },
    {
      name: 'Emeka O.',
      role: 'Full-time Affiliate',
      text: 'I quit my 9-5 job because of this program. Now I earn more in a week than I used to earn in a month. Thank you, Wisdom!',
      rating: 4,
      initials: 'EO',
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-dark"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Success <span className="text-gradient-gold">Stories</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our students have to say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-hover bg-dark-light/50 border border-white/10 rounded-2xl p-8 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-gold/20">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-gold fill-gold" />
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <Star key={`empty-${i}`} size={18} className="text-white/20" />
                ))}
              </div>

              <p className="text-white/80 leading-relaxed mb-6 italic">"{testimonial.text}"</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center">
                    <span className="text-dark font-bold text-sm">{testimonial.initials}</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-white/50 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <a
                  href={WA_TESTIMONIAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-light transition-colors"
                  title="Join like this student"
                >
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-light"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-dark-light/80 border border-white/10 rounded-3xl p-8 md:p-16 backdrop-blur-sm">
          <div className="w-20 h-20 rounded-full gradient-gold flex items-center justify-center mx-auto mb-8">
            <Award size={40} className="text-dark" />
          </div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Start Your <span className="text-gradient-gold">Journey?</span>
          </h2>
          <p className="text-white/70 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of others who are already earning. Don't miss out on this opportunity to change your financial future!
          </p>

          {/* Benefits list */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10 max-w-lg mx-auto text-left">
            {[
              'Instant access to training',
              '24/7 community support',
              'Proven earning strategies',
              'No experience required',
            ].map((benefit, i) => (
              <div key={i} className="flex items-center space-x-2">
                <CheckCircle size={18} className="text-gold flex-shrink-0" />
                <span className="text-white/80 text-sm">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={WA_CONTACT}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn text-white font-bold px-10 py-4 rounded-full text-lg flex items-center space-x-3 shadow-xl"
            >
              <MessageCircle size={24} />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href={`tel:${PHONE_INTL}`}
              className="bg-gold text-dark font-bold px-10 py-4 rounded-full text-lg flex items-center space-x-3 shadow-xl hover:opacity-90 transition-opacity animate-pulse-gold"
            >
              <PhoneCall size={24} />
              <span>Call Now</span>
            </a>
          </div>

          {/* Phone number */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center space-x-2">
              <Phone size={18} className="text-gold" />
              <a href={`tel:${PHONE_INTL}`} className="text-white/80 hover:text-gold transition-colors text-lg font-semibold">
                {PHONE_NUMBER}
              </a>
            </div>
            <span className="hidden sm:block text-white/30">|</span>
            <div className="flex items-center space-x-2">
              <MessageCircle size={18} className="text-green-400" />
              <a href={WA_CONTACT} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-green-400 transition-colors text-lg font-semibold">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-dark border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full gradient-gold flex items-center justify-center">
                <span className="text-dark font-bold text-sm">W</span>
              </div>
              <span className="font-heading font-bold text-sm text-white uppercase tracking-wider">
                Wisdom <span className="text-gold">Affiliate Marketing</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Empowering individuals to achieve financial freedom through proven affiliate marketing strategies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-white/50 hover:text-gold transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href={WA_FOOTER}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-all text-white/70"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-all text-white/70"
              >
                <Instagram size={18} />
              </a>
              <a
                href={`tel:${PHONE_INTL}`}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-all text-white/70"
              >
                <Phone size={18} />
              </a>
            </div>
            <p className="text-white/50 text-sm mb-1">
              <Phone size={14} className="inline mr-2" />
              {PHONE_NUMBER}
            </p>
            <p className="text-white/50 text-sm">
              <MessageCircle size={14} className="inline mr-2 text-green-400" />
              <a href={WA_FOOTER} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                Chat on WhatsApp
              </a>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/40 text-sm">
            © 2026 Chukwuemeka Wisdom Izunna. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Floating Action Buttons (WhatsApp + Call)
function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
      {/* Call Button */}
      <a
        href={`tel:${PHONE_INTL}`}
        className="w-14 h-14 rounded-full bg-gold text-dark flex items-center justify-center shadow-lg shadow-gold/30 hover:scale-110 transition-transform"
        title="Call us directly"
      >
        <PhoneCall size={24} />
      </a>
      {/* WhatsApp Button */}
      <a
        href={WA_CONTACT}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 transition-transform"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden">
      <Header />
      <HeroSection />
      <WhyChooseUs />
      <HowItWorks />
      <Services />
      <Testimonials />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
