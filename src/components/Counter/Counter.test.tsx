import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import Counter from "./Counter";

describe("Counter", () => {
  test("should render correctly", () => {
    render(<Counter />);

    const countElement = screen.getByRole("heading");
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });

    expect(countElement).toBeInTheDocument();
    expect(incrementButton).toBeInTheDocument();
  });

  test("should render a count of 0", () => {
    render(<Counter />);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("should increment of 1 after clicking the increment button", async () => {
    user.setup(); // creates instance of user event
    render(<Counter />);

    const countElement = screen.getByRole("heading");
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });

    await user.click(incrementButton); // every user interaction is asynchronous
    expect(countElement).toHaveTextContent("1");
  });

  test("should render of 2 after clicking the increment button twice", async () => {
    user.setup();
    render(<Counter />);

    const countElement = screen.getByRole("heading");
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });

    await user.dblClick(incrementButton);
    expect(countElement).toHaveTextContent("2");
  });

  test("should render the counter of 10 after clicking the set button", async () => {
    user.setup();
    render(<Counter />);

    const amountInput = screen.getByRole("spinbutton"); // input with type number
    await user.type(amountInput, "10");

    expect(amountInput).toHaveValue(10);

    const setButton = screen.getByRole("button", { name: "Set" });
    await user.click(setButton);
    const countElement = screen.getByRole("heading");

    expect(countElement).toHaveTextContent("10");
  });

  test("Elements are focused in the right order", async () => {
    user.setup();
    render(<Counter />);

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const amountInput = screen.getByRole("spinbutton"); // input with type number
    const setButton = screen.getByRole("button", { name: "Set" });

    await user.tab();
    expect(incrementButton).toHaveFocus();

    await user.tab();
    expect(amountInput).toHaveFocus();

    await user.tab();
    expect(setButton).toHaveFocus();
  });
});
