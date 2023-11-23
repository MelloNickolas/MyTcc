export type AdotanteDoador = {
    id: number
    nome: string
    cpf: string
    telefone: string
    email: string
    dtnascimento: string
    endereco: string
    fotoperfil: string 
    senha: string
    cidade: {
        id: number
        nomecidade: string
    }

}