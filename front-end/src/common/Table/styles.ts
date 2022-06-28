import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            width: "100%",
        },
        table: {
            minWidth: 750,
            height: "100vh",
            backgroundColor: theme.palette.background.default,
        },
        pagination: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
        },
    })
);
