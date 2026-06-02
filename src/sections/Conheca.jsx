import React, { useState } from 'react';
import './Conheca.css';

import imagemTurma from '../assets/images/imagemturma.png';

import litaImg from '../assets/images/lita.png';
import reidahipoImg from '../assets/images/reidahipo.png';
import bobodahipoImg from '../assets/images/bobodahipo.png';
import feImg from '../assets/images/fe.png';
import insulinsImg from '../assets/images/insulins.png';
import pumpsImg from '../assets/images/pumps.png';
import betinhoImg from '../assets/images/betinho.png';
import canettoImg from '../assets/images/canetto.png';

export default function Conheca() {

  const [exibirGaleria, setExibirGaleria] = useState(false);

  const turmaGlicogotas = [
    {
      nome: 'Lita',
      imagem: litaImg,
      cor: '#FFD1DC',
      desc: 'A estrela que guia com carinho.',
      classe: 'img-lita'
    },
    {
      nome: 'Rei da Hiper',
      imagem: reidahipoImg,
      cor: '#FFB7B2',
      desc: 'Ensina sobre o açúcar alto.',
      classe: 'img-pequeno'
    },
    {
      nome: 'Bobo da Hipo',
      imagem: bobodahipoImg,
      cor: '#B2CEFE',
      desc: 'Atenção quando a energia baixa!',
      classe: 'img-pequeno'
    },
    {
      nome: 'Fê',
      imagem: feImg,
      cor: '#FAFAD2',
      desc: 'Coragem e inteligência no dia a dia.',
      classe: 'img-medio'
    },
    {
      nome: 'Insulins',
      imagem: insulinsImg,
      cor: '#C1FFC1',
      desc: 'Gotas mágicas de superpoderes.',
      classe: 'img-centro'
    },
    {
      nome: 'Pumps',
      imagem: pumpsImg,
      cor: '#E0BBE4',
      desc: 'Tecnologia em prol do equilíbrio.',
      classe: 'img-centro'
    },
    {
      nome: 'Betinho',
      imagem: betinhoImg,
      cor: '#FFDFBA',
      desc: 'O pâncreas mais amigo de todos.',
      classe: 'img-centro'
    },
    {
      nome: 'Canetto',
      imagem: canettoImg,
      cor: '#BAE1FF',
      desc: 'Sempre pronto para ajudar!',
      classe: 'img-centro'
    }
  ];

  if (exibirGaleria) {
    return (
      <section className="galeria-elegante-container">
        <div className="galeria-header">
          <button
            className="btn-voltar"
            onClick={() => setExibirGaleria(false)}
          >
            ← Voltar
          </button>
          <h2 className="titulo-galeria">Nossa Turma Completa</h2>
        </div>

        <div className="mascotes-agrupados">
          {turmaGlicogotas.map((m, index) => (
            <div key={index} className="card-elegante">
              <div
                className="card-top"
                style={{ backgroundColor: m.cor }}
              >
                <img
                  src={m.imagem}
                  alt={m.nome}
                  className={m.classe}
                />
              </div>
              <div className="card-info">
                <h3>{m.nome}</h3>
                <p>{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="conheca-container">
      <div className="shape-bg"></div>
      <div className="conheca-layout">
        <div className="area-texto">
          <h2 className="titulo-primario">
            Conheça o <br /> Glicogotas
          </h2>
          <p className="texto-suave">
            Transformamos a educação em diabetes em uma experiência
            lúdica, acolhedora e cheia de carinho.
            Nossa missão é ajudar famílias e crianças a aprenderem
            de forma divertida e inesquecível.
          </p>
          <button
            className="btn-principal-turma"
            onClick={() => setExibirGaleria(true)}
          >
            Ver Nossa Turma
          </button>
        </div>

        <div className="area-visual">
          <div className="imagem-wrapper">
            <img
              src={imagemTurma}
              alt="Turma Glicogotas"
              className="imagem-turma"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
