import { terminal } from "terminal-kit";
import Fusca from "./fusca";

export default function coridda() {
    const carro = new Fusca()

    Array.from({length: 10}).forEach(() => {
        carro.acelerar()
        terminal.red(`\nVelocidade: ${carro.velocidadeAtual}`)
    })

    Array.from({length: 10}).forEach(() => {
        carro.frear()
        terminal.red(`\nVelocidade: ${carro.velocidadeAtual}`)
    })
}