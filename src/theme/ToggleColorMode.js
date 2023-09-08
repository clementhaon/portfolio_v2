import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {CssBaseline} from "@mui/material";

export const ColorModeContext = React.createContext();

export default function ToggleColorMode({ children }) {
    const [mode, setMode] = React.useState('light');

    const toggleColorMode = () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
    };

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
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
