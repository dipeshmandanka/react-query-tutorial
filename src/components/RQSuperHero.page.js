import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from 'react-query';
import useDisplaySuperHero from '../hooks/useDisplaySuperHero';

function fetchSuperHero (heroId) {
    return axios.get('http://localhost:4000/superheroes/'+heroId);
}

export default function RQSuperHeroPage() {
    const { heroId } = useParams();
    const {isLoading, isError, error, data } = useQuery(["super-hero", heroId], () => fetchSuperHero(heroId))
    const superHero = useDisplaySuperHero(data);
    
    if (isLoading) {
        return <h2>Loading...</h2>
    } 

    if (isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <div>
            {superHero}
        </div>
    );
}
