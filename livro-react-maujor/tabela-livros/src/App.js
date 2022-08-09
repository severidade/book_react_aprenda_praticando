import React, { Component } from "react";
import TabelaHead from "./componentes/TabelaHead";
import TabelaBody from "./componentes/TabelaBody";
import TabelaFoot from "./componentes/TabelaFoot";

class App extends Component {
  state = {
    livros: []
  };
  componentDidMount() {
    fetch("/api/livros.json")
      .then(response => response.json())
      .then(livros => this.setState({ livros }))
      .catch(function(error) {
        console.log("Erro na requisição");
      })
      .finally(function() {
        console.log("Sempre retorna");
    });
  }

  handleRemoverLinha = (id) =>{
    // console.log("Botão clicado")
    // cria um novo objeto excluíndo aquele cuja o id pertence ao item que deseja remover
    const livros = this.state.livros.filter(l => l.id !== id);
    this.setState({ livros });
  };

  handleOrdenarCrescente = (titulo) => {
    const livros = this.state.livros.sort((a,b) =>
      a.titulo < b.titulo ? -1:0
    );
    this.setState({ livros });
  };

  handleOrdenarDecrescente = (titulo) => {
    const livros = this.state.livros.sort((a,b) =>
      a.titulo < b.titulo ? -1:0
    );
    livros.reverse();
    this.setState({ livros });
  };
    
	render() {
		return (
			<table className="tabela">
				<TabelaHead
          ordenarCrescente={ this.handleOrdenarCrescente}
          ordenarDecrescente={ this.handleOrdenarDecrescente}
        />
				<TabelaBody 
          livros={ this.state.livros }
          removerLinha={this.handleRemoverLinha}
        />
				<TabelaFoot qdeLivros= { this.state.livros.length } />
			</table>
		);
	}
}

export default App;
