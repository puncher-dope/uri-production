"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Search,
  Sparkles,
  Video,
  FileText,
  TrendingUp,
  BadgeCheck,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Стратегия и идеи",
    description:
      "Погружаемся в ваш бизнес, находим точки роста и формируем контент-план, который работает на цели.",
  },
  {
    icon: Sparkles,
    title: "Упаковка страницы",
    description:
      "Приводим визуал, тексты и позиционирование к единому образу, чтобы бренду доверяли с первого взгляда.",
  },
  {
    icon: Video,
    title: "Съёмка и монтаж",
    description:
      "Снимаем вертикальные видео по готовым сценариям или создаём концепции с нуля — от идеи до публикации.",
  },
  {
    icon: TrendingUp,
    title: "Воронка продаж",
    description:
      "Связываем контент с бизнесом: выстраиваем путь от первого просмотра до обращения и покупки.",
  },
  {
    icon: FileText,
    title: "Сценарии и тексты",
    description:
      "Пишем живые сценарии, цепляющие первые секунды, описания и призывы к действию для вашей аудитории.",
  },
  {
    icon: BadgeCheck,
    title: "Актёр или модель",
    description:
      "Предоставляем актёров и моделей под задачу, чтобы каждый ролик выглядел естественно и профессионально.",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-red-500 text-sm font-semibold tracking-widest uppercase">
            Наши услуги
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3">
            Всё для роста <span className="text-gradient">вашего бренда</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Берём на себя весь контент-цикл — от идеи до результата
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.06] rounded-2xl p-6 lg:p-8 hover:border-red-600/30 transition-all duration-500 hover:shadow-lg hover:shadow-red-900/10"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-red-600/0 to-red-600/0 group-hover:from-red-600/5 group-hover:to-transparent transition-all duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-600/20 flex items-center justify-center mb-5 group-hover:bg-red-600/20 group-hover:border-red-600/40 transition-all duration-500">
                  <service.icon className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
