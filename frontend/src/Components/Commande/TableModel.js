import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { addToCart1 } from "../../Actions/cartActions";

const TableModel = ({ product }) => {
  const [qty, setQty] = useState(0);

  const dispatch = useDispatch();
  const addToCartHandler = (index, qty) => {
    dispatch(addToCart1(index, qty));
  };
  return (
    <>
      <tr key={product._id}>
        <td className="text-left">{product.designation}</td>
        <td>{product.PPH}</td>
        <td>{product.PPC}</td>
        <td>{product.Colisage}</td>
        <td>
          <input type="Number" onChange={(e) => setQty(e.target.value)}></input>
        </td>
        <td>
          <Button
            variant="primary"
            className="btn-sm"
            onClick={(e) => addToCartHandler(product._id, qty)}
          >
            Valider
          </Button>
        </td>
      </tr>
    </>
  );
};

export default TableModel;
