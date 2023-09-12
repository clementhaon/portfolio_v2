import React from 'react';
import ToggleColorMode from './theme/ToggleColorMode';
import Home from './pages/Home'

function App() {
    return (
        <ToggleColorMode>
            <Home/>
        </ToggleColorMode>
    );
}

export default App;
