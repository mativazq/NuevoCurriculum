import React from 'react'
import './skills.css'
import htmlIcon from "../../Images/html.png"
import cssIcon from "../../Images/css-3.png"
import sassIcon from "../../Images/sass.png"
import bootstrapIcon from "../../Images/bootstrap.png"
import javascriptIcon from "../../Images/javascript.png"
import reactIcon from "../../Images/react.png"
import gitIcon from "../../Images/git.png"
import firebaseIcon from "../../Images/firebase.png"
import pythonIcon from "../../Images/python.png"
import djangoIcon from "../../Images/django.png"

const Skills = () => {
  const skills = [
    { name: "HTML", img: htmlIcon },
    { name: "CSS", img: cssIcon },
    { name: "Sass", img: sassIcon },
    { name: "Bootstrap", img: bootstrapIcon },
    { name: "JavaScript", img: javascriptIcon },
    { name: "React", img: reactIcon },
    { name: "Git", img: gitIcon },
    { name: "Firebase", img: firebaseIcon },
    { name: "Python", img: pythonIcon },
    { name: "Django", img: djangoIcon },
  ];

  return (
    <section className="skills-section">
      <h2 className="skills-title">⚙ Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <img src={skill.img} alt={skill.name} className="skill-icon" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;