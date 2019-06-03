import React from 'react';
import Ingredient from '../Ingredient';

describe("Ingredient", () => {

  void test("snapshot", () => {
    const wrapper = shallow(<Ingredient />)
    expect(wrapper).toMatchSnapshot();
  });
})
