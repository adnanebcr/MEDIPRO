import { useSelector } from 'react-redux'
import React, {  useEffect } from 'react'
import Table1 from '../Components/Commande/Table1'
import Table2 from '../Components/Commande/Table2'
import Table3 from '../Components/Commande/Table3'
import Table4 from '../Components/Commande/Table4'

import { Row ,Col, Container} from 'react-bootstrap'
import logo from '../Assets/logo-medipro2.png';
import '../App.css'
import logo2 from '../Assets/logo-terapharm.png';
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'


const Commande =  ({history}) => {

   
  

  const userLogin = useSelector((state) => state.userlogin)
  const { userInfo } = userLogin
useEffect(() => {
    if (!userInfo) {
      history.push('/Signin')
    }
  })

    return (
        <section id ='Commande'>
            <h1 className='text-center'>Passer votre commande</h1>
            <Container fluid>
                <Row>
                <Col xl={6} lg={6} md={12} sm={12}>
                      <div className='text-center my-2 '><img className="App-logo"
                                        alt="..."
                                        src={logo}
                                    /></div>
                    
                    <Table1/>
                    <Table2/>
                    </Col>
                    <Col xl={6} lg={6} md={12} sm={12} className='text-center'>
                      <div className='text-center my-2 '><img className="App-logo"
                                        alt="..."
                                        src={logo2}
                                    /></div>

                    <Table3/>
                    <Table4/>
                    <Card className='my-3 text-left'>
                      <h5>Nom : <input disabled value={userInfo.name}></input></h5>
                      <h5>Adresse :<input disabled value={userInfo.adress}></input></h5>
                      <h5>Telephone :<input disabled value={userInfo.phone}></input></h5>
                      <h5>ICE :<input disabled value ={userInfo.ice}></input> </h5>
 <Button variant='primary' className='btn-lg'>
                      Valider la commande
                    </Button>                    
                    </Card>
                    </Col>
            </Row>
            </Container>
        </section>
    )
}

export default Commande
