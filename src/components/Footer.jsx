import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
       
        <div className="footer-column">
          <div className="footer-brand-wrapper">
            <svg 
              className="g-professor-svg" 
              viewBox="0 0 76 136" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M39.0313 0.0363917C47.0215 1.52911 55.7687 16.3895 60.0424 34.8215C50.4886 21.8746 46.7874 17.0807 39.9191 15.8015C33.3346 18.6143 27.194 36.3758 22.4591 52.6611C14.6858 79.3966 9.02041 99.5716 29.4875 112.537C42.3605 120.692 66.9229 103.509 58.9327 72.4968C44.9592 85.8003 38.7644 87.4511 29.4875 84.1172C43.0626 73.7527 54.2559 63.2666 64.7034 47.478C73.8773 78.3422 83.939 97.5879 64.7034 120.31C45.4678 143.033 -5.0625 146.218 0.412204 94.7014C5.8869 43.1852 31.0411 -1.45633 39.0313 0.0363917Z" 
                fill="currentColor"
              />
            </svg>
            <span className="brand-text-pink">licogotas</span>
          </div>
          
          <p className="footer-description">
            Educando crianças sobre diabetes tipo 1 de forma lúdica e divertida.
          </p>
          
          <div className="footer-socials">
            <a href="#" className="social-circle"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" className="social-circle"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" className="social-circle"><FontAwesomeIcon icon={faYoutube} /></a>
          </div>
        </div>

        {/* Coluna 2: Mapa do Site */}
        <div className="footer-column">
          <h4>Mapa do Site</h4>
          <ul className="footer-links">
            <li><a href="#sobre">Sobre o Projeto</a></li>
            <li><a href="#ecossistema">Nosso Ecossistema</a></li>
            <li><a href="#publicacoes">Publicações</a></li>
            <li><a href="#equipe">Equipe</a></li>
          </ul>
        </div>

        {/* Coluna 3: Contato */}
        <div className="footer-column">
          <h4>Contato</h4>
          <p className="footer-info">Email: contato@glicogotas.com</p>
          <p className="footer-info">Telefone: (11) 98765-4321</p>
        </div>

        {/* Coluna 4: Newsletter (Placeholder Branco) */}
        <div className="footer-column">
          <h4>Newsletter</h4>
          <p className="footer-info">Receba nossas novidades!</p>
          <div className="newsletter-wrapper">
            <input 
              type="email" 
              placeholder="Seu e-mail" 
              className="newsletter-input" 
            />
            <button type="button" className="newsletter-button">Enviar</button>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Glicogotas. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}