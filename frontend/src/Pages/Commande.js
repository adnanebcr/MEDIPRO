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
                     <h3 id='title' className='text-center'>Liste1</h3>
                       <div className='rgba-black-strong'><h5>&gt;= 400 UN --&gt; 20%   |  &gt;= 300 UN --&gt; 16%   |     &gt;= 180 UN --&gt; 12%</h5></div>
                    <Table1 className='text-center'/>
                      <h3 id='title' className='text-center'>Liste2</h3>
                                <div className='rgba-black-strong'><Container><h5>12% de remise après marché liste 1</h5></Container></div>

                    <Table2/>
                    </Col>
                    <Col xl={6} lg={6} md={12} sm={12} className='text-center'>
                      <div className='text-center my-2 '><img className="App-logo"
                                        alt="..."
                                        src={logo2}
                                    /></div>
                     <h3 id='title' className='text-center'>Liste1</h3>
                     <div className='rgba-black-strong'><Container><h5>&gt;= 120 UN --&gt; 20%   |  &gt;= 100 UN --&gt; 16%   |     &gt;= 80 UN --&gt; 12%</h5></Container></div>
                    <Table3 className='text-center my-4'/>
                      <h3 id='title' className='text-center'>Liste2</h3>
                <div className='rgba-black-strong'><Container><h5>12% de remise après marché liste 1</h5></Container></div>

                    <Table4/>
                    </Col>
            </Row>
            </Container>
        </section>
    )
}

export default Commande
