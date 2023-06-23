import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import Loader from '../../components/Loader/Loader';
const Home = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  const fetchData = async () => {
    const url = 'https://games-test-api-81e9fb0d564a.herokuapp.com/api/data';
    const headers = {
      'Content-Type': 'application/json',
      'dev-email-address': 'teste@gmail.com',
    };

    try {
      const response = await fetch(url, {
        headers: headers,
      });

      if (response.status >= 500 && response.status <= 509) {
        setErrorMessage('O servidor falhou em responder, tente recarregar a página');
      } else if (!response.ok) {
        setErrorMessage('O servidor não conseguiu responder por agora, tente voltar novamente mais tarde');
      }
      const responseData = await response.json();
      setGames(responseData);
    } catch (error) {
      setErrorMessage('O servidor demorou para responder, tente mais tarde');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  if (loading ) {
    return <div className='loading'><Loader /></div>;
  }

  if (errorMessage) {
    return <div className='error'>{errorMessage}</div>;
  }

  const filteredGamesByGenre = games.filter((game) =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedGenre ? game.genre === selectedGenre : true)
  );

  const genreOptions = [...new Set(games.map((game) => game.genre))];
  

  return (
    <section className="section">
      <h2 className="section-title">Game World</h2>
      <div className='search'>
        <input type="text" placeholder="Busque por Título" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
          <option value="">Generos</option>
          {genreOptions.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
      <div className="games-center">
        {filteredGamesByGenre.map((game) => (
          <Card key={game.id} dataGames={game} />
        ))}
      </div>
    </section>
  );
};

export default Home