import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const addSuperHero = (hero) => {
  return axios.post(`http://localhost:4000/superheroes`, hero)
}

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery("super-heroes", fetchSuperHeroes, {
    onSuccess,
    onError,
    // select: (data) => {
    //   const superHeroNames = data.data.map((hero) => hero.name);
    //   return superHeroNames;
    // },
  });
};

// export const useAddSuperHeroData = () => {
//   const queryClient = useQueryClient()
//   return useMutation(addSuperHero, {
//     onSuccess: () => {
//       queryClient.invalidateQueries('super-heroes')
//     }
//   });
// }

export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient()
  return useMutation(addSuperHero, {
    onSuccess: (data) => {
      queryClient.setQueryData('super-heroes', (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [...oldQueryData, data.data]
        }
      })
    }
  });
}