import { render, screen } from "@testing-library/react";
import { Hello } from "../../components/Hello";

it("render 'Hello world' ", () => {
  render(<Hello />);
  const myElement = screen.getByText(/Hello world/);
  expect(myElement).toBeInTheDocument();
});
