import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheroes');
};
export default function RQSuperHeroesPage() {
    

    function onSuccess(data) {
      console.log("Data fetching success", data);
    }

    function onError(error) {
      console.log("Data fetching failed", error)
    }

    const { data, isLoading, isError, error, isFetching } = useQuery(
        'super-heroes',
        fetchSuperHeroes,
        {
            onSuccess: onSuccess,
            onError: onError,
            select: (data) => {
              const heroNames = data.data.map(hero => {
                return {id: hero.id, name: hero.name}
              });
              return heroNames;
            }
        }
    );

    console.log({ isFetching, isLoading });

    if (isLoading || isFetching) {
        return <h2>Loading...</h2>;
    }

    if (isError) {
        return <h2>{error.message}</h2>;
    }

    return (
        <div>
            <h2>RQ SuperHeroes</h2>
            
            {/* {data?.data.map(hero => (
                <div key={hero.id}>{hero.name}</div>
            ))} */}
           {data.map(hero => {
            return <div key={hero.id}>{hero.name}</div>
           })}
        </div>
    );
}
