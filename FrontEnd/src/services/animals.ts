import api from "./api";

export async function getAnimals() {
   const response = await api.get('/animal/filtro') 

   return response.data 
}