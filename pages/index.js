import Head from 'next/head';
import { useState, useEffect } from 'react';
import { Api } from '../src/Api';
import Header from '../Components/Header/Header';
import styles from '../styles/Home.module.css';
import Card from '../Components/Card/Card';
import Tabs from '../Components/Tabs/Tabs';
import ItemCart from '../Components/ItemCart/ItemCart';
import Footer from '../Components/Footer/Footer';
import Frete from '../Components/Frete/Frete';

export default function Home() {

  const [data,setData] = useState([]);
    
    useEffect (() => {
      async function fetchAPi(){ 
            let response = await Api.buildApiGetRequest(
                Api.readAllUrl()
            ).catch(e =>{
                console.error('Erro ao tentar recuperar item do banco de dados:', e);
            })

            response = await response.json();
            setData(response);
        } 

        fetchAPi();

    },[]) 
    // console.log(data)

    

  return (
    <>
    
    <div className={styles.container}>
      <Head>
        <title>Seu Carrinho | PneuStore</title>
        <meta name="description" content="PneuStore -O pneu ideal para o seu Veículo e moto" />
        <link rel="icon" href="/favicon.ico" />   
      </Head>
      <Header className="header"/>
      <Card {...data.results}/>
      <Frete/>
      <Tabs>
      <div label="Montagem Móvel">
            <h2 className={styles.title}>Agende sua entrega com a PneuStore Móvel</h2>
              <p className={styles.text}>
              
              </p>
              <button className={styles.button2}>agendar </button>
          </div>
          <div label="Montagem no parceiro">
            <h2 className={styles.title}>Entrega e montagem em um centro de montagem parceiro</h2>
              <p className={styles.text}>
                
              </p>
              <button className={styles.button2}>Selecionar parceiro</button>
          </div>
          <div label="Entrega no meu endereço">
            <h2 className={styles.title}>Entrega comum em sua residência</h2>
              <p className={styles.text}>
              
              </p>
              
          </div>
      </Tabs>
      <ItemCart/>
      <Footer/>
    </div>
  </>
  )
}


