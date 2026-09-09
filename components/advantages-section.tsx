"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Clock,
  Globe,
  Banknote,
  Video,
  MapPin,
  Headphones,
} from "lucide-react";

const advantages = [
  {
    icon: Globe,
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=320",
    title: "Контент под ключ",
    description: "Одна команда отвечает за стратегию, съёмку, монтаж и публикацию.",
  },
  {
    icon: Banknote,
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=320",
    title: "Понятный результат",
    description: "Связываем креатив с задачами бизнеса, а не гонимся за охватами ради охватов.",
  },
  {
    icon: Clock,
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=320",
    title: "Скорость запуска",
    description: "Быстро тестируем идеи и выпускаем контент регулярно, без долгих согласований.",
  },
  {
    icon: Video,
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=320",
    title: "Видео, которые смотрят",
    description: "Динамичные ролики с сильным хуком, сценарием и понятным призывом к действию.",
  },
  {
    icon: MapPin,
    image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=320",
    title: "Ваша ниша — наша задача",
    description: "Погружаемся в специфику бизнеса и говорим с аудиторией на одном языке.",
  },
  {
    icon: Headphones,
    image: "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=320",
    title: "Прозрачная коммуникация",
    description: "Вы всегда знаете, что в работе, на каком этапе проект и какой следующий шаг.",
  },
];

export default function AdvantagesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="advantages" className="relative py-24 lg:py-32 bg-black overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-orange-500 text-sm font-semibold tracking-widest uppercase">
              Почему мы
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 leading-tight">
              Сильный бренд,<br />
              который <span className="text-gradient">замечают</span>
            </h2>
            <p className="text-gray-400 mt-6 text-lg leading-relaxed">
              Мы превращаем идеи в системный контент, который помогает брендам
              выделяться, вызывать доверие и расти в социальных сетях.
            </p>

            {/* Counter stats */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                { value: "300+", label: "готовых видео" },
                { value: "12+", label: "ниш в портфолио" },
                { value: "5", label: "этапов в работе" },
                { value: "0", label: "шаблонных решений" },
              ].map((stat) => (
                <div key={stat.label} className="border border-white/[0.06] rounded-xl p-4 bg-white/[0.02]">
                  <div className="text-2xl font-bold text-orange-500">{stat.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {advantages.map((adv, i) => (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="group relative overflow-hidden p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-orange-500/30 transition-all duration-500"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ backgroundImage: `url('${adv.image}')` }}
                />
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl overflow-hidden mb-3 border border-orange-500/30 bg-black/30">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url('${adv.image}')` }}
                    />
                  </div>
                <h3 className="text-white font-semibold mb-2 group-hover:text-orange-400 transition-colors">
                  {adv.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {adv.description}
                </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
