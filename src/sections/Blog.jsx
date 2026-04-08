import React from 'react';
import './Blog.css';

// IMPORTAÇÕES DAS 3 IMAGENS (Ajustadas com o novo nome)
import imgFestival from "../assets/images/festival-curicaca.png"; 
import imgDiabetes from "../assets/images/diabetes.jpg"; 
import imgLanche from "../assets/images/lanche.png";

export default function Blog() {
  const posts = [
    {
      imagem: imgFestival,
      data: "21 de Junho, 2026",
      titulo: "Glicogotas no Festival Curicaca",
      resumo: "Foi um sucesso! Apresentamos nosso projeto na feira InnovaSaúde e compartilhamos nossa missão com especialistas da área."
    },
    {
      imagem: imgDiabetes,
      data: "18 de Junho, 2026",
      titulo: "Entendendo o Diabetes Infantil",
      resumo: "Um guia prático para pais e educadores sobre como lidar com o diagnóstico de forma acolhedora."
    },
    {
      imagem: imgLanche,
      data: "15 de Junho, 2026",
      titulo: "Dicas de lanches para o dia a dia",
      resumo: "Aprenda como preparar lanches rápidos e saudáveis que ajudam a manter a glicemia estável com muito sabor."
    }
  ];

  return (
    <section className="blog-section">
      <div className="blog-container">
        
        <header className="blog-header">
          <h2 className="blog-title">Nosso Blog</h2>
          <p className="blog-subtitle">Fique por dentro das novidades e dicas do universo Glicogotas.</p>
        </header>

        <div className="blog-grid">
          {posts.map((post, index) => (
            <article key={index} className="blog-card">
              <div className="blog-card-image">
                <img src={post.imagem} alt={post.titulo} />
              </div>
              <div className="blog-card-content">
                <span className="blog-date">{post.data}</span>
                <h3 className="blog-card-title">{post.titulo}</h3>
                <p className="blog-card-text">{post.resumo}</p>
                <button className="blog-read-more">Ler mais</button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}