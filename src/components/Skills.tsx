import React, { useState } from 'react';
import { Code, Database, Brain, Cloud, Wrench, BarChart } from 'lucide-react';
import { Skill } from '../types';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories: Skill[] = [
    {
      category: 'Langages',
      items: ['Python', 'JavaScript', 'R', 'T-SQL', 'Java', 'TypeScript']
    },
    {
      category: 'Frameworks',
      items: ['Django', 'Flask', 'Spring Boot', 'React', 'Express.js', 'FastAPI']
    },
    {
      category: 'Big Data',
      items: ['Apache Spark', 'Hadoop', 'Kafka', 'Apache Nifi', 'Airflow', 'Elasticsearch']
    },
    {
      category: 'Bases de Données',
      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Neo4j', 'ClickHouse']
    },
    {
      category: 'IA & ML',
      items: ['Deep Learning', 'Machine Learning', 'NLP', 'Computer Vision', 'TensorFlow', 'PyTorch']
    },
    {
      category: 'DevOps',
      items: ['Docker', 'AWS', 'Kubernetes', 'CI/CD', 'Selenium', 'Web Scraping']
    }
  ];

  const categoryIcons = [
    <Code className="w-6 h-6" />,
    <Wrench className="w-6 h-6" />,
    <BarChart className="w-6 h-6" />,
    <Database className="w-6 h-6" />,
    <Brain className="w-6 h-6" />,
    <Cloud className="w-6 h-6" />
  ];

  const skillLevels = {
    'Python': 95,
    'R': 85,
    'T-SQL': 80,
    'Java': 75,
    'TypeScript': 70,
    'JavaScript': 85,
    'Django': 90,
    'Flask': 85,
    'Spring Boot': 50,
    'React': 80,
    'Express.js': 50,
    'FastAPI': 70,
    'PostgreSQL': 85,
    'MySQL': 80,
    'Docker': 75,
    'AWS': 70,
    'Kubernetes': 65,
    'Machine Learning': 85,
    'Deep Learning': 80,
    'NLP': 80,
    'Computer Vision': 75,
    'TensorFlow': 70,
    'PyTorch': 65,
    'Apache Spark': 75,
    'Kafka': 70,
    'Airflow': 65,
    'Elasticsearch': 60,
    'Neo4j': 55,
    'ClickHouse': 50,
    'MongoDB': 45,
    'Redis': 95,
    'Hadoop': 85,
    'Hive': 80,
    
    'Apache Nifi': 80,
    'Selenium': 95,
    'Web Scraping': 90,
    'CI/CD': 35,
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Compétences{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Techniques
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
            Un ensemble complet de technologies modernes pour développer des solutions innovantes
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Category Tabs */}
          <div className="lg:col-span-1">
            <div className="space-y-2">
              {skillCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`w-full flex items-center gap-3 p-4 rounded-lg text-left transition-all duration-300 ${
                    activeCategory === index
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                      : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <div className={`${activeCategory === index ? 'text-white' : 'text-blue-600 dark:text-blue-400'}`}>
                    {categoryIcons[index]}
                  </div>
                  <span className="font-medium">{category.category}</span>
                  <div className={`ml-auto px-2 py-1 rounded-full text-xs ${
                    activeCategory === index
                      ? 'bg-white/20 text-white'
                      : 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                  }`}>
                    {category.items.length}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                {categoryIcons[activeCategory]}
                {skillCategories[activeCategory].category}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skillCategories[activeCategory].items.map((skill, index) => (
                  <div
                    key={index}
                    className="group p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700"
                  >
                    <div className="text-center">
                      <div className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                        {skill}
                      </div>
                      {skillLevels[skill] && (
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skillLevels[skill]}%` }}
                          ></div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">6</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Catégories</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">30+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">2+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Années d'Exp.</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">20+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Projets</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;