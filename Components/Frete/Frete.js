import styles from './Frete.module.scss';


export default function Frete(){
  
  return(
      <div className={styles.card}>
        <div className={styles.info}>
          <h1>Informe o seu CEP <img src="location.png" alt ="localização"/></h1>
          <input placeholder=" ex: 54270-800"></input>
          <button>Calcular Entrega</button>
          <h4>Não sei meu CEP</h4>
        </div>
      </div>  
  )
}
