import React,{useState} from 'react'
import {Radio} from 'antd'
import {MDBCard,MDBCardHeader,MDBCardBody} from 'mdbreact'



function CheckboxProducts(props) {

    const [Value, setValue] = useState('0')

    const renderRadioBox = () => (
        props.list &&  props.list.map((value) => (
           <p> <Radio key={value._id} value={`${value._id}`}>{value.name}</Radio></p>
        ))
    )

    const handleChange = (event) => {
        setValue(event.target.value)
        console.log('value',Value)
        props.handleFilters(event.target.value)
    }



    return (
        <div className='text-left  p-3 mt-3'>
            <MDBCard className=' grey lighten-3 pt-3 pb-3' lg='3' md='6'>
                <MDBCardHeader>Pathologie</MDBCardHeader>
                <MDBCardBody>
                      <Radio.Group onChange={handleChange} value={Value}>

                        {renderRadioBox()}
                         </Radio.Group>
                        </MDBCardBody>
           </MDBCard>
        </div>
    )
}

export default CheckboxProducts
