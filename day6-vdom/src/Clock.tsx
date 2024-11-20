import { useEffect, useState } from "react"

export default function Clock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => setTime(new Date()), 1000);
        return () => {
            clearInterval(timerId);
        }
    }, []);

    return (
        <div>
            <h1>Clock</h1>
            <input />
            <p>Current Time is: {time.toLocaleTimeString()} <input /></p>
        </div>
    )
}
