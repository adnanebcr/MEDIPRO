import { Col, Container, Row ,Button} from 'react-bootstrap'
import React, { Component } from 'react'
import '../../App.css'
class Table extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
                                 data: [
        {id:1,désignation:'ANSIOVIT CP B30',PPH:69.30,PPC:99.00,colisage:120,quantité:0,},
        {id:2,désignation:'CURARTI FORTE CP B30',PPH:104.65,PPC:149.50,colisage:128,quantité:0,},
        {id:3,désignation:'CYSTICAN Gel b30',PPH:69.65,PPC:99.50,colisage:72,quantité:0,},
        {id:4,désignation:'DEPURATTIVA SB 200ml ',PPH:62.97,PPC:89.95,colisage:48,quantité:0,},
        {id:5,désignation:'NEOBILINE Amp buv B10',PPH:62.65,PPC:89.50,colisage:56,quantité:0,},
        {id:6,désignation:'NEONAT Gélules B30',PPH:69.65,PPC:99.50,colisage:120,quantité:0,},
        {id:7,désignation:'OTOLAYA Spray Auri 50ml',PPH:55.65,PPC:79.50,colisage:135,quantité:0,},
        {id:8,désignation:'OTOLAYA Spray Auri 50ml',PPH:62.30,PPC:89.00,colisage:24,quantité:0,},
        {id:9,désignation:'RHINOLAYA Fort Spray Nasal 50ml',PPH:58.45,PPC:83.50,colisage:24,quantité:0,},
    ]
       ,totalfinal :0,
        disabled:false
      }
   }

        handleQty=(e)=>{
            this.setState({
            quantité:e.target.value,
            })
            console.log('quantité : ',this.state.quantité)
        }

       handleTotal=(e,index)=>{
        this.setState({
            totalfinal:parseInt(this.state.quantité)+parseInt(this.state.totalfinal),
            
        }) 
    
        console.log(index)
    console.log('total : ',this.state.total)
    }
  handleTotal2=(e,id)=>{

        this.setState({
            total:parseInt(this.state.totalfinal)-parseInt(this.state.quantité),
        }) 


    }



    resetTotal=(e)=>{
    
  this.setState({
    totalfinal:0,
    quantité:''
  });
    }



    renderTableHeader() {
      let header = Object.keys(this.state.data[0])
      
      return header.map((key, index) => {
         return <th key={index}>{key}</th>
      })
   }
 renderTableData() {
      return this.state.data.map((row,index) => {
         const {id, désignation, PPH, PPC, colisage } = row //destructuring
         
         return (
            <tr key={id}>
                <td>{id}</td>
                <td>{désignation} </td>
               <td>{PPH}</td>
               <td>{PPC}</td>
               <td>{colisage}</td>
               <td><input type='Number'  onChange={this.handleQty} ></input></td>
              
               <td><Button size="sm" onClick={()=>this.handleTotal(index)} >Valider</Button></td>
             
               
            </tr>
         )
      })
   }

   render() {
       
      
     
 
      return (
      
           
         <Container fluid >
          
             <Row id="CartTable" classdésignation="my-2" >
             <Col lg='6'>
                 <div>
            
            <table id='students'>
               <tbody>
               
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
                  <td colSpan='4'>Total:</td>
                  <td>{this.state.totalfinal}</td>
                  <td><Button variant='danger' size="sm" onClick={this.resetTotal}>Réinitialiser</Button></td>
               
               </tbody>
            </table>
         </div>
             </Col>
         </Row>
         </Container>
        
      )
   }
}

export default Table //exporting a component make it reusable and this is the beauty of react