import React from 'react'
import './education.css'

const Education = () => {
  return (
    <section  id='study' className="education">
      <h2>📖 Estudios</h2>
            <p className="education-title">
        <span className="dot"></span>
        Tecnicatura Universitaria en Diseño Multimedia y Web - Universidad Nacional del Litoral 
      </p>
      <p>03/2025 – Actualidad</p>
      <p className="education-title">
        <span className="dot"></span>
        Carrera de Desarrollo Frontend React - Coder House  
      </p>
      <p>01/2023 – 07/2023</p>
      <p className="education-title">
        <span className="dot"></span>
        Desarrollo Web en Python - Coder House   
      </p>
      <p>01/2024 – 04/2024</p>
            <p className="education-title">
        <span className="dot"></span>
        Tecnico en Informática Personal y Profesional - Escuela de Educación Tecnica N° 480 "Manuel Belgrano"
      </p>
      <p>03/2006 – 12/2012</p>
    </section>
  );
};

export default Education;
