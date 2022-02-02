import { render, screen } from "@testing-library/react";
import GameStatus from "./GameStatus";

describe("Given a GameStatus component", () => {
  describe("When it receives a 1 as game status", () => {
    test("Then it should display 'You won!'", () => {
      const status = 1;
      const expectedText = "You won!";

      render(<GameStatus gameStatus={status} />);

      const message = screen.queryByText(expectedText);

      expect(message).toBeInTheDocument();
    });
  });

  describe("When it receives a 2 as game status", () => {
    test("Then it should display 'You're dead'", () => {
      const status = 2;
      const expectedText = "You're dead";

      render(<GameStatus gameStatus={status} />);

      const message = screen.queryByText(expectedText);

      expect(message).toBeInTheDocument();
    });
  });
});
