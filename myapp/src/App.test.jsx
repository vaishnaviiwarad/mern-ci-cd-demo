import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../src/App";

describe("App Component", () => {
  it("renders vaignavi text", () => {
    render(<App />);
    expect(screen.getByText("vaishnavi")).toBeInTheDocument();
  });
});
