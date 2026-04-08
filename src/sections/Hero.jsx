import "./Hero.css";
import characterImg from "../assets/images/lita.png";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-container">

        {/* TEXTO */}
        <div className="hero-text">

          <h1>
            Aprender sobre diabetes <br />

            <span>
              nunca foi tão divertido!
            </span>
          </h1>

          <p>
            Queremos ensinar a Diabetes Mellitus Tipo 1 de forma lúdica para crianças e adolescentes.
          </p>

          <p>
            Quer saber mais sobre?
          </p>

         <div className="hero-buttons">

  <button className="btn-primary">
    Conheça a Aventura
  </button>

  <a 
    href="https://www.youtube.com/watch?v=MW6JpG3j-rQ"
    target="_blank"
    rel="noopener noreferrer"
    className="btn-secondary"
  >
    Veja o Vídeo
  </a>

</div>

        </div>

        {/* IMAGEM */}
        <div className="hero-image">
          <img
            src={characterImg}
            alt="Personagem Glicogotas"
          />
        </div>

      </div>

    </section>
  );
}