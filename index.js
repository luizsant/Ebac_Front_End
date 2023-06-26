const alunos = [
  { nome: "João Burro", nota: 5 },
  { nome: "Maria", nota: 6 },
  { nome: "Ana", nota: 7 },
  { nome: "Lucas", nota: 8 },
  { nome: "Gabriel", nota: 9 },
];

function alunosAprovados(alunos) {
  return alunos.filter(aluno => aluno.nota >= 6);
}

console.log(alunosAprovados(alunos)); 