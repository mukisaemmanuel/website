import React, { useState, useEffect, useRef } from "react";
import { skills } from "../data/portfolio.data";
import { Skill } from "../types/portfolio.types";

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: "all", label: "All Skills", icon: "fas fa-th" },
    { id: "frontend", label: "Frontend", icon: "fas fa-palette" },
    { id: "backend", label: "Backend", icon: "fas fa-server" },
    { id: "database", label: "Database", icon: "fas fa-database" },
    { id: "tools", label: "Tools", icon: "fas fa-tools" },
  ];

  const filteredSkills =
    selectedCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getSkillColor = (level: number) => {
    if (level >= 90) return "from-green-500 to-emerald-600";
    if (level >= 80) return "from-blue-500 to-cyan-600";
    if (level >= 70) return "from-yellow-500 to-orange-600";
    return "from-red-500 to-pink-600";
  };

  const SkillCard: React.FC<{ skill: Skill; index: number }> = ({
    skill,
    index,
  }) => (
    <div
      className={`bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          {skill.icon && (
            <div className="text-2xl text-blue-600 dark:text-blue-400">
              <i className={skill.icon}></i>
            </div>
          )}
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {skill.name}
          </h3>
        </div>
        <span className="text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded-full">
          {skill.level}%
        </span>
      </div>

      <div className="relative">
        <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${getSkillColor(
              skill.level
            )} rounded-full transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              width: isVisible ? `${skill.level}%` : "0%",
              transitionDelay: `${index * 100 + 300}ms`,
            }}></div>
        </div>
      </div>

      <div className="mt-3 text-xs text-gray-500 dark:text-gray-400 capitalize">
        {skill.category}
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-gray-900"
      ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are the technologies and skills I've mastered throughout my
            journey as a software engineer.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}>
              <i className={category.icon}></i>
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-blue-900 p-8 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {skills.filter((s) => s.category === "frontend").length}+
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                Frontend Technologies
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                {skills.filter((s) => s.category === "backend").length}+
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                Backend Technologies
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                {Math.round(
                  skills.reduce((acc, skill) => acc + skill.level, 0) /
                    skills.length
                )}
                %
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                Average Proficiency
              </div>
            </div>
          </div>
        </div>

        {/* Certifications & Learning */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Continuous Learning
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AWS Certified Developer",
                provider: "Amazon Web Services",
                icon: "fab fa-aws",
                color: "text-orange-500",
              },
              {
                title: "React Advanced Patterns",
                provider: "Frontend Masters",
                icon: "fab fa-react",
                color: "text-blue-500",
              },
              {
                title: "System Design Interview",
                provider: "Educative.io",
                icon: "fas fa-sitemap",
                color: "text-purple-500",
              },
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg border-l-4 border-blue-600">
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`text-2xl ${cert.color}`}>
                    <i className={cert.icon}></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {cert.title}
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {cert.provider}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
