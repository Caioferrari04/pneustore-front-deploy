import { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './Frete.module.scss';


export default function Frete() {

  // const frete = require('frete');

  // frete()
  //     .cepOrigem('13467460')
  //     .peso(1)
  //     .formato(frete.formatos.caixaPacote)
  //     .comprimento(16)
  //     .altura(2)
  //     .largura(11)
  //     .diametro(1)
  //     .maoPropria("n")
  //     .valorDeclarado(50)
  //     .avisoRecebimento("n")
  //     .servico(frete.servicos.sedex)
  //     .preco('13466321', function (err, results) {
  //         console.log(err);
  //         console.log(results);
  //     });
  
  const [dados, setDados] = useState("");
  const valorFrete = "100,00";

  const submitHandler = (event) => {
    event.preventDefault()
    funcao()
  }

  function funcao(){
    var cep = document.createElement("h2");
    cep.style.color = "black";
    //cep.style.fontSize= "40px";
    cep.style.fontWeight = "400";
    cep.innerHTML= "Estrada- São Paulo-Jundiaí /num 105,	Bairro: Perus, UF: São Paulo/SP";
    
    var title = document.createElement("h1");
    title.style.fontWeight = "400";
    title.innerHTML = "Endereço";
    
    document.getElementById("h4").innerHTML= "";
    document.getElementById("retorno").appendChild(title)
    document.getElementById("retorno").appendChild(cep)

    console.log(title)
  }

  return(
      <div className={styles.card}>
        <div className={styles.info}>
          <h1>Informe o seu CEP <img src="location.png" alt ="localização"/></h1>
          <form onSubmit={submitHandler} >
            <input type= "text" onChange= { (e) => setDados(e.target.value)} placeholder=" ex: 54270-800" required></input>
            <button onSubmit={submitHandler}> Calcular Entrega </button>
          </form>
          <div id="retorno">
            <h4 id="h4">Não sei meu CEP</h4>
          </div>
        </div>
      </div>  
  )
}
