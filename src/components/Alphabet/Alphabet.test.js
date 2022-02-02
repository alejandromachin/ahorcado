import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Alphabet from "./Alphabet";

describe("Given an Alphabet component", () => {
  describe("When it's rendered", () => {
    test("Then it should display anchors with letters A-Z", () => {
      render(<Alphabet />);

      const anchorA = screen.queryByRole("link", { name: /a/i });
      const anchorZ = screen.queryByRole("link", { name: /z/i });

      expect(anchorA).toBeInTheDocument();
      expect(anchorZ).toBeInTheDocument();
    });
  });

  describe("When it receives an action and a letter is clicked", () => {
    test("Then it should call the action", () => {
      const action = jest.fn();

      render(<Alphabet actionOnClick={action} />);

      const letters = screen.queryAllByRole("link");

      userEvent.click(letters[0]);

      expect(action).toHaveBeenCalled();
    });
  });
});
