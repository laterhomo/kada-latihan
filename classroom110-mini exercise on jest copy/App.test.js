import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import App from "./App";


afterEach(() => {
    cleanup();
})

describe("App Component", () => {

    // Test 1
    test("App Rendering", () => {
        render(<App />); 
        const text = screen.getByTestId("text");
        const button = screen.getByTestId("button");
        expect(button).toBeInTheDocument();
        expect(text).toBeInTheDocument();
    })

    // Test 2
    test("Default Text", () => {
        render(<App />);
        const text = screen.getByTestId("text");
        expect(text).toHaveTextContent("Hello");
    })

    // Test 3
    test("Toggling Text", () => {
        render(<App />);
        const text = screen.getByTestId("text");
        const button = screen.getByTestId("button");
        expect(text).toHaveTextContent("Hello");
        fireEvent.click(button);
        expect(text).toBeEmptyDOMElement();
        fireEvent.click(button);
        expect(text).toHaveTextContent("Hello");
    })
})