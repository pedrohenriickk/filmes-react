import './FilmeCard.css';

function FilmeCard({ nome, ano, genero, assistido, aoAlternarStatus }) {
  return (
    <article className={`filmes-card ${assistido ? 'card-assistido' : 'card-nassistido'}`}>
      <div>
        <h2>{nome}</h2>
        <p>{genero}</p>
        <p>{ano}</p>
      </div>

      <div className="status">
        <p>
          Status:{' '}
          <strong>{assistido ? 'Assistido' : 'Não assistido'}</strong>
        </p>

        <button onClick={aoAlternarStatus}>
          {assistido ? 'Marcar como não assistido' : 'Marcar como assistido'}
        </button>
      </div>
    </article>
  );
}

export default FilmeCard;