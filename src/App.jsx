import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Instagram,
  ChevronRight,
  MapPin,
  Phone,
  Award,
  BookOpen,
  ShieldCheck,
  Menu,
  X,
  Crown,
  Plus,
  Minus
} from 'lucide-react';

const LionIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-gold">
    <path d="M12 2L9 4l-4-1 1 4-2 3 3 1 1 4 4-2 4 2 1-4 3-1-2-3 1-4-4 1-3-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const App = () => {
  const [activeTab, setActiveTab] = useState('landing');
  const [selectedService, setSelectedService] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const serviceCategories = [
    {
      title: "Контурная пластика",
      items: ["Губы", "Профиль Джоли", "Скулы", "Подбородок"],
      image: "/images/service1.jpg",
      details: [
        { name: "На основе гиалуроновой кислоты. Работаем на любых препаратах (Juvederm, Belotero, Surgiderm, Princess)", price: "Уточнять в ЛС" },
        { name: "Увеличение губ - 1 мл", price: "10 000 ₽" },
        { name: "Носогубные складки - 1 мл", price: "10 000 ₽" },
        { name: "Носослезная борозда - 1 мл", price: "12 000 ₽" },
        { name: "Скулы - 1 мл", price: "10 000 ₽" },
        { name: "Подбородок - 1 мл", price: "10 000 ₽" },
        { name: "Нос - 1 мл", price: "10 000 ₽" },
        { name: "Профиль Джоли - 1 мл", price: "10 000 ₽" },
        { name: "Кольца Венеры на шее - 1 мл", price: "10 000 ₽" }
      ]
    },
    {
      title: "Аппаратная косметология",
      items: ["RF-лифтинг", "Микротоки", "SMAS-лифтинг"],
      image: "/images/apparatus.png",
      details: [
        { name: "Липолиз", price: "1 300 ₽" },
        { name: "Вакуумный массаж", price: "1 500 ₽" },
        { name: "Прессотерапия", price: "1 300 ₽" },
        { name: "УЗ-Кавитация", price: "1 800 ₽" },
        { name: "Миостимуляция", price: "от 800 - 1 300 ₽" },
        { name: "RF-Лифтинг", price: "1 500 ₽" }
      ]
    },
    {
      title: "Эстетическая косметология",
      items: ["Пилинги", "Чистки", "Уходовые процедуры"],
      image: "/images/service3.jpg",
      details: [
        { name: "Чистка лица ультразвуковая", price: "2 500 ₽" },
        { name: "Чистка лица комбинированная", price: "3 500 ₽" },
        { name: "Чистка лица с фруктовыми кислотами", price: "4 000 ₽" },
        { name: "Экстракция просянки (1 элемент)", price: "100 ₽" },
        { name: "Молочный пилинг", price: "2 500 ₽" },
        { name: "Фруктовый пилинг", price: "2 500 ₽" },
        { name: "Миндальный пилинг", price: "2 500 ₽" },
        { name: "Гликолевый пилинг", price: "2 500 ₽" },
        { name: "Пилинг Джесснера", price: "3 500 ₽" },
        { name: "Срединный ТСА-пилинг", price: "5 000 ₽" },
        { name: "Ретиноевый пилинг", price: "5 000 ₽" }
      ]
    },
    {
      title: "Биоревитализация",
      items: ["Глубокое увлажнение", "Лифтинг", "Сияние кожи"],
      image: "/images/service4.jpg",
      details: [
        { name: "REVI STRONG - 2 мл", price: "18 000 ₽" },
        { name: "PHILOSOPHY FORTE - 1.5 мл", price: "7 500 ₽" },
        { name: "NOVAKUTAN - 2 мл", price: "11 000 ₽" },
        { name: "JALUPRO", price: "10 000 ₽" },
        { name: "HYARON", price: "3 500 ₽" },
        { name: "DERMAHEAL", price: "3 500 ₽" },
        { name: "BLUM GEL CLASSIC", price: "5 500 ₽" },
        { name: "BLUM GEL C DMAE", price: "6 500 ₽" },
        { name: "PHILOSOPHY PREBIO AKTIVE", price: "4 500 ₽" },
        { name: "Полимолочная кислота", price: "от 25 000 ₽" },
        { name: "Ботулинотерапия - 1 ед", price: "250 ₽" },
        { name: "Мезонити - 1 ед", price: "400 ₽" }
      ]
    },
    {
      title: "Комплексная программа",
      items: ["Коррекция фигуры", "СУПЕР - ТЕЛО", "Плоский живот"],
      image: "/images/service5.jpg",
      isAccordion: true,
      details: [
        {
          name: "СУПЕР - ТЕЛО (31 ПРОЦЕДУРА)",
          price: "45 000 ₽",
          description: [
            "5 процедур ручного общего корректирующего массажа",
            "3 сеанса липолитиков на область живота и локальные отложения на ногах (30 мл)",
            "3 процедуры антицеллюлитного обертывания на проблемные зоны",
            "5 процедур ультразвуковой липоксации (УЗ-Кавитация) на проблемные зоны",
            "5 процедур вакуумного массажа на проблемные зоны",
            "3 процедуры миостимуляции на проблемные зоны",
            "5 процедур прессотерапии на все тело"
          ]
        },
        {
          name: "КРАСИВЫЕ НОЖКИ (12 ПРОЦЕДУР)",
          price: "25 000 ₽",
          description: [
            "3 процедуры ручного корректирующего массажа на бёдра и ягодицы",
            "3 сеанса липолитиков (20 мл препарата)",
            "3 процедуры антицеллюлитного обертывания на нижнюю часть тела",
            "3 процедуры прессотерапии на все тело"
          ]
        },
        {
          name: "ПЛОСКИЙ ЖИВОТ (12 ПРОЦЕДУР)",
          price: "25 000 ₽",
          description: [
            "3 сеанса липолитиков на живот и бока (20 мл препарата)",
            "3 процедуры ультразвуковой липоксации на живот и бока",
            "3 процедуры вакуумного массажа на проблемные зоны",
            "3 процедуры прессотерапии на все тело"
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-white selection:bg-accent-gold/30">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-background/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6 md:py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3 md:gap-6"
          >
            <img src="/images/logo-lion.png" alt="L.E.V. Logo" className="h-12 md:h-28 w-auto object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]" />
            <div className="flex flex-col border-l border-accent-gold/40 pl-3 md:pl-6">
              <span className="font-serif text-lg md:text-4xl tracking-widest gold-text-gradient font-bold leading-tight uppercase text-shadow-glow">DR. LEVCHENKO</span>
              <span className="font-serif text-[8px] md:text-xs tracking-[0.4em] text-white/40 uppercase">AESTHETIC MEDICINE</span>
            </div>
          </motion.div>

          <div className="hidden md:flex gap-8 lg:gap-10 font-serif tracking-[0.2em] text-lg lg:text-xl uppercase font-light">
            <button
              onClick={() => setActiveTab('landing')}
              className={`hover:text-accent-gold transition-all duration-300 ${activeTab === 'landing' ? 'text-accent-gold' : 'text-white'}`}
            >
              ГЛАВНАЯ
            </button>
            <button
              onClick={() => setActiveTab('academy')}
              className={`hover:text-accent-gold transition-all duration-300 ${activeTab === 'academy' ? 'text-accent-gold' : 'text-white'}`}
            >
              ОБУЧЕНИЕ
            </button>
            <a href="#services" className="hover:text-accent-gold transition-all duration-300">УСЛУГИ</a>
            <a href="#contacts" className="hover:text-accent-gold transition-all duration-300">КОНТАКТЫ</a>
          </div>

          <button className="md:hidden text-accent-gold p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl pt-32 px-10 flex flex-col gap-8 md:hidden text-center"
          >
            <button onClick={() => { setActiveTab('landing'); setIsMenuOpen(false); }} className="text-3xl font-serif uppercase tracking-[0.2em] text-white hover:text-accent-gold transition-colors">Главная</button>
            <button onClick={() => { setActiveTab('academy'); setIsMenuOpen(false); }} className="text-3xl font-serif uppercase tracking-[0.2em] text-white hover:text-accent-gold transition-colors">Обучение</button>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-3xl font-serif uppercase tracking-[0.2em] text-white hover:text-accent-gold transition-colors">Услуги</a>
            <a href="#contacts" onClick={() => setIsMenuOpen(false)} className="text-3xl font-serif uppercase tracking-[0.2em] text-white hover:text-accent-gold transition-colors">Контакты</a>

            <div className="mt-auto pb-20 flex justify-center gap-8">
              <a href="https://t.me/levchenko_ekaterina" className="text-accent-gold uppercase tracking-widest text-sm">Telegram</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {activeTab === 'landing' ? (
          <motion.main
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Hero Section */}
            <section className="relative h-screen flex items-center overflow-hidden">
              <div className="absolute inset-0 z-0">
                <motion.div
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.6 }}
                  transition={{ duration: 2 }}
                  className="w-full h-full bg-cover bg-[center_25%] md:bg-[center_15%]"
                  style={{ backgroundImage: "url('/images/hero.jpg')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-background via-background/60 md:via-background/40 to-transparent" />
              </div>

              <div className="container mx-auto px-6 relative z-10">
                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                  className="max-w-3xl ml-auto text-center md:text-right flex flex-col items-center md:items-end"
                >
                  <motion.h1
                    variants={fadeIn}
                    className="text-5xl sm:text-6xl md:text-8xl font-serif mb-4 md:mb-6 leading-tight"
                  >
                    ЕКАТЕРИНА <br className="hidden sm:block" />
                    <span className="gold-text-gradient">ЛЕВЧЕНКО</span>
                  </motion.h1>
                  <motion.p
                    variants={fadeIn}
                    className="text-lg md:text-2xl font-light tracking-wide text-white/70 mb-8 md:mb-12 max-w-xl"
                  >
                    Эстетическая косметология высшего уровня и наставничество для профессионалов.
                  </motion.p>
                  <motion.div
                    variants={fadeIn}
                    className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center md:justify-end w-full"
                  >
                    <a href="#services" className="btn-gold text-center py-4 px-10">УСЛУГИ</a>
                    <button
                      onClick={() => setActiveTab('academy')}
                      className="px-10 py-4 border border-white/20 text-white hover:border-accent-gold transition-all duration-500 tracking-[0.2em] font-serif uppercase text-sm md:text-base"
                    >
                      ОБУЧЕНИЕ
                    </button>
                  </motion.div>
                </motion.div>
              </div>
            </section>

            {/* About Section */}
            <section className="py-20 md:py-32 bg-background">
              <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-12">
                  <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 30 }}
                    viewport={{ once: true }}
                    className="space-y-6 md:space-y-8"
                  >
                    <h2 className="text-3xl md:text-5xl font-serif uppercase tracking-widest">Про Екатерину</h2>
                    <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light">
                      Более 10 лет опыта в сфере эстетической медицины. Моя философия базируется на
                      <span className="text-accent-gold"> "Natural Beauty & Luxury Care"</span>.
                      Я верю, что истинная красота — это сохранение индивидуальности через деликатное вмешательство и профессиональный уход.
                    </p>
                    <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light">
                      Каждый пациент получает персонализированный план преображения, основанный на инновационных методиках и премиальных препаратах.
                    </p>
                    <div className="grid grid-cols-2 md:flex md:justify-center gap-8 md:gap-16 pt-8">
                      <div className="text-center">
                        <div className="text-3xl md:text-4xl font-serif gold-text-gradient">5000+</div>
                        <div className="text-[10px] uppercase tracking-widest text-white/40 mt-1">Клиентов</div>
                      </div>
                      <div className="text-center border-l md:border-l-0 border-white/10 md:pl-0 pl-8">
                        <div className="text-3xl md:text-4xl font-serif gold-text-gradient">10+</div>
                        <div className="text-[10px] uppercase tracking-widest text-white/40 mt-1">Лет опыта</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 md:py-32 bg-[#0a0a0a]">
              <div className="container mx-auto px-6">
                <div className="text-center mb-16 md:mb-20">
                  <span className="text-accent-gold text-xs md:text-sm uppercase tracking-[0.5em] mb-4 block">Направления</span>
                  <h2 className="text-4xl md:text-6xl font-serif uppercase tracking-[0.2em]">Услуги</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
                  {serviceCategories.map((category, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -10 }}
                      className="group cursor-pointer"
                      onClick={() => {
                        setSelectedService(category);
                        setOpenAccordion(null);
                      }}
                    >
                      <div className="relative aspect-[3/4] overflow-hidden mb-6 gold-border">
                        <img
                          src={category.image}
                          alt={category.title}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                        <div className="absolute bottom-6 left-6 right-6">
                          <h3 className="text-lg md:text-xl font-serif text-white tracking-widest uppercase mb-2 group-hover:text-accent-gold transition-colors">
                            {category.title}
                          </h3>
                          <div className="h-px w-0 bg-accent-gold transition-all duration-500 group-hover:w-full" />
                        </div>
                      </div>

                      <div className="px-2">
                        <ul className="space-y-2 md:space-y-4 text-left">
                          {category.items.slice(0, 3).map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-white/40 group-hover:text-white/60 transition-colors">
                              <span className="w-1 h-1 rounded-full bg-accent-gold/40 mt-2 flex-shrink-0" />
                              <span className="text-[10px] md:text-xs uppercase tracking-wider font-light line-clamp-1">{item}</span>
                            </li>
                          ))}
                        </ul>
                        <button className="mt-6 text-[10px] uppercase tracking-[0.3em] font-serif text-accent-gold flex items-center gap-2 group/btn">
                          Подробнее <ChevronRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </motion.main>
        ) : (
          /* Academy Section */
          <motion.main
            key="academy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-20 md:pt-24"
          >
            {/* Academy Hero */}
            <section className="relative py-24 md:py-32 overflow-hidden">
              <div className="absolute inset-0 z-0">
                <div
                  className="w-full h-full bg-cover bg-fixed bg-center opacity-30"
                  style={{ backgroundImage: "url('/images/academy.png')" }}
                />
                <div className="absolute inset-0 bg-background/80" />
              </div>

              <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div variants={fadeIn} initial="initial" animate="animate">
                  <h1 className="text-4xl md:text-7xl font-serif mb-6 tracking-[0.2em] md:tracking-[0.3em] leading-tight">
                    ACADEMY BY <br />
                    <span className="gold-text-gradient uppercase">L.E.V.</span>
                  </h1>
                  <p className="max-w-2xl mx-auto text-white/60 mb-8 md:mb-12 font-light text-base md:text-lg px-4">
                    Повышение квалификации для работающих врачей и наставничество для тех, кто хочет масштабировать свой медицинский бизнес.
                  </p>
                </motion.div>
              </div>
            </section>

            {/* Programs */}
            <section className="py-20 md:py-24 container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {[
                  {
                    icon: <Award className="text-accent-gold" size={32} />,
                    title: "Для профи",
                    desc: "Авторские курсы по сложной контурной пластике и аппаратным техникам. Постановка руки."
                  },
                  {
                    icon: <BookOpen className="text-accent-gold" size={32} />,
                    title: "Онлайн курсы",
                    desc: "Теоретическая база и видео-атласы анатомии для доступа из любой точки мира."
                  },
                  {
                    icon: <ShieldCheck className="text-accent-gold" size={32} />,
                    title: "Наставничество",
                    desc: "Индивидуальная программа: от личного бренда до открытия собственной клиники."
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -10 }}
                    className="p-8 md:p-10 border border-white/5 bg-white/[0.02] flex flex-col items-center text-center group transition-all duration-500 hover:border-accent-gold/20"
                  >
                    <div className="mb-6 md:mb-8 p-6 rounded-full bg-white/5 group-hover:bg-accent-gold/10 transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif mb-4 uppercase tracking-widest">{item.title}</h3>
                    <p className="text-white/50 font-light text-sm md:text-base leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* CTA Academy */}
            <section className="py-20 md:py-24 bg-accent-gold/5 border-y border-accent-gold/10">
              <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-serif mb-8 uppercase tracking-widest">Готовы выйти на новый уровень?</h2>
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                  <button className="btn-gold py-4 px-10">ЗАПИСАТЬСЯ НА КУРС</button>
                  <button className="px-10 py-4 bg-white text-background font-serif uppercase tracking-widest hover:bg-accent-gold transition-colors text-sm">Консультация</button>
                </div>
              </div>
            </section>
          </motion.main>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer id="contacts" className="py-20 md:py-24 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
            <div className="md:col-span-2 space-y-8 md:space-y-10">
              <div className="flex items-center gap-4 md:gap-6">
                <img src="/images/logo-lion.png" alt="L.E.V. Logo" className="h-16 md:h-20 w-auto" />
                <span className="font-serif text-2xl md:text-3xl tracking-[0.2em] md:tracking-[0.3em] gold-text-gradient font-bold uppercase">L.E.V. COSMETOLOGY</span>
              </div>
              <p className="text-white/40 max-w-sm font-light text-sm">
                Премиальное качество процедур и профессиональный подход в самом сердце города.
              </p>
              <div className="flex gap-6">
                <a href="https://t.me/levchenko_ekaterina" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent-gold transition-all uppercase tracking-[0.2em] text-[10px]">
                  Telegram
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="font-serif text-xs md:text-sm tracking-[0.3em] mb-6 md:mb-8 uppercase font-bold text-accent-gold">Контакты</h4>
              <div className="flex items-center gap-4 text-white/60">
                <Phone size={16} className="text-accent-gold" />
                <a href="tel:+79270067979" className="text-sm hover:text-white transition-colors">+7 927 006-79-79</a>
              </div>
              <div className="flex items-start gap-4 text-white/60">
                <MapPin size={16} className="text-accent-gold mt-1" />
                <span className="text-sm leading-relaxed">
                  г. Самара, БЦ Ф-45,<br />
                  ул. Аэродромная 45а, 615 каб.
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="font-serif text-xs md:text-sm tracking-[0.3em] mb-6 md:mb-8 uppercase font-bold text-accent-gold">Social</h4>
              <p className="text-accent-gold text-sm tracking-[0.2em] font-medium uppercase">@dr.levchenkoe</p>
            </div>
          </div>

          <div className="mt-16 md:mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <p className="text-white/20 text-[8px] md:text-[10px] uppercase tracking-[0.3em]">© 2026 Levchenko Aesthetic. All rights reserved.</p>
            <p className="text-white/20 text-[8px] md:text-[10px] uppercase tracking-[0.3em]">Designed for Excellence</p>
          </div>
        </div>
      </footer>
      {/* Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            />
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              className="relative w-full max-w-2xl bg-[#111] gold-border p-6 sm:p-10 overflow-hidden max-h-[95vh] sm:max-h-[90vh] flex flex-col rounded-t-3xl sm:rounded-none"
            >
              <div className="w-12 h-1 bg-white/10 rounded-full mx-auto mb-6 sm:hidden" />
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors p-2"
              >
                <X size={24} />
              </button>

              <div className="mb-6 md:mb-8">
                <span className="text-accent-gold text-[10px] uppercase tracking-[0.4em] font-medium block mb-2 px-1">Прайс-лист</span>
                <h2 className="text-2xl sm:text-4xl font-serif text-white uppercase tracking-wider">{selectedService.title}</h2>
              </div>

              <div className="overflow-y-auto pr-2 custom-scrollbar flex-1 mb-8">
                <div className="space-y-4 md:space-y-6">
                  {selectedService.isAccordion ? (
                    selectedService.details.map((item, i) => (
                      <div key={i} className="border-b border-white/5 pb-4">
                        <button
                          onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                          className="w-full flex justify-between items-center group/acc"
                        >
                          <div className="text-left py-2">
                            <h3 className="text-accent-gold font-serif text-lg md:text-xl font-semibold mb-1 uppercase tracking-wide">{item.name}</h3>
                            <span className="text-white/40 text-[10px] uppercase tracking-widest">{item.price}</span>
                          </div>
                          <div className="text-accent-gold/50 group-hover/acc:text-accent-gold transition-colors">
                            {openAccordion === i ? <Minus size={18} /> : <Plus size={18} />}
                          </div>
                        </button>
                        <AnimatePresence>
                          {openAccordion === i && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <ul className="pt-4 pb-4 space-y-3">
                                {item.description.map((line, idx) => (
                                  <li key={idx} className="flex gap-3 text-white/60 text-xs md:text-sm font-light leading-relaxed">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent-gold/40 mt-1.5 flex-shrink-0" />
                                    {line}
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))
                  ) : (
                    selectedService.details?.map((item, i) => (
                      <div key={i} className="flex justify-between items-center gap-4 border-b border-white/5 pb-4 group">
                        <span className="text-white/70 text-sm md:text-base font-light group-hover:text-white transition-colors uppercase tracking-wide">{item.name}</span>
                        <span className="text-accent-gold font-serif text-xl md:text-2xl font-semibold whitespace-nowrap">{item.price}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 pt-4 border-t border-white/10 mt-auto">
                <a
                  href="https://mst.link/levchenko_ekaterina3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold flex items-center justify-center py-4 text-xs tracking-[0.2em] font-medium uppercase"
                >
                  ЗАПИСАТЬСЯ
                </a>
                <button
                  className="px-8 py-4 border border-white/20 text-white hover:border-accent-gold transition-all duration-500 tracking-[0.2em] text-xs font-medium uppercase"
                >
                  ЗАДАТЬ ВОПРОС
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
