import React from 'react';
import { Brain, Code, Database, Zap } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Intelligence Artificielle",
      description: "Passionné par les dernières avancées en IA et ML"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Développement Full Stack",
      description: "Expertise en développement web et logiciel"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Science",
      description: "Analyse et traitement de données complexes"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automation",
      description: "Solutions d'automatisation innovantes"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            À Propos de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Moi
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                Étudiant passionné en Master Intelligence Artificielle et Data Science à la FST de Tanger, 
                actuellement à la recherche d'un Projet de Fin d'Études (PFE). Je me spécialise dans le 
                développement de solutions innovantes combinant IA, machine learning et ingénierie logicielle.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                Mon objectif est de contribuer à des projets impactants qui repoussent les limites de la 
                technologie. Avec une solide expérience en développement full-stack et une passion pour 
                l'automatisation, je cherche à apporter des solutions créatives aux défis technologiques modernes.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">2+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Années d'Expérience</div>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">20+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projets Réalisés</div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                >
                  <div className="text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Preview */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Technologies Principales
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Python', 'JavaScript', 'Django', 'React', 'Docker', 'AWS', 'TensorFlow', 'PostgreSQL'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;