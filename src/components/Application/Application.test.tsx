import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("App", () => {
  test("App renders correctly", () => {
    render(<Application />);

    const pageHeadingElement = screen.getByRole("heading", {
      level: 1,
    });
    const sectionHeadingElement = screen.getByRole("heading", {
      level: 2,
    });
    const paragrahElement = screen.getByText("All fields are mandatory", {
      selector: "p",
    });

    /* const nameElement = screen.getByRole("textbox", { name: "Name" }); */
    /* const nameElement = screen.getByLabelText("Name"); */ // finds the label with the given text and look for the element associated with it
    const nameElement = screen.getByPlaceholderText("Fullname");
    const bioElement = screen.getByRole("textbox", { name: "Bio" });
    const jobLocation = screen.getByRole("combobox");
    /* const termsElement = screen.getByRole("checkbox"); */
    const termsElement = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    const submitButton = screen.getByRole("button");

    expect(pageHeadingElement).toBeInTheDocument();
    expect(sectionHeadingElement).toBeInTheDocument();
    expect(paragrahElement).toBeInTheDocument();

    expect(nameElement).toBeInTheDocument();
    expect(bioElement).toBeInTheDocument();
    expect(jobLocation).toBeInTheDocument();
    expect(termsElement).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
