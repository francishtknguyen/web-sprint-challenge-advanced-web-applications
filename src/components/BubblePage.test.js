import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import axiosMock from "axios";
import mockFetchColors from "../helpers/fetchColors";
// import mockAuth from "../helpers/axiosWithAuth";

jest.mock("../helpers/fetchColors");
jest.mock("axios");

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
const testAuth = {
  headers: {
    Authorization: localStorage.getItem("token"),
  },
  baseURL: "http://localhost:5000/api",
};

test("Renders BubblePage without errors", async () => {
  // Finish this test
  // localStorage.setItem(
  //   "token",
  //   "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
  // );
  // mockAuth.mockResolvedValueOnce(testAuth);
  // mockFetchColors.mockResolvedValue(axiosMock.get.mockResolvedValue(testData));
  mockFetchColors.mockResolvedValue(testData);
  await render(<BubblePage />);
});

test("Fetches data and renders the bubbles on mounting", async () => {
  // mockFetchColors.mockResolvedValue(axiosMock.get.mockResolvedValue(testData));
  mockFetchColors.mockResolvedValue(testData);
  const { debug } = await render(<BubblePage />);
  debug();
  expect(await screen.findAllByTestId(/color/i)).toHaveLength(2);
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading
