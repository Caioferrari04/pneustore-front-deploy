import styles from './Footer.module.scss';

export default function Footer(){
    return(
        <div className={styles.footer}>
            <div className={styles.list}>
                <ul>
                    <li className={styles.claro}>
                        Institucional
                    </li>
                    <li className={styles.escuro}>
                        Ajuda
                    </li>
                    <li className={styles.claro}>
                        Central de atendimentos
                    </li>
                    <li className={styles.escuro}>
                        Televendas
                    </li>
                </ul>
            </div>
        </div>  
        
    )
}

//<h2>Institucional</h2>
{/* */}