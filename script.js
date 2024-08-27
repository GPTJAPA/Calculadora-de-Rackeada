// Variável para armazenar o nome e a quantidade de Vitorias de um jogador
let jogador = {
  nome: "GustavinhoGameplay",
  vitorias: 92, // Exemplo de Vitorias
  derrotas: 8, // Exemplo de Derrotas
};

let saldovitorias = jogador.vitorias - jogador.derrotas; // Calcula a Vitoria menos Derrota

// Estrutura de decisão para determinar a classificação de vitorias do jogador
let classificacao;

if (saldovitorias < 10) {
  classificacao = "Ferro";
} else if (saldovitorias >= 11 && saldovitorias <= 20) {
  classificacao = "Bronze";
} else if (saldovitorias >= 21 && saldovitorias <= 50) {
  classificacao = "Prata";
} else if (saldovitorias >= 51 && saldovitorias <= 80) {
  classificacao = "Ouro";
} else if (saldovitorias >= 81 && saldovitorias <= 90) {
  classificacao = "Diamante";
} else if (saldovitorias >= 91 && saldovitorias <= 100) {
  classificacao = "Lendário";
} else if (saldovitorias <= 101) {
  classificacao = "Imortal";
}

// Exibir a classificação do Jogador
console.log(
  `O ${jogador.nome} tem de saldo de ${saldovitorias} vitorias e possui o nivel ${classificacao}`
);
