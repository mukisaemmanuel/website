import React from "react";
import { personalInfo, education } from "../data/portfolio.data";

const About: React.FC = () => {
  const stats = [
    { label: "Years Experience", value: "4+", icon: "fas fa-calendar-alt" },
    {
      label: "Projects Completed",
      value: "50+",
      icon: "fas fa-project-diagram",
    },
    { label: "Happy Clients", value: "30+", icon: "fas fa-smile" },
    { label: "Lines of Code", value: "100K+", icon: "fas fa-code" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Stats */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center shadow-2xl">
                <div className="w-72 h-72 rounded-xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-8xl text-gray-500 dark:text-gray-400">
                  <i className="fas fa-user-tie"></i>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <i className="fas fa-laptop-code text-white text-xl"></i>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <i className="fas fa-rocket text-white text-xl"></i>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl text-blue-600 dark:text-blue-400 mb-2">
                    <i className={stat.icon}></i>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - About Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Who Am I?
              </h3>
              <div className="prose prose-lg text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  I'm a passionate software engineer with over 4 years of
                  experience in creating innovative digital solutions. My
                  journey began with a curiosity about how things work and has
                  evolved into a deep love for crafting efficient, scalable
                  applications.
                </p>
                <p>
                  I specialize in full-stack web development, with expertise in
                  modern JavaScript frameworks like React and Node.js. I believe
                  in writing clean, maintainable code and following best
                  practices to deliver high-quality software.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  knowledge with the developer community.
                </p>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div
                    key={edu.id}
                    className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg border-l-4 border-blue-600">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {edu.degree} in {edu.field}
                        </h4>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">
                          {edu.institution}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {edu.location} • {edu.duration}
                        </p>
                        {edu.gpa && (
                          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                            GPA: {edu.gpa}
                          </p>
                        )}
                      </div>
                      <div className="text-2xl text-blue-600 dark:text-blue-400">
                        <i className="fas fa-graduation-cap"></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Qualities */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                What Drives Me
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: "fas fa-lightbulb",
                    title: "Innovation",
                    description: "Always exploring new ways to solve problems",
                  },
                  {
                    icon: "fas fa-users",
                    title: "Collaboration",
                    description: "Working together to achieve great results",
                  },
                  {
                    icon: "fas fa-chart-line",
                    title: "Growth",
                    description: "Continuously learning and improving",
                  },
                  {
                    icon: "fas fa-heart",
                    title: "Passion",
                    description: "Loving what I do every single day",
                  },
                ].map((quality, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                    <div className="text-xl text-blue-600 dark:text-blue-400 mb-2">
                      <i className={quality.icon}></i>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {quality.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {quality.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Download Resume Button */}
            <div className="pt-6">
              <a
                href={personalInfo.resume}
                download
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <i className="fas fa-download"></i>
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
