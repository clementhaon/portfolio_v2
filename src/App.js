import React from 'react';
import Header from './components/Header';
import ToggleColorMode from './theme/ToggleColorMode';

function App() {
    return (
        <ToggleColorMode>
            <Header/>
        </ToggleColorMode>
    );
}

export default App;
