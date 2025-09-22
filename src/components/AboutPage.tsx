import React from 'react';
import { Award, Users, Building2, CheckCircle, Clock, Target } from 'lucide-react';

interface AboutPageProps {
  onClose: () => void;
}

export default function AboutPage({ onClose }: AboutPageProps) {
  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: 'url("/1dc1e3a3-37c1-4cef-96d0-20b32d40ec56.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      {/* Content Overlay */}
      <div className="min-h-screen">
        {/* Header */}
        <header className="bg-white/95 backdrop-blur-md shadow-sm border-b relative z-10">
          <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <img 
                src="/photo_2025-09-22_15-35-03.jpg" 
                alt="KAN Trockenbau Logo" 
                className="h-8 sm:h-10 w-auto"
                onClick={onClose}
              />
              <button 
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 text-3xl font-light p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                ×
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="pt-6 sm:pt-8 pb-16 sm:pb-20 relative z-10">
          <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8">
            
            {/* Hero Section */}
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
                За КАН Трокенбау
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                Строим с перфекционизъм, създаваме с грижа, доставяме с надеждност
              </p>
            </div>

            {/* Company Story */}
            <section className="mb-12 sm:mb-16">
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg">
                <div className="flex items-center mb-6">
                  <Target className="text-gray-700 mr-4" size={32} />
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Нашата Мисия</h2>
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                  КАН Трокенбау ЕООД е основана през 2025 година с една ясна мисия - да предоставим най-качествените услуги в областта на сухото строителство и вътрешни ремонти в България.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Ние сме екип от специалисти, движени от страстта към перфекционизма и желанието да създаваме пространства, в които хората се чувстват у дома.
                </p>
              </div>
            </section>

            {/* Founder Story */}
            <section className="mb-12 sm:mb-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <Users className="text-gray-700 mr-4" size={32} />
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Нашата История</h2>
                  </div>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                    Основателя Кристиан Драганов, започна кариерата си в строителството още като младеж, работейки редом с опитни майстори и усвоявайки традиционните техники, които днес комбинираме с най-съвременните технологии.
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    През годините изградихме репутация на най-надеждния партньор за вътрешни ремонти и сухо строителство.
                  </p>
                </div>
                
                <div className="bg-gray-900/95 backdrop-blur-md text-white rounded-2xl p-6 sm:p-8 mt-8 lg:mt-0 shadow-lg">
                  <h3 className="text-xl sm:text-2xl font-bold mb-6">Нашите Ценности</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <CheckCircle size={24} className="text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-base sm:text-lg">Качество в всеки детайл</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={24} className="text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-base sm:text-lg">Професионализъм и отношение</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={24} className="text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-base sm:text-lg">Коректност и прозрачност</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={24} className="text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-base sm:text-lg">Своевременност на проектите</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Client Types */}
            <section className="mb-12 sm:mb-16">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-6">
                  <Building2 className="text-gray-700 mr-4" size={32} />
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 px-4">С Кого Работим</h2>
                </div>
                <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                  КАН Трокенбау работи с частни клиенти, офиси, хотели и търговски обекти, винаги с еднакво високо качество и професионализъм.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {[
                  {
                    title: "Частни Клиенти",
                    description: "Жилищни ремонти и интериори",
                    icon: <Users size={40} />
                  },
                  {
                    title: "Офиси",
                    description: "Корпоративни интериори и пространства",
                    icon: <Building2 size={40} />
                  },
                  {
                    title: "Хотели",
                    description: "Хотелски стаи и обществени зони",
                    icon: <Award size={40} />
                  },
                  {
                    title: "Търговски Обекти",
                    description: "Магазини и търговски центрове",
                    icon: <Clock size={40} />
                  }
                ].map((client, index) => (
                  <div key={index} className="text-center bg-white/90 backdrop-blur-md border border-gray-200/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <div className="text-gray-700 mb-4 flex justify-center">
                      {client.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                      {client.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      {client.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Statistics */}
            <section className="mb-12 sm:mb-16">
              <div className="bg-gradient-to-r from-gray-900/95 to-gray-800/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 md:p-12 text-white shadow-lg">
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Нашите Постижения</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
                  <div>
                    <div className="text-3xl sm:text-4xl font-bold mb-2">12+</div>
                    <div className="text-gray-300">Години Опит</div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-bold mb-2">100%</div>
                    <div className="text-gray-300">Доволни Клиенти</div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-bold mb-2">100%</div>
                    <div className="text-gray-300">Гаранция за Качество</div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-bold mb-2">24/7</div>
                    <div className="text-gray-300">Поддръжка</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 px-4">
                  Готови за Вашия Проект?
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 px-4">
                  Свържете се с нас днес за безплатна консултация и оферта
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                  <a 
                    href="tel:+359894366789"
                    className="w-full sm:w-auto bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 text-center min-h-[56px] flex items-center justify-center"
                  >
                    Обадете се сега
                  </a>
                  <button 
                    onClick={onClose}
                    className="w-full sm:w-auto border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300 text-center min-h-[56px] flex items-center justify-center"
                  >
                    Назад към началото
                  </button>
                </div>
              </div>
            </section>

          </div>
        </main>
      </div>
    </div>
    </div>
  );
}