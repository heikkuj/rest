import { useEffect, useState } from "react";

export default function Greeting() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const hours = new Date().getHours();
        if (hours >= 5 && hours <= 11) {
                setMessage('God morgen!');
            } else if (hours >= 12 && hours <= 17){
                setMessage('God ettermiddag!');
            } else {
                setMessage('God kveld!');
            };
    }, []);

    return <span className="drop-shadow-white">{message}</span>
}