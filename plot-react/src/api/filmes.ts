import type { Filme, RespostaFilmes } from "../types/filme";
import { api } from "./api";

export async function listarFilmes(
    pagina: number = 1,
    tamanhoPagina: number = 10,
    busca: string = ""   
) : Promise<RespostaFilmes> {
    
    const resposta = await api.get<RespostaFilmes>("Filme", {

        params: {
            pagina,
            tamanhoPagina,
            busca
        }

    });

    return resposta.data;
}

// Busca um filme específico pelo ID
export async function buscarFilmeId(id: number) : Promise<Filme> {
    const resposta = await api.get<Filme>(`Filme/${id}`)

    return resposta.data;
}

//Cadastra um novo filme
export async function cadastrarFilme(dados: FormData) {
    const resposta = await api.post("Filme", dados);

    return resposta.data;
}

//Atualiza os dados de um filme
export async function editarFilme(id: string, dados: FormData) {
    const resposta = await api.put(`Filme/${id}`, dados)

    return resposta.data;
}

//Excluir um filme
export async function ecluir(id: string) {
    await api.delete(`Filme/${id}`)
}