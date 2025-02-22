import React from "react";
import "./projects.css";
import projectImage from "../../Images/Tiendita.png";
import ImgPython from "../../Images/PythonDjango.png";
import ImgGefes from "../../Images/Gefes.png";

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Proyectos</h2>

{/* Proyecto React */}
      <div className="project-card">

        <img src={projectImage} alt="Proyecto" className="project-image" />

        <div className="project-content">
          <h3 className="project-name">Mi Tiendita NBA</h3>


          <div className="tech-stack">
            <span className="tech-tag">React</span>
            <span className="tech-tag">Vite</span>
            <span className="tech-tag">SASS</span>
            <span className="tech-tag">Firebase</span>
            <span className="tech-tag">Bootstrap</span>
          </div>


          <p className="project-description">
          Proyecto realizado de forma personal, se trata de un ecommerce con catalogo de productos y subida de estos al carrito, cuenta con orden de compra a la hora de efectuar esta misma, la cual se envía al e-mail del vendedor para preparar este pedido al igual que el formulario de contacto.
          </p>


          <div className="buttons-container">
            <a href="https://github.com/mativazq/mi-tienda-nba" className="button">Code</a>
            <a href="https://mi-tienda-vazquez-matias.netlify.app/" className="button">Deploy</a>
          </div>
        </div>
      </div>

{/* Proyecto Python */}
      <div className="project-card">

        <img src={ImgPython} alt="Proyecto" className="project-image" />


        <div className="project-content">
          <h3 className="project-name">Bookings</h3>


          <div className="tech-stack">
            <span className="tech-tag">Python</span>
            <span className="tech-tag">Django</span>
            <span className="tech-tag">SQLite</span>
          </div>


          <p className="project-description">
          Proyecto realizado de forma personal academicamente. Este proyecto es una aplicación web de reservas creada con Django. Permite a los usuarios registrarse, crear salas y hacer reservas.
          </p>


          <div className="buttons-container">
            <a href="https://github.com/mativazq/trabajo_final_vazquez" className="button">Code</a>
            <a href="https://github.com/mativazq/trabajo_final_vazquez" className="button">Deploy</a>
          </div>
        </div>
      </div>

      {/* Maquetado HTML - CSS */}
      <div className="project-card">

<img src={ImgGefes} alt="Proyecto" className="project-image" />


<div className="project-content">
  <h3 className="project-name">Gefes con G</h3>


  <div className="tech-stack">
    <span className="tech-tag">HTML</span>
    <span className="tech-tag">CSS</span>
    <span className="tech-tag">SASS</span>
  </div>


  <p className="project-description">
  Maquetado realizado de forma personal, se trata de una landing page informativa junto con dos pestañas aparte de cursos con carrousel y de contacto.
  </p>


  <div className="buttons-container">
    <a href="https://github.com/mativazq/GefesConG" className="button">Code</a>
    <a href="https://mativazq.github.io/GefesConG//" className="button">Deploy</a>
  </div>
</div>
</div>
    </section>
  );
};

export default Projects;
