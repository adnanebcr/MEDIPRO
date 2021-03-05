import { useSelector } from 'react-redux'
import React, {  useEffect } from 'react'
import Table1 from '../Components/Commande/Table1Test'

import { Row ,Col, Container} from 'react-bootstrap'
import logo from '../Assets/logo-medipro2.png';
import '../App.css'
// import logo2 from '../Assets/logo-terapharm.png';
// import { Card } from 'react-bootstrap'
// import { Button } from 'react-bootstrap'


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
                <Col xl={12} lg={12} md={12} sm={12}>
                      <div className='text-center my-2 '><img className="App-logo"
                                        alt="..."
                                        src={logo}
                                    /></div>
                    
                    <Table1/>
                   
                    </Col>
                  
            </Row>
            </Container>
        </section>
    )
}

export default Commande
