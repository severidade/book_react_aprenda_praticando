import React, { component } from "react";
import TabelaHead from "./componentes/TabelaHead";
import TabelaBody from "./componentes/TabelaBody";
import TabelaFoot from "./componentes/TabelaFoot";

class App extends component {
  reder(){
    return (
      <div>
        <table className="tabela">
          <TabelaHead />
          <TabelaBody />
          <TabelaFoot />
        </table>
      </div>
    );
  }
}

export default App;
