import styles from './ItemCart.module.scss';


export default function ItemCart(){
  
  return(
      <div className={styles.card}>
        <div className={styles.info}>
          <div className={styles.cabecalho}>
            <h2>Resumo do pedido</h2>
            <img src='bag.png' alt="Ícone sacola de compras" />
          </div>
          <div className={styles.produtoSelec}>
            <h3>Produto(s) no carrinho:</h3>
            <h3>1</h3>
          </div>
          <div className={styles.valorFrete}>
            <h3>Modo de entrega:</h3>
            <h3>PneuStore móvel</h3>
          </div>
          <h2 className={styles.total}> Subtotal: R$548,43</h2>
          <div className={styles.buttons}>
            <button className={styles.button1}>Continuar comprando</button>
            <button className={styles.button2}>Finalizar compra</button>
          </div>
        </div>
      </div>      
  )
}
