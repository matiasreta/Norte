/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  CheckCircle2, 
  Clock, 
  BarChart3, 
  Heart, 
  Download, 
  Instagram, 
  Twitter, 
  Smartphone,
  Menu,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import habitos1 from "./images/habitos1.png";
import habitos2 from "./images/habitos2.png";
import estadisticas from "./images/estadisticas.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#features" },
    { name: "Our Philosophy", href: "#philosophy" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass py-3 shadow-sm" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-norte-primary rounded-lg flex items-center justify-center">
            <div className="w-1 h-4 bg-white rounded-full rotate-45 translate-x-0.5"></div>
            <div className="w-1 h-4 bg-white rounded-full -rotate-45 -translate-x-0.5"></div>
          </div>
          <span className="font-display font-bold text-xl tracking-tighter">Norte <span className="text-gray-400 font-normal text-sm ml-1">byNewSalto</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium hover:text-norte-accent transition-colors">
              {link.name}
            </a>
          ))}
          <button className="bg-norte-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all shadow-lg shadow-black/5 active:scale-95">
            Download now
          </button>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
        >
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
              {link.name}
            </a>
          ))}
          <button className="bg-norte-primary text-white px-5 py-3 rounded-xl text-center font-semibold">
            Download now
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-norte-accent text-xs font-bold uppercase tracking-wider mb-6">
            <Smartphone size={14} />
            <span>Available on iOS</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6">
            Find your direction. <br />
            <span className="text-norte-accent italic">At your own pace.</span>
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-xl leading-relaxed">
            A habit tracker designed to give you clarity, not anxiety. 
            Visualize your day in an intuitive timeline, understand your progress 
            with deep insights, and improve without the pressure of perfect streaks.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-norte-primary text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-gray-800 transition-all shadow-xl shadow-black/10 active:scale-95">
              <Download size={20} />
              Download on the App Store
            </button>
            <button className="bg-white border border-gray-200 text-norte-primary px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-gray-50 transition-all active:scale-95">
              Available on Google Play
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 mx-auto w-[280px] md:w-[320px] aspect-[9/19.5] bg-norte-primary rounded-[3rem] p-2.5 shadow-2xl border-[10px] border-gray-900 overflow-hidden">
            <img 
              src={habitos2} 
              alt="Norte App Timeline View" 
              className="w-full h-full object-cover rounded-[2rem]"
            />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gray-100 rounded-full blur-3xl opacity-50 -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-24 bg-norte-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-balance">Your day, visualized and stress-free.</h2>
          <div className="w-20 h-1 bg-norte-accent mx-auto rounded-full"></div>
        </div>

        <div className="space-y-32">
          {/* Feature 1 */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              viewport={{ once: true }}
              className="relative w-full max-w-[420px] h-[440px] mx-auto overflow-hidden"
            >
              <img 
                src={habitos1} 
                alt="Habits Timeline Screenshot" 
                className="w-full h-full object-cover object-top scale-110 origin-top translate-y-6"
              />
            </motion.div>
            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-norte-accent mb-6">
                <Clock size={24} />
              </div>
              <h3 className="text-3xl font-display font-bold mb-4">Your day at a glance.</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Forget about messy lists. Our innovative vertical timeline 
                organizes your habits and schedules seamlessly. You'll know exactly what's 
                next in your day with just a swipe.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-6">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-3xl font-display font-bold mb-4">Data that helps you grow.</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                As you complete your habits, Norte automatically generates detailed statistics. 
                Discover your most productive hours and understand your behavior patterns 
                to make informed decisions about your routine.
              </p>
            </div>
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              viewport={{ once: true }}
              className="order-1 md:order-2 relative w-full max-w-[420px] h-[440px] mx-auto overflow-hidden"
            >
              <img 
                src={estadisticas} 
                alt="Statistics View Screenshot" 
                className="w-full h-full object-cover object-center scale-[1.15]"
              />
            </motion.div>
          </div>

          {/* Feature 3 */}
          <div id="philosophy" className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              viewport={{ once: true }}
              className="relative w-full max-w-[420px] h-[440px] mx-auto overflow-hidden"
            >
              <img 
                src={habitos2} 
                alt="Norte App Habits View" 
                className="w-full h-full object-cover object-[center_30%] scale-110 origin-[center_30%]"
              />
            </motion.div>
            <div>
              <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-500 mb-6">
                <Heart size={24} />
              </div>
              <h3 className="text-3xl font-display font-bold mb-4">Insights, not obligations.</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe personal development shouldn't feel like a punishment. 
                Norte doesn't use streaks that make you feel guilty if you miss a day. 
                We're here to offer a mirror of your habits, so you can improve 
                on your own terms and without pressure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Define your North.",
      text: "Add the habits you want to cultivate and assign them a time in your day."
    },
    {
      number: "02",
      title: "Follow the flow.",
      text: "Use the interactive vertical timeline to mark your progress as the clock moves forward."
    },
    {
      number: "03",
      title: "Watch your evolution.",
      text: "Review your weekly or monthly statistics to adjust your routine and celebrate your growth."
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-balance">Building a better routine has never been simpler.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-3xl bg-white border border-gray-100 hover:border-norte-accent transition-colors group"
            >
              <span className="text-6xl font-display font-black text-gray-50 absolute -top-6 left-6 group-hover:text-blue-50 transition-colors -z-10">{step.number}</span>
              <h4 className="text-xl font-bold mb-4 mt-4">{step.title}</h4>
              <p className="text-gray-600 leading-relaxed">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto bg-norte-primary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-black/20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-transparent"></div>
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Start understanding your habits today.</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join the community of people who are improving their lives without stress. 
            Download Norte and take control of your time.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-norte-primary px-10 py-5 rounded-2xl font-bold flex items-center gap-3 hover:bg-gray-100 transition-all active:scale-95 shadow-xl">
              <Download size={24} />
              Download on the App Store
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-norte-primary rounded-lg flex items-center justify-center">
                <div className="w-1 h-4 bg-white rounded-full rotate-45 translate-x-0.5"></div>
                <div className="w-1 h-4 bg-white rounded-full -rotate-45 -translate-x-0.5"></div>
              </div>
              <span className="font-display font-bold text-xl tracking-tighter">Norte <span className="text-gray-400 font-normal text-sm ml-1">byNewSalto</span></span>
            </div>
            <p className="text-gray-500 max-w-xs leading-relaxed">
              Designed for clarity. Built for your growth.
            </p>
          </div>
          
          <div>
            <h5 className="font-bold mb-6">Legal</h5>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="/privacy" className="hover:text-norte-accent">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-norte-accent">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-norte-accent">Support</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6">Follow Us</h5>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-600 hover:bg-norte-accent hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-600 hover:bg-norte-accent hover:text-white transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-600 hover:bg-norte-accent hover:text-white transition-all">
                <Smartphone size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400 font-medium">
          <p>© 2026 NewSalto. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-norte-primary">Instagram</a>
            <a href="#" className="hover:text-norte-primary">X / Twitter</a>
            <a href="#" className="hover:text-norte-primary">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-norte-accent">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
