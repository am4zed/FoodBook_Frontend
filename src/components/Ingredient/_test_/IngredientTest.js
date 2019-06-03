import React from 'react';
import Ingredients from '../Ingredients';

describe("Ingredient", () => {

  void test("snapshot", () => {
    const wrapper = shallow(<Ingredient />)
    expect(wrapper).toMatchSnapshot();
  });
})
