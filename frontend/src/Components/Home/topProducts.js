import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import Message from "../Message";
import { listTopProducts } from "../../Actions/productActions";
import Item from "./Item";
import "../../App.css";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

const ProductCarousel = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTop);
  const { loading, error, products } = productTopRated;

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return (
    <>
      <Container fluid className="TopContainer my-5">
        <Card className=" shadow p-3 mb-5 bg-white my-3 p-3 rounded">
          <div>
            <h1 className="text-center mt-5 mb-3 green-text1">
              Nos produits phares
            </h1>
          </div>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <Carousel breakPoints={breakPoints}>
              {products.map((product) => (
                <Item>
                  <Link to={`/product/${product._id}`}>
                    <div>
                      <img
                        id="imgCarousel"
                        src={product.image}
                        alt={product.name}
                      ></img>

                      <h4 className="text-center black-text">{product.name}</h4>
                      <p className="text-center green-text1">
                        {product.gammes}
                      </p>
                    </div>
                  </Link>
                </Item>
              ))}
            </Carousel>
          )}
          <div className="text-center">
            <Link to="/Products">
              {" "}
              <Button variant="outline-success">
                {" "}
                <h5>Consulter tous les produits</h5>
              </Button>
            </Link>
          </div>
        </Card>
      </Container>
    </>
  );
};

export default ProductCarousel;
