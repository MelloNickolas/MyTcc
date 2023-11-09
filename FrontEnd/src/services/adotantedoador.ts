import api from "./api";

export async function getAdotanteDoador() {
    const response = await api.get('/adotantedoador')

    return response.data
}