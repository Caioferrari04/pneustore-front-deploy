import Head from 'next/head';
import { useState, useEffect } from 'react';
import { Api } from '../src/Api';
import Header from '../Components/Header/Header';
import styles from '../styles/Home.module.scss';
import estilos from '../Components/Tabs/Tabs.module.scss';
import Card from '../Components/Card/Card';
import Tabs from '../Components/Tabs/Tabs';
import ItemCart from '../Components/ItemCart/ItemCart';
import Footer from '../Components/Footer/Footer';
import Frete from '../Components/Frete/Frete';
import Calendar from '../Components/Calendar/Calendar';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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
    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };  


  return (
    <>
    
    <div className={styles.container}>
      <Head>
        <title>Seu Carrinho | PneuStore</title>
        <meta name="description" content="PneuStore -O pneu ideal para o seu Ve??culo e moto" />
        <link rel="icon" href="/favicon.ico" />   
      </Head>
      <Header className="header"/>
      <Card {...data.results}/>
      <Frete/>
      <Tabs>
      <div label="Montagem M??vel">
        <div className="">
          <h2 className={styles.title}>Agende sua entrega com a PneuStore M??vel, ?? f??cil!</h2>
         
        </div>
        <div className={estilos.infoEntrega}>
          <div className={estilos.info}>
            <img src="tires.png" alt="??cone pneu"/>
            <p className={styles.text}>1. Voc?? escolhe o pneu.</p>
          </div>
          <div className={estilos.info}>
            <img src="location2.png" alt="??cone disponibilidade do servi??o"/>
            <p className={styles.text}>2. Verifica a disponibilidade do servi??o em sua regi??o.</p>
          </div>
          <div className={estilos.info}>
            <img src="van.png" alt="??cone van de entrega"/>
            <p className={styles.text}>3. Pronto! N??s entregamos e montamos o pneu sem voc?? sair de casa.</p>
          </div>
        </div>
        
      <div>
        <Button variant="outlined" onClick={handleClickOpen} className={styles.botaoAgendar}>
          agendar 
        </Button>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: 'relative' }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h5" component="div">
                Selecione o tipo de montagem
              </Typography>
            </Toolbar>
          </AppBar>
          <List>
            <div className={styles.data}>
              <h4>Agende uma data</h4>
              <Calendar/>
            </div>
            <Divider />
            <ListItem className={styles.combo} button onClick={handleClose}>
              <div>
                <h4>Combo B??sico</h4>
                <h5>Montagem + Balanceamento</h5>
              </div>
              <h4>169,00 </h4>
            </ListItem>
            <Divider />
            <ListItem className={styles.combo} button onClick={handleClose}>
              <div>
                <h4>Combo Essencial</h4>
                <h5>Montagem + Balanceamento + <br/>
                  Alinhamento dianteiro do ve??culo
                </h5>
              </div>
              <h4>189,00 </h4>
            </ListItem>
          </List>

        </Dialog>
      </div>

      </div>

      <div label="Montagem no parceiro" >
        <div className="">
          <h2 className={styles.title}>Centro de montagem parceiro</h2>
          
        </div>
        <div className={estilos.infoEntrega}>
          <div className={estilos.info}>
              <img src="tires.png" alt="??cone pneu"/>
              <p className={styles.text}>1. Voc?? escolhe o pneu.</p>
          </div>
          <div className={estilos.info}>
              <img src="locationParc.png" alt="??cone pneu"/>
              <p className={styles.text}>2. Escolha o parceiro mais pr??ximo.</p>
          </div>
          <div className={estilos.info}>
              <img src="leveCar.png" alt="??cone pneu"/>
              <p className={styles.text}>3. Leve seu carro at?? o endere??o escolhido. Pronto! Deixe o resto
              com nosso parceiro.</p>
          </div>
        </div>
        <div>
          <Button className={styles.botaoAgendar} variant="outlined" onClick={handleClickOpen}>
            Selecionar Parceiro
          </Button>
          <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
          >
            <AppBar sx={{ position: 'relative' }}>
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleClose}
                  aria-label="close"
                >
                </IconButton>
                <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                  Selecione o Parceiro mais pr??ximo
                </Typography>
                
            </Toolbar>
            </AppBar>
            <div className={styles.infoEntrega}>
              O produto chegar?? entre o dia 25 e 30 de Outubro.
            </div>
            <List>
              <ListItem button onClick={handleClose} className={styles.list}>
                <h3>Oficina 1 de Pneus</h3>
                <div className={styles.infoParceiro}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLhjm6KPg1txwgewIOnoGeVz7JMKqyXFBE5eGy039QH3_AtP27CQ5xJZyqhTIKije2yp0&usqp=CAU" />
                  <p>Endere??o 01 Oficina de Pneus</p>
                </div>
              </ListItem>
              <Divider /> 
              <ListItem button onClick={handleClose} className={styles.list}>
                <h3>Oficina 2 de Pneus</h3>
                <div className={styles.infoParceiro}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLhjm6KPg1txwgewIOnoGeVz7JMKqyXFBE5eGy039QH3_AtP27CQ5xJZyqhTIKije2yp0&usqp=CAU" />
                  <p>Endere??o 02 Oficina de Pneus</p>
                </div>
              </ListItem>
              <Divider />
              <ListItem button onClick={handleClose} className={styles.list}>
                <h3>Oficina 3 de Pneus</h3>
                <div className={styles.infoParceiro}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLhjm6KPg1txwgewIOnoGeVz7JMKqyXFBE5eGy039QH3_AtP27CQ5xJZyqhTIKije2yp0&usqp=CAU" />
                  <p>Endere??o 03 Oficina de Pneus</p>
                </div>
              </ListItem>
              <Divider />
              <ListItem button onClick={handleClose} className={styles.list}>
                <h3>Oficina 4 de Pneus</h3>
                <div className={styles.infoParceiro}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLhjm6KPg1txwgewIOnoGeVz7JMKqyXFBE5eGy039QH3_AtP27CQ5xJZyqhTIKije2yp0&usqp=CAU" />
                  <p>Endere??o 04 Oficina de Pneus</p>
                </div>
              </ListItem>
              <Divider />
              <ListItem button onClick={handleClose} className={styles.list}>
                <h3>Oficina 5 de Pneus</h3>
                <div className={styles.infoParceiro}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLhjm6KPg1txwgewIOnoGeVz7JMKqyXFBE5eGy039QH3_AtP27CQ5xJZyqhTIKije2yp0&usqp=CAU" />
                  <p>Endere??o 05 Oficina de Pneus</p>
                </div>
              </ListItem>
              <Divider />
              <ListItem button onClick={handleClose} className={styles.list}>
                <h3>Oficina 6 de Pneus</h3>
                <div className={styles.infoParceiro}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLhjm6KPg1txwgewIOnoGeVz7JMKqyXFBE5eGy039QH3_AtP27CQ5xJZyqhTIKije2yp0&usqp=CAU" />
                  <p>Endere??o 06 Oficina de Pneus</p>
                </div>
              </ListItem>
            </List>
          </Dialog>
        </div>
      </div>

      <div label="Entrega no meu endere??o">
        <div>
          <h2 className={styles.title}>Entrega comum em sua resid??ncia</h2>
        </div>
        <p className={styles.text}>
          O produto chegar?? no endere??o entre os dias 01 e 06 de setembro.
        </p>
        
      </div>

      </Tabs>
      <ItemCart/>
      <Footer/>
    </div>
  </>
  )
}


