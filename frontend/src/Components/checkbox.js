import React, { useState } from 'react'
import { Checkbox } from 'antd';
import { Card } from 'react-bootstrap';


function CheckBox(props) {

    const [Checked, setChecked] = useState([])

    const handleToggle = (value) => {

        const currentIndex = Checked.indexOf(value);
        const newChecked = [...Checked];

        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        setChecked(newChecked)
        props.handleFilters(newChecked)
        //update this checked information into Parent Component 

    }

    const renderCheckboxLists = () => props.list && props.list.map((value, index) => (
        <React.Fragment key={index}>
            <div className='ml-5'><Checkbox
                onChange={() => handleToggle(value._id)}
                type="checkbox"
                checked={Checked.indexOf(value._id) === -1 ? false : true}
            />&nbsp;&nbsp;
            <span>{value.name}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </React.Fragment>
    ))

    return (
        <div>
            
               
                   <Card className='my-3 py-3'>
                       <Card.Header className='text-center'><h5><strong>pathologie</strong></h5></Card.Header>
                        <Card.Body>{renderCheckboxLists()}</Card.Body>
                   </Card>
               
        </div>
    )
}

export default CheckBox
