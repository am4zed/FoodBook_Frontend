import React from "react";
import SearchBar from "../../Searchbar/Searchbar.js"
import FindRecipe from "../FindRecipe.js"
import { shallow } from 'enzyme';

describe("FindRecipe", () => {

    let wrapper;

    beforeEach(() => wrapper = shallow(<FindRecipe />));
    // TESTS FAILING
    it("renders a <Searchbar>", () => {
        expect(wrapper.containsMatchingElement(<Searchbar></Searchbar>).toEqual(true));
    })

    it("renders without crashing", () => {
        expect(wrapper).toMatchSnapshot();
    })
    
})