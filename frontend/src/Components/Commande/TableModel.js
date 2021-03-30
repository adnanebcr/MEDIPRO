import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { addToCart1 } from "../../Actions/cartActions";
import Modal from "react-bootstrap/Modal";

const TableModel = ({ product }) => {
  const [qty, setQty] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const addToCartHandler = (index, qty) => {
    dispatch(addToCart1(index, qty));
    handleShow();
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
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Votre produit {product.designation} a été ajouté avec succès !
              <p>Quantite : {qty}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Continuer votre commande
              </Button>
            </Modal.Footer>
          </Modal>
        </td>
      </tr>
    </>
  );
};

export default TableModel;
