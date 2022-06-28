import { render, screen } from "@testing-library/react";
import TableBody from "./";
import { OrderType, OrderByType } from "../../utils/types";
import { blocksListRows } from "../../utils/fixtures";

describe("TableBody component tests", () => {
    const order: OrderType = "asc";
    const orderBy: OrderByType = "hash";
    const props = {
        rows: blocksListRows,
        order,
        orderBy,
        page: 0,
        rowsPerPage: 10,
        onRowClick: jest.fn,
        displayTransactions: false,
    };

    it("should render TableBody component correctly", () => {
        render(<TableBody {...props} />);
        expect(
            screen.getByText(
                "000000000000000000082b29c717ad6ed8e6137ad54dfa34991985b8e84096fe"
            )
        ).toBeInTheDocument();
    });
});
