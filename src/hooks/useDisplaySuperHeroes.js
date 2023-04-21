import React from 'react'
import { Link } from 'react-router-dom';

export default function useDisplaySuperHeroes(data) {
  const superHeroes = data?.map(hero => {
    return <Link to={`/rq-super-heroes/${hero.id}`} key={hero.id}>{hero.name}</Link>
   })
   return superHeroes;
}
