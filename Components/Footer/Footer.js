import styles from './Footer.module.scss';

export default function Footer(){
    return(
        <div className={styles.footer}>
            <div className={styles.list}>
                <ul>
                    <li>Institucional</li>
                    <li>Ajuda</li>
                    <li>Serviços</li>
                    <li>Central de relacionamentos</li>
                </ul>
            </div>
        </div>  
        
    )
}

//<h2>Institucional</h2>
{/* <h2>Ajuda</h2>
<h2>Serviço</h2>
<h2>Central de relacionamento</h2> */}