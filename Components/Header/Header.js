import styles from './Header.module.scss';
import Link from 'next/link';

export default function Header(){
    return(
        <>
        <div className={styles.header}>
            <div className={styles.navbar}>
                <Link href="https://www.pneustore.com.br" passHref={true}>
                    <div className={styles.logo}>
                        <img src="PneuStore.png" />
                    </div>
                </Link>
                <div className={styles.user}>
                    <div className={styles.login}>
                        <img src="login.png" className={styles.icon} alt="login"/>
                        {/* <p>Olá, Daniel</p>                        */}
                    </div>
                </div>
                <div className={styles.search}>
                    <input type= "text" placeholder='  Pesquise por marca e medida. exemplo(175/65)'></input>
                    <div className={styles.searchIcon}>
                        <img src="search.png" className={styles.icon} alt="botao de pesquisa"/>
                    </div>
                </div>  
            </div>              
        </div>  

        <div className={styles.subHeader}>
            <h3>Meu carrinho de compras</h3>
            <img src="cart.png" />
        </div>

        </>
                
    )
}