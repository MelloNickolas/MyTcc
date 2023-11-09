import api from "./api";

export async function getAnimals() {
   const response = await api.get('/animal') 

   return response.data 
}