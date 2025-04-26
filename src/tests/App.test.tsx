import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App";

describe("App", () => {
  it("renders the header and footer", () => {
    render(<App />);

    expect(screen.getByText(/© 2025 MyStore. All rights reserved./i)).toBeInTheDocument();
  });
});
