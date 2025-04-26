import { render, screen } from "@testing-library/react";
import { Cart } from "@/pages";
import { Product } from "@/utils/types";

vi.mock('@/utils/hooks/useCart', () => ({
  useCart: () => ({
    cart: mockedCart,
  }),
}))

let mockedCart: Product[] = [];

describe("render cart", () => {
    afterEach(() => {
        vi.resetAllMocks()
        
    })
    
    it('snapshot cart', () => {
        const { container } = render(<Cart />)
        expect(container).toMatchSnapshot()
    })

    it('shows "Cart is empty" if no products', () => {
        mockedCart = []
        render(<Cart/>)
        expect(screen.getByText('Cart is empty')).toBeInTheDocument();
    })

    it('renders product if one returned', () => {
        mockedCart = [
            {
                id: 1,
                title: 'test',
                price: 20,
                description: "test",
                category: "test",
                image: "test",
                rating: { count: 2, rate: 5 },
            }
        ]
        render(<Cart/>)
        expect(screen.queryByText('Cart is empty')).not.toBeInTheDocument();
    })

    it('renders delivery price if total < 50$', () => {
        mockedCart = [
            {
                id: 1,
                title: 'test',
                price: 20,
                description: "test",
                category: "test",
                image: "test",
                rating: { count: 2, rate: 5 },
            }
        ]
        render(<Cart/>)
        expect(screen.getByText('Delivery:')).toBeInTheDocument();
        expect(screen.getByText('5$')).toBeInTheDocument();
    })

    it('renders delivery price if total < 50$', () => {
        mockedCart = [
            {
                id: 1,
                title: 'test',
                price: 51,
                description: "test",
                category: "test",
                image: "test",
                rating: { count: 2, rate: 5 },
            }
        ]
        render(<Cart/>)
        expect(screen.getByText('Delivery:')).toBeInTheDocument();
        expect(screen.getByText('0$')).toBeInTheDocument();
    })

        it('renders disabled button if cart is empty', () => {
        mockedCart = []
        render(<Cart/>)
        expect(screen.getByRole('button', {name: /place an order/i})).toBeDisabled()
    })
})



