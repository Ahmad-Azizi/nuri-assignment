import { useEffect, useState } from "react";
import { Box, AppBar, Toolbar, Typography } from "@material-ui/core";
import { HomeRounded, ArrowBackRounded } from "@material-ui/icons";
import { Loader, Table } from "../../common";
import { transformBlockDetailsData } from "../../utils/transformers";
import { BlockDetailsObjectType } from "../../utils/types";
import { useLocation, useHistory } from "react-router-dom";
import { ROUTE_DETAILS, ROUTE_HOME } from "../../navigation/constants";
import { headCells } from "./constants";
import { useStyles } from "./styles";

const BlockDetailsScreen = () => {
    const classes = useStyles();
    const location = useLocation<Location>();
    const history = useHistory();
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [data, setData] = useState<BlockDetailsObjectType>({
        block_index: 0,
        hash: "",
        prev_block: "",
        size: 0,
        tx: [],
    });
    const { search: hash } = location;

    const fetchBlockDetails = (hash: string) => {
        setIsFetching(true);
        fetch(`http://localhost:8080/api/facets/${hash}`)
            .then((res) => res.json())
            .then((data) => {
                setData(transformBlockDetailsData(data));
                setIsFetching(false);
            });
    };

    useEffect(() => {
        fetchBlockDetails(hash.substring(1));
    }, [hash]);

    const onFetchPrevHash = (prevHash: string) => {
        history.push({
            pathname: ROUTE_DETAILS,
            search: prevHash,
        });
    };

    return (
        <Box>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <Box
                        className={classes.iconContainer}
                        onClick={() => history.push(ROUTE_HOME)}
                    >
                        <HomeRounded className={classes.icon} />
                    </Box>
                    <Typography variant="h4">Block Details</Typography>
                </Toolbar>
                <Toolbar
                    className={classes.toolbar}
                    component={"div"}
                    onClick={() => onFetchPrevHash(data?.prev_block)}
                >
                    <Box className={classes.iconContainer}>
                        <ArrowBackRounded className={classes.icon} />
                    </Box>
                    <Typography variant="h6">
                        {`Previous Block: ${data?.prev_block}`}
                    </Typography>
                </Toolbar>
                <Toolbar className={classes.indexAndSize}>
                    <Typography variant="h6">
                        {`Block Index: ${data?.block_index}`}
                    </Typography>
                    <Typography variant="h6">{`Block Size: ${data?.size}`}</Typography>
                </Toolbar>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h4">Transactions</Typography>
                </Toolbar>
            </AppBar>
            <Table
                headCells={headCells}
                rows={data.tx}
                displayTransactions={true}
            />
            <Loader isLoading={isFetching} />
        </Box>
    );
};

export default BlockDetailsScreen;
