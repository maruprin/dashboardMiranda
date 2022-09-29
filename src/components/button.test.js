import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Button } from "../styles/styledComponents";



describe("Button", () => {
  test("Return the background color of the button: #135846", () => {
    render(
      <Button green>
        I'm button
      </Button>
    );

    expect(screen.getByText("I'm button")).toHaveStyle(
      "backgroundColor: #135846"
    );
  });

  test("Return the background color of the button: #E23428", () => {
    render(
      <Button>
        I'm button
      </Button>
    );

    expect(screen.getByText("I'm button")).toHaveStyle(
      "backgroundColor: #E23428"
    );
  });
});

