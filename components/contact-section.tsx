"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Phone, Mail, MapPin, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-black overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 text-sm font-semibold tracking-widest uppercase">
            Контакты
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3">
            Оставьте <span className="text-gradient">заявку</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-lg">
            Мы свяжемся с вами в течение 30 минут для обсуждения деталей
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {[
              {
                icon: Phone,
                image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=240",
                label: "Телефон",
                value: "+82-10-2410-0397",
                sublabel: "Пн-Пт: 10:00 — 19:00",
              },
              {
                icon: Mail,
                image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=240",
                label: "Email",
                value: "hello@uri-production.ru",
                sublabel: "Ответим в течение часа",
              },
              {
                icon: MapPin,
                image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=240",
                label: "Формат работы",
                value: "Южная Корея / онлайн",
                sublabel: "Работаем по всей Южной Корее и онлайн с клиентами по всему миру",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]"
              >
                <div
                  className="w-10 h-10 rounded-lg overflow-hidden border border-orange-500/30 flex items-center justify-center flex-shrink-0 bg-black/40"
                  style={{ backgroundImage: `linear-gradient(rgba(18, 12, 8, 0.5), rgba(18, 12, 8, 0.5)), url('${item.image}')`, backgroundSize: "cover", backgroundPosition: "center" }}
                >
                  <item.icon className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">{item.label}</div>
                  <div className="text-white font-medium">{item.value}</div>
                  <div className="text-xs text-gray-600 mt-0.5">{item.sublabel}</div>
                </div>
              </div>
            ))}

            <div className="p-5 rounded-xl border border-orange-500/20 bg-orange-500/[0.05]">
              <div className="text-white font-semibold mb-2">Бесплатная консультация</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Оставьте заявку — обсудим вашу задачу, подберём пакет и
                предложим первые идеи для контента.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center p-10 rounded-2xl border border-orange-500/30 bg-orange-500/[0.05]"
              >
                <CheckCircle className="w-16 h-16 text-orange-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Заявка отправлена!</h3>
                <p className="text-gray-400 text-center">
                  Мы свяжемся с вами в ближайшее время
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-6 lg:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm text-gray-400 mb-1.5">Имя</label>
                    <input
                      id="contact-name"
                      name="name"
                      required
                      type="text"
                      placeholder="Ваше имя"
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/30 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm text-gray-400 mb-1.5">Телефон</label>
                    <input
                      id="contact-phone"
                      name="phone"
                      required
                      type="tel"
                      placeholder="+82 (___) ___-__-__"
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/30 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-company" className="block text-sm text-gray-400 mb-1.5">Компания и ниша</label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    placeholder="Например: салон красоты, застройщик, эксперт"
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/30 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-package" className="block text-sm text-gray-400 mb-1.5">Интересующий пакет</label>
                  <select id="contact-package" name="package"                   className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-gray-400 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/30 transition-all appearance-none">
                    <option value="">Выберите пакет</option>
                    <option value="base">Базовый минимум — 5 видео</option>
                    <option value="gold">Золотая середина — 8 видео</option>
                    <option value="max">Роскошный максимум — 12 видео</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-comment" className="block text-sm text-gray-400 mb-1.5">Комментарий</label>
                  <textarea
                    id="contact-comment"
                    name="comment"
                    rows={3}
                    placeholder="Дополнительные пожелания..."
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/30 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 flex items-center justify-center gap-2"
                >
                  Отправить заявку <Send className="w-4 h-4" />
                </button>

                <p className="text-xs text-gray-600 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
