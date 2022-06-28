/// <reference types="react-scripts" />
import '@material-ui/core/styles';

declare module '@material-ui/core/styles/createPalette' {
    interface Palette {
        customColors: {
            border: string;
            disabled: string;
        };
    };
    interface PaletteOptions {
        customColors: {
            border: string;
            disabled: string;
        };
    };
};

declare module '@material-ui/core/styles/createTypography' {
    interface Typography {
        fontWeightExtraLight: number;
        fontWeightSemiBold: number;
        fontWeightExtraBold: number;
    };

    interface TypographyOptions {
        fontWeightExtraLight: number;
        fontWeightSemiBold: number;
        fontWeightExtraBold: number;
    };
};