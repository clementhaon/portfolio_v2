import React from 'react';
import { useTheme } from '@mui/material/styles';
function Lights() {
    const numberOfLights = 50;
    const lights = [];
    const theme = useTheme();
    for (let i = 0; i < numberOfLights; i++) {
        const style = {
            left: `${Math.random() * 100}%`, // Position horizontale aléatoire
            top: `${Math.random() * 100}%`, // Position verticale aléatoire
            animationDelay: `${Math.random() * 2}s`, // Délai d'animation aléatoire
        };

        lights.push(<div className={theme.palette.mode === 'light' ? "stars-light" : "stars-dark"} style={style} key={i}/>);
    }

    return <div className="lights-container">{lights}</div>;
}

export default Lights;
