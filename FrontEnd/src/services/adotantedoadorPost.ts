import api from "./api";

export async function getAdotanteDoador() {
    const response = await api.post('/adotantedoador/saveAdotanteDoador')

    return response.data
}