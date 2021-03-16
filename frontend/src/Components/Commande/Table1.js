import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts1 } from "../../Actions/listActions";
import "../../App.css";
import { Table } from "react-bootstrap";
import TableModel from "./TableModel";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const productList1 = useSelector((state) => state.commandList1);
  const { products } = productList1;
  useEffect(() => {
    dispatch(listProducts1());
  }, [dispatch]);

  return (
    <div id="Products">
      <h2 className="h1-responsive font-weight-bold text-center my-2">
        Liste 1
      </h2>

      <h4 className="h1-responsive font-weight-bold text-center my-2">
        &gt;= 400 UN --&gt; 20% | &gt;= 300 UN --&gt; 16% | &gt;= 180 UN --&gt;
        12%
      </h4>
      <Table striped bordered hover responsive className="table-sm">
        <thead>
          <tr>
            <th>Designation</th>
            <th>PPH</th>
            <th>PPC</th>
            <th>Colisage</th>
            <th>Quantité</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <TableModel product={product} />
          ))}
        </tbody>
      </Table>
      <></>
    </div>
  );
};

export default ProductsPage;
