import React, { useMemo } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import SEOHead from '../components/SEOHead';
import { blogSchema, articleSchemas, breadcrumbSchema } from '../data/structuredData';

interface BlogProps {
  setCurrentPage?: (page: string) => void;
}

const Blog: React.FC<BlogProps> = ({ setCurrentPage }) => {
  const { t } = useTranslation();

  // SEO optimized structured data for Blog page
  const structuredData = [
    blogSchema,
    breadcrumbSchema('blog', 'Blog & Actualités')
  ];

  const categories = useMemo(() => [t.blog.categories.all, t.blog.categories.change, t.blog.categories.management, t.blog.categories.crisis, t.blog.categories.formation, t.blog.categories.mediation, t.blog.categories.coaching], [t]);

  const articles = useMemo(() => [
    {
      id: 'conduite-changement',
      title: t.blog.articles.change.title,
      excerpt: t.blog.articles.change.excerpt,
      date: t.blog.articles.change.date,
      readTime: t.blog.articles.change.readTime,
      category: t.blog.articles.change.category,
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 'accompagner-managers',
      title: t.blog.articles.managers.title,
      excerpt: t.blog.articles.managers.excerpt,
      date: t.blog.articles.managers.date,
      readTime: t.blog.articles.managers.readTime,
      category: t.blog.articles.managers.category,
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 'gestion-crise',
      title: t.blog.articles.crisis.title,
      excerpt: t.blog.articles.crisis.excerpt,
      date: t.blog.articles.crisis.date,
      readTime: t.blog.articles.crisis.readTime,
      category: t.blog.articles.crisis.category,
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 'collaboration-formation',
      title: t.blog.articles.collaboration.title,
      excerpt: t.blog.articles.collaboration.excerpt,
      date: t.blog.articles.collaboration.date,
      readTime: t.blog.articles.collaboration.readTime,
      category: t.blog.articles.collaboration.category,
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 'mediation-entreprise',
      title: t.blog.articles.mediation.title,
      excerpt: t.blog.articles.mediation.excerpt,
      date: t.blog.articles.mediation.date,
      readTime: t.blog.articles.mediation.readTime,
      category: t.blog.articles.mediation.category,
      image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 'coaching-professionnel',
      title: t.blog.articles.coaching.title,
      excerpt: t.blog.articles.coaching.excerpt,
      date: t.blog.articles.coaching.date,
      readTime: t.blog.articles.coaching.readTime,
      category: t.blog.articles.coaching.category,
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ], [t]);

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Blog RH | Conseils Management & Prévention RPS - BLM Consult"
        description="Blog conseil RH par Lylia Mokrani : mes conseils sur l'amélioration des conditions de travail, prévention RPS, management et qualité de vie au travail."
        keywords="blog RH, conseils management, prévention RPS, QVCT, conditions travail, dialogue social, blog consultant RH, articles management"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-white overflow-hidden pt-16 sm:pt-20 lg:pt-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200" 
            alt="Blog RH et conseils" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            {t.blog.title}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto">
            {t.blog.subtitle}
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-4 sm:py-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300 min-h-10 ${
                  index === 0
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>


      {/* Articles Grid */}
      <section className="py-10 sm:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {articles.map((article, index) => (
              <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="h-40 sm:h-48 lg:h-56 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium whitespace-nowrap">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col xs:flex-row items-start xs:items-center space-y-1 xs:space-y-0 xs:space-x-3 sm:space-x-4 text-xs sm:text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {article.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    <button 
                      onClick={() => setCurrentPage && setCurrentPage(article.id)}
                      className="text-blue-600 hover:text-blue-700 font-medium text-xs sm:text-sm cursor-pointer whitespace-nowrap min-h-10 flex items-center"
                    >
                      {t.blog.common.readMore}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Blog;