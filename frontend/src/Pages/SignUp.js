import React from 'react';
import {Link,Redirect } from 'react-router-dom'
import {

    MDBMask,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBtn,
    MDBView,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBTypography,

    MDBAnimation,
    MDBModal,
    MDBModalHeader,
    MDBModalBody,
    MDBModalFooter
} from 'mdbreact';
import '../App.css';
import axios from 'axios';
import { Button } from 'react-bootstrap';

class ClassicFormPage extends React.Component {
    state = {
        collapseID: ''  ,
         name:'',
         password:'',
        email:'',
        adress:'',
        phone:'',
         redirect: false,
          modal: false
    };

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ''
        }));

    componentDidMount() {
        document.querySelector('nav').style.height = '65px';
    }

    componentWillUnmount() {
        document.querySelector('nav').style.height = 'auto';
    }
        //handle inputs 
        toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}
    handleName=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
      handleEmail=(e)=>{
        this.setState({
            email:e.target.value
        })
    }
      handlePassword=(e)=>{
        this.setState({
            password:e.target.value
        })
    }
      handleAdress=(e)=>{
        this.setState({
            adress:e.target.value
        })
    }
      handlePhone=(e)=>{
        this.setState({
            phone:e.target.value
        })
    }
     setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
 renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/SignIn' />
    }
  }

    formSubmit=(e)=>{
        e.preventDefault()

        let Data={
             name:this.state.name,
            password:this.state.password,
            email:this.state.email,
            adress:this.state.adress,
            phone:this.state.phone
        }
        console.log(Data)
        axios.post('/Signup',Data)
        .then(res=>{
            this.setState({
                sent:true,
            },this.resetForm())
        }).catch(()=>{
            console.log('message non envoyé')
        })
    } 

    //reseting initial data
    resetForm=()=>{
        this.setState({
             name:'',
        email:'',
        password:'',
        adress:'',
        phone:''
        
    })
    setTimeout(()=>{
        this.setState({
            sent:false,
        })
    },3000)
    
    
        




}


    render() {

        return (
            <div id='classicformpage'>
                

                <MDBView>
                    <MDBMask className='d-flex justify-content-center align-items-center gradient' />
                    <MDBContainer
                        style={{ height: '100%', width: '100%', paddingTop: '4rem' }}
                        className='mt-5  d-flex justify-content-center align-items-center'
                    >
                        <MDBRow>
                  

                            <MDBCol md='6' xl='5' className='mb-4'>
                                <MDBAnimation type='fadeInLeft' delay='.3s'>
                                    <MDBCard id='classic-card'>
                                        <MDBCardBody className='white-text'>
                                            <h3 className='text-center'>
                                                <MDBIcon icon='user' /> Enregistrez vous
                      </h3>
                                            <hr className='hr-light' />
                                        <form onSubmit={this.formSubmit}>
                                                                                       <MDBRow>
                                               <MDBCol md="12">
                                                    <MDBInput
                                                name='name'
                                                className='white-text'
                                                iconClass='white-text'
                                                label='Votre nom'
                                                value={this.state.name}
                                                onChange={this.handleName}
                                                
                                            />
                                               </MDBCol>
                                                  <MDBCol md="12">
                                                    <MDBInput
                                                name='password'
                                                type='password'
                                                className='white-text'
                                                iconClass='white-text'
                                                label='Votre mot de passe'
                                                 value={this.state.password}
                                                onChange={this.handlePassword}
                                                
                                            />
                                               </MDBCol>
                                         <MDBCol md='12'>
                                            <MDBInput
                                                name='email'
                                                className='white-text'
                                                iconClass='white-text'
                                                label='Votre adresse mail'
                                                 value={this.state.email}
                                                onChange={this.handleEmail}
                                                
                                            />
                                            </MDBCol>
                                             <MDBCol md='12'>
                                            <MDBInput
                                                name='adress'
                                                className='white-text'
                                                iconClass='white-text'
                                                label='Votre adresse postale'
                                                type='text'
                                                 value={this.state.adress}
                                                onChange={this.handleAdress}
                                            />
                                            </MDBCol>

                                             <MDBCol md='12'>   
                                              <MDBInput
                                                name='phone'
                                                className='white-text'
                                                iconClass='white-text'
                                                label='Votre telephone'
                                                type='text'
                                                 value={this.state.phone}
                                                onChange={this.handlePhone}
                                            />
                                            </MDBCol>
                                          
                                              </MDBRow>
                                            <div className='text-center mt-4 black-text'> <div>
        
         <Button variant="primary" type='submit'  onClick={this.toggle}>Créer un compte </Button>
       </div>
                                                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <MDBModalHeader toggle={this.toggle}>Enregistrement réussi !</MDBModalHeader>
        <MDBModalBody>
          Vos informations ont été transférés à notre cellule commerciale pour vérification . Nous reviendrons vers vous dans les plus brefs délais .
          Merci pour votre confiance .
        </MDBModalBody>
        <MDBModalFooter>
            {this.renderRedirect()}
          <MDBBtn color="secondary" onClick={this.setRedirect}>Close</MDBBtn>
          
        </MDBModalFooter>
      </MDBModal>
                                                
                                                <hr className='hr-light' />
                                                <h6 className='white-text'>Vous êtes déjà inscrit ? <Link id="signuplink" to ='/SignIn'>Se connecter</Link></h6>
                                            </div>
                                        </form>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBAnimation>
                            </MDBCol>
                            <MDBAnimation
                                type='fadeInRight'
                                delay='.3s'
                                className='white-text text-center text-md-left col-md-6 mt-xl-5 mb-5'
                            >
                                <h1 className='h1-responsive font-weight-bold text-center'>
                                   Inscrivez vous !                   </h1>
                                <hr className='hr-light' />
                               
                                <MDBTypography className="black-text" note noteColor='secondary' noteTitle='Note importante : '>
                                    <ul>
                                        <li>Toutes les informations soumises seront transmises à notre cellule "Action Commerciale" pour authentification.</li>
                                        <li>Après vérification, MEDIPRO PHARMA vous remettra votre jeu de connexion : code client et mot de passe.</li>
                                        <li>MEDIPRO PHARMA s'engage à respecter la confidentialité des informations personnelles renseignées et en particulier à ne pas divulguer votre adresse électronique.</li>
                                    </ul> </MDBTypography>
                            
                            </MDBAnimation>
                            <MDBAnimation
                                type='fadeInRight'
                                delay='.3s'
                                className='white-text text-center text-md-left '
                            >
                            
                            </MDBAnimation>
                        </MDBRow>

                        
                    </MDBContainer>
                </MDBView>

            </div>
        );
    }
}

export default ClassicFormPage;