import React from "react";
import ReactDOM from "react-dom";
import { getByTestId, render } from "@testing-library/react";
// import "jest-dom/extend-expect";
import Card from "./Card";


it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Card />, div)
  ReactDOM.unmountComponentAtNode(div)
})

