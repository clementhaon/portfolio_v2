import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {CssBaseline} from "@mui/material";

export const ColorModeContext = React.createContext();

export default function ToggleColorMode({ children }) {
    const [mode, setMode] = React.useState('dark');

    const toggleColorMode = () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
    };

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    ...(mode === 'light'
                        ? {
                            background: {
                                default: "#fff",
                                paper: "#8d2d30",
                            },
                            light: {
                                default: "",
                            }
                        }
                        : {
                            background: {
                                default: "#262626",
                                paper: "#89e586",
                            },
                            light: {
                                default: "#89e586",
                            }
                        }),
                },
                typography: {
                    fontFamily: [
                        'Tektur',
                    ].join(','),
                },
            }),
        [mode]
    );

    return (
        <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    {children}
                </CssBaseline>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
