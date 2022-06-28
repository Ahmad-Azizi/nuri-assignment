import { render, screen } from "@testing-library/react";
import TableHeader from "./";
import { OrderType, OrderByType } from "../../utils/types";
import { headCells } from "../../screens/Home/constants";

describe("TableHeader component tests", () => {
    const order: OrderType = "asc";
    const orderBy: OrderByType = "hash";
    const props = {
        headCells,
        onRequestSort: jest.fn(),
        order,
        orderBy,
    };

    it("should render TableHeader component correctly", () => {
        render(<TableHeader {...props} />);
        props.headCells.forEach((obj) => {
            expect(screen.getByText(obj.label)).toBeInTheDocument();
        });
    });
});
