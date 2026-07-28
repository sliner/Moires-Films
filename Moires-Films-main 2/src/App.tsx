import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail, Film, Send, Check, ArrowLeft } from 'lucide-react';

// Shared Layout Wrapper with Non-Interactive Responsive Footer
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#d5e0eb] text-zinc-900 font-sans flex flex-col justify-between items-center px-4 py-8 md:py-12 relative select-none antialiased selection:bg-zinc-300">
      {/* Top spacing */}
      <div className="w-full h-4 md:h-8" />

      {/* Main Container */}
      <main className="w-full max-w-2xl my-auto flex flex-col items-center text-center space-y-6 md:space-y-8">
        {children}
      </main>

      {/* Fixed Bottom Right Non-Interactive Responsive Label */}
      <footer className="w-full max-w-4xl flex justify-end items-center space-x-6 pt-6 z-20">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 flex items-center space-x-2.5 sm:space-x-3.5 pointer-events-none select-none"
        >
          <span className="text-[10px] sm:text-[11px] font-normal tracking-[0.2em] uppercase text-zinc-500">
            home
          </span>

          <span className="text-zinc-300 text-[9px] sm:text-[10px]">•</span>

          <span className="text-[10px] sm:text-[11px] font-normal tracking-[0.2em] uppercase text-zinc-500">
            about
          </span>
          
          <span className="text-zinc-300 text-[9px] sm:text-[10px]">•</span>

          <span className="text-[10px] sm:text-[11px] font-normal tracking-[0.2em] uppercase text-zinc-500">
            contact
          </span>
        </motion.div>
      </footer>
    </div>
  );
}

// HOME PAGE
function HomePage() {
  const primaryImgUrl = "https://i.ibb.co/PvTGBF6n/image.jpg";
  const fallbackImgUrl = "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1600&auto=format&fit=crop";

  const [imgSrc, setImgSrc] = useState(primaryImgUrl);

  const handleImageError = () => {
    if (imgSrc === primaryImgUrl) {
      setImgSrc("https://i.ibb.co/PvTGBF6n/image.png");
    } else if (imgSrc === "https://i.ibb.co/PvTGBF6n/image.png") {
      setImgSrc(fallbackImgUrl);
    }
  };

  return (
    <Layout>
      {/* Title - Sans Serif */}
      <motion.h1 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-[0.25em] text-zinc-950 uppercase font-sans pl-[0.25em]"
        id="main-title"
      >
        <Link to="/" className="hover:opacity-90 transition-opacity">
          MOIRES FILMS
        </Link>
      </motion.h1>

      {/* Picture Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        className="w-full flex justify-center items-center group"
      >
        <Link 
          to="/about" 
          className="inline-block cursor-pointer focus:outline-none"
          title="About MOIRES FILMS"
        >
          <img 
            src={imgSrc} 
            alt="MOIRES FILMS" 
            onError={handleImageError}
            referrerPolicy="no-referrer"
            className="w-auto h-auto max-w-full max-h-[70vh] object-contain rounded-sm shadow-xs transition-transform duration-700 ease-out group-hover:scale-[1.01]"
            id="hero-image"
          />
        </Link>
      </motion.div>

      {/* Text: "more to come..." */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-zinc-500 font-light text-sm sm:text-base tracking-[0.18em] lowercase pt-1"
        id="subtext"
      >
        more to come...
      </motion.p>
    </Layout>
  );
}

// ABOUT PAGE (/about)
function AboutPage() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center space-y-6 max-w-xl mx-auto px-4 my-auto">
        {/* Title - Sans Serif */}
        <motion.h1 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-[0.25em] text-zinc-950 uppercase font-sans pl-[0.25em]"
          id="about-title"
        >
          <Link to="/" className="hover:opacity-90 transition-opacity">
            MOIRES FILMS
          </Link>
        </motion.h1>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-light-serif font-light text-xs sm:text-sm text-zinc-700 leading-relaxed tracking-[0.06em] text-center max-w-md"
          id="about-subtext"
        >
          MOIRES FILMS is an independant film production company created by Judith Berrebi, Tess Noonan and Sophie Liner.
        </motion.p>

        {/* Copyright */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-[11px] sm:text-xs text-zinc-400 font-light tracking-[0.15em] pt-4"
          id="about-copyright"
        >
          © 2026
        </motion.p>
      </div>
    </Layout>
  );
}

// CONTACT PAGE (/contact)
function ContactPage() {
  const [emailSent, setEmailSent] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactForm.email && contactForm.message) {
      setEmailSent(true);
      setTimeout(() => {
        setEmailSent(false);
        setContactForm({ name: '', email: '', message: '' });
      }, 3000);
    }
  };

  return (
    <Layout>
      {/* Title Header - Sans Serif */}
      <motion.h1 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-[0.25em] text-zinc-950 uppercase font-sans pl-[0.25em]"
        id="contact-title"
      >
        <Link to="/" className="hover:opacity-90 transition-opacity">
          MOIRES FILMS
        </Link>
      </motion.h1>

      {/* Main Contact Card */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="w-full max-w-lg bg-white/75 backdrop-blur-xs border border-zinc-200/80 rounded-sm p-6 sm:p-10 shadow-2xs text-left space-y-6"
        id="contact-card"
      >
        <div className="flex items-center space-x-2 text-zinc-400 text-xs tracking-[0.2em] uppercase font-mono border-b border-zinc-200/60 pb-3">
          <Mail className="w-3.5 h-3.5" />
          <span>Inquiries & Press</span>
        </div>

        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-normal tracking-[0.15em] uppercase text-zinc-950 font-sans">
            Contact
          </h2>
          <a 
            href="mailto:contact@moiresfilms.com" 
            className="text-sm sm:text-base font-mono text-zinc-800 hover:text-zinc-950 underline underline-offset-4 block transition-colors"
          >
            contact@moiresfilms.com
          </a>
        </div>

        {emailSent ? (
          <motion.div 
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-sm text-xs text-center flex items-center justify-center space-x-2 my-4"
          >
            <Check className="w-4 h-4 text-emerald-600" />
            <span>Message sent successfully. Thank you.</span>
          </motion.div>
        ) : (
          <form onSubmit={handleSendMessage} className="space-y-4 pt-1">
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-zinc-500 mb-1">
                Your Name
              </label>
              <input 
                type="text"
                required
                value={contactForm.name}
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                placeholder="Jane Doe"
                className="w-full text-xs px-3.5 py-2.5 bg-white border border-zinc-200 rounded-sm focus:outline-none focus:border-zinc-500 transition-colors text-zinc-900 placeholder:text-zinc-400"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-wider text-zinc-500 mb-1">
                Email Address
              </label>
              <input 
                type="email"
                required
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                placeholder="jane@example.com"
                className="w-full text-xs px-3.5 py-2.5 bg-white border border-zinc-200 rounded-sm focus:outline-none focus:border-zinc-500 transition-colors text-zinc-900 placeholder:text-zinc-400"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-wider text-zinc-500 mb-1">
                Message
              </label>
              <textarea 
                rows={3}
                required
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                placeholder="Inquiry or project submission..."
                className="w-full text-xs px-3.5 py-2.5 bg-white border border-zinc-200 rounded-sm focus:outline-none focus:border-zinc-500 transition-colors text-zinc-900 placeholder:text-zinc-400 resize-none"
              />
            </div>

            <div className="pt-2 flex justify-between items-center">
              <Link 
                to="/"
                className="text-[11px] text-zinc-500 hover:text-zinc-900 transition-colors flex items-center space-x-1"
              >
                <ArrowLeft className="w-3 h-3" />
                <span>Home</span>
              </Link>

              <button 
                type="submit"
                className="flex items-center space-x-1.5 text-xs uppercase tracking-[0.15em] font-medium text-white bg-zinc-900 hover:bg-zinc-800 transition-colors px-5 py-2.5 rounded-sm cursor-pointer shadow-xs"
              >
                <Send className="w-3 h-3" />
                <span>Send</span>
              </button>
            </div>
          </form>
        )}
      </motion.div>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-zinc-500 font-light text-sm tracking-[0.18em] lowercase pt-1"
      >
        more to come...
      </motion.p>
    </Layout>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
