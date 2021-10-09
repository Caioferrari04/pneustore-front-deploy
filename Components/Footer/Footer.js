import styles from './Footer.module.scss';

export default function Footer(){
    return(
        <div className={styles.footer}>
            <h2>Institucional</h2>
            <h2>Ajuda</h2>
            <h2>Serviço</h2>
            <h2>Central de relacionamento</h2>
        </div>  
        
    )
}