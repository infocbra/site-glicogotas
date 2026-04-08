import React from 'react';
import './Conheca.css';
import logoGlicogotas from '../assets/images/group 2.png'; 

export default function Conheca() {
  return (
    <section className="conheca-container">
      <div className="conheca-content">
        
        {/* Lado Esquerdo: O Círculo com a Logo GLICO */}
        <div className="conheca-logo-area">
          <div className="circle-outer">
            <div className="circle-inner">
            
              <img 
                src={logoGlicogotas} 
                alt="Logo Glicogotas" 
                className="logo-image-inner" 
              />
            </div>
          </div>
        </div>

        {/* Lado Direito: O Texto */}
        <div className="conheca-text-area">
          <h2 className="conheca-title">Conheça o Glicogotas</h2>
          
          <p className="conheca-description">
            O Glicogotas é um projeto inovador que transforma a educação em diabetes tipo 1 em uma experiência lúdica e positiva para crianças. 
            Nossa missão é empoderar os pequenos e suas famílias, oferecendo ferramentas que unem diversão, cuidado e aprendizado para uma vida 
            mais saudável e feliz.
          </p>
          
          <p className="conheca-description">
            Nosso ecossistema completo inclui um aplicativo interativo, jogos, livretos, livros de colorir e até um livro em feltro. Cada item é 
            cuidadosamente desenvolvido para falar a língua das crianças, transformando a jornada de conhecimento sobre o diabetes em uma grande 
            e animada aventura.
          </p>

          <button className="btn-ver-mais">Ver Mais</button>
        </div>

      </div>
    </section>
  );
}