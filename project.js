/*  # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**" */

let vic = 29
let derrot = 7

let resultado = calculo(vic, derrot)
let nivel = position (resultado)

console.log("O Herói tem de saldo de " + resultado + " e está no nível de " + nivel)

function calculo(vitorias, derrotas){
    let saldo = vitorias - derrotas
    return saldo
}

function position(result){
    let rank
    if (result < 10) {
        rank = "Ferro"
    } else if (result >= 10 && result <= 20) {
        rank = "Bronze"
    } else if (result >= 21 && result <= 50) {
        rank = "Prata"
    } else if (result >= 51 && result <= 80) {
        rank = "Ouro"
    } else if (result >= 81 && result <= 90) {
        rank = "Diamante"
    } else if (result >= 91 && result <= 100) {
        rank = "Lendário"
    } else if (result >= 101) {
        rank = "Imortal"
    }
    return rank
}