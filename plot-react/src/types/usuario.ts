export interface usuario {
    idUsuario: string;
    nome: string;
    email: string;
    tipoUsuario: "Admin" | "Usuario";
    ativo: boolean;
    fotoPerfil: string | null
}