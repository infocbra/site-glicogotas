import './Header.css';
import logoglico from '../assets/images/logoglico.png';  

export default function Header() {
  // 1. Criamos a lista com o nome que aparece e o ID (endereço)
  const menuItems = [
    { label: 'Sobre', id: 'sobre' },
    { label: 'Ecossistema', id: 'ecossistema' },
    { label: 'Publicações', id: 'publicacoes' },
    { label: 'Blog', id: 'blog' },
    { label: 'Equipe', id: 'equipe' },
  ];

  return (
    <header className="header">
      <div className="header-container">
        
        <div className="header-logo">
          <img src={logoglico} alt="Glicogotas Logo" />
        </div>

        <nav className="header-menu">
          {menuItems.map((item) => (
            // 2. O link agora usa o # antes do ID
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-action">
          <button onClick={() => window.location.href = '#contato'}>
            Contato
          </button>
        </div>
      </div>
    </header>
  );
}