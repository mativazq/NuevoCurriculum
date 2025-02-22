import React from "react";
import "./footer.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import ImgLogo from "../../Images/Reduc_blanco.png"

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-left">
      <img src= {ImgLogo} alt="Logo" className="logo" />
        <p>© 2025 Matias Vazquez</p>
        <a href="https://www.linkedin.com/in/mativazq/" className="foot-by" > Portfolio by @Mati </a>
      </div>

      <div className="footer-right">
        <h4>Contacto</h4>
        <ul>
          <li>
            <FaLinkedin className="icon" />
            <a href="https://www.linkedin.com/in/mativazq/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <FaGithub className="icon" />
            <a href="https://github.com/mativazq" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <FaEnvelope className="icon" />
            <a href="mailto:matyv15@gmail.com">Email</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
