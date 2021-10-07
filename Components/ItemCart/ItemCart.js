import styles from './itemCart.module.scss';


export default function ItemCart(){
  
  return(
      <div className={styles.card}>
        <div className={styles.info}>
          <h1>Resumo do pedido</h1>
            <h2> nome do produto </h2>
            <h3> subtotal e valor </h3>
            <button>Continuar comprando</button>
            <button>finalizar compra</button>
        </div>
      </div>
          
      
        
  )
}
