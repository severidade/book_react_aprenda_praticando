const livrosA = [
  {titulo: "Construindo sites com html", autor: "Maurício Samy Silva"},
  {titulo: "Web com Pyton", autor: "Ryan Miche"},
  {titulo: "CSS3", autor: "Maurício Samy Silva"},
]

// let livrosX = livrosA.map((livro) => "livro: " + livro.titulo);
// console.log(livrosX);

// let livrosY = livrosA.map((livro) => "Autor: " + livro.autor);
// console.log(livrosY);

let livrosOrdem = livrosA.map((livro, index) => "Autor do livro " + (index+1) + " - " + livro.autor);
console.log(livrosOrdem);


