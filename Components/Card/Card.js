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
                  <h2>{produto.nome}</h2>
                  <h3>R$ {produto.preco}</h3>
                  <img src={produto.imagemUrlMarca} alt={'logomarca '+produto.marca}/>
                </div>
              </div>
            : null
          }
        </>
  )
}
