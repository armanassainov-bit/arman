"use client";

import { useMemo, useState } from "react";
import { doors, type Door } from "@/data/doors";
import { DoorCard } from "@/components/door-card";

type FilterOption = "all" | Door["style"];

const filters: { label: string; value: FilterOption }[] = [
  { label: "Все коллекции", value: "all" },
  { label: "Современные", value: "modern" },
  { label: "Классика", value: "classic" },
  { label: "Лофт", value: "loft" }
];

const benefits = [
  {
    title: "Премиальные материалы",
    description:
      "Используем инженерный шпон, термодерево и алюминиевые профили от итальянских производителей."
  },
  {
    title: "Индивидуальные решения",
    description:
      "Подбор полотен по высоте до 3,2 м, любые оттенки по RAL/NCS, интеграция скрытых коробов и доводчиков."
  },
  {
    title: "Монтаж под ключ",
    description:
      "Собственная монтажная служба, чистовые работы за один день, официальная гарантия 3 года."
  }
];

const steps = [
  {
    title: "Консультация и замер",
    text: "Удалённо либо на объекте. Снимаем размеры, согласуем технические узлы, подбираем фурнитуру."
  },
  {
    title: "Проект и согласование",
    text: "Подготавливаем 3D-визуализации, прорабатываем спецификацию и фиксируем стоимость."
  },
  {
    title: "Изготовление",
    text: "Собственное производство. Контролируем качество на каждом этапе, предоставляем фотоотчёты."
  },
  {
    title: "Доставка и монтаж",
    text: "Привозим в согласованную дату, аккуратно монтируем, даём рекомендации по уходу."
  }
];

const faqs = [
  {
    q: "Можно ли подобрать двери в цвет стен или мебели?",
    a: "Да, мы тонируем покрытия по палитрам RAL и NCS, а также делаем подбор по образцу. Предоставим образцы фактур до утверждения."
  },
  {
    q: "Какие есть варианты скрытых дверей?",
    a: "Мы предлагаем решения flush-to-wall с алюминиевой коробкой, поворотные двери 360°, а также рото-двери для узких проёмов."
  },
  {
    q: "Сколько длится монтаж?",
    a: "Монтаж одного проёма занимает 2–3 часа. Полный комплект из 5 дверей ставим за 1 день."
  }
];

const contactChannels = [
  {
    label: "Позвонить",
    value: "+7 (495) 123-45-67"
  },
  {
    label: "Telegram",
    value: "@doorstyle_msk"
  },
  {
    label: "Шоурум",
    value: "Москва, Павелецкая набережная, 2"
  }
];

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("all");

  const filteredDoors = useMemo(() => {
    if (activeFilter === "all") {
      return doors;
    }
    return doors.filter((door) => door.style === activeFilter);
  }, [activeFilter]);

  return (
    <main className="relative flex min-h-screen flex-col gap-24 pb-24">
      <section className="relative overflow-hidden bg-hero-pattern bg-cover bg-center text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-slate-900/90 to-slate-950/90" />
        <div className="container-grid relative z-10 flex flex-col gap-6 py-28 sm:py-32">
          <div className="badge max-w-max border-white/20 bg-white/10 text-white/90">
            Tuktuk.astana
          </div>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Двери, которые подчеркивают архитектуру вашего интерьера
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-white/75">
            Подбор коллекций для квартир бизнес-класса и частных резиденций. Создаём
            единое пространство с идеальной геометрией проёмов и безупречными
            деталями.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#catalog"
              className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-base font-medium text-slate-900 shadow-lg shadow-accent/40 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-accent/90"
            >
              Смотреть каталог
            </a>
            <a
              href="#consultation"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3 text-base font-medium text-white transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              Получить консультацию
            </a>
          </div>
        </div>
        <div className="blur-glow" />
      </section>

      <section className="container-grid">
        <div className="grid gap-10 rounded-3xl bg-white/80 p-8 shadow-card backdrop-blur-sm lg:grid-cols-5 lg:items-center">
          <div className="lg:col-span-2">
            <h2 className="section-title">Почему выбирают DoorStyle</h2>
            <p className="section-subtitle">
              Сопровождаем проект от замера до монтажа. Используем решения, которые
              создают эффект встроенной архитектуры.
            </p>
          </div>
          <dl className="grid gap-6 sm:grid-cols-2 lg:col-span-3">
            <div className="glass-card p-6">
              <dt className="text-sm uppercase tracking-[0.18em] text-primary">Опыт</dt>
              <dd className="mt-4 text-3xl font-semibold text-slate-900">13 лет</dd>
              <p className="mt-2 text-sm text-slate-500">в дверных решениях премиум-сегмента</p>
            </div>
            <div className="glass-card p-6">
              <dt className="text-sm uppercase tracking-[0.18em] text-primary">
                Выполнено проектов
              </dt>
              <dd className="mt-4 text-3xl font-semibold text-slate-900">480+</dd>
              <p className="mt-2 text-sm text-slate-500">коттеджей, пентхаусов и резиденций</p>
            </div>
            <div className="glass-card p-6">
              <dt className="text-sm uppercase tracking-[0.18em] text-primary">Гарантия</dt>
              <dd className="mt-4 text-3xl font-semibold text-slate-900">3 года</dd>
              <p className="mt-2 text-sm text-slate-500">на полотно и фурнитуру</p>
            </div>
            <div className="glass-card p-6">
              <dt className="text-sm uppercase tracking-[0.18em] text-primary">
                Сроки поставки
              </dt>
              <dd className="mt-4 text-3xl font-semibold text-slate-900">от 14 дней</dd>
              <p className="mt-2 text-sm text-slate-500">в зависимости от серии</p>
            </div>
          </dl>
        </div>
      </section>

      <section id="catalog" className="container-grid">
        <div className="flex flex-col gap-5">
          <div>
            <h2 className="section-title">Каталог коллекций</h2>
            <p className="section-subtitle">
              Подберите двери под стиль Вашего интерьера. Каждую модель можно адаптировать
              по высоте, толщине и цветовым решениям.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveFilter(filter.value)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  activeFilter === filter.value
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "bg-white/70 text-slate-600 ring-1 ring-slate-200 hover:bg-white"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {filteredDoors.map((door) => (
            <DoorCard key={door.id} door={door} />
          ))}
        </div>
      </section>

      <section className="container-grid">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="space-y-5">
            <h2 className="section-title">Технологии и сервис</h2>
            <p className="section-subtitle">
              Работая с нами, вы получаете не просто полотна, а продуманное архитектурное
              решение.
            </p>
            <ul className="grid gap-5">
              {benefits.map((benefit) => (
                <li
                  key={benefit.title}
                  className="rounded-3xl border border-slate-200/70 bg-white/70 p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-slate-900">{benefit.title}</h3>
                  <p className="mt-2 text-base text-slate-600">{benefit.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-4xl border border-slate-200/60 bg-gradient-to-br from-primary/90 via-primary/80 to-slate-900 p-8 text-white shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2),transparent_50%)]" />
            <div className="relative space-y-5">
              <span className="badge border-white/20 bg-white/15 text-white/90">
                Архитектору или дизайнеру
              </span>
              <h3 className="text-3xl font-semibold">
                Поддержка проектов с BIM и полным комплектом технической документации
              </h3>
              <p className="text-base text-white/80">
                Предоставляем DWG-чертежи, спецификации, узлы примыкания и помогаем
                адаптировать решения под вашу стройку.
              </p>
              <a
                href="#consultation"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-primary shadow-lg shadow-black/20 transition hover:bg-white/90"
              >
                Запросить документацию
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container-grid">
        <div className="grid gap-8 rounded-3xl bg-white/80 p-8 shadow-card backdrop-blur-sm lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="space-y-4">
            <h2 className="section-title">Как мы работаем</h2>
            <p className="section-subtitle">
              Прозрачный процесс от первого звонка до финальной приёмки.
            </p>
          </div>
          <ol className="space-y-6">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="relative rounded-3xl border border-slate-200/70 bg-white/70 p-6 pl-14 shadow-sm"
              >
                <span className="absolute left-6 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-primary font-semibold text-white">
                  {index + 1}
                </span>
                <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="consultation" className="container-grid">
        <div className="grid gap-8 rounded-4xl border border-primary/10 bg-primary/5 p-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="space-y-5">
            <h2 className="section-title text-slate-900">Получите персональное предложение</h2>
            <p className="section-subtitle text-slate-600">
              Оставьте заявку — архитектор-консультант подготовит подборку дверей и
              рассчитает стоимость по вашему проекту.
            </p>
            <form className="grid gap-4 rounded-3xl border border-white/60 bg-white/70 p-6 shadow-inner backdrop-blur-sm">
              <label className="text-sm font-medium text-slate-700">
                Имя
                <input
                  type="text"
                  placeholder="Как к вам обращаться?"
                  className="mt-2 w-full rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                  required
                />
              </label>
              <label className="text-sm font-medium text-slate-700">
                Телефон
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  className="mt-2 w-full rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                  required
                />
              </label>
              <label className="text-sm font-medium text-slate-700">
                Комментарий
                <textarea
                  rows={3}
                  placeholder="Про объект, пожелания по стилю или срокам"
                  className="mt-2 w-full rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </label>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary-light"
              >
                Отправить заявку
              </button>
              <p className="text-xs text-slate-500">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
              </p>
            </form>
          </div>
          <div className="space-y-6 rounded-3xl border border-primary/10 bg-white/80 p-8 shadow-card backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Свяжитесь с нами удобным способом
            </h3>
            <ul className="space-y-4">
              {contactChannels.map((channel) => (
                <li key={channel.label} className="flex flex-col rounded-2xl bg-slate-50/80 p-4">
                  <span className="text-xs uppercase tracking-[0.18em] text-primary">
                    {channel.label}
                  </span>
                  <span className="mt-2 text-lg font-semibold text-slate-900">{channel.value}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-3xl bg-gradient-to-br from-accent/80 to-accent/60 p-6 text-slate-900 shadow-lg">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-800">
                Бонус
              </p>
              <p className="mt-2 text-base font-semibold">
                Бесплатный проект скрытых коробов при заказе от 3 дверей
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-grid">
        <div className="rounded-3xl bg-white/80 p-8 shadow-card backdrop-blur-sm">
          <h2 className="section-title">Частые вопросы</h2>
          <div className="mt-6 divide-y divide-slate-200">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-4">
                <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-slate-900">
                  {faq.q}
                  <span className="ml-4 text-sm text-primary transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-base text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="container-grid">
        <div className="flex flex-col gap-4 rounded-3xl border border-slate-200/70 bg-white/70 p-8 text-sm text-slate-600 shadow-inner sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} DoorStyle Studio. Все права защищены.</span>
          <span>ИНН 7731234567 · ОГРН 1237746123456</span>
          <a href="#consultation" className="text-primary hover:text-primary-light">
            Политика конфиденциальности
          </a>
        </div>
      </footer>
    </main>
  );
}
