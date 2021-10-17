import styles from './Footer.module.scss';

export default function Footer(){
    return(
        <div className={styles.footer}>
            <div className={styles.list}>
                <ul>
                    <li className={styles.claro}>
                        INSTITUCIONAL
                    </li>
                    <li className={styles.escuro}>
                        AJUDA      
                    </li>
                    <li className={styles.claro}>
                        SERVIÇO
                    </li>
                    <li className={styles.escuro}>
                        CENTRAL DE RELACIONAMENTOS
                    </li>
                    <li className={styles.escuro}>
                        SEGURANÇA
                    </li>
                    <li className={styles.escuro}>
                        AVALIAÇÕES
                    </li>
                </ul>
            </div>
        </div>  
        
    )
}

//<h2>Institucional</h2>
{/* */}