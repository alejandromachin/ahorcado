import Alphabet from "./components/Alphabet/Alphabet";
import GameStatus from "./components/GameStatus/GameStatus";
import GuessWord from "./components/GuessWord/GuessWord";
import Hangman from "./components/Hangman/Hangman";
import UsedLetters from "./components/UsedLetters/UsedLetters";

function App() {
  const doSomething = (letter) => {
    console.log(letter);
  };

  return (
    <>
      <div className="hangman-container">
        <Hangman />
      </div>
      <GuessWord />
      <section className="used-letters-container">
        <h2>Used letters</h2>
        <UsedLetters />
      </section>
      <GameStatus gameStatus={0} />
      <Alphabet actionOnClick={doSomething} />
    </>
  );
}

export default App;
