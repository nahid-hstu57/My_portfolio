import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faHtml5,
  faBootstrap,
  faJs,
  faReact,
  faNodeJs,
  faGitAlt,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faCode,
  faLayerGroup,
  faRoute,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: faCode,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "HTML", icon: faHtml5, color: "text-orange-600", level: 90 },
        { name: "CSS", icon: faCss3Alt, color: "text-blue-600", level: 85 },
        { name: "Daisy UI", icon: faBootstrap, color: "text-purple-600", level: 88 },
        { name: "Tailwind CSS", icon: faCss3Alt, color: "text-teal-500", level: 85 },
        { name: "JavaScript", icon: faJs, color: "text-yellow-500", level: 85 },
        // { name: "TypeScript", icon: faJs, color: "text-blue-500", level: 75 },
        { name: "React", icon: faReact, color: "text-cyan-500", level: 85 },
        // { name: "jQuery", icon: faJs, color: "text-blue-400", level: 70 },
        // { name: "React Lottie", icon: faReact, color: "text-cyan-500", level: 75 },
        // { name: "Redux", icon: faReact, color: "text-purple-500", level: 70 },
        { name: "React Router", icon: faRoute, color: "text-red-500", level: 80 },
      ]
    },
    {
      title: "Backend Development",
      icon: faDatabase,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", icon: faNodeJs, color: "text-green-600", level: 75 },
        { name: "Express.js", icon: faNodeJs, color: "text-gray-600", level: 75 },
        { name: "MongoDB", icon: faDatabase, color: "text-green-500", level: 70 },
        { name: "My SQL", icon: faDatabase, color: "text-green-500", level: 73 },
      ]
    },
    {
      title: "Version Control & Tools",
      icon: faLayerGroup,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "GitHub", icon: faGithub, color: "text-gray-800", level: 85 },
        { name: "Git", icon: faGitAlt, color: "text-orange-600", level: 85 },
      ]
    },
  ];

  // Flatten skill list for the dark card layout
  const skills = [
    { name: "HTML", icon: faHtml5, bg: "from-orange-400 to-yellow-400" },
    { name: "CSS", icon: faCss3Alt, bg: "from-blue-400 to-indigo-500" },
    { name: "Bootstrap", icon: faBootstrap, bg: "from-purple-500 to-pink-500" },
    { name: "Tailwind CSS", icon: faCss3Alt, bg: "from-cyan-400 to-teal-500" },
    { name: "JavaScript", icon: faJs, bg: "from-yellow-400 to-orange-500" },
    { name: "React", icon: faReact, bg: "from-sky-400 to-blue-500" },
    { name: "React Router", icon: faRoute, bg: "from-red-400 to-pink-400" },
    { name: "Node.js", icon: faNodeJs, bg: "from-green-400 to-emerald-500" },
    { name: "Express.js", icon: faNodeJs, bg: "from-stone-400 to-gray-600" },
    { name: "MongoDB", icon: faDatabase, bg: "from-emerald-400 to-green-600" },
    { name: "GitHub", icon: faGithub, bg: "from-slate-600 to-gray-800" },
    { name: "Git", icon: faGitAlt, bg: "from-orange-500 to-red-500" },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">My Skills</h1>
        <p className="text-gray-300">Here are some of the technologies I work with</p>
        <div className="mt-6 inline-block bg-slate-800/60 px-4 py-2 rounded-full text-slate-200 shadow-md">Redux</div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((s, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 flex flex-col items-center justify-center gap-4 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition bg-slate-800`}
            >
              <div className="relative bg-slate-900 rounded-2xl p-4 flex items-center justify-center shadow-inner w-28 h-28 overflow-hidden">
                <div className={`absolute -inset-1 rounded-2xl opacity-80 gradient-overlay-${i % 6}`} />
                <div className="relative z-10 flex items-center justify-center w-full h-full">
                  <FontAwesomeIcon icon={s.icon} className="text-4xl text-white" />
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-slate-100 mt-2">{s.name}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <div className="bg-slate-800 rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-bold text-slate-100 mb-4">Technology Stack</h2>
            <div className="flex flex-wrap gap-3">
              {[
                "HTML","CSS","Bootstrap","Tailwind CSS","JavaScript","React",
                "React Router","Node.js","Express.js","MongoDB","GitHub","Git"
              ].map((t, idx) => {
                const badgeGradients = [
                  "from-pink-500 to-orange-400",
                  "from-indigo-500 to-purple-500",
                  "from-green-400 to-teal-400",
                  "from-yellow-400 to-orange-500",
                  "from-sky-400 to-blue-500",
                ];
                const g = badgeGradients[idx % badgeGradients.length];
                return (
                  <span key={idx} className={`px-3 py-2 rounded-full text-sm text-white bg-gradient-to-r ${g}`}>{t}</span>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-gradient {
          background: linear-gradient(90deg,#f472b6,#06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .gradient-overlay-0{background:linear-gradient(135deg,#f97316 0%,#f97316 40%,#f59e0b 100%);mix-blend-mode:screen}
        .gradient-overlay-1{background:linear-gradient(135deg,#3b82f6 0%,#6366f1 100%);mix-blend-mode:screen}
        .gradient-overlay-2{background:linear-gradient(135deg,#8b5cf6 0%,#ec4899 100%);mix-blend-mode:screen}
        .gradient-overlay-3{background:linear-gradient(135deg,#06b6d4 0%,#0ea5a4 100%);mix-blend-mode:screen}
        .gradient-overlay-4{background:linear-gradient(135deg,#f59e0b 0%,#ef4444 100%);mix-blend-mode:screen}
        .gradient-overlay-5{background:linear-gradient(135deg,#10b981 0%,#047857 100%);mix-blend-mode:screen}
        .gradient-overlay-0,.gradient-overlay-1,.gradient-overlay-2,.gradient-overlay-3,.gradient-overlay-4,.gradient-overlay-5{filter:blur(18px);transform:scale(1.2)}
      `}</style>
    </div>
  );
}
