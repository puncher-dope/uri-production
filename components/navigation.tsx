"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, ChevronRight, Moon, Sun } from "lucide-react";

const navLinks = [
  { href: "#hero", label: "Главная" },
  { href: "#services", label: "Услуги" },
  { href: "#catalog", label: "Пакеты" },
  { href: "#advantages", label: "Преимущества" },
  { href: "#contact", label: "Контакты" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    const savedTheme = window.localStorage.getItem("uri-theme");
    if (savedTheme === "light") {
      setLightMode(true);
      document.documentElement.classList.add("light");
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextLightMode = !lightMode;
    setLightMode(nextLightMode);
    document.documentElement.classList.toggle("light", nextLightMode);
    window.localStorage.setItem("uri-theme", nextLightMode ? "light" : "dark");
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/90 backdrop-blur-xl shadow-lg shadow-orange-900/10 border-b border-orange-900/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-orange-500 rounded-lg rotate-45 group-hover:rotate-[50deg] transition-transform duration-500" />
                <span className="relative font-bold text-white text-sm">UP</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-wider">URI<span className="text-orange-500"> PRODUCTION</span></span>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-orange-500 group-hover:w-3/4 transition-all duration-300" />
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <a href="mailto:hello@uri-production.ru" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm">
                <Mail className="w-4 h-4 text-orange-500" />
                <span>hello@uri-production.ru</span>
              </a>
              <a
                href="#contact"
                className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 flex items-center gap-1"
              >
                Обсудить проект <ChevronRight className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={lightMode ? "Включить тёмный режим" : "Включить светлый режим"}
                title={lightMode ? "Тёмный режим" : "Светлый режим"}
                className="w-10 h-10 rounded-lg border border-white/10 text-gray-300 hover:text-white hover:border-orange-500/50 flex items-center justify-center transition-colors"
              >
                {lightMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </button>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-20 lg:hidden"
          >
            <nav className="flex flex-col items-center gap-6 p-8">
              <button
                type="button"
                onClick={toggleTheme}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                {lightMode ? <Moon className="w-5 h-5 text-orange-500" /> : <Sun className="w-5 h-5 text-orange-500" />}
                {lightMode ? "Тёмный режим" : "Светлый режим"}
              </button>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-2xl font-semibold text-white hover:text-orange-500 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="mailto:hello@uri-production.ru"
                className="flex items-center gap-2 text-gray-300 mt-4"
              >
                <Mail className="w-5 h-5 text-orange-500" />
                hello@uri-production.ru
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
