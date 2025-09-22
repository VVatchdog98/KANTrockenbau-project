import React, { useState, useEffect } from 'react';
import { Phone, Mail, Clock, CheckCircle, Star, Building2, Users, Award, Menu, X } from 'lucide-react';
import AboutPage from './components/AboutPage';
import QuotePopup from './components/QuotePopup';
import TypeWriter from './components/TypeWriter';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showAboutPage, setShowAboutPage] = useState(false);
  const [showQuotePopup, setShowQuotePopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 50);
      
      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  if (showAboutPage) {
    return <AboutPage onClose={() => setShowAboutPage(false)} />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      } ${
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img 
                src="/photo_2025-09-22_15-35-03.jpg" 
                alt="KAN Trockenbau Logo" 
                className="h-8 sm:h-10 w-auto"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Услуги
                </button>
                <button 
                  onClick={() => setShowAboutPage(true)}
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  За нас
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Контакти
                </button>
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-gray-900 p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-4 pt-4 pb-6 space-y-2 bg-white border-t shadow-lg">
                <button 
                  onClick={() => scrollToSection('services')}
                  className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 w-full text-left rounded-lg transition-all duration-200"
                >
                  Услуги
                </button>
                <button 
                  onClick={() => setShowAboutPage(true)}
                  className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 w-full text-left rounded-lg transition-all duration-200"
                >
                  За нас
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 w-full text-left rounded-lg transition-all duration-200"
                >
                  Контакти
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{
            backgroundImage: 'url("/eder-pozo-perez-8X8WHFV97RY-unsplash.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              <TypeWriter text="KAN Trockenbau" delay={150} />
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 font-medium px-4">
              Над 10 години опит в строителството
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-12 px-4">
              <a 
                href="tel:+359894366789"
                className="w-full sm:w-auto bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg text-center min-h-[56px] flex items-center justify-center"
              >
                Обадете се сега
              </a>
              <button 
                onClick={() => setShowQuotePopup(true)}
                className="w-full sm:w-auto border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300 text-center min-h-[56px] flex items-center justify-center"
              >
                Получете оферта
              </button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-gray-600 px-4">
              <div className="flex items-center space-x-2 text-center">
                <CheckCircle size={20} className="text-green-500" />
                <span>Безплатни консултации</span>
              </div>
              <div className="flex items-center space-x-2 text-center">
                <CheckCircle size={20} className="text-green-500" />
                <span>Гаранция за качество</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 px-4">
              Нашите Услуги
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Предлагаме пълен спектър от услуги в областта на сухото строителство и вътрешните ремонти
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Монтаж на Гипсокартон",
                description: "Окачени тавани и преградни стени с професионално качество",
                icon: <Building2 size={40} />
              },
              {
                title: "Звуко и Топлоизолация", 
                description: "Специализирани решения за комфорт и енергийна ефективност",
                icon: <Award size={40} />
              },
              {
                title: "Шпакловка и Довършителни Работи",
                description: "Перфектно довършване за безупречен резултат",
                icon: <Star size={40} />
              },
              {
                title: "Индивидуални Интериорни Решения",
                description: "Дизайн и изпълнение на офиси и жилищни интериори",
                icon: <Users size={40} />
              },
              {
                title: "Боядисване",
                description: "Професионално боядисване с високококачествени материали",
                icon: <CheckCircle size={40} />
              },
              {
                title: "Ремонт на Бани",
                description: "Пълен ремонт включително къртене, плочки и оборудване",
                icon: <Building2 size={40} />
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 sm:p-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 group"
              >
                <div className="text-gray-700 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                За Нас
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                КАН Трокенбау ЕООД е специализирана в областта на сухото строителство и вътрешни ремонти. 
                След 12 години професионален опит в сферата, качество, отношение и коректност са основите, 
                върху които е изградена нашата фирма.
              </p>
              <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-6 sm:mb-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">10+</div>
                  <div className="text-sm text-gray-600">Години Опит</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">100%</div>
                  <div className="text-sm text-gray-600">Доволни Клиенти</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">100%</div>
                  <div className="text-sm text-gray-600">Гаранция за Качество</div>
                </div>
              </div>
            </div>
            <div className="space-y-4 sm:space-y-6 mt-8 lg:mt-0">
              {[
                "10+ години опит в строителството",
                "Доволни клиенти в цялата страна", 
                "Гаранция за качество на всички проекти",
                "Професионален екип от сертифицирани специалисти"
              ].map((badge, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle size={24} className="text-green-500" />
                  <span className="text-base sm:text-lg text-gray-700">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Свържете се с нас
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4">
              Готови сме да реализираме вашия проект
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Контактна Информация</h3>
                <div className="space-y-4">
                  <a 
                    href="tel:+359894366789"
                    className="flex items-center space-x-3 text-base sm:text-lg text-gray-700 hover:text-gray-900 transition-colors duration-200 p-3 rounded-lg hover:bg-gray-50"
                  >
                    <Phone size={24} />
                    <span>+359 894 366 789</span>
                  </a>
                  <a 
                    href="mailto:kantrockenbau@gmail.com"
                    className="flex items-center space-x-3 text-base sm:text-lg text-gray-700 hover:text-gray-900 transition-colors duration-200 p-3 rounded-lg hover:bg-gray-50"
                  >
                    <Mail size={24} />
                    <span>kantrockenbau@gmail.com</span>
                  </a>
                  <div className="flex items-center space-x-3 text-base sm:text-lg text-gray-700 p-3">
                    <Clock size={24} />
                    <span className="text-sm sm:text-base">Понеделник - Петък: 08:00 - 17:00</span>
                  </div>
                </div>
              </div>
              
              <div>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">Viber/WhatsApp:</p>
                <a 
                  href="https://wa.me/359894366789"
                  className="inline-block bg-green-500 text-white px-6 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200 text-center min-h-[56px] flex items-center justify-center"
                >
                  Пишете в WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-6 sm:p-8 rounded-xl mt-8 lg:mt-0">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">Получете Оферта</h3>
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Вашето име*"
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-base"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Телефон*"
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-base"
                    required
                  />
                </div>
                <div>
                  <textarea 
                    rows={4}
                    placeholder="Опишете вашия проект..."
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent resize-none text-base"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gray-900 text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 text-lg min-h-[56px]"
                >
                  Изпратете запитването
                </button>
                <p className="text-sm sm:text-base text-gray-600 text-center">
                  Ще се свържем с вас скоро!
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
      
      {/* Quote Popup */}
      <QuotePopup 
        isOpen={showQuotePopup} 
        onClose={() => setShowQuotePopup(false)} 
      />
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <img 
                src="/photo_2025-09-22_15-35-03.jpg" 
                alt="KAN Trockenbau Logo" 
                className="h-10 sm:h-12 w-auto mb-3 sm:mb-4"
              />
              <p className="text-sm sm:text-base text-gray-300 mb-4">
                КАН Трокенбау ЕООД - Професионално сухо строителство с над 10 години опит
              </p>
            </div>
            <div className="text-left md:text-right">
              <div className="space-y-2">
                <p className="text-sm sm:text-base">Телефон: +359 894 366 789</p>
                <p className="text-sm sm:text-base">Email: kantrockenbau@gmail.com</p>
              </div>
            </div>
          </div>
          <hr className="border-gray-700 my-6 sm:my-8" />
          <div className="text-center text-gray-400">
            <p className="text-sm sm:text-base">&copy; 2025 КАН Трокенбау ЕООД. Всички права запазени.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;