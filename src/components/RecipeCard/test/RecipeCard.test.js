import React from "react";
import RecipeCard from "../RecipeCard";
describe("recipeCard", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<RecipeCard />);
  });
});
