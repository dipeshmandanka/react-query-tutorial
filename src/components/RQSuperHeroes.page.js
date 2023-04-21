import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import useSuperHerosData from '../hooks/useSuperHerosData';
import useDisplaySuperHeroes from '../hooks/useDisplaySuperHeroes';


export default function RQSuperHeroesPage() {
  
    function onSuccess(data) {
      console.log("Data fetching success", data);
    }

    function onError(error) {
      console.log("Data fetching failed", error)
    }

    const { data, isLoading, isError, error, isFetching, refetch} = useSuperHerosData(onSuccess, onError);
    const superHeroes = useDisplaySuperHeroes(data);
    
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
            <button onClick={refetch}>Display SuperHeroes</button>
           {superHeroes}
        </div>
    );
}
