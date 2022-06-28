import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.primary.main,
        },
        label: {
            color: theme.palette.common.white,
        },
        visuallyHidden: {
            border: 0,
            height: 1,
            margin: -1,
            overflow: "hidden",
            padding: 0,
            position: "absolute",
            top: 20,
            width: 1,
            color: "white",
        },
    })
);
