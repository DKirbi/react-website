import { MantineProvider } from "@mantine/core";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { beforeAll, describe, expect, it } from "vitest";
import "@/i18n";
import { NavigationMain } from "@/components/navigation/Navigation-main";

beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => undefined,
      removeListener: () => undefined,
      addEventListener: () => undefined,
      removeEventListener: () => undefined,
      dispatchEvent: () => false,
    }),
  });
});

describe("NavigationMain", () => {
  it("includes a Photos link in the primary navigation", () => {
    render(
      <MantineProvider>
        <MemoryRouter initialEntries={["/en/home"]}>
          <Routes>
            <Route path="/:lang/*" element={<NavigationMain />} />
          </Routes>
        </MemoryRouter>
      </MantineProvider>,
    );

    expect(screen.getAllByRole("link", { name: "Photos" }).length).toBeGreaterThan(
      0,
    );
  });
});
