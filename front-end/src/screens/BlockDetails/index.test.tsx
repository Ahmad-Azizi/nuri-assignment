import { render, screen } from "@testing-library/react";
import BlockDetailsScreen from "./";

describe("BlockDetailsScreen tests", () => {
    it("should render page correctly", () => {
        render(<BlockDetailsScreen />);
        expect(
            screen.getByText(
                "Block Details"
            )
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                "Previous Block:"
            )
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                "Block Index:"
            )
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                "Block Size:"
            )
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                "Transactions:"
            )
        ).toBeInTheDocument();
    });
});
