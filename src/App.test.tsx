import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByTestId(/learn-link/i);
    expect((linkElement as HTMLLinkElement).href).toContain("reactjs.org");
});

test("renders 3 list items", () => {
    render(<App />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(3);
});

test("renders title", () => {
    render(<App />);
    const title = screen.getByTestId("mytestid");
    expect(title).toBeInTheDocument();
});

test("renders title", () => {
    render(<App />);
    const title = screen.getByTestId("mytestid");
    expect(title).toBeInTheDocument();
});

test("sum should be 6", () => {
    render(<App />);
    const sum = screen.getByTitle("sum");
    expect(sum.textContent).toEqual("6");
});
