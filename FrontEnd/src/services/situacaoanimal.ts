import api from "./api";

export async function getSituacaoAnimal() {
    const response = await api.get('/situacaoanimal')
    return response.data
}