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
    <Header></Header>
    <div className={styles.container}>
      <Head>
        <title>Seu Carrinho | PneuStore</title>
        <meta name="description" content="PneuStore -O pneu ideal para o seu Veículo e moto" />
        <link rel="icon" href="/favicon.ico" />  
      </Head>
      <Card {...data.results}/>
      <Frete/>
      <Tabs>
      <div label="Montagem Móvel">
            <h2 className={styles.title}>Agende sua entrega com a PneuStore Móvel</h2>
              <p className={styles.text}>
              Agora na PneuStore você pode contratar o serviço de entrega e montagem de pneus do seu carro no conforto de sua casa, trabalho ou no local desejado e ainda economizar na hora de pagar pelo serviço.
              </p>
          </div>
          <div label="Montagem no parceiro">
            <h2 className={styles.title}>Entrega e montagem em um centro de montagem parceiro</h2>
              <p className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
          </div>
          <div label="Entrega no meu endereço">
            <h2 className={styles.title}>Entrega comum em sua residência</h2>
              <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
          </div>
      </Tabs>
      <ItemCart/>
      <Footer/>
    </div>
  </>
  )
}


