const livros = [
  {titulo: "Construindo sites com html", autor: "Maurício Samy Silva"},
  {titulo: "Web com Pyton", autor: "Ryan Miche"},
  {titulo: "CSS3", autor: "Maurício Samy Silva"}
];

let livros1 = livros.filter((livro) => livro.titulo === "CSS3");
console.log(livros1);

let livros2 = livros.filter((livro) => livro.autor === "Maurício Samy Silva");
console.log(livros2);

let livros3 = livros.filter((livro) => livro.autor.includes("Maurício"));
console.log(livros3);

// O método filter retorna todos que atentem a condição