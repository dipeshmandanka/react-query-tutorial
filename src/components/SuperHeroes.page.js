import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function SuperHeroesPage() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:4000/superheroes')
            .then(res => {
                setData(res.data);
                setIsLoading(false);
            })
            
    }, []);

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            <h2>Super Heroes Page</h2>
            {data.map(hero => {
                return <div key={hero.name}>{hero.name}</div>;
            })}
        </div>
    );
}
