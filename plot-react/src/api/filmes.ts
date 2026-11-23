import type { RespostaFilmes } from "../types/filme";
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