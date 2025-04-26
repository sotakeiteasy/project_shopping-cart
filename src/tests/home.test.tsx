import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import userEvent from '@testing-library/user-event'
import {Home} from "@/pages";

describe("Home component", () => {
    it("renders Explore Collections button", () => {
        render(
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        );
        expect(screen.getByRole('button', { name: /Explore Collections/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Explore Collections/i })).toBeInTheDocument();
    })
    it("renders Why Choose Us section strictly", () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );
        expect(screen.getByRole('heading', { name: /Why Choose Us?/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /Premium Quality/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /Distinctive Style/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /Exceptional Service/i })).toBeInTheDocument();
        
        expect(screen.getByText(/We select only top-quality products from trusted suppliers./i )).toBeInTheDocument();
        expect(screen.getByText(/Our constantly updated range keeps you in vogue./i )).toBeInTheDocument();
        expect(screen.getByText(/Fast delivery and unmatched customer support at your service./i )).toBeInTheDocument();
    })
    it("Links work correctly", async () => {
        const user = userEvent.setup()
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );
        const exploreBtn = screen.getByRole('button', { name: /explore collections/i });
        await user.click(exploreBtn)
        expect(window.location.pathname).toBe("/catalog")

        const learnBtns = screen.getAllByRole('link', { name: /learn more/i });

        const firstLearnBtn = learnBtns[0]
        await user.click(firstLearnBtn)
        expect(window.location.pathname).toBe("/catalog")
      
        const secondLearnBtn = learnBtns[1]
        await user.click(secondLearnBtn)
        expect(window.location.pathname).toBe("/")

        const thirdLearnBtn = learnBtns[2]
        await user.click(thirdLearnBtn)
        expect(window.location.pathname).toBe("/")
    })
})