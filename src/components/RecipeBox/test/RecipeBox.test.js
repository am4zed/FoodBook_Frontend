import React from "react";
import RecipeBox from "../RecipeBox";
describe("recipeBox", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<RecipeBox />);
  });
});
