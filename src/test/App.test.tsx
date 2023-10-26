import { describe, test, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import { Home } from "../components/Home";
import { userEvent } from "@testing-library/user-event";
import App from "../App";

// test 1
describe("<App />", () => {
  test("should work", () => {
    render(<Home />);
    expect(screen.getByText("cargando dolares....")).toBeDefined();
  });
});

// test 2
describe("<App />", () => {
  test("should add a number to the input", async () => {
    const user = userEvent.setup();
    render(<App />);
    screen.debug();

    // buscar el input
    const input = screen.getByRole("textbox");
    expect(input).toBeDefined();

    // buscar el form
    const form = screen.getByRole("form");
    expect(form).toBeDefined();

    const button = form.querySelector("button");
    expect(button).toBeDefined();

    // escribir en el input
    await user.type(input, "500");
    await user.click(button!);
  });
});
