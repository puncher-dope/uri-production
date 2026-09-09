"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check, ChevronRight } from "lucide-react";

const packages = [
  {
    name: "Базовый минимум",
    period: "1 месяц",
    price: "2.500.000₩",
    monthly: "130.000₽",
    tag: "5 видео",
    features: ["Полная упаковка страницы", "Видео по готовому сценарию заказчика", "Съёмка + монтаж", "Предоставляем актёра / модель"],
  },
  {
    name: "Золотая середина",
    period: "1 месяц",
    price: "3.700.000₩",
    monthly: "196.000₽",
    tag: "8 видео",
    features: ["Полная упаковка страницы", "Построение воронки продаж", "Написание сценариев и генерация идей", "Монтаж + съёмка", "Предоставляем актёра / модель"],
  },
  {
    name: "Роскошный максимум",
    period: "1 месяц",
    price: "5.500.000₩",
    monthly: "290.000₽",
    tag: "12 видео",
    features: ["Полная упаковка страницы", "Построение воронки продаж", "Написание сценариев и генерация идей", "Монтаж + съёмка", "Предоставляем актёра / модель"],
  },
];

const tabs = "Все пакеты";

export default function CatalogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("Все пакеты");

  const filtered = packages;

  return (
    <section id="catalog" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-orange-500 text-sm font-semibold tracking-widest uppercase">
            Пакеты услуг
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3">
            Выберите свой <span className="text-gradient">уровень</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Контент и продвижение для брендов, которым нужен заметный результат
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-2 mb-10 flex-wrap"
        >
            <button
              key={tabs}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 bg-orange-500 text-white shadow-lg shadow-orange-500/25`}
            >
              {tabs}
            </button>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {filtered.map((pack, i) => (
            <motion.div
              key={pack.name}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`group relative bg-white/[0.03] border rounded-2xl p-6 lg:p-8 hover:border-orange-500/50 transition-all duration-500 ${i === 1 ? "border-orange-500/50 shadow-xl shadow-orange-500/20" : "border-white/[0.06]"}`}
            >
              <span className="inline-flex bg-orange-500/15 text-orange-500 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">{pack.tag}</span>
              <h3 className="text-2xl font-semibold text-white mt-5">{pack.name}</h3>
              <p className="text-gray-500 text-sm mt-1">{pack.period}</p>
              <ul className="space-y-3 mt-6 min-h-[180px]">
                {pack.features.map((feature) => <li key={feature} className="flex gap-2 text-sm text-gray-300"><Check className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />{feature}</li>)}
              </ul>
              <div className="border-t border-white/[0.08] pt-5 mt-5">
                <div className="text-2xl font-bold text-white">{pack.price}</div>
                <div className="text-sm text-orange-500 mt-1">{pack.monthly} / месяц</div>
              </div>
              <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-medium transition-colors">Обсудить пакет <ChevronRight className="w-4 h-4" /></a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-10"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-medium transition-colors"
          >
            Не знаете, какой пакет выбрать? Поможем подобрать решение
            <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
