import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "../App.css";

const Product = ({ product }) => {
  return (
    <Card className=" shadow p-3 mb-5 bg-white my-3 p-3 rounded">
      <Link to={`/Product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        <Card.Title as="div">
          <h6 className="product-name">{product.name}</h6>
        </Card.Title>
        <p>
          <span className="green-text1">{product.type}</span>
        </p>
        <Link to={`/Product/${product._id}`}>
          {" "}
          <Button variant="success">Consulter</Button>{" "}
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Product;
