import Head from 'next/head';
import { useState, useEffect } from 'react';
import { Api } from '../src/Api';
import Header from '../Components/Header/Header';
import styles from '../styles/Home.module.css';
import Card from '../Components/Card/Card';
import Tabs from '../Components/Tabs/Tabs';



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
    <div className={styles.container}>
      <Head>
        <title>Seu Carrinho | PneuStore</title>
        <meta name="description" content="PneuStore -O pneu ideal para o seu Veículo e moto" />
        <link rel="icon" href="/favicon.ico" />  
      </Head>
      <Header></Header>
      <Card {...data.results}/>
      <Tabs/>
    </div>
    
  )
}


