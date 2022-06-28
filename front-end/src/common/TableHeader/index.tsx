import { MouseEvent } from "react";
import {
    TableHead,
    TableRow,
    TableCell,
    TableSortLabel,
    Typography,
    Box,
} from "@material-ui/core";
import { OrderType, OrderByType, HeadCellsType } from "../../utils/types";
import { useStyles } from "./styles";

interface TableHeaderProps {
    headCells: Array<HeadCellsType>;
    onRequestSort: Function;
    order: OrderType;
    orderBy: OrderByType;
}

const TableHeader = ({
    headCells,
    onRequestSort,
    order,
    orderBy,
}: TableHeaderProps) => {
    const classes = useStyles();

    const createSortHandler =
        (property: string) => (event: MouseEvent<HTMLElement>) => {
            onRequestSort(event, property);
        };

    return (
        <TableHead className={classes.root}>
            <TableRow>
                {headCells?.map(({ id, label }: HeadCellsType) => (
                    <TableCell
                        key={id}
                        align={"justify"}
                        padding={"normal"}
                        sortDirection={orderBy === id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === id}
                            direction={orderBy === id ? order : "asc"}
                            onClick={createSortHandler(id)}
                        >
                            <Typography className={classes.label}>
                                {label}
                            </Typography>
                            {orderBy === id && (
                                <Box
                                    className={classes.visuallyHidden}
                                    component={"span"}
                                >
                                    {order === "desc"
                                        ? "sorted descending"
                                        : "sorted ascending"}
                                </Box>
                            )}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};

export default TableHeader;
