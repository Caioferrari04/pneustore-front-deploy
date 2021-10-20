import { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './Frete.module.scss';


export default function Frete() {

  
  const [dados, setDados] = useState("");
  const valorFrete = "100,00";

  const submitHandler = (event) => {
    event.preventDefault()
    funcao()
  }

  function funcao(){

    var title = document.createElement("h1");
    var txtT = document.createTextNode("Endereço:");
    title.style.fontWeight = "350";
    title.style.fontSize = "24px"

    title.appendChild(txtT);

    var cep = document.createElement("h3");
    var txtI = document.createTextNode("Estrada- São Paulo-Jundiaí /num 105,	Bairro: Perus, UF: São Paulo/SP")
    cep.appendChild(txtI);
    cep.style.color = "black";
    cep.style.fontWeight = "400";

    
        
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
