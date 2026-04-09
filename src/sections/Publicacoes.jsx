import React, { useState } from 'react'; 
import './Publicacoes.css';

export default function Publicacoes() {

  const [expandido, setExpandido] = useState(false);

  const itens = [
  
    {
      titulo: "GLICOGOTAS APP: Um aplicativo educacional sobre Diabetes Mellitus tipo 1",
      local: "Artigo Científico - Revista Educação & Inovação",
      ano: "2025"
    },
    {
      titulo: "Glicogotas: Descomplicando o diabetes com a Lita!",
      local: "Livro - Editora IFB Brasília (ISBN: 9786560740259)",
      ano: "2025"
    },
    {
      titulo: "A Mobile Application for Education on Type 1 Diabetes Mellitus",
      local: "18th Int. Conference on Advanced Technologies & Treatments for Diabetes - Amsterdã",
      ano: "2025"
    },
   
    {
      titulo: "Festival Curicaca mostra como tecnologias podem transformar vidas",
      local: "Entrevista Especial - Portal Metrópoles",
      ano: "2025"
    },
    {
      titulo: "Glicogotas: a divulgação científica como ferramenta em saúde",
      local: "Festival Curicaca – Conecta IF",
      ano: "2025"
    },
    {
      titulo: "Glicogotas na prática clínica",
      local: "XVI CONSOPERJ - Rio de Janeiro",
      ano: "2025"
    },
    
  ];


  const itensVisiveis = expandido ? itens : itens.slice(0, 3);

  return (
    <section className="pub-section" id="publicacoes">
      <div className="pub-container">
        
        <header className="pub-header">
          <h2 className="pub-title">Publicações e Eventos</h2>
          <p className="pub-subtitle">
            Compartilhando nosso conhecimento e experiência com a comunidade.
          </p>
        </header>

        <div className={`pub-list ${expandido ? 'is-expanded' : ''}`}>
          {itensVisiveis.map((item, index) => (
            <div key={index} className="pub-item">
              <div className="pub-info">
                <h3 className="pub-item-title">{item.titulo}</h3>
                <p className="pub-item-local">{item.local}</p>
              </div>
              <div className="pub-year-tag">
                {item.ano}
              </div>
            </div>
          ))}
        </div>

        <button 
          className="pub-btn-all" 
          onClick={() => setExpandido(!expandido)}
        >
          {expandido ? 'Ver menos' : 'Ver todas as publicações e eventos'}
        </button>

      </div>
    </section>
  );
}