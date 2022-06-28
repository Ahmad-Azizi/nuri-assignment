import { Backdrop, Box, Fade, Modal, Typography } from "@material-ui/core";
import { loaderAnimation } from "../../assets/Gifs";
import { useStyles } from "./styles";

interface LoaderProps {
    isLoading: boolean;
    onClose?: () => void;
}

const Loader = ({ isLoading = false, onClose = () => {} }: LoaderProps) => {
    const classes = useStyles();
    return (
        <Modal
            className={classes.modal}
            open={isLoading}
            onClose={onClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={isLoading}>
                <Box className={classes.paper}>
                    <img src={loaderAnimation} alt={"loader-animation"} />
                    <Typography className={classes.text}>
                        Please wait while we fetch your data
                    </Typography>
                </Box>
            </Fade>
        </Modal>
    );
};

export default Loader;
