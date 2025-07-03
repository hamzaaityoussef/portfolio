import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { Experience } from '../types';

const ExperienceSection: React.FC = () => {
  const experiences: Experience[] = [
    {
      id: '1',
      company: 'Cloud Marketing Hub',
      position: 'Software and Automation Engineer',
      period: 'Oct 2024 - Mai 2025',
      type: 'Part Time',
      responsibilities: [
        'Intégration du modèle YOLO pour la détection avancée d\'objets',
        'Développement d\'interfaces graphiques avec PyQt5',
        'Gestion OTP via Telegram pour l\'authentification sécurisée',
        'Optimisation des performances des systèmes d\'automatisation'
      ]
    },
    {
      id: '2',
      company: 'Cloud Marketing Hub',
      position: 'Software and Automation Engineer',
      period: 'Juillet 2024 - Sept 2024',
      type: 'Full Time',
      responsibilities: [
        'Développement de systèmes web basés sur des microservices',
        'Architecture avec Java/Spring Boot, Django, API REST',
        'Déploiement sur AWS avec Redis, PostgreSQL, Kafka',
        'Mise en place de pipelines CI/CD automatisés'
      ]
    },
    {
      id: '3',
      company: 'Cloud Marketing Hub',
      position: 'Software Engineer',
      period: 'Avril 2024 - Juin 2024',
      type: 'Intern',
      responsibilities: [
        'Développement backend Django/Python',
        'Gestion et centralisation des données',
        'Intégration PostgreSQL pour le stockage de données',
        'Création d\'APIs RESTful pour les applications frontend'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Expérience{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Professionnelle
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {exp.position}
                        </h3>
                        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
                          <Briefcase size={16} />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        exp.type === 'Full Time' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                          : exp.type === 'Part Time'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
                          : 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400'
                      }`}>
                        {exp.type}
                      </span>
                    </div>

                    {/* Period */}
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-6">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.period}</span>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-3">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                            {responsibility}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Used */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Technologies Utilisées
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Python', 'Django', 'Java', 'Spring Boot', 'PostgreSQL', 'Redis', 
              'Kafka', 'AWS', 'Docker', 'PyQt5', 'YOLO', 'Telegram API', 'REST API'
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700"
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

export default ExperienceSection;