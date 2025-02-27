import CasoDeUso from "@/app/core/shared/CasoDeUso";
import Usuario from "../model/Usuario";

interface RegistrarUsuarioEntrada{
    usuario: Usuario
    valor: number
    texto: string
}

export default class RegistrarUsuario implements CasoDeUso<RegistrarUsuarioEntrada, void>{
    async executar(entrada: RegistrarUsuarioEntrada): Promise<void> {
        entrada.valor
    }
}