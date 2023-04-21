import React from 'react'

export default function useDisplaySuperHeroes(data) {
  const superHeroes = data?.map(hero => {
    return <div key={hero.id}>{hero.name}</div>
   })
   return superHeroes;
}
