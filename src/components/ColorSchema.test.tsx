import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ColorSchema from "./ColorSchema";

describe("ColorSchema", () => {
  it("renders color values", () => {
    render(
      <ColorSchema
        schema={[
          { value: "#FFFFFF", clean: "FFFFFF" },
          { value: "#000000", clean: "000000" },
        ]}
      />,
    );

    expect(screen.getByText("#FFFFFF")).toBeInTheDocument();
    expect(screen.getByText("#000000")).toBeInTheDocument();
  });
});
