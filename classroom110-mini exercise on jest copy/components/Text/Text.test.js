import { render, screen, cleanup } from "@testing-library/react";


import '@testing-library/jest-dom'
import Text from "./Text";


afterEach(() => {
    cleanup();
})

describe("Text Component", () => {

    // Test 1
    test("Text Rendering", () => {
        render(<Text toggle={true} displayTxt={"Apple"} />);
        const text = screen.getByTestId("text");
        expect(text).toBeInTheDocument();
    })

    // Test 2
    test("Displayed Text when toggle is set to true", () => {
        render(<Text toggle={true} displayTxt={"Apple"} />)
        const text = screen.getByTestId("text");
        expect(text).toHaveTextContent("Apple");
    })

    // Test 3
    test("Displayed Text when toggle is set to false", () => {
        render(<Text toggle={false} displayTxt={"Apple"} />);
        const text = screen.getByTestId("text");
        expect(text).toBeEmptyDOMElement();
    })
})