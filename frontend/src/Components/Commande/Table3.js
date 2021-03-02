import { Col, Container, Row ,Button} from 'react-bootstrap'
import React, { Component } from 'react'
import '../../App.css'
class Table extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
      data: [
        {id:1,désignation:'AINAT CP B30',PPH:55.65,PPC:79.50,colisage:135,quantité:0,},
        {id:2,désignation:'CIRCULEX Crème 30g',PPH:41.65,PPC:59.50,colisage:80,quantité:0,},
        {id:3,désignation:'DYNATENS CP B15',PPH:55.65,PPC:79.50,colisage:117,quantité:0,},
        {id:4,désignation:'DYNATENS Gttes buv 30ml ',PPH:55.65,PPC:79.50,colisage:84,quantité:0,},
        {id:5,désignation:'ISILAX CP B30',PPH:55.65,PPC:79.50,colisage:135,quantité:0,},
        {id:6,désignation:'ISILAX SB 200ml',PPH:58.80,PPC:84.00,colisage:48,quantité:0,},
        {id:7,désignation:'KALMAGAS CP B30',PPH:55.93,PPC:79.90,colisage:135,quantité:0,},
        {id:8,désignation:'KALMAGAS CP B60',PPH:90.30,PPC:129.00,colisage:90,quantité:0,},
        {id:9,désignation:'KALMAGAS TRANSIT CP B30',PPH:55.93,PPC:79.90,colisage:135,quantité:0,},
        {id:10,désignation:'FITOBEMBI Appetit SB 200ml',PPH:58.80,PPC:84.00,colisage:48,quantité:0,},
        {id:11,désignation:'FITOBEMBI Multivit SB 200ml',PPH:69.30,PPC:99.00,colisage:48,quantité:0,},
        {id:12,désignation:'FITOBEMBI Nez Gorge SB 200ml',PPH:55.30,PPC:79.00,colisage:48,quantité:0,},
        {id:13,désignation:'FITOBEMBI Spray Gorge 20ml',PPH:55.65,PPC:79.50,colisage:84,quantité:0,},
        {id:14,désignation:'FITOBEMBI Sommeil SB 200ml',PPH:58.80,PPC:84.00,colisage:48,quantité:0,},
        {id:15,désignation:'NURAX CP B30',PPH:55.86,PPC:79.80,colisage:135,quantité:0,},
        {id:16,désignation:'NURAX SB 200ml',PPH:58.80,PPC:84.00,colisage:48,quantité:0,},
        {id:17,désignation:'THERAMAG 300g Gel B30',PPH:58.80,PPC:84.00,colisage:96,quantité:0,}
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