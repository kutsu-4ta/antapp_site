import { ReactNode, FC } from "react";
// import { createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {Theme} from "@material-ui/core";

// let theme = createTheme({
//     breakpoints: {
//         values: {
//             xs: 0,
//             sm: 600,
//             md: 768,
//             lg: 1025,
//             xl: 1536,
//         },
//     },
//     palette: {
//         primary: {
//             main: "#42a5f5",
//             light: "#1976d2",
//             dark: "#1565c0",
//         },
//     }
// });

// レスポンシブ カスタムフック
const useSize = () => {
    const isMobileSize = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('sm')
    );
    return { isMobileSize };
};

interface Props {
    children: ReactNode;
}

// PC
type IsPcType = (props: Props) => JSX.Element
export const IsPc:IsPcType = (props) => {
    const { isMobileSize } = useSize();
    return(
        <div>
            {!isMobileSize ? props.children : ''}
        </div>
    );
};

// モバイル
type IsMobileType = (props: Props) => JSX.Element
export const IsMobile:IsMobileType = (props) => {
    const { isMobileSize } = useSize();
    return(
        <div>
            {isMobileSize ? props.children : ''}
        </div>
    );
};