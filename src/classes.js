// Classe Herói
class Heroi {
    // Construtor para inicializar nome, idade e tipo
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método atacar que varia conforme o tipo do herói
    atacar() {
      let ataque = '';
  
      // Verifica o tipo do herói e define o ataque correspondente
      switch (this.tipo.toLowerCase()) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'fez um ataque desconhecido';
      }
  
      // Exibe a mensagem de ataque
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Criando diferentes heróis para testar
  const heroi1 = new Heroi('Arthur', 30, 'guerreiro');
  const heroi2 = new Heroi('Merlin', 150, 'mago');
  const heroi3 = new Heroi('Naruto', 16, 'ninja');
  const heroi4 = new Heroi('Shaolin', 40, 'monge');
  
  // Testando o método atacar de cada herói
  heroi1.atacar(); // O guerreiro atacou usando espada
  heroi2.atacar(); // O mago atacou usando magia
  heroi3.atacar(); // O ninja atacou usando shuriken
  heroi4.atacar(); // O monge atacou usando artes marciais
  