import { terminal } from "terminal-kit";
import Fusca from "./fusca";
import Carro from "./Carro";

export default function corrida(carro: Carro) {
    // Tirando a depedencia explicita de uma classe concreta
    // const carro = new Fusca()

    Array.from({length: 10}).forEach(() => {
        carro.acelerar()
        terminal.red(`\nVelocidade: ${carro.velocidadeAtual}`)
    })

    Array.from({length: 10}).forEach(() => {
        carro.frear()
        terminal.red(`\nVelocidade: ${carro.velocidadeAtual}`)
    })
}