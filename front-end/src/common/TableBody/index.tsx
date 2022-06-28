import {
    TableBody as MUITableBody,
    TableCell,
    TableRow,
} from "@material-ui/core";
import {
    TransformedBlockObjectType,
    OrderType,
    OrderByType,
    BlockDetailsTxObjectType,
} from "../../utils/types";
import { useStyles } from "./styles";

interface TableBodyProps {
    rows: Array<TransformedBlockObjectType> | Array<BlockDetailsTxObjectType>;
    order: OrderType;
    orderBy: OrderByType;
    page: number;
    rowsPerPage: number;
    onRowClick: Function;
    displayTransactions: boolean;
}

const TableBody = ({
    rows,
    order,
    orderBy,
    page,
    rowsPerPage,
    onRowClick,
    displayTransactions = false,
}: TableBodyProps) => {
    const classes = useStyles();

    const tableSort = (
        array:
            | Array<TransformedBlockObjectType>
            | Array<BlockDetailsTxObjectType>,
        comparator: Function
    ) => {
        const stabilized = array.map((row, index) => [row, index]);

        stabilized.sort(
            (
                a: (
                    | number
                    | TransformedBlockObjectType
                    | BlockDetailsTxObjectType
                )[],
                b: (
                    | number
                    | TransformedBlockObjectType
                    | BlockDetailsTxObjectType
                )[]
            ): number => {
                const order = comparator(a[0], b[0]);
                if (order !== 0) return order;
                return Number(a[1]) - Number(b[1]);
            }
        );

        return stabilized.map((row) => row[0]);
    };

    const descendingComparator = (
        a: TransformedBlockObjectType,
        b: TransformedBlockObjectType,
        orderBy: OrderByType
    ) => {
        if (b[orderBy] < a[orderBy]) return -1;
        if (b[orderBy] > a[orderBy]) return 1;
        return 0;
    };

    const getComparator = (order: OrderType, orderBy: OrderByType) => {
        return order === "desc"
            ? (a: TransformedBlockObjectType, b: TransformedBlockObjectType) =>
                  descendingComparator(a, b, orderBy)
            : (a: TransformedBlockObjectType, b: TransformedBlockObjectType) =>
                  -descendingComparator(a, b, orderBy);
    };

    const emptyRows =
        rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
        <MUITableBody>
            {tableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row: any, index: number) => {
                    return (
                        <TableRow
                            className={classes.row}
                            key={row.hash}
                            hover
                            onClick={
                                !displayTransactions
                                    ? () => onRowClick(row.hash)
                                    : () => {}
                            }
                            tabIndex={-1}
                        >
                            {!displayTransactions ? (
                                <>
                                    <TableCell
                                        component="th"
                                        scope="row"
                                        padding="normal"
                                    >
                                        {row.hash}
                                    </TableCell>
                                    <TableCell align="justify">
                                        {new Date(row.time).toDateString()}
                                    </TableCell>
                                    <TableCell align="justify">
                                        {row.height}
                                    </TableCell>
                                </>
                            ) : (
                                <>
                                    <TableCell
                                        component="th"
                                        scope="row"
                                        padding="normal"
                                    >
                                        {row.block_height}
                                    </TableCell>
                                    <TableCell
                                        component="th"
                                        scope="row"
                                        padding="normal"
                                    >
                                        {row.block_index}
                                    </TableCell>
                                    <TableCell
                                        component="th"
                                        scope="row"
                                        padding="normal"
                                    >
                                        {row.fee}
                                    </TableCell>
                                    <TableCell
                                        component="th"
                                        scope="row"
                                        padding="normal"
                                    >
                                        {row.hash}
                                    </TableCell>
                                    <TableCell
                                        component="th"
                                        scope="row"
                                        padding="normal"
                                    >
                                        {row.lock_time}
                                    </TableCell>
                                    <TableCell
                                        component="th"
                                        scope="row"
                                        padding="normal"
                                    >
                                        {row.size}
                                    </TableCell>
                                    <TableCell
                                        component="th"
                                        scope="row"
                                        padding="normal"
                                    >
                                        {new Date(row.time).toDateString()}
                                    </TableCell>
                                    <TableCell
                                        component="th"
                                        scope="row"
                                        padding="normal"
                                    >
                                        {row.index}
                                    </TableCell>
                                </>
                            )}
                        </TableRow>
                    );
                })}
            {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                </TableRow>
            )}
        </MUITableBody>
    );
};

export default TableBody;
