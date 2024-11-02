import PubSub from 'pubsub-js';
import { useEffect, useState } from 'react';


export default function B() {
    const [data, setData] = useState(0);

    useEffect(() => {
        const token = PubSub.subscribe('CountFromA', (msg, data) => {
            console.log(`msg: ${msg}, data: ${data}`);
            setData(data);
        });
        return () => {
            PubSub.unsubscribe(token);
        }
    }, []);

    return (
        <div>B: {data}</div>
    )
}
