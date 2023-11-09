import api from "./api";

export async function getEstado() {
    const response = await api.get('/estado')

    return response.data
}