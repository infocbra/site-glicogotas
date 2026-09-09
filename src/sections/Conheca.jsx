import React, { useState } from 'react';
import './Conheca.css';

import imagemTurma from '../assets/images/imagemturma.png';

import litaImg from '../assets/images/lita.png';
import reidahipor from '../assets/images/reidahiper.svg';
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
      cor: '#FFB8C6',
      desc: 'A estrela que guia com carinho.',
      classe: 'zoom-lita'
    },
    {
      nome: 'Rei da Hiper',
      imagem: reidahipor,
      cor: '#FF9E99',
      desc: 'Ensina sobre o açúcar alto.',
      classe: 'zoom-reidahiper'
    },
    {
      nome: 'Bobo da Hipo',
      imagem: bobodahipoImg,
      cor: '#9EC2FF',
      desc: 'Atenção quando a energia baixa!',
      classe: 'zoom-bobodahipo'
    },
    {
      nome: 'Fê',
      imagem: feImg,
      cor: '#F9E99B',
      desc: 'Coragem e inteligência no dia a dia.',
      classe: 'zoom-fe'
    },
    {
      nome: 'Insulins',
      imagem: insulinsImg,
      cor: '#A8F2A8',
      desc: 'Gotas mágicas de superpoderes.',
      classe: 'zoom-insulins'
    },
    {
      nome: 'Pumps',
      imagem: pumpsImg,
      cor: '#D6A2E8',
      desc: 'Tecnologia em prol do equilíbrio.',
      classe: 'zoom-pumps'
    },
    {
      nome: 'Betinho',
      imagem: betinhoImg,
      cor: '#FFD39B',
      desc: 'O pâncreas mais amigo de todos.',
      classe: 'zoom-betinho'
    },
    {
      nome: 'Canetto',
      imagem: canettoImg,
      cor: '#9BD6FF',
      desc: 'Sempre pronto para ajudar!',
      classe: 'zoom-canetto'
    }
  ];

  if (exibirGaleria) {
    return (
      <section className="galeria-cracha-container">
        <div className="galeria-header">
          <button className="btn-voltar" onClick={() => setExibirGaleria(false)}>
            ← Voltar
          </button>
          <div className="header-titulos">
            <h2 className="titulo-galeria">Nossa Turma Completa</h2>
            <p className="subtitulo-galeria">Conheça cada um dos nossos mascotes e guardiões</p>
          </div>
        </div>

        {/* GRID MODELO CRACHÁ */}
        <div className="grid-cracha">
          {turmaGlicogotas.map((m, index) => (
            <div key={index} className="card-cracha">
              <div className="cracha-avatar-wrapper">
                <div
                  className="cracha-circulo"
                  style={{ backgroundColor: m.cor }}
                >
                  <img
                    src={m.imagem}
                    alt={m.nome}
                    className={`cracha-img ${m.classe}`}
                  />
                </div>
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