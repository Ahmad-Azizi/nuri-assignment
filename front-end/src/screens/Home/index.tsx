import { useEffect, useState } from "react";
import { Box, AppBar, Toolbar, Typography, Grid } from "@material-ui/core";
import { Loader, Table } from "../../common";
import { BlockObjectType, TransformedBlockObjectType } from "../../utils/types";
import { transformBlocksData } from "../../utils/transformers";
import { headCells } from "./constants";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from "@material-ui/pickers";
import { useStyles } from "./styles";

const HomeScreen = () => {
    const classes = useStyles();
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [data, setData] = useState<Array<TransformedBlockObjectType>>([]);
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

    const fetchBlocksList = (timestamp = new Date().getTime()) => {
        setIsFetching(true);
        fetch(`http://localhost:8080/api/facets?timestamp=${timestamp}`)
            .then((res) => res.json())
            .then((data: Array<BlockObjectType>) => {
                setData(transformBlocksData(data));
                setIsFetching(false);
            });
    };

    useEffect(() => {
        fetchBlocksList(new Date(`${selectedDate}`).getTime());
    }, [selectedDate]);

    return (
        <Box>
            <AppBar className={classes.appBar} position="static">
                <Toolbar className={classes.toolbar}>
                    <Typography className={classes.name} variant="h6">
                        Ahmad Najam Azizi
                    </Typography>
                    <Typography variant="h4">Blocks List</Typography>
                </Toolbar>
                <Toolbar className={classes.toolbar}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid
                            container
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Typography
                                className={classes.dateSearchLabel}
                                variant="h6"
                            >
                                Date Search:
                            </Typography>
                            <KeyboardDatePicker
                                margin="normal"
                                format="MM/dd/yyyy"
                                value={selectedDate}
                                onChange={(date: Date | null) =>
                                    setSelectedDate(date)
                                }
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                </Toolbar>
            </AppBar>
            <Table headCells={headCells} rows={data} />
            <Loader isLoading={isFetching} />
        </Box>
    );
};

export default HomeScreen;
