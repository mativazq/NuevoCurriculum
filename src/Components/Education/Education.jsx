import React from 'react'
import './education.css'

const Education = () => {
  return (
    <section  id='study' className="education">
      <h2>📖 Estudios</h2>
      <p className="education-title">
        <span className="dot"></span>
        Carrera de Desarrollo Frontend React - Coder House
      </p>
      <div className="education-grid">
        <a href="https://pub.coderhouse.com/legacy-certificates/62f110d351a36102616164b0?lang=es" className="education-item">
          Desarrollo Web
        </a>
        <a href="https://pub.coderhouse.com/legacy-certificates/640557f0e703ab000e558606?lang=es" className="education-item">
          JavaScript
        </a>
        <a href="https://pub.coderhouse.com/legacy-certificates/64caa5a0a1ec64398d9fc5d6?lang=es" className="education-item">
          ReactJS
        </a>
        <a href="https://pub.coderhouse.com/legacy-certificates/64caa5a0a1ec64b7049fc5d8?lang=es" className="education-item">
          Desarrollo Frontend React
        </a>
      </div>
      <p className="education-title">
        <span className="dot"></span>
        Desarrollo Web en Python
      </p>
      <a href="https://pub.coderhouse.com/legacy-certificates/664fd64962cb29a7cd81d991?lang=es" className="education-item">
          Desarrollo Web en Python
        </a>

    </section>
  );
};

export default Education;
