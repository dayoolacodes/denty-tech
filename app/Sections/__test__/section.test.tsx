import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";

import Sections from "..";

jest.mock("animejs");

describe("Sections Component", () => {
  it("renders initial screen and hides after animation", async () => {
    render(<Sections />);

    expect(screen.getByText("Initial Screen Content")).toBeInTheDocument();

    fireEvent.animationEnd(screen.getByText("Initial Screen Content"));

    await waitFor(() => {
      expect(
        screen.queryByText("Initial Screen Content")
      ).not.toBeInTheDocument();
    });
  });

  it("updates window width on resize", () => {
    const { getByText } = render(<Sections />);

    window.innerWidth = 800;

    fireEvent(window, new Event("resize"));

    expect(getByText("Window Width: 800")).toBeInTheDocument();
  });

  it("renders mobile version message for small screens", () => {
    const { getByText } = render(<Sections />);

    window.innerWidth = 800;

    fireEvent(window, new Event("resize"));

    expect(
      getByText("Mobile version not available atm. Try on a larger screen!")
    ).toBeInTheDocument();
  });

  it("renders desktop version for large screens", () => {
    const { getByText } = render(<Sections />);

    window.innerWidth = 1200;

    fireEvent(window, new Event("resize"));

    expect(getByText("Nav Content")).toBeInTheDocument();
    expect(getByText("Hero Content")).toBeInTheDocument();
    expect(getByText("Revolutionizing Content")).toBeInTheDocument();
    expect(getByText("Explore Content")).toBeInTheDocument();
  });

  it("applies overflow styles based on initScreenActive", () => {
    const { container, rerender } = render(<Sections />);

    expect(container.firstChild).toHaveStyle(
      "overflow: hidden; overscroll-behavior: contain;"
    );

    rerender(<Sections />);

    expect(container.firstChild).toHaveStyle(
      "overflow: unset; overscroll-behavior: unset;"
    );
  });

  it("cleans up window resize event listener on unmount", () => {
    const { unmount } = render(<Sections />);
    const spyRemoveEventListener = jest.spyOn(window, "removeEventListener");

    unmount();

    expect(spyRemoveEventListener).toHaveBeenCalledWith(
      "resize",
      expect.any(Function)
    );
  });
});
