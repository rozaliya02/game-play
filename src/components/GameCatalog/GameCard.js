const GameCard = ({ game, navigationChangeHandler }) => {
  const onDetailsClick = e => {
    e.preventDefault();
    navigationChangeHandler(`/details/${game.id}`);
  };
  return (
    <div class="allGames">
      <div class="allGames-info">
        <img src={game.imageUrl} alt={game.title} />
        <h6>{game.category}</h6>
        <h2>{game.title}</h2>
        <a
          href={`/details/${game.id}`}
          class="details-button"
          onClick={onDetailsClick}
        >
          Details
        </a>
      </div>
    </div>
  );
};

export default GameCard;
