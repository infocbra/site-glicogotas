import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Importando os componentes de ícones
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

// Estilos
import 'swiper/css';
import 'swiper/css/navigation';
import './Equipe.css';
import fotoTalita from '../assets/images/talita.jpeg';
import fotoSharon from '../assets/images/sharon.png';
import fotoThiago from '../assets/images/tiago.png';
import fotoFabricia from '../assets/images/fabricia.jpeg';
import fotoFelipe from '../assets/images/felipe.jpeg';
import fotoJake from '../assets/images/jakeline.webp';
import fotoJordana from '../assets/images/jordana.jpeg';
import fotoKaryne from '../assets/images/karine.jpeg';
import fotoThalia from '../assets/images/thalia.jpeg';

const integrantesDados = [
  {
    nome: "Talita Kellem dos Anjos Soares",
    cargo: "Idealizadora e Criadora do Glicogotas",
    formacao: "Bacharel em Ciências Biológicas - IFRJ",
    bio: "Desenvolve pesquisas na criação de ferramentas lúdicas para mediação de diagnóstico de DM1.",
    foto: fotoTalita,
    lattes: "http://lattes.cnpq.br/9233230497044198",
    linkedin: "https://br.linkedin.com/in/talita-kellen-39283419a"
  },
  {
    nome: "Sharon Schilling Landgraf",
    cargo: "Orientadora de Pesquisa e Extensão",
    formacao: "Professora IFB - Pós-doutorado em Fisiologia",
    bio: "Orientadora dos projetos de pesquisa e extensão do universo Glicogotas.",
    foto: fotoSharon,
    lattes: "http://lattes.cnpq.br/7227565943777999",
    linkedin: "https://www.linkedin.com/in/sharon-landgraf-schlup-6a8712321/"
  },
  {
    nome: "Tiago Henrique Faccio Segato",
    cargo: "Orientador de Inovação Tecnológica",
    formacao: "Professor de Informática e Sistemas - IFB",
    bio: "Especialista em desenvolvimento de sistemas no Campus Brasília.",
    foto: fotoThiago,
    lattes: "http://lattes.cnpq.br/3802976697073676",
    linkedin: "https://www.linkedin.com/in/tiagosegato/"
  },
  {
    nome: "Jakeline Honório",
    cargo: "Desenvolvimento Web",
    formacao: "Estudante de Sistemas para Internet - IFB",
    bio: "Bolsista CNPq com foco no desenvolvimento da plataforma GlicoGotas.",
    foto: fotoJake,
    lattes: "https://lattes.cnpq.br/0136996399890992",
    linkedin: "https://www.linkedin.com/in/jakeline-honorio/"
  },
  {
    nome: "Fabrícia Viana Fonseca",
    cargo: "Orientadora de Pesquisa e Extensão",
    formacao: "Professora IFRJ - Pós-doc em Neuroendocrinologia",
    bio: "Atua na orientação científica focada em comportamento e saúde.",
    foto: fotoFabricia,
    lattes: "http://lattes.cnpq.br/9292722675695467",
    linkedin: null
  },
  {
    nome: "Jordana Rosa Barbosa",
    cargo: "Pesquisadora e Desenvolvedora Flutter",
    formacao: "Tecnóloga em Sistemas para Internet - IFB",
    bio: "Desenvolvedora mobile focada no aplicativo Glicogotas.",
    foto: fotoJordana,
    lattes: "http://lattes.cnpq.br/4131749110016088",
    linkedin: "https://www.linkedin.com/in/jordana-rosa-barbosa/"
  },
  {
    nome: "Karyne Lorrany de Sousa Santana",
    cargo: "Pesquisadora e Desenvolvedora Flutter",
    formacao: "Tecnóloga em Sistemas para Internet - IFB",
    bio: "Atua no desenvolvimento mobile e pesquisa de interface.",
    foto: fotoKaryne,
    lattes: "http://lattes.cnpq.br/4042705398968713",
    linkedin: "https://www.linkedin.com/in/karyne-lorrany-santana-b8032222a/"
  },
  {
    nome: "Thalia Candido Araujo",
    cargo: "Idealizadora",
    formacao: "Bacharel em Ciências Biológicas - IFRJ",
    bio: "Pesquisas em DM1 e Saúde Mental. Edição e postagem de conteúdos.",
    foto: fotoThalia,
    lattes: "http://lattes.cnpq.br/2354918797908947",
    linkedin: "https://www.linkedin.com/in/thalia-candido-5a7708229/"
  },
  {
    nome: "Felipe Cabói Avelino da Cruz",
    cargo: "Pesquisador de Jogos Sérios",
    formacao: "Bacharel em Biológicas - IFRJ / Bolsista FAPERJ",
    bio: "Desenvolve pesquisas em gamificação para educação em DM1 no LABAIDS (IOC/FIOCRUZ).",
    foto: fotoFelipe,
    lattes: "http://lattes.cnpq.br/5201887093064476",
    linkedin: "https://www.linkedin.com/in/felipe-cab%C3%B3i-01150338a/"
  }
];

export default function Equipe() {
  return (
    <section className="equipe-section" id="equipe">
      <div className="equipe-container">
        <header className="equipe-header">
          <h2 className="equipe-title">Nossa Equipe</h2>
          <p className="equipe-subtitle">Os corações e mentes por trás do universo Glicogotas.</p>
        </header>

        <Swiper
          modules={[Navigation]}
          navigation={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="equipe-swiper"
        >
          {integrantesDados.map((pessoa, index) => (
            <SwiperSlide key={index}>
              <div className="equipe-card">
                <div className="equipe-photo-wrapper">
                  <img src={pessoa.foto} alt={pessoa.nome} />
                </div>
                <h3 className="equipe-name">{pessoa.nome}</h3>
                <p className="equipe-role">{pessoa.cargo}</p>
                <p className="equipe-formacao">{pessoa.formacao}</p>
                <p className="equipe-bio">{pessoa.bio}</p>

                <div className="equipe-social">
                  <a 
                    href={pessoa.lattes} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="social-icon lattes" 
                    title="Lattes"
                  >
                    <FontAwesomeIcon icon={faGraduationCap} />
                  </a>
                  {pessoa.linkedin && (
                    <a 
                      href={pessoa.linkedin} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="social-icon linkedin" 
                      title="LinkedIn"
                    >
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}