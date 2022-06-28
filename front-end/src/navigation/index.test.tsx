import { render, screen } from "@testing-library/react";
import Navigation from "./";

describe("Navigation screen tests", () => {
    it("should render navigation correctly", () => {
        render(<Navigation />);
        expect(
            screen.getByText(
                "Ahmad Najam Azizi"
            )
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                "Blocks List"
            )
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                "Date Search:"
            )
        ).toBeInTheDocument();
    });
});
