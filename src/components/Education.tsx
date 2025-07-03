import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { Education } from '../types';

const EducationSection: React.FC = () => {
  const education: Education[] = [
    {
      id: '1',
      degree: 'Master Intelligence Artificielle & Data Science',
      institution: 'Faculté des Sciences et Techniques - Tanger',
      period: '2024 - 2026',
      description: 'Spécialisation en IA, Machine Learning, Deep Learning, et traitement de données massives. Projets de recherche en NLP et Computer Vision.'
    },
    {
      id: '2',
      degree: 'Licence Analytique des Données',
      institution: 'Faculté des Sciences et Techniques - Tanger',
      period: '2021 - 2024',
      description: 'Formation complète en analyse de données, statistiques, programmation et bases de données. Projets pratiques en data mining et visualisation.'
    },
    {
      id: '3',
      degree: 'Baccalauréat Sciences Physiques',
      institution: 'Lycée Jaafar El Fassi El Fihri',
      period: '2020 - 2021',
      description: 'Diplôme avec mention, spécialisation en mathématiques et sciences physiques. Fondations solides en logique et raisonnement scientifique.'
    }
  ];

  const achievements = [
    {
      title: 'Recherche de PFE',
      description: 'Actuellement à la recherche d\'un Projet de Fin d\'Études innovant',
      icon: <Award className="w-6 h-6" />
    },
    {
      title: 'Spécialisation IA',
      description: 'Focus sur l\'Intelligence Artificielle et le Machine Learning',
      icon: <GraduationCap className="w-6 h-6" />
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Formation{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Académique
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
            Parcours académique orienté vers l'innovation technologique et l'intelligence artificielle
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education Timeline */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={edu.id}
                  className="relative bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                >
                  {/* Timeline Connector */}
                  {index < education.length - 1 && (
                    <div className="absolute left-6 top-full w-0.5 h-8 bg-gradient-to-b from-blue-600 to-purple-600"></div>
                  )}

                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white">
                      <GraduationCap className="w-6 h-6" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {edu.degree}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                            {edu.institution}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                          <Calendar size={16} />
                          <span>{edu.period}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements & Goals */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Objectifs Actuels
                </h3>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="text-blue-600 dark:text-blue-400 mt-1">
                        {achievement.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-xl text-white">
                <h3 className="text-lg font-bold mb-4">
                  Recherche de PFE
                </h3>
                <p className="text-blue-100 text-sm mb-4">
                  Actuellement à la recherche d'un Projet de Fin d'Études innovant 
                  dans le domaine de l'IA et de la Data Science.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Disponible pour collaboration</span>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Domaines d'Intérêt
                </h3>
                <div className="space-y-2">
                  {[
                    'Machine Learning',
                    'Deep Learning',
                    'Computer Vision',
                    'Natural Language Processing',
                    'Big Data Analytics',
                    'Automation'
                  ].map((domain) => (
                    <div key={domain} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {domain}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;