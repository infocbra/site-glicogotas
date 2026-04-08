import React from 'react';
import './Ecossistema.css';

import imgApp from "../assets/images/app.png";
import imgLivreto from "../assets/images/livreto.png";
import imgJogos from "../assets/images/jogo.png";
import imgGoods from "../assets/images/glicogoods.jpeg"; 

export default function Ecossistema() {
  const cards = [
    {
      title: "App Glicogotas",
      description: "Uma aventura interativa com minigames que ensinam sobre medição de glicose, alimentação e muito mais.",
      image: imgApp
    },
    {
      title: "Livreto",
      description: "Passatempos, desenhos para colorir e histórias que reforçam o aprendizado de forma divertida e offline.",
      image: imgLivreto
    },
    {
      title: "Jogos da Tabuleiro",
      description: "Reúna a família e os amigos para jogos cooperativos sobre os altos e baixos da glicemia.",
      image: imgJogos
    },
    {
      title: "Glico Goods",
      description: "Solte a criatividade com nossos personagens e aprenda enquanto colore. Uma atividade relaxante e educativa.",
      image: imgGoods
    }
  ];

  return (
    <section className="eco-section">
      <div className="eco-container">
        <div className="eco-header">
          <h2 className="eco-title">Nosso Ecossistema</h2>
          <p className="eco-subtitle">
            Ferramentas criadas com carinho para educar, engajar e divertir.
          </p>
        </div>

        <div className="eco-wrapper">
          <button className="eco-nav-btn">❮</button>

          <div className="eco-grid">
            {cards.map((card, index) => (
              <div key={index} className="eco-card">
                <div className="eco-card-image">
                  <img src={card.image} alt={card.title} />
                </div>
                <div className="eco-card-body">
                  <h3 className="eco-card-title">{card.title}</h3>
                  <p className="eco-card-text">{card.description}</p>
                  <a href="#" className="eco-card-link">Ver mais →</a>
                </div>
              </div>
            ))}
          </div>

          <button className="eco-nav-btn">❯</button>
        </div>
      </div>
    </section>
  );
}