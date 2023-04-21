import React from 'react'

export default function useDisplaySuperHero(data) {
    return <h2>{data?.data.name} - {data?.data.alterEgo}</h2>
}
