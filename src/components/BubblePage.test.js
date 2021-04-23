import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import mockFetchColors from "../helpers/fetchColors";

// import mockAuth from "../helpers/axiosWithAuth";
// import axiosMock from "axios";

jest.mock("../helpers/fetchColors");

const testData = {
  data: [
    {
      color: "aliceblue",
      code: {
        hex: "#f0f8ff",
      },
      id: 1,
    },
    {
      color: "limegreen",
      code: {
        hex: "#99ddbc",
      },
      id: 2,
    },
  ],
};

test("Renders BubblePage without errors", async () => {
  mockFetchColors.mockResolvedValue(testData);
  await render(<BubblePage />);
});

test("Fetches data and renders the bubbles on mounting", async () => {
  mockFetchColors.mockResolvedValue(testData);
  const { debug } = await render(<BubblePage />);
  expect(await screen.findAllByTestId(/color/i)).toHaveLength(2);
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading
