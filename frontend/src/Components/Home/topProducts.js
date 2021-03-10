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
      <div>
        <h1 className="text-center mt-5 mb-3">Nos produits phares</h1>
      </div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Container fluid>
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

                    <h4 className="text-center">{product.name}</h4>
                  </div>
                </Link>
              </Item>
            ))}
          </Carousel>
        </Container>
      )}
    </>
  );
};

export default ProductCarousel;
