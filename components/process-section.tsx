"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    step: "01",
    title: "Знакомство",
    description: "Погружаемся в ваш бизнес, аудиторию и задачи на ближайший месяц.",
  },
  {
    step: "02",
    title: "Стратегия",
    description: "Определяем позиционирование, рубрики, форматы и ключевые смыслы бренда.",
  },
  {
    step: "03",
    title: "Сценарии",
    description: "Генерируем идеи и пишем сценарии, которые удерживают внимание с первых секунд.",
  },
  {
    step: "04",
    title: "Съёмка",
    description: "Организуем съёмочный день, предоставляем актёра или модель и снимаем контент.",
  },
  {
    step: "05",
    title: "Монтаж",
    description: "Собираем видео, добавляем графику, субтитры и адаптируем под площадки.",
  },
  {
    step: "06",
    title: "Публикация и рост",
    description: "Передаём готовый контент, анализируем отклик и усиливаем рабочие форматы.",
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#080808] to-black" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-red-500 text-sm font-semibold tracking-widest uppercase">
            Как мы работаем
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3">
            6 шагов к <span className="text-gradient">сильному контенту</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="relative p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-red-600/30 transition-all duration-500">
                <span className="text-5xl font-black text-red-600/10 group-hover:text-red-600/20 transition-colors duration-500 absolute top-3 right-4">
                  {step.step}
                </span>
                <div className="relative z-10">
                  <span className="text-red-500 font-bold text-lg">{step.step}</span>
                  <h3 className="text-white font-semibold text-lg mt-2 mb-2 group-hover:text-red-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector line for desktop */}
              {i < steps.length - 1 && i % 3 !== 2 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-red-600/30 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
