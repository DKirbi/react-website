import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Photos } from "@/routes/photos";

describe("Photos route", () => {
  it("renders the published Flickr gallery", () => {
    render(<Photos />);
    expect(screen.getByRole("heading", { name: "Photos" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Open DSC05077" })).toBeInTheDocument();
  });
});
