import { Col, Container, Row ,Button} from 'react-bootstrap'
import React, { Component } from 'react'
import '../../App.css'

class Table extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
               data: [
                {id:1,désignation: 'APENAT CP B15',PPH:31.15,PPC:44.50,colisage:160,quantité:'',},
                {id:2,désignation: 'APENAT CP B30',PPH:55.65,PPC:79.50,colisage:135,quantité:'',},
                {id:3,désignation: 'APENAT SB 200ml',PPH:59.15,PPC:84.50,colisage:48,quantité:'',},
                {id:4,désignation: 'APIXOL SB 200ml ',PPH:55.30,PPC:79.00,colisage:48,quantité:'',},
                {id:5,désignation: 'APIXOL Enf SB 200ml',PPH:55.65,PPC:79.50,colisage:48,quantité:'',},
                {id:6,désignation: 'APIXOL Ad Spray Gorge 30ml',PPH:62.65,PPC:89.50,colisage:108,quantité:'',},
                {id:7,désignation: 'APIXOL Enf Spary Gorge 30ml',PPH:62.65,PPC:89.50,colisage:108,quantité:'',},
                {id:8,désignation: 'APIXOL CP à sucer B20',PPH:55.65,PPC:79.50,colisage:130,quantité:'',},
                {id:9,désignation: 'CANDIDAX Solution Lavante 200ml',PPH:55.65,PPC:79.50,colisage:35,quantité:'',},
                {id:10,désignation: 'CARBOSORB CP B30',PPH:55.65,PPC:79.50,colisage:120,quantité:'',},
                {id:11,désignation: 'CARBOSORB Transit B30',PPH:55.65,PPC:79.50,colisage:135,quantité:'',},
                {id:12,désignation: 'CARBOXANE CP B30',PPH:55.65,PPC:79.50,colisage:135,quantité:'',},
                {id:13,désignation: 'CARBOXANE Flora Gel B15',PPH:55.65,PPC:79.50,colisage:120,quantité:'',},
                {id:14,désignation:'CURARTI GEL 100ml',PPH:69.65,PPC:99.50,colisage:50,quantité:'',},
                {id:15,désignation:'DERMASEPT CREME 30g',PPH:55.30,PPC:79.00,colisage:120,quantité:'',},
                {id:16,désignation:'DERMASEPT Gel Lav 250ml',PPH:54.95,PPC:78.50,colisage:50,quantité:'',},
                {id:17,désignation:'DERMASEPT Gel Lav 125ml',PPH:38.15,PPC:54.50,colisage:72,quantité:'',},
                {id:18,désignation:'DERMASEPT ph8 Gel lav 250ml',PPH:55.65,PPC:79.50,colisage:50,quantité:'',},
                {id:19,désignation:'DERMASEPT ph8 Gel lav 125ml',PPH:38.50,PPC:55.00,colisage:72,quantité:'',},
                {id:20,désignation:'DERMASEPT Spray 125ml',PPH:69.30,PPC:99.00,colisage:50,quantité:'',},
                {id:21,désignation:'FITOPOLIS Ad SB 150ml',PPH:55.65,PPC:79.50,colisage:48,quantité:'',},
                {id:22,désignation:'FITOPOLIS Ad SB 250ml',PPH:69.65,PPC:99.50,colisage:20,quantité:'',},
                {id:23,désignation:'FITOPOLIS Enf SB 150ml',PPH:55.65,PPC:79.50,colisage:48,quantité:'',},
                {id:24,désignation:'FITOPOLIS Enf SB 150ml',PPH:69.65,PPC:99.50,colisage:20,quantité:'',},
                {id:25,désignation:'FITOPOLIS CP B30',PPH:45.15,PPC:64.50,colisage:105,quantité:'',},
                {id:26,désignation:'FITOPOLIS Spray Gorge 25ml',PPH:62.65,PPC:89.50,colisage:108,quantité:'',},
                {id:27,désignation:'FITORAX Ad SB 200ml',PPH:55.93,PPC:79.90,colisage:48,quantité:'',},
                {id:28,désignation:'FITORAX Enf SB 200ml',PPH:55.93,PPC:79.90,colisage:48,quantité:'',},
                {id:29,désignation:'MAGNEMAR 300mg CP B30',PPH:62.65,PPC:89.50,colisage:53,quantité:'',},
                {id:30,désignation:'MATERNOV N.V Gel B20',PPH:48.65,PPC:69.50,colisage:100,quantité:'',},
                {id:31,désignation:'MAXITONE Amp Buv B10',PPH:62.65,PPC:99.50,colisage:56,quantité:'',},
                {id:32,désignation:'MAXITONE CP B30',PPH:69.65,PPC:79.95,colisage:120,quantité:'',},
                {id:33,désignation:'MAXITONE CP Efferv B20',PPH:62.93,PPC:89.90,colisage:51,quantité:'',},
                {id:34,désignation:'MEMOTONE Amp Buv B10',PPH:69.65,PPC:99.50,colisage:56,quantité:'',},
                {id:35,désignation:'NEOBILINE Digest SB 200ml',PPH:62.65,PPC:89.50,colisage:48,quantité:'',},
                {id:36,désignation:'NEOVIMAG 300mg Gel B30',PPH:59.15,PPC:84.50,colisage:108,quantité:'',},
                {id:37,désignation:'OXANTIN CP B30',PPH:55.97,PPC:79.95,colisage:135,quantité:'',},
                {id:38,désignation:'RHINOLAYA Protect Spray Nasal 50ml',PPH:62.93,PPC:89.90,colisage:24,quantité:'',},
                {id:39,désignation:'RHINOLAYA Kids Spray Nasal 50ml',PPH:58.45,PPC:83.50,colisage:24,quantité:'',},
                {id:40,désignation:'RHINOLAYA Spray Nasal 50ml',PPH:62.65,PPC:83.50,colisage:24,quantité:'',},
                {id:41,désignation:'SOMNEX CP B30',PPH:62.97,PPC:89.95,colisage:120,quantité:'',},
                {id:42,désignation:'SOMNEX Gouttes buv 30ml',PPH:55.30,PPC:79.00,colisage:84,quantité:'',},
                {id:43,désignation:'VEGEBOM Pommade 100g',PPH:69.30,PPC:99.00,colisage:36,quantité:'',},
                {id:44,désignation:'VEGEBOM Pommade 45g',PPH:55.65,PPC:79.50,colisage:72,quantité:'',},
                {id:45,désignation:'VEGEBOM Creme chauffante 40ml',PPH:55.65,PPC:79.50,colisage:72,quantité:'',},
                {id:46,désignation:'VEGEBOM Gel raffraichissant 45ml',PPH:55.65,PPC:79.50,colisage:72,quantité:'',},
                {id:47,désignation:'ZETALAX Microlavement Bte6',PPH:55.65,PPC:99.50,colisage:96,quantité:'',},
    
        ],totalfinal :0,
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