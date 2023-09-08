import React from 'react';
import Header from './components/Header';
import ToggleColorMode from './theme/ToggleColorMode';
import Home from './components/Home'

function App() {
    return (
        <ToggleColorMode>
            <Home/>
        </ToggleColorMode>
    );
}

export default App;
