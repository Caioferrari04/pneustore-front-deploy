import { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './Frete.module.scss';


export default function Frete() {

  
  const [dados, setDados] = useState("");
  const [valorFrete, setValorFrete] = useState("0,00");

  const submitHandler = (event) => {
    event.preventDefault()
    funcao()
  }


  function funcao(){

    var cep = document.createElement("h2");
    var txtI = document.createTextNode("Estrada- São Paulo-Jundiaí /num 105,	Bairro: Perus, UF: São Paulo/SP")
    cep.appendChild(txtI);
    cep.style.color = "black";
    cep.style.fontWeight = "300";
    cep.style.marginRight = "2rem";
 
    document.getElementById("h4").innerHTML= "";
    document.getElementById("retorno").appendChild(cep)

    setValorFrete("100,00");

    return (
      {...dados, valorFrete}
    )

      console.log(funcao.props)
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
