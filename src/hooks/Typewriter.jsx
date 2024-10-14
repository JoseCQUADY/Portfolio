import { useState, useEffect } from 'react';
import textSound from '../assets/text-sound.mp3';
import useSound from 'use-sound';


const useTypewriter = (text, speed = 50) => {
    const [displayText, setDisplayText] = useState('');
    const [hasPlayed, setHasPlayed] = useState(false);
    const [play] = useSound(textSound);

    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i === 0 && !hasPlayed) {
                play(); // Reproduce el sonido
                setHasPlayed(true); // Establece que ya ha reproducido el sonido
            }
            if (i < text.length) {
                setDisplayText(prevText => prevText + text.charAt(i));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, speed);

        return () => {
            clearInterval(typingInterval);
        };
    }, [text, speed,hasPlayed]);

    return displayText;
};

const Typewriter = ({ text, speed }) => {


    const displayText = useTypewriter(text, speed);

    return <p>{displayText}</p>;
};

export default Typewriter;