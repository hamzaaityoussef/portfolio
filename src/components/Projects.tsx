import React from 'react';
import { ExternalLink, Github, Play } from 'lucide-react';
import { Project } from '../types';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'ASL Recognition System',
      technologies: ['Deep Learning', 'CNN', 'Flask', 'Docker', 'OpenCV'],
      description: 'Système de reconnaissance de gestes ASL (American Sign Language) en temps réel utilisant des réseaux de neurones convolutionnels. Interface web interactive avec Flask et déploiement containerisé.',
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/hamzaaityoussef/ASL-2.0'
    },
    {
      id: '2',
      title: 'Data Analytics and ML Platform',
      technologies: ['Python', 'Django', 'Scikit-learn', 'PostgreSQL', 'React'],
      description: 'Plateforme full-stack complète pour la gestion de datasets et le machine learning. Interface utilisateur intuitive pour l\'analyse de données et l\'entraînement de modèles.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/hamzaaityoussef/Application_Analyse_de_Donnees_et_de_Machine_Learning'
    },
    {
      id: '3',
      title: 'Real-Time Amazon Reviews Sentiment Analysis',
      technologies: ['Spark Streaming', 'Kafka', 'MongoDB', 'PowerBI', 'NLP'],
      description: 'Système d\'analyse de sentiments en temps réel pour les avis Amazon. Pipeline de données Big Data avec visualisation interactive des résultats.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/hamzaaityoussef/amazon-reviews-realtime-analysis'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Projets{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Académiques
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
            Découvrez mes projets les plus significatifs combinant IA, Data Science et développement full-stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium hover:bg-white transition-colors"
                  >
                    <Github size={14} />
                    Code
                  </a>
                    <button className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
                      <Play size={14} />
                      Demo
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium hover:bg-white transition-colors"
                >
                  <Github size={14} />
                  Code
                </a>
                  <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-colors">
                    <ExternalLink size={16} />
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">
              Intéressé par mes projets ?
            </h3>
            <p className="text-blue-100 mb-6">
              Consultez mon GitHub pour découvrir plus de projets et collaborations
            </p>
            <a
  href="https://github.com/hamzaaityoussef"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 inline-block"
>
  Voir Plus de Projets
</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;