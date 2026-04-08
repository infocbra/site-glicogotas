import Hero from "../sections/Hero";
import Conheca from "../sections/Conheca";
import Ecossistema from "../sections/Ecossistema";
import Publicacoes from "../sections/Publicacoes";
import Blog from "../sections/Blog";
import Equipe from "../sections/Equipe";
import Parceiros from "../sections/Parceiros";

function Home() {
  return (
    <>
      <Hero />

      <div id="sobre">
        <Conheca />
      </div>

      <div id="ecossistema">
        <Ecossistema />
      </div>

      <div id="publicacoes">
        <Publicacoes />
      </div>

      <div id="blog">
        <Blog />
      </div>

      <div id="equipe">
        <Equipe />
      </div>

      <Parceiros />
    </>
  );
}

export default Home;