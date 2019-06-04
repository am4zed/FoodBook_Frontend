import React from "react";
import Logo from "../Logo.js";

describe("Logo", () => {
    
    it("Renders without crashing", () => {
        shallow(<Logo/>)
      });

    it("Has an <img> element", () => {
        const wrapper = shallow(<Logo/>)
        expect(wrapper.exists("img")).toBeTruthy();
    })
});