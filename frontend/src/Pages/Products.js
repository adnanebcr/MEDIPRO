import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../Actions/productActions";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Product from "../Components/Product";
import C1 from "../Components/Caroussel";
import "../App.css";
import Message from "../Components/Message";
import Loader from "../Components/Loader";
import { gammes } from "../Components/Datas";
import SearchBox from "../Components/Searchbox";
import { Route } from "react-router-dom";
import R1 from "../Components/radiobox";

const ProductsPage = ({ match, history }) => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const keyword = match.params.keyword;
  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  const [Filters, setFilters] = useState({
    gammes: [],
  });
  const newFilter = Filters.gammes;
  const newProducts = products.filter(
    (product) => product.gammes === newFilter
  );
  const showFilteredResults = (filters) => {
    const variables = {
      filters: filters,
    };
    listProducts(variables);
  };

  const handleFilters = (filters, category) => {
    const newFilters = { ...Filters };
    newFilters[category] = filters;
    showFilteredResults(newFilters);
    setFilters(newFilters);
  };
  return (
    <div id="Products">
      <C1 id="Carousel" />
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Des produits adaptés a tous{" "}
        <span className="green-text2">vos besoins</span>
      </h2>

      <>
        <Row>
          <Col lg="3" className='shadow p-3 mb-5 bg-white rounded"'>
            <Route render={({ history }) => <SearchBox history={history} />} />
            <Col lg={12} xs={24}>
              <Route
                render={({ history }) => (
                  <R1
                    history={history}
                    list={gammes}
                    handleFilters={(filters) =>
                      handleFilters(filters, "gammes")
                    }
                  />
                )}
              />
            </Col>
          </Col>
          <Col lg="8">
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant="danger">{error}</Message>
            ) : // eslint-disable-next-line eqeqeq
            newFilter == "" ? (
              <Row>
                {products.map((product) => (
                  <Col key={product._id} sm={12} md={6} lg={6} xl={3}>
                    <Product product={product} />
                  </Col>
                ))}
              </Row>
            ) : (
              <Row>
                {newProducts.map((product) => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
                    <Product product={product} />
                  </Col>
                ))}
              </Row>
            )}
          </Col>
        </Row>
      </>
    </div>
  );
};

export default ProductsPage;
