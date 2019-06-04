import React from 'react';
import Method from '../Method';

describe("Method", () => {

  void test("snapshot", () => {
    const wrapper = shallow(<Method/>);
    expect(wrapper).toMatchSnapshot()
  });

})
