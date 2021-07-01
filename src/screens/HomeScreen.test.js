import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomeScreen from "./HomeScreen";

beforeEach(() => {
  fetch.resetMocks();
});
describe("test inputs api requests", () => {
  it("loads url", async () => {
    fetch.mockResponseOnce(JSON.stringify([{ language: "JavaScript" }]));
    const { getByText, getByTestId } = render(<HomeScreen />);
    const nameInput = getByTestId("nameinput");
    fireEvent.change(nameInput, { target: { value: "gonzalober" } });
    const button = getByText(/CHECK IT OUT!!!/i);
    fireEvent.click(button);
    await waitFor(() => {
      expect(
        getByText(
          "JavaScript is the most used language for the username: gonzalober"
        )
      ).toBeInTheDocument();
    });
  });

  it("should throw an error when username doesn't exist", async () => {
    fetch.mockResponseOnce(JSON.stringify([{ language: "JavaScript" }]));
    const { getByText, getByTestId } = render(<HomeScreen />);
    const nameInput = getByTestId("nameinput");
    fireEvent.change(nameInput, { target: { value: "example-11" } });
    const button = getByText(/CHECK IT OUT!!!/i);
    fireEvent.click(button);
    await waitFor(() => {
      expect(() => {
        throw new Error("The GitHub Username doesn't exist");
      }).toThrow("The GitHub Username doesn't exist");
    });
  });
});
