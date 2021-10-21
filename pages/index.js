import Head from 'next/head';
import { useState, useEffect } from 'react';
import { Api } from '../src/Api';
import Header from '../Components/Header/Header';
import styles from '../styles/Home.module.css';
import estilos from '../Components/Tabs/Tabs.module.scss';
import Card from '../Components/Card/Card';
import Tabs from '../Components/Tabs/Tabs';
import ItemCart from '../Components/ItemCart/ItemCart';
import Footer from '../Components/Footer/Footer';
import Frete from '../Components/Frete/Frete';
import Calendar from '../Components/Calendar/Calendar';
import Button from '@mui/material/Button';
import ModalOne from '../Components/Modals/ModalOne';


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
    
  const [modalOpen, setModalOpen] = useState(false);


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
        <div className="">
          <h2 className={styles.title}>Agende sua entrega com a PneuStore Móvel</h2>
        </div>
        <div className={estilos.infoEntrega}>
          <div className={estilos.info}>
            <img src="tires.png" alt="Ícone pneu"/>
            <p className={styles.text}>1. Você escolhe o pneu.</p>
          </div>
          <div className={estilos.info}>
            <img src="location2.png" alt="Ícone disponibilidade do serviço"/>
            <p className={styles.text}>2. Verifica a disponibilidade do serviço em sua região.</p>
          </div>
          <div className={estilos.info}>
            <img src="van.png" alt="Ícone van de entrega"/>
            <p className={styles.text}>3. Pronto! Nós entregamos e montamos o pneu sem vocẽ sair de casa.</p>
          </div>
        </div>
        <Calendar/>
        <Button className={estilos.btnParceiro} variant="outlined" onClick={() => {
          setModalOpen(true);
        }}>AGENDAR</Button>

        {modalOpen && <ModalOne setOpenModal={setModalOpen} />}

      </div>

      <div label="Montagem no parceiro" >
        <div className="">
          <h2 className={styles.title}>Centro de montagem parceiro</h2>
          <p></p>
        </div>
        <div className={estilos.infoEntrega}>
          <div className={estilos.info}>
              <img src="tires.png" alt="Ícone pneu"/>
              <p className={styles.text}>1. Você escolhe o pneu.</p>
          </div>
          <div className={estilos.info}>
              <img src="locationParc.png" alt="Ícone pneu"/>
              <p className={styles.text}>2. Escolha o parceiro mais próximo.</p>
          </div>
          <div className={estilos.info}>
              <img src="leveCar.png" alt="Ícone pneu"/>
              <p className={styles.text}>3. Leve seu carro até o endereço escolhido. Pronto! Deixe o resto
              com nosso parceiro.</p>
          </div>
        </div>
        <div className={estilos.botoes}>
          <button className={estilos.btnParceiro}>Selecionar parceiro</button>
        </div>
      </div>

      <div label="Entrega no meu endereço">
        <h2 className={styles.title}>Entrega comum em sua residência</h2>
        <p className={styles.text}></p>
      </div>

      </Tabs>
      <ItemCart/>
      <Footer/>
    </div>
  </>
  )
}


