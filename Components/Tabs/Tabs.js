
import styles from './Tabs.module.scss';

export default function Tabs(){



  return(
    <div className={styles.tab}>
      <ul className={styles.ul}>
        <li className={styles.list}>
          <input type="radio" className={styles.rd} checked ></input>
          <label className={styles.tab1} >Montagem Móvel</label>
          <div className={styles.content}> 
          
          </div>
        </li>
      </ul>
      <ul className={styles.ul}>
        <li className={styles.list}>
          <input type="radio" className={styles.rd}></input>
          <label className={styles.tab1} >Montagem parceiro</label>
          <div className={styles.content}> 
          
          </div>
        </li>
      </ul>
      <ul className={styles.ul}>
        <li className={styles.list}>
          <input type="radio" className={styles.rd}></input>
          <label className={styles.tab1} >Entregar Endereço</label>
          <div className={styles.content}> 
          
          </div>
        </li>
      </ul>
    </div>

    
  )
}

