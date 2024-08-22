/* 
Função ComerPizza()

function comerPizza() {
    comerFatia()
    comerFatia()
    comerFatia()
    comerFatia()
    comerFatia()
    comerFatia()
}

Você quer chegar do ponto A ao ponto B. Uma das maneiras de conseguir isso é através das estruturas de controle.

A primeira estrutura de controle é a sequência:
vou do ponto A ao B executando tarefas sequencialmente até chegar ao meu objetivo. Ex: condições

Outro tipo de estrutura de controle são as Repetições ou Laços:

Um Laço começa exatamente como uma condição, ele vai testar uma expressão, tendo assim duas possibilidades, verdadeiro ou falso. Só que ao contrário da condição, se o laço for verdadeiro ele não vai pular direito para o final da expressão, ele vai voltar ao início da condição para testa-lá novamente. Ele vai repetir isso ENQUANTO(while) essa condição for verdadeira.

while (condição) {
    bloco()
}

Novo comando fica assim:

function comerPizza() {
    while(temFatia()) {
        comerFatia()
    }
}


*/

/* console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?') */

var c = 1
while (c<=6) {
    console.log(`Passo ${c}`)
    c++ // c = c + 1
}

// Estrutura de repetição com teste lógico no final:

/* 
do {
    bloco
} while (condição)
*/


do {
    console.log(`Passo ${c}`)
    c++
} while (c <= 6)