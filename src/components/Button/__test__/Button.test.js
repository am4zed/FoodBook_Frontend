import React from 'react';
import Button from "../Button";

describe("Button", () => {
    void it("renders without crashing", () => {
        shallow(<Button />)
    })
})