function Animal(nome, idade) {
    this.nome = nome;
    this.idade = idade;

    this.apresentacao = function() {
        console.log('Eu sou um ' + this.tipo + ', meu nome é ' + this.nome + ' e eu tenho ' + this.idade + ' anos.');
    };
}

function Cachorro(nome, idade, raca) {
    Animal.call(this, nome, idade);
    this.tipo = "Cachorro";
    this.raca = raca;
}

function Gato(nome, idade, raca) {
    Animal.call(this, nome, idade);
    this.tipo = "Gato";
    this.raca = raca;
}

var cachorro1 = new Cachorro('Bobby', 3, 'Golden Retriever');
var cachorro2 = new Cachorro('Rex', 2, 'Labrador');
var gato1 = new Gato('Mia', 4, 'Siamese');

cachorro1.apresentacao();
cachorro2.apresentacao();
gato1.apresentacao();
