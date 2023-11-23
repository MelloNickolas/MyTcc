import api from "./api";

export async function getAnimals(pesquisa?: string) {

   const response = await api.get(`/animal/filtro${pesquisa && ('?nomeanimal=' + pesquisa)}`) 

   return response.data 
}

export async function getAnimalById(id: string | undefined) {
   const response = await api.get(`/animal/getAnimalById/${id}`) 

   return response.data 
}
   /* 
      ${pesquisa && ('?nomeanimal=' + pesquisa)}`
      Esse comando serve para você conseguir filtra pelo nomeanimal
   */
