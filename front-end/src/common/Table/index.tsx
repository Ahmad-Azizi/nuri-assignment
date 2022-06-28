import { useState, MouseEvent } from "react";
import {
    Box,
    Table as MUITable,
    TableContainer,
    TablePagination,
} from "@material-ui/core";
import { TableHeader, TableBody } from "..";
import {
    TransformedBlockObjectType,
    OrderType,
    OrderByType,
    HeadCellsType,
    BlockDetailsTxObjectType,
} from "../../utils/types";
import { ROUTE_DETAILS } from "../../navigation/constants";
import { useHistory } from "react-router-dom";
import { useStyles } from "./styles";

interface TableProps {
    headCells: Array<HeadCellsType>;
    rows: Array<TransformedBlockObjectType> | Array<BlockDetailsTxObjectType>;
    displayTransactions?: boolean;
}

const Table = ({
    headCells,
    rows,
    displayTransactions = false,
}: TableProps) => {
    const history = useHistory();
    const classes = useStyles();
    const [order, setOrder] = useState<OrderType>("asc");
    const [orderBy, setOrderBy] = useState<OrderByType>("time");
    const [page, setPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(10);

    const handleRequestSort = (
        _: MouseEvent<HTMLElement>,
        property: OrderByType
    ) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    const onRowClick = (hash: string) => {
        history.push({
            pathname: ROUTE_DETAILS,
            search: hash,
        });
    };

    const handleChangePage = (
        _: MouseEvent<HTMLButtonElement, globalThis.MouseEvent> | null,
        newPage: number
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (value: number) => {
        setRowsPerPage(value);
        setPage(0);
    };

    return (
        <Box className={classes.root}>
            <TableContainer>
                <MUITable className={classes.table} size={"medium"}>
                    <TableHeader
                        headCells={headCells}
                        order={order}
                        orderBy={orderBy}
                        onRequestSort={handleRequestSort}
                    />
                    <TableBody
                        rows={rows}
                        order={order}
                        orderBy={orderBy}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        onRowClick={onRowClick}
                        displayTransactions={displayTransactions}
                    />
                </MUITable>
            </TableContainer>
            <TablePagination
                className={classes.pagination}
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={({ target: { value } }) =>
                    handleChangeRowsPerPage(parseInt(value, 10))
                }
            />
        </Box>
    );
};

export default Table;
