import { render, screen } from "@testing-library/react";
import Loader from "./";

describe("Loader component tests", () => {
    const props = {
        isLoading: true,
        onClose: () => {},
    };

    it("should render Loader component correctly", () => {
        render(<Loader {...props} />);
        expect(
            screen.getByText(
                "Please wait while we fetch your data"
            )
        ).toBeInTheDocument();
    });
});
