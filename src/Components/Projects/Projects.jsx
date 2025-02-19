import React from "react";
import "./projects.css";
import projectImage from "../../Images/Tiendita.png"; // Asegúrate de que la imagen esté en la carpeta correcta


const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Proyectos</h2>

      <div className="project-card">
        {/* Imagen del proyecto */}
        <img src={projectImage} alt="Proyecto" className="project-image" />

        {/* Contenido del proyecto */}
        <div className="project-content">
          <h3 className="project-name">Kawaii Universe</h3>

          {/* Tecnologías usadas */}
          <div className="tech-stack">
            <span className="tech-tag">HTML</span>
            <span className="tech-tag">SASS</span>
            <span className="tech-tag">JavaScript</span>
            <span className="tech-tag">Bootstrap</span>
          </div>

          {/* Descripción */}
          <p className="project-description">
            Proyecto realizado de forma freelance, con un equipo de diseño y un programador más. Construimos esta web de presentación adaptable a distintos dispositivos.
          </p>

          {/* Botones */}
          <div className="buttons-container">
            <button className="button">
              <p>Deploy</p>
            </button>
            <button className="button">
            <p>Code</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
