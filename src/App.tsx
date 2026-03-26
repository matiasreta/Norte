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
  ArrowRight, 
  Download, 
  Instagram, 
  Twitter, 
  Smartphone,
  Menu,
  X,
  ChevronRight
} from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#" },
    { name: "Funcionalidades", href: "#features" },
    { name: "Nuestra Filosofía", href: "#philosophy" },
    { name: "Contacto", href: "#contact" },
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
            Descargar ahora
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
            Descargar ahora
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
            <span>Disponible en iOS</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6">
            Encuentra tu dirección. <br />
            <span className="text-norte-accent italic">A tu propio ritmo.</span>
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-xl leading-relaxed">
            Un rastreador de hábitos diseñado para darte claridad, no ansiedad. 
            Visualiza tu día en una línea de tiempo intuitiva, entiende tu progreso 
            con estadísticas profundas y mejora sin la presión de las rachas perfectas.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-norte-primary text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-gray-800 transition-all shadow-xl shadow-black/10 active:scale-95">
              <Download size={20} />
              Descargar en la App Store
            </button>
            <button className="bg-white border border-gray-200 text-norte-primary px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-gray-50 transition-all active:scale-95">
              Disponible en Google Play
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 mx-auto w-[280px] md:w-[320px] aspect-[9/19] bg-norte-primary rounded-[3rem] p-3 shadow-2xl border-8 border-gray-900 overflow-hidden">
            {/* Mockup Content */}
            <div className="w-full h-full bg-white rounded-[2.2rem] overflow-hidden flex flex-col">
              <div className="p-6 pt-10">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Jueves, 26 Mar</p>
                    <h3 className="font-display font-bold text-xl">Tu Norte</h3>
                  </div>
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="text-norte-accent" size={20} />
                  </div>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-100"></div>
                  
                  {[
                    { time: "07:00", title: "Meditación", done: true },
                    { time: "08:30", title: "Lectura matutina", done: true },
                    { time: "10:00", title: "Trabajo profundo", done: false },
                    { time: "13:00", title: "Caminata diaria", done: false },
                    { time: "18:00", title: "Gimnasio", done: false },
                  ].map((item, i) => (
                    <div key={i} className="mb-8 relative">
                      <div className={`absolute -left-[25px] top-1.5 w-3 h-3 rounded-full border-2 border-white shadow-sm ${item.done ? "bg-norte-accent" : "bg-gray-200"}`}></div>
                      <p className="text-[10px] text-gray-400 font-bold mb-1 uppercase tracking-tighter">{item.time}</p>
                      <div className={`p-3 rounded-xl border ${item.done ? "bg-blue-50/50 border-blue-100" : "bg-white border-gray-100"}`}>
                        <p className={`text-sm font-semibold ${item.done ? "text-norte-accent" : "text-gray-700"}`}>{item.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Tu día, visualizado y sin estrés.</h2>
          <div className="w-20 h-1 bg-norte-accent mx-auto rounded-full"></div>
        </div>

        <div className="space-y-32">
          {/* Feature 1 */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-black/5 border border-gray-100"
            >
              <div className="relative pl-12 py-4">
                <div className="absolute left-5 top-0 bottom-0 w-1 bg-gray-50 rounded-full"></div>
                {[1, 2, 3].map((i) => (
                  <div key={i} className="mb-12 relative">
                    <div className="absolute -left-[34px] top-2 w-5 h-5 rounded-full bg-white border-4 border-norte-accent shadow-md"></div>
                    <div className="h-24 w-full bg-gray-50 rounded-2xl animate-pulse"></div>
                  </div>
                ))}
              </div>
            </motion.div>
            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-norte-accent mb-6">
                <Clock size={24} />
              </div>
              <h3 className="text-3xl font-display font-bold mb-4">Tu día de un vistazo.</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Olvídate de las listas desordenadas. Nuestro innovador timeline vertical 
                organiza tus hábitos y horarios de forma fluida. Sabrás exactamente qué 
                sigue en tu día con solo deslizar la pantalla.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-6">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-3xl font-display font-bold mb-4">Datos que te ayudan a crecer.</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                A medida que completas tus hábitos, Norte genera estadísticas detalladas 
                automáticamente. Descubre cuáles son tus horas más productivas y entiende 
                tus patrones de comportamiento para tomar decisiones informadas sobre tu rutina.
              </p>
            </div>
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              viewport={{ once: true }}
              className="order-1 md:order-2 bg-white p-8 rounded-[2.5rem] shadow-xl shadow-black/5 border border-gray-100"
            >
              <div className="flex items-end gap-2 h-48">
                {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    className="flex-1 bg-norte-accent/20 rounded-t-lg relative group"
                  >
                    <div className="absolute inset-0 bg-norte-accent rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                <span>Lun</span><span>Mar</span><span>Mie</span><span>Jue</span><span>Vie</span><span>Sab</span><span>Dom</span>
              </div>
            </motion.div>
          </div>

          {/* Feature 3 */}
          <div id="philosophy" className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-[2.5rem] shadow-xl shadow-black/5 border border-gray-100 flex items-center justify-center"
            >
              <div className="relative">
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-40 h-40 bg-pink-50 rounded-full flex items-center justify-center"
                >
                  <Heart size={64} className="text-pink-400 fill-pink-400" />
                </motion.div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-yellow-400">
                  <CheckCircle2 size={24} />
                </div>
              </div>
            </motion.div>
            <div>
              <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-500 mb-6">
                <Heart size={24} />
              </div>
              <h3 className="text-3xl font-display font-bold mb-4">Información, no obligación.</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Creemos que el desarrollo personal no debe sentirse como un castigo. 
                Norte no utiliza rachas que te hagan sentir culpable si fallas un día. 
                Estamos aquí para ofrecerte un espejo de tus hábitos, para que mejores 
                a tu manera y sin presiones.
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
      title: "Define tu Norte.",
      text: "Agrega los hábitos que deseas cultivar y asígnales un momento en tu día."
    },
    {
      number: "02",
      title: "Sigue el flujo.",
      text: "Usa el timeline vertical interactivo para ir marcando tu progreso conforme avanza el reloj."
    },
    {
      number: "03",
      title: "Observa tu evolución.",
      text: "Revisa tus estadísticas semanales o mensuales para ajustar tu rutina y celebrar tu crecimiento."
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-balance">Construir una mejor rutina nunca fue tan simple.</h2>
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
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Empieza a entender tus hábitos hoy.</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Únete a la comunidad de personas que están mejorando su vida sin estrés. 
            Descarga Norte y toma el control de tu tiempo.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-norte-primary px-10 py-5 rounded-2xl font-bold flex items-center gap-3 hover:bg-gray-100 transition-all active:scale-95 shadow-xl">
              <Download size={24} />
              Descargar en la App Store
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
              Diseñado para la claridad. Construido para tu crecimiento.
            </p>
          </div>
          
          <div>
            <h5 className="font-bold mb-6">Legal</h5>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#" className="hover:text-norte-accent">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-norte-accent">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-norte-accent">Soporte</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6">Síguenos</h5>
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
          <p>© 2026 NewSalto. Todos los derechos reservados.</p>
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
