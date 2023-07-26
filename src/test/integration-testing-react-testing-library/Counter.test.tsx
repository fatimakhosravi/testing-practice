import { render, screen } from "@testing-library/react";
import { Counter } from "../../components/Counter";

it("render 'Hello world' ", () => {
  render(<Counter />);
  const myElement = screen.getByText(/Hello world/);
  expect(myElement).toBeInTheDocument();
});
