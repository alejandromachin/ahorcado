const Alphabet = ({ actionOnClick }) => {
  const clickLetter = (event, letter) => {
    event.preventDefault();
    actionOnClick(letter);
  };

  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "Ñ",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return (
    <ul className="letters">
      {letters.map((letter) => (
        <li key={letter} className="letter">
          <a href={letter} onClick={(event) => clickLetter(event, letter)}>
            {letter}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Alphabet;
