import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
    createStyles({
        appBar: {
            display: "flex",
            flexDirection: "column",
        },
        toolbar: {
            color: theme.palette.common.white,
            justifyContent: "center",
            alignItems: "center",
        },
        name: {
            left: 0,
            position: "absolute",
            marginLeft: "10px",
        },
        dateSearchLabel: {
            marginTop: "10px",
            marginRight: "10px",
        },
    })
);
