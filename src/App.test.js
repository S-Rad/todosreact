import React from "react";
import App from "./App";

test("renders correct text", () => {
  const { getByText } = global.wrapComponent(<App />);

  expect(getByText("Unsorted To Dos")).toBeInTheDocument();
  expect(getByText("Finished To Dos")).toBeInTheDocument();
});
