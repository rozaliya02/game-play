import { useState, useEffect } from "react";
import GameCard from "./GameCard";
const Catalog = ({ navigationChangeHandler }) => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch(
      "https://gameplay-5d849-default-rtdb.firebaseio.com/games/catalog.json"
    )
      .then(res => res.json())
      .then(data => {
        setGames(data);
      });
  }, []);

  const objGames = Object.keys(games).map(key => {
    return games[key];
  });

  return (
    <section id="catalog-page">
      <h1>All Games</h1>
      {objGames.length > 0 ? (
        objGames.map(x => (
          <GameCard
            key={x.id}
            game={x}
            navigationChangeHandler={navigationChangeHandler}
          />
        ))
      ) : (
        <h3 class="no-articles">No games yet</h3>
      )}
    </section>
  );
};

export default Catalog;
