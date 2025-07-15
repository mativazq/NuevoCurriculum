import React from "react";
import "./projects.css";
import projectImage from "../../Images/Tiendita.png";
import ImgPython from "../../Images/PythonDjango.png";
import ImgGefes from "../../Images/Gefes.png";
import ImgFotografia from "../../Images/Fotografia.png";
import ImgMvFoto from "../../Images/MvFoto.png";
import TiendaJs from "../../Images/TiendaJs.png";

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Proyectos</h2>

                  <div className="project-card">
        <img src={ImgFotografia} alt="Proyecto" className="project-image" />

        <div className="project-content">
          <h3 className="project-name">MV Fotografia (en producción) </h3>

          <div className="tech-stack">
            <span className="tech-tag">React</span>
            <span className="tech-tag">Vite</span>
            <span className="tech-tag">Bootstrap</span>
          </div>

          <p className="project-description">
            Proyecto realizado de forma personal, se trata de una pagina donde se va a mostrar distintas galerias de eventos
            y trabajos realizados, junto con un formulario de contacto para que los clientes puedan comunicarse conmigo. La pagina esta en proceso de desarrollo, pero ya se puede ver el avance y la estructura general.
          </p>

          <div className="buttons-container">
            <a
              href="https://github.com/mativazq/MatiVazquezFotografia"
              className="button"
            >
              Code
            </a>
            <a
              href="https://mv-fotografia.netlify.app/"
              className="button"
            >
              Deploy
            </a>
          </div>
        </div>
      </div>

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
            Proyecto realizado de forma personal, se trata de un ecommerce con
            catalogo de productos y subida de estos al carrito, cuenta con orden
            de compra a la hora de efectuar esta misma, la cual se envía al
            e-mail del vendedor para preparar este pedido al igual que el
            formulario de contacto.
          </p>

          <div className="buttons-container">
            <a
              href="https://github.com/mativazq/mi-tienda-nba"
              className="button"
            >
              Code
            </a>
            <a
              href="https://mi-tienda-vazquez-matias.netlify.app/"
              className="button"
            >
              Deploy
            </a>
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
            Proyecto realizado de forma personal academicamente. Este proyecto
            es una aplicación web de reservas creada con Django. Permite a los
            usuarios registrarse, crear salas y hacer reservas.
          </p>

          <div className="buttons-container">
            <a
              href="https://github.com/mativazq/trabajo_final_vazquez"
              className="button"
            >
              Code
            </a>
            <a
              href="https://github.com/mativazq/trabajo_final_vazquez"
              className="button"
            >
              Deploy
            </a>
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
            Maquetado realizado de forma personal, se trata de una landing page
            informativa junto con dos pestañas aparte de cursos con carrousel y
            de contacto.
          </p>

          <div className="buttons-container">
            <a href="https://github.com/mativazq/GefesConG" className="button">
              Code
            </a>
            <a href="https://mativazq.github.io/GefesConG//" className="button">
              Deploy
            </a>
          </div>
        </div>
      </div>

      <div className="project-card">
        <img src={TiendaJs} alt="Proyecto" className="project-image" />

        <div className="project-content">
          <h3 className="project-name">Tienda NBA</h3>

          <div className="tech-stack">
            <span className="tech-tag">JavaScript</span>
            <span className="tech-tag">HTML</span>
            <span className="tech-tag">CSS</span>
          </div>

          <p className="project-description">
            Proyecto realizado de forma personal, se trata de un ecommerce con
            catalogo de productos y subida de estos al carrito, simula una
            compra ficticia hasta el ultimo paso de pago.
          </p>

          <div className="buttons-container">
            <a href="https://github.com/mativazq/nuevoJS" className="button">
              Code
            </a>
            <a href="https://mativazq.github.io/nuevoJS/" className="button">
              Deploy
            </a>
          </div>
        </div>
      </div>

            <div className="project-card">
        <img src={ImgMvFoto} alt="Proyecto" className="project-image" />

        <div className="project-content">
          <h3 className="project-name">Mati Vazquez Fotografia</h3>

          <div className="tech-stack">
            <span className="tech-tag">SASS</span>
            <span className="tech-tag">HTML</span>
            <span className="tech-tag">CSS</span>
          </div>

          <p className="project-description">
            Proyecto realizado de forma personal, se trata de una pagina con secciones de contacto, galeria, clientes y sobre mi. Maquetado en SASS y HTML, con un diseño limpio y moderno.
          </p>

          <div className="buttons-container">
            <a
              href="https://github.com/mativazq/mvfotografia"
              className="button"
            >
              Code
            </a>
            <a
              href="https://mativazq.github.io/mvfotografia/"
              className="button"
            >
              Deploy
            </a>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Projects;
