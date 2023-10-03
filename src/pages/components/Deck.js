import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const cards = [
    'https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_06_Lovers.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg',
]

function Deck() {
    const [props, api] = useSpring(() => ({
        x: 0,
    }));

    // Gérez l'événement de défilement pour mettre à jour la propriété x basée sur le défilement
    const handleScroll = () => {
        const scrollTop = window.scrollY;
        api.start({ x: -scrollTop });
    };

    // Ajoutez un écouteur d'événement de défilement lorsque le composant est monté
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Effect ne fonctionne qu'une fois après le montage

    return (
        <div style={{ height: '200vh' }}>
            {cards.map((card, index) => (
                <animated.div
                    key={index}
                    style={{
                        transform: props.x.to(x => `translateX(${x}px)`),
                        backgroundImage: `url(${card})`,
                        width: '200px', // Ajustez la largeur de vos cartes ici
                        height: '300px', // Ajustez la hauteur de vos cartes ici
                        backgroundSize: 'cover',
                        marginBottom: '20px', // Espacement entre les cartes
                    }}
                />
            ))}
        </div>
    );
}

export default Deck;
