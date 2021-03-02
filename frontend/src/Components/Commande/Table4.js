import { Col, Container, Row ,Button} from 'react-bootstrap'
import React, { Component } from 'react'
import '../../App.css'
class Table extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         data: [
            {id:1,désignation:'CURALER Capsules B30',PPH:69.65,PPC:99.50,colisage:110,quantité:0,},
     {id:2,désignation:'CURCOL Capsules B30',PPH:69.65,PPC:99.50,colisage:90,quantité:0,},
     {id:3,désignation:'CIRCULEX CP B30',PPH:90.30,PPC:129.00,colisage:120,quantité:0,},
     {id:4,désignation:'D3 NORM gttes buv 30ml',PPH:55.65,PPC:79.50,colisage:84,quantité:0,},
     {id:5,désignation:'FITOBEMBI Fer SB 200ml',PPH:58.80,PPC:84.00,colisage:48,quantité:0,},
     {id:6,désignation:'FITOBEMBI Gaz Gtts buv 30ml',PPH:58.80,PPC:84.00,colisage:84,quantité:0,},
     {id:7,désignation:'FITOBEMBI Gaz SB 200ml',PPH:58.80,PPC:84.00,colisage:48,quantité:0,},
     {id:8,désignation:'FITOBEMBI Immunité SB 200ml',PPH:58.80,PPC:84.00,colisage:48,quantité:0,},
     {id:9,désignation:'FITOBEMBI Transit SB 200ml',PPH:58.80,PPC:84.00,colisage:48,quantité:0,},
     {id:10,désignation:'FITOFER CP B30',PPH:55.86,PPC:79.80,colisage:135,quantité:0,},
     {id:11,désignation:'FITOFER PRONATAL CP B30',PPH:69.65,PPC:99.50,colisage:120,quantité:0,},
     {id:12,désignation:'FITOFER SB 200ml',PPH:62.30,PPC:89.00,colisage:48,quantité:0,},
     {id:13,désignation:'FITOLAT CP B30',PPH:55.93,PPC:79.90,colisage:120,quantité:0,},
     {id:14,désignation:'GENESTIN CP B30',PPH:104.93,PPC:149.90,colisage:120,quantité:0,},
     {id:15,désignation:'GENESTION SPM CP B30',PPH:69.65,PPC:99.50,colisage:120,quantité:0,},
     {id:16,désignation:'KALMACOL CP B30',PPH:55.93,PPC:79.90,colisage:120,quantité:0,},
     {id:17,désignation:'KALMAGAS Gttes Buv 30ml',PPH:58.80,PPC:84.00,colisage:84,quantité:0,},
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