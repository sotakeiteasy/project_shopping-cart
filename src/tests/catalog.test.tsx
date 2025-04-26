import { render, screen } from "@testing-library/react";
import { Catalog } from "@/pages";
import { Product } from "@/utils/types";

describe("render product", () => {
    vi.mock("@/components", () => ({
        ProductCard: (product: Product) => <div>{product.title}</div>,
    }));

    it("loader if no products", async () => {
        global.fetch = vi.fn().mockResolvedValue({
            json: async () => [],
        });

        render(<Catalog />);

        expect(await screen.findByText(/loading data/i)).toBeInTheDocument();
    });

    it("no loader if products", async () => {
        global.fetch = vi.fn().mockResolvedValue({
            json: async () => [{ id: 1, title: 'Test' }],
        });

        render(<Catalog />);

        expect(await screen.findByText(/loading data/i)).not.toBeInTheDocument();
    });
});

describe("render catalog correctly", () => {
    it("renders catalog", async () => {
        const { container } = render(<Catalog />);
        expect(container).toMatchSnapshot()
    })

    it("renders main info", async () => {
        render(<Catalog />);

        expect(screen.getByRole("button", { name: /all/i })).toBeInTheDocument()
        expect(screen.getByRole("button", { name: /new/i })).toBeInTheDocument()
        expect(screen.getByRole("button", { name: /sale/i })).toBeInTheDocument()
        expect(screen.getByRole('heading', { name: /catalog/i }).textContent).toMatch('Catalog')
    })
})