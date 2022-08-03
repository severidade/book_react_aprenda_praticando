const livros = [
  {id: 1, titulo: "Construindo sites com html", autor: "Maurício Samy Silva"},
  {id: 2, titulo: "Web com Pyton", autor: "Ryan Miche"},
  {id: 3, titulo: "CSS3", autor: "Maurício Samy Silva"}
];

let livros1 = livros.find((livro) => livro.id === 3);
let autor = livros.find((livro) => livro.autor.includes("Maurício"));
// retorna o primeiro item onde a condição é válida

console.log(livros1);
console.log(livros1.titulo);
console.log(autor);