import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";


describe('Counter Component', () =>{
    beforeAll(() => {
        console.log('beforeAll');
    })
    afterAll(() => {
        console.log('afterAll');
        cleanup();
    })
    beforeEach(() => {
        console.log('beforeEach');
    })
    it('should render the counter component', () => {
        render(<Counter/>)
        const element = screen.getByTestId('count');
        expect(element).toBeInTheDocument();
    });
    test('increments the count when button is clicked', () => {
        render(<Counter/>)
        const element = screen.getByTestId('count');
        const button = screen.getByTestId('increment');
        expect(element).toHaveTextContent('0');
        fireEvent.click(button);
        expect(element).toHaveTextContent('1');
        fireEvent.click(button);
        expect(element).toHaveTextContent('2');
    })
    test('decrements the count when button is clicked', () => {
        render(<Counter/>)
        const element = screen.getByTestId('count');
        const button = screen.getByTestId('decrement');
        expect(element).toHaveTextContent('0');
        fireEvent.click(button);
        expect(element).toHaveTextContent('-1');
        fireEvent.click(button);
        expect(element).toHaveTextContent('-2');
    })
})