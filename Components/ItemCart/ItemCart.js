import styles from './ItemCart.module.scss';


export default function ItemCart(){
  
  return(
      <div className={styles.card}>
        <div className={styles.info}>
          <div className={styles.cabecalho}>
            <h2>Resumo do pedido</h2>
            <img src='bag.png' />
          </div>
          <h3> Pneu Firestone 15 ExtremeContact DW 225/70R16 </h3>
          <h3> Subtotal: R$548,43 </h3>
          <div className={styles.buttons}>
            <button className={styles.button1}>Continuar comprando</button>
            <button className={styles.button2}>Finalizar compra</button>
          </div>
        </div>
      </div>      
  )
}
