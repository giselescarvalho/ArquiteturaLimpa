export default interface CasoDeUso<ENTRADA, SAIDA>{
    executar(entrada: any): Promise<SAIDA>
}

//padronizar casos de uso a partir de uma interface

