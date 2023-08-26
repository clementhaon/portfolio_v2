import React from 'react';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from '../theme/ToggleColorMode';
import {Typography} from "@mui/material";

function Header() {
    const { mode, toggleColorMode } = React.useContext(ColorModeContext);

    return (
        <header>
            <IconButton onClick={toggleColorMode} color="inherit">
                {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <Typography>LAaaa</Typography>
        </header>
    );
}

export default Header;
