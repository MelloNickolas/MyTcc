import api from "./api";

export async function getAdoçãoDoação() {
    const response = await api.get('/adocaodoacao')

    return response.data
}