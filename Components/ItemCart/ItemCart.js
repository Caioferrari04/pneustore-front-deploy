import styles from './ItemCart.module.scss';


export default function ItemCart(){
  
  return(
      <div className={styles.card}>
        <div className={styles.info}>
          <h1>Resumo do pedido</h1>
            <h2> Pneu Firestone 15 ExtremeContact DW 225/70R16 </h2>
            <h3> Subtotal: R$548,43 </h3>
            <button className={styles.button1}>Continuar comprando</button>
            <button className={styles.button2}>finalizar compra</button>
        </div>
      </div>
          
      
        
  )
}
