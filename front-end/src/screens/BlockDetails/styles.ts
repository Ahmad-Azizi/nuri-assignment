import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
    createStyles({
        toolbar: {
            color: theme.palette.common.white,
            justifyContent: "center",
            alignItems: "center",
        },
        iconContainer: {
            left: 0,
            position: "absolute",
            marginLeft: "10px",
        },
        icon: {
            color: theme.palette.common.white,
            width: "30px",
            height: "30px",
            cursor: "pointer",
        },
        indexAndSize: {
            color: theme.palette.common.white,
            justifyContent: "space-evenly",
            alignItems: "center",
        },
    })
);
