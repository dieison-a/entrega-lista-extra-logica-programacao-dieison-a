/* EXERCÍCIO 1
- tem um salário fixo; tem um total de vendas que varia
- se o total de vendas for menor que 1200, salario fixo + 3% das vendas efetuadas
- mas se o total de vendas for maior que 1200, salario fixo + 3% sobre 1200 de vendas + 5% total das vendas efetuadas
*/

function calculateSalary(salarioFixo, vendasEfetuadas) {
    let result = 0

    if (vendasEfetuadas < 1200) {
        result = salarioFixo + (vendasEfetuadas * 0.3)
    }
    else if (vendasEfetuadas > 1200) {
        result = salarioFixo + (1200 * 0.3) + (vendasEfetuadas * 0.5)
    }
    return result

}
console.log(calculateSalary(1357, 2468))

/* EXERCÍCIO 2
- tem o valor inteiro do saque, tem o salario fixo, tem as vendas efetuadas
- tem as notas em reais que formam esse valor (100, 50, 20, 10, 5, 2, 1)
- quantos 100 cabem no valor do saque? quantos 50?.....
*/

function cashMachine(valorSaque, salarioFixo, vendasEfetuadas) {
    function cedulas(valorSaque) {
        let notas100 = valorSaque / 100
        let resto100 = valorSaque % 100
        let notas50 = resto100 / 50
        let resto50 = resto100 % 50
        let notas20 = resto50 / 20
        let resto20 = resto50 % 20
        let notas10 = resto20 / 10
        let resto10 = resto20 % 10
        let notas5 = resto10 / 5
        let resto5 = resto10 % 5
        let notas2 = resto5 / 2
        let resto2 = resto5 % 2
        let notas1 = resto2 / 1
        
        let quantas = ""

        if (notas100 > 0) {
            quantas += `${Math.floor(notas100)} notas de R$100,`;
        }
        if (notas50 > 0) {
            quantas += " " + `${Math.floor(notas50)} notas de R$50,`;
        }
        if (notas20 > 0) {
            quantas += " " + `${Math.floor(notas20)} notas de R$20,`;
        }
        if (notas10 > 0) {
            quantas += " " + `${Math.floor(notas10)} notas de R$10,`;
        }
        if (notas5 > 0) {
            quantas += " " + `${Math.floor(notas5)} notas de R$5,`;
        }
        if (notas2 > 0) {
            quantas += " " + `${Math.floor(notas2)} notas de R$2`;
        }
        if (notas1 > 0) {
            quantas += " " + `${Math.floor(notas1)} moedas de R$1`;
        }
        return quantas
    }

    let saldoAtual = calculateSalary(salarioFixo, vendasEfetuadas) - valorSaque

    return `Saque de R$${valorSaque.toFixed(2).replace(".", ",")}. Serão ${cedulas(valorSaque)}. Saldo atual: R$${saldoAtual.toFixed(2).replace(".", ",")}`

}
console.log(cashMachine(1357, 2468, 3579))

/* EXERCÍCIO 3 */

function calculateStock(quantoTem, quantoCabe, quantoPouco) {
    let media = (quantoCabe + quantoPouco) / 2
    //console.log(media)

    if (quantoTem > quantoCabe) {
        return "Excesso de produtos!!!"
    }
    else if (quantoTem >= media) {
        return "Não efetuar compra!"
    }
    return "Efetue novas compras."
}
console.log(calculateStock(1234, 2468, 135))

/* EXERCÍCIO 4
- recebe apenas o ano de nascimento
- calcula diminuindo o ano de nascimento do ano atual
- retorna a idade em:
    i) anos;
    ii) meses;
    iii) semanas;
    iv) dias.
*/

function calculateAge(anoAtual, anoNascimento) {
    
    let ageAnos = anoAtual - anoNascimento
    let ageMeses = ageAnos * 12
    let ageSemanas = ageMeses * 4
    let ageDias = ageSemanas * 7

    return `Idade em anos: ${ageAnos}. Idade em meses: ${ageMeses}. Idade em semanas: ${ageSemanas}. Idade em dias: ${ageDias}.`
}
console.log(calculateAge(2022, 1996))

/* EXERCÍCIO 5
- criar uma matriz quadrada (mesma quantidade de linhas e colunas)
- retornar os números que aparecem em diagonal
*/

let matriz = [
    [1, 2, 3, 4, 5],
    [2, 3, 4, 5, 6],
    [3, 4, 5, 6, 7],
    [4, 5, 6, 7, 8],
    [5, 6, 7, 8, 9],
]

function getDiagonal(arr) {
    let diagonal = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i == j) {
               diagonal += arr[i][j]
            }
        }
    }
    return diagonal.split("")
}
console.log(getDiagonal(matriz));