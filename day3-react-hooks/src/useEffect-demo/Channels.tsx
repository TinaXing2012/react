import React, { useEffect, useState } from 'react'

interface Channel {
    id: number;
    name: string;
}

export default function Channels() {
    const [channels, setChannels] = useState<Channel[]>([]);

    const fetchChannels = async () => {
        console.log('Fetch Channels.....');
        const response = await fetch('https://tinaxing2012.github.io/jsons/data.json');
        const data = await response.json();
        setChannels(data.data.channels);
    }

    useEffect(() => {
        fetchChannels();
    }, []);

    return (
        <div>
            <ul>
                {
                    channels.map(c => <li key={c.id}>{c.name}</li>)
                }
            </ul>
        </div>
    );
}
