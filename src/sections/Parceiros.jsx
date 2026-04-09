import React from 'react';
import './Parceiros.css';

// Importação das imagens 
import logoIFRJ from '../assets/images/ifbrj.png';
import logoIFB from '../assets/images/ifbdf.png';
import logoCNPq from '../assets/images/cnpq.png';
import logoFAPDF from '../assets/images/fapdf.png';
import logoGDF from '../assets/images/gdf.png';

export default function Parceiros() {
  const logos = [
    { src: logoIFRJ, alt: "IFRJ" },
    { src: logoIFB, alt: "IFB" },
    { src: logoCNPq, alt: "CNPq" },
    { src: logoFAPDF, alt: "FAPDF" },
    { src: logoGDF, alt: "GDF" },
  ];

  return (
    <section className="parceiros-section">
      <div className="parceiros-container">
        <h2 className="parceiros-title">Parceiros</h2>
        <p className="parceiros-subtitle">
          Agradecemos o apoio fundamental dos nossos parceiros para a realização e o contínuo desenvolvimento deste projeto.
        </p>
        
        <div className="parceiros-logos">
          {logos.map((logo, index) => (
            <div key={index} className="logo-item">
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}