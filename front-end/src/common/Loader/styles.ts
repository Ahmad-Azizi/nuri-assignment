import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
    createStyles({
        modal: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "10px",
        },
        paper: {
            backgroundColor: theme.palette.background.default,
            outlineColor: theme.palette.primary.main,
            outlineStyle: "solid",
            outlineWidth: "5px",
            opacity: "0.1",
            width: "90%",
            height: "70%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
        },
        text: {
            fontSize: "20px",
            fontWeight: theme.typography.fontWeightExtraBold,
            color: theme.palette.text.primary,
            textAlign: "center",
            marginTop: "20px",
        },
    })
);
