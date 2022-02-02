import PropTypes from "prop-types";

const GameStatus = ({ gameStatus }) => {
  const text =
    gameStatus === 0 ? "" : gameStatus === 1 ? "You won!" : "You're dead";
  return <section className="game-result">{text}</section>;
};

GameStatus.propTypes = {
  gameStatus: PropTypes.oneOf([0, 1, 2]).isRequired,
};

export default GameStatus;
