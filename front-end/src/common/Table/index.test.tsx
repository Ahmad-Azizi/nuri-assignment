import { render, screen } from "@testing-library/react";
import Table from "./";
import { headCells } from "../../screens/Home/constants";
import { blocksListRows } from "../../utils/fixtures";

describe("Table component tests", () => {
    const props = {
        headCells,
        rows: blocksListRows,
        displayTransactions: false,
    };

    it("should render Table component correctly", () => {
        render(<Table {...props} />);
        expect(screen.getByText("Rows per page")).toBeInTheDocument();
    });
});
