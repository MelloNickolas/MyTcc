import api from "./api";

export async function getRaca() {
    const response = await api.get('/raca')

    return response.data
}