import React, { useState } from "react";
import { Radio } from "antd";
import { Card, Button } from "react-bootstrap";

function RadioBox(props) {
  const [Value, setValue] = useState("0");

  const renderRadioBox = () =>
    props.list &&
    props.list.map((value) => (
      <div>
        <Radio key={value._id} value={`${value.name}`}>
          <strong> {value.name}</strong>
        </Radio>
      </div>
    ));

  const handleChange = (event) => {
    setValue(event.target.value);
    props.handleFilters(event.target.value);
  };

  const handleChange2 = (event) => {
    setValue(event.target.value);
    props.handleFilters(event.target.value);
  };

  return (
    <div>
      <Card className="my-3">
        <Card.Header className="text-center">
          <strong>
            <h5>PATHOLOGIE </h5>
          </strong>
        </Card.Header>
        <Card.Body>
          <Radio.Group onChange={handleChange} value={Value}>
            {renderRadioBox()}
          </Radio.Group>
        </Card.Body>
        <div className="text-center pb-3">
          <a href="/Products">
            <Button variant="success">Réinitialiser</Button>
          </a>
        </div>
      </Card>
    </div>
  );
}

export default RadioBox;
