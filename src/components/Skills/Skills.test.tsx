import { render, screen } from "@testing-library/react";
import Skills from "./Skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JavaScript"];

  test("renders correctly", () => {
    render(<Skills skills={skills} />);

    const listElement = screen.getByRole("list"); // ul
    expect(listElement).toBeInTheDocument();
  });

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />);

    const listItemElements = screen.getAllByRole("listitem"); // li
    expect(listItemElements).toHaveLength(skills.length);
  });

  test("renders Login button", () => {
    render(<Skills skills={skills} />);

    const loginButton = screen.getByRole("button", {
      name: "Login",
    });
    const learningButton = screen.queryByRole("button", {
      name: "Start learning",
    });

    expect(loginButton).toBeInTheDocument();
    expect(learningButton).not.toBeInTheDocument();
  });

  test("Start learning button is not rendered", () => {
    render(<Skills skills={skills} />);

    const learningButton = screen.queryByRole("button", {
      // queryBy is useful when asserting an element is not rendered in the DOM
      name: "Start learning",
    });

    expect(learningButton).not.toBeInTheDocument();
  });

  test("Start learning is eventually displayed", async () => {
    render(<Skills skills={skills} />);

    const learningButton = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      {
        timeout: 2000,
      }
    );

    expect(learningButton).toBeInTheDocument();
  });
});
