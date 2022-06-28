import { render, screen } from "@testing-library/react";
import HomeScreen from "./";

describe("HomeScreen screen tests", () => {
    it("should render page correctly", () => {
        render(<HomeScreen />);
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
