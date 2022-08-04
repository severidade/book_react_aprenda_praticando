const estudar = (texto) => { console.log(texto); };
const elogiar = (elogio) => { console.log(elogio); };

export default estudar;
// A exportação com uso de default é usada para exportar a função principal 

export { elogiar };
// havendo mais funçoes no módulo usa-se a exportacão com chaves {}. Neste caso declara-se o nome das funções
// separadas por vírgula {elogiar, estudar}