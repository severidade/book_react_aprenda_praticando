// const livros = ["CSS3", "HTML5", "Javascript", "React"];

// Sem desestruturacão
// console.log(livros[0]);
// console.log(livros[3]);

// Desestruturando
// let [ css, html, js, react ] = livros;

// console.log(css, js);

const livros = [
  {titulo: "Construindo sites com html", autor: "Maurício Samy Silva"},
  {titulo: "Web com Pyton", autor: "Ryan Miche"},
  {titulo: "CSS3", autor: "Maurício Samy Silva"}
];

let [ l1, l2, l3 ] = livros
let titulo = `"${l2.titulo}" é o titulo do livro 2`;

console.log(titulo);