import { render, screen } from '@testing-library/react'
import { ProductCard } from '@/components'
import { Product } from '@/utils/types'
import userEvent from '@testing-library/user-event'

describe("renders ProductCart", () => {
    it('snapshot productCard', () => {
        const Product: Product = {
            id: 1,
            title: 'test',
            price: 20,
            description: "test",
            category: "test",
            image: "test",
            rating: { count: 2, rate: 5 },
        }

        const {container} = render(<ProductCard product={Product} countCart={2} />)
        expect(container).toMatchSnapshot()       
    })

    it('count does not shows when count === 0', () => {
        const Product: Product = {
            id: 1,
            title: 'test',
            price: 20,
            description: "test",
            category: "test",
            image: "test",
            rating: { count: 2, rate: 5 },
        }

        render(<ProductCard product={Product} countCart={0} />)
        expect(screen.queryByRole('button', {name: '+'})).not.toBeInTheDocument()     
    })

    it('count shows when count > 0', () => {
        const Product: Product = {
            id: 1,
            title: 'test',
            price: 20,
            description: "test",
            category: "test",
            image: "test",
            rating: { count: 2, rate: 5 },
        }

        render(<ProductCard product={Product} countCart={1} />)
        expect(screen.getByRole('button', {name: '+'})).toBeInTheDocument()     
    })

    it('increase and decrease count', async () => {
        const user = userEvent.setup()
        const Product: Product = {
            id: 1,
            title: 'test',
            price: 20,
            description: "test",
            category: "test",
            image: "test",
            rating: { count: 2, rate: 5 },
        }

        render(<ProductCard product={Product} countCart={0} />)
        expect(screen.queryByText('1')).not.toBeInTheDocument();

        const firstAddBtn = screen.getByRole('button', { name: /add to cart/i })
        await user.click(firstAddBtn)
        expect(screen.getByText('1')).toBeInTheDocument();

        const addBtn = screen.getByRole('button', { name: '+' })
        await user.click(addBtn)
        expect(screen.getByText('2')).toBeInTheDocument();
        await user.click(addBtn)
        expect(screen.getByText('3')).toBeInTheDocument();

        const removeBtn = screen.getByRole('button', { name: '-' })
        await user.click(removeBtn)
        expect(screen.getByText('2')).toBeInTheDocument();
        await user.click(removeBtn)
        expect(screen.getByText('1')).toBeInTheDocument();
    })

    it("shows decrease and increase buttons only if count > 0", () => {
        const Product: Product = {
            id: 1,
            title: 'test',
            price: 20,
            description: "test",
            category: "test",
            image: "test",
            rating: { count: 2, rate: 5 },
        }
        render(<ProductCard product={Product} countCart={0} />)
        expect(screen.queryByRole('button', { name: '+' })).not.toBeInTheDocument()
        expect(screen.queryByRole('button', { name: '-' })).not.toBeInTheDocument()
    })

    it("change text when count > 0", async () => {
        const user = userEvent.setup()
        const Product: Product = {
            id: 1,
            title: 'test',
            price: 20,
            description: "test",
            category: "test",
            image: "test",
            rating: { count: 2, rate: 5 },
        }
        render(<ProductCard product={Product} countCart={0} />)
        const addToCartBtn = screen.getByText(/add to cart/i)
        
        await user.click(addToCartBtn)

        expect(addToCartBtn.textContent).toMatch(/in cart/i)
    })
})

