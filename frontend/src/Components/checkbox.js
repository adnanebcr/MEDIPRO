import React, { useState } from "react";
import { Checkbox } from "antd";
import { Card } from "react-bootstrap";

function CheckBox(props, history) {
  const [arrayFilter, setArrayFilter] = useState([]);

  const handleFilter = (value) => {
    if (!arrayFilter.includes(value)) {
      setArrayFilter([...arrayFilter, value]);
    } else {
      let newArray = arrayFilter.filter((el) => el !== value);
      setArrayFilter(newArray);
    }
    history.push("/Products/");
  };
  console.log("arrayFilter", arrayFilter);
  const renderCheckboxLists = () =>
    props.list &&
    props.list.map((value, index) => (
      <React.Fragment key={index}>
        <div>
          {" "}
          <Checkbox
            onChange={() => handleFilter(value.name)}
            type="checkbox"
            checked={arrayFilter.includes(value.name)}
          />
          &nbsp;&nbsp;
          <span>{value.name}</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </React.Fragment>
    ));

  return (
    <div>
      <Card className="my-3">
        <Card.Header className="text-center">
          <strong>
            <h5>PATHOLOGIE </h5>
          </strong>
        </Card.Header>
        <Card.Body>{renderCheckboxLists()}</Card.Body>
      </Card>
    </div>
  );
}

export default CheckBox;
