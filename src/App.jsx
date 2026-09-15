import { useState } from 'react';
import FilmeCard from './components/FilmeCard';
import './App.css';

function App() {
  const [filmes, setFilmes] = useState([
    { id: 1, nome: 'Toy Story', ano: '1995', genero: 'Animação', assistido: false },
    { id: 2, nome: 'Rio', ano: '2011', genero: 'Animação', assistido: true },
    { id: 3, nome: 'A Era do Gelo 4', ano: '2012', genero: 'Animação', assistido: false },
    { id: 4, nome: 'Madagascar 3: Os Procurados', ano: '2012', genero: 'Animação', assistido: true }
  ]);

  function alternarStatus(id) {
    const filmesAtualizados = filmes.map((filme) => {
      if (filme.id === id) {
        return {
          ...filme,
          assistido: !filme.assistido
        };
      }
      return filme;
    });
    setFilmes(filmesAtualizados);
  }

  const totalAssistidos = filmes.filter((filme) => filme.assistido).length;
  const totalnAssistidos = filmes.filter((filme) => !filme.assistido).length;

  return (
    <main className="container">
      <header className="cabecalho">
        <h1>Filmes Favoritos</h1>
        <p>Lista de filmes favoritos</p>
      </header>

      <section className="resumo">
        <div className="resumo-card">
          <span>Total</span>
          <strong>{filmes.length}</strong>
        </div>

        <div className="resumo-card assistidos">
          <span>Assistidos</span>
          <strong>{totalAssistidos}</strong>
        </div>

        <div className="resumo-card nassistidos">
          <span>Não Assistidos</span>
          <strong>{totalnAssistidos}</strong>
        </div>
      </section>

      <section className="lista-filmes">
        {filmes.map((filme) => (
          <FilmeCard
            key={filme.id}
            nome={filme.nome}
            ano={filme.ano}
            genero={filme.genero}
            assistido={filme.assistido}
            aoAlternarStatus={() => alternarStatus(filme.id)}
          />
        ))}
      </section>
    </main>
  );
}

export default App;