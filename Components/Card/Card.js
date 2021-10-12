import { useEffect, useState } from 'react';
import styles from './Card.module.scss';
import Image from 'next/image';
import { Api } from '../../src/Api';

export default function Card(props){
  
  console.log(props)
  const produto = props[1]

  return(

        <>
          {
            produto ? 
              <div className={styles.card}>
                <div className={styles.imagem}>
                  <img src={produto.imagemUrl} alt={'pneu '+produto.marca}/>
                </div>
                <div className={styles.info}>
                  <h2 className={styles.nome}>{produto.nome}</h2>
                  <h3 className={styles.preco}>R$ {produto.preco}</h3>
                  <h4>12x sem juros</h4>
                </div>
              </div>
            : null
          }
        </>
  )
}
