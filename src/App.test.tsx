import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import App from "./App";

describe("App", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("renders the default scheme and fetches colors", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: () =>
          Promise.resolve({
            colors: [
              { hex: { value: "#FF0000", clean: "FF0000" } },
              { hex: { value: "#00FF00", clean: "00FF00" } },
            ],
          }),
      }),
    );

    render(<App />);

    expect(screen.getByRole("button", { name: "Get Color Scheme" })).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toHaveValue("monochrome");

    fireEvent.click(screen.getByRole("button", { name: "Get Color Scheme" }));

    await waitFor(() => {
      expect(screen.getByText("#FF0000")).toBeInTheDocument();
      expect(screen.getByText("#00FF00")).toBeInTheDocument();
    });
  });
});
