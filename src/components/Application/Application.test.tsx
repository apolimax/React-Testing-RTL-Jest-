import { render, screen } from "@testing-library/react";
import Application from "./Application";

/*
Priority Order for RTL Queries
1. getByRole
2. getByLabelText
3. getByPlaceholderText
4. getByText
5. getByDisplayValue
6. getByAltText
7. getByTitle
8. getByTestId
*/

describe("App", () => {
  test("App renders correctly", () => {
    render(<Application />);

    const pageHeadingElement = screen.getByRole("heading", {
      level: 1,
    });
    const sectionHeadingElement = screen.getByRole("heading", {
      level: 2,
    });
    // getByText full string match with string
    /* const paragrahElement = screen.getByText("All fields are mandatory", {
      selector: "p",
    }); */

    // getByText substring match with string
    /* const paragrahElement = screen.getByText("All fields", {
      exact: false,
    }); */

    // getByText substring match with regex
    /* const paragrahElement = screen.getByText(/all fields/i); */

    // getByText full string match with regex
    /* const paragrahElement = screen.getByText(/all fields/i, { exact: false }); */

    // getByText full string match with regex
    /* const paragrahElement = screen.getByText(/^all fields are mandatory$/i); */

    // getByText full string match with custom function
    const paragrahElement = screen.getByText((content) =>
      content.startsWith("All")
    );

    const imageElement = screen.getByAltText("a person with a laptop");
    const closeElement = screen.getByTitle("close");
    const customElement = screen.getByTestId("custom-element");

    /* const nameElement = screen.getByRole("textbox", { name: "Name" }); */
    /* const nameElement = screen.getByLabelText("Name"); */ // finds the label with the given text and look for the element associated with it
    /* const nameElement = screen.getByPlaceholderText("Fullname"); */
    const nameElement = screen.getByDisplayValue("Will");
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
    expect(imageElement).toBeInTheDocument();
    expect(closeElement).toBeInTheDocument();
    expect(customElement).toBeInTheDocument();

    expect(nameElement).toBeInTheDocument();
    expect(bioElement).toBeInTheDocument();

    expect(jobLocation).toBeInTheDocument();
    expect(termsElement).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
  });
});
