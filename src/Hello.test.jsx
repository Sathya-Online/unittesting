import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

describe('Hello Component', () => {
    it('should render the hello component', () => {
        render(<Hello />);
        const element = screen.getByTestId('hello');
        expect(element).toBeInTheDocument();
        expect(element.textContent).toBe('Hello World Welcome to React')
    });
})

