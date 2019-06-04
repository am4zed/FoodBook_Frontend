import React from 'react';
import PrepTime from '../PrepTime';
import { arrowFunctionExpression } from '@babel/types';

describe("PrepTime", () => {


 it("Renders without crashing", () => {
   shallow(<PrepTime/>)
 });

 it("Has an <h4> element", () => {
  const wrapper = shallow(<PrepTime/>)
  expect(wrapper.exists("h4")).toBeTruthy();
 })

 it("snapshot", () => {
   const wrapper = shallow(<PrepTime totalTime={10}/>)

   expect(wrapper).toMatchSnapshot();
 })
})
