import axios from 'axios';
import { useQuery } from 'react-query';

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheroes');
};

export default function useSuperHerosData(onSuccess, onError) {
    return useQuery(
        'super-heroes',
        fetchSuperHeroes,
        {
            onSuccess: onSuccess,
            onError: onError,
            enabled: false,
            select: (data) => {
              const heroNames = data.data.map(hero => {
                return {id: hero.id, name: hero.name}
              });
              return heroNames;
            }
        }
    );
}
