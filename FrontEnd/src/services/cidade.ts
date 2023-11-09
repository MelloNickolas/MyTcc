import api from "./api";

export async function getCidade() {
   const response = await api.get('/cidade') 

   return response.data 
}