import React from "react";
import { experience } from "../data/portfolio.data";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey and the experiences that have shaped my
            expertise.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}>
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>

                {/* Experience Card */}
                <div
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}>
                  <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    {/* Company and Duration */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full">
                        {exp.duration}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        <i className="fas fa-map-marker-alt mr-1"></i>
                        {exp.location}
                      </div>
                    </div>

                    {/* Position and Company */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.position}
                    </h3>
                    <h4 className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-4">
                      {exp.company}
                    </h4>

                    {/* Job Description */}
                    <ul className="space-y-2 mb-6">
                      {exp.description.map((desc, descIndex) => (
                        <li
                          key={descIndex}
                          className="flex items-start text-gray-600 dark:text-gray-300">
                          <i className="fas fa-chevron-right text-blue-600 dark:text-blue-400 mr-3 mt-1 text-sm flex-shrink-0"></i>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div>
                      <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies Used:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Highlights */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Career Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "fas fa-rocket",
                title: "Project Lead",
                description: "Led development of 10+ successful projects",
                color: "text-blue-600",
              },
              {
                icon: "fas fa-users",
                title: "Team Mentor",
                description: "Mentored 15+ junior developers",
                color: "text-green-600",
              },
              {
                icon: "fas fa-chart-line",
                title: "Performance",
                description: "Improved app performance by 40%",
                color: "text-purple-600",
              },
              {
                icon: "fas fa-award",
                title: "Recognition",
                description: "Employee of the Year 2023",
                color: "text-yellow-600",
              },
            ].map((highlight, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                <div className={`text-3xl ${highlight.color} mb-4`}>
                  <i className={highlight.icon}></i>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to add value to your team?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I'm always open to discussing new opportunities and challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center space-x-2">
                <span>Contact Me</span>
                <i className="fas fa-arrow-right"></i>
              </button>
              <a
                href="/resume.pdf"
                download
                className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors inline-flex items-center justify-center space-x-2">
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

export default Experience;
