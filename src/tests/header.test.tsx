import { render, screen } from "@testing-library/react";
import { Header } from "@/components";
import { Product } from "@/utils/types";
import { BrowserRouter } from "react-router";


describe("header renders", () => {
    const mockedCart: Product[] = []

    it('snapshot header', () => {
        const { container } = render(
            <BrowserRouter>
                <Header cart={mockedCart} />
            </BrowserRouter>
        )
            
        expect(container).toMatchSnapshot()
    })

    it('count shows length of cart', () => {
        const mockedCart: Product[] = [{
            id: 1,
            title: 'test',
            price: 20,
            description: "test",
            category: "test",
            image: "test",
            rating: { count: 2, rate: 5 },
        },
        {
            id: 1,
            title: 'test',
            price: 20,
            description: "test",
            category: "test",
            image: "test",
            rating: { count: 2, rate: 5 },
        }]

        render(
            <BrowserRouter>
                <Header cart={mockedCart} />
            </BrowserRouter>
        )
            
        expect(screen.getByText(/cart 2/i)).toBeInTheDocument()
    })
})
