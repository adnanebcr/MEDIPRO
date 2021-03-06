import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../Components/Message";
import Loader from "../../Components/Loader";
import FormContainer from "../../Components/FormContainer";
import { PRODUCT_UPDATE_RESET } from "../../Constants/productsConstants";
import {
  listProductDetails,
  updateProduct,
} from "../../Actions/productActions";

const ProductEditScreen = ({ match, history }) => {
  const productId = match.params.id;

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [metadesc, setMetadesc] = useState("");
  const [liste, setListe] = useState("");
  const [image, setImage] = useState("");
  const [fiche, setFiche] = useState("");
  const [gammes, setGammes] = useState("");
  const [description, setDescription] = useState("");
  const [description2, setDescription2] = useState("");

  const [description3, setDescription3] = useState("");

  const [proprietes, setProprietes] = useState("");
  const [conseil, setConseil] = useState("");
  const [proprietes2, setProprietes2] = useState("");
  const [proprietes3, setProprietes3] = useState("");

  const [conseil2, setConseil2] = useState("");
  const [conseil3, setConseil3] = useState("");

  const [precautions1, setPrecautions1] = useState("");
  const [precautions2, setPrecautions2] = useState("");
  const [precautions3, setPrecautions3] = useState("");

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      history.push("/admin/productlist");
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(listProductDetails(productId));
      } else {
        setName(product.name);
        setType(product.type);
        setMetadesc(product.metadesc);
        setListe(product.liste);
        setImage(product.image);
        setFiche(product.fiche);
        setGammes(product.gammes);
        setDescription(product.description);
        setDescription2(product.description2);
        setDescription3(product.description3);
        setProprietes(product.proprietes);
        setProprietes2(product.proprietes2);
        setProprietes3(product.proprietes3);

        setConseil(product.conseil);
        setConseil2(product.conseil2);
        setConseil3(product.conseil3);

        setPrecautions1(product.precautions1);
        setPrecautions2(product.precautions2);
        setPrecautions3(product.precautions3);
      }
    }
  }, [dispatch, history, productId, product, successUpdate]);

  // const uploadFileHandler = async (e) => {
  //   const file = e.target.files[0];
  //   const formData = new FormData();
  //   console.log("formData", formData);
  //   formData.append("image", file);
  //   setUploading(true);

  //   try {
  //     const config = {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     };

  //     const { data } = await axios.post("/api/upload", formData, config);

  //     setImage(data);
  //     setUploading(false);
  //   } catch (error) {
  //     console.error(error);
  //     setUploading(false);
  //   }
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: productId,
        name,
        type,
        metadesc,
        image,
        fiche,
        liste,
        gammes,
        description,
        description2,
        description3,
        proprietes,
        proprietes2,
        proprietes3,
        conseil,
        conseil2,
        conseil3,
        precautions1,
        precautions2,
        precautions3,
      })
    );
  };

  return (
    <>
      <Link to="/admin/productlist" className="btn btn-light my-3">
        Retour
      </Link>

      <FormContainer>
        <h1>Modifier Produit</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="type">
              <Form.Label>Type</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="type">
              <Form.Label>Liste</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter liste"
                value={liste}
                onChange={(e) => setListe(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="metadesc">
              <Form.Label>metadesc</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter metadesc"
                value={metadesc}
                onChange={(e) => setMetadesc(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="Fiche">
              <Form.Label>Fiche</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter fiche url"
                value={fiche}
                onChange={(e) => setFiche(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="type">
              <Form.Label>Gammes</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter gamme"
                value={gammes}
                onChange={(e) => setGammes(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="type">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="type">
              <Form.Label>Description 2</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter description"
                value={description2}
                onChange={(e) => setDescription2(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="type">
              <Form.Label>Description 3</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter description"
                value={description3}
                onChange={(e) => setDescription3(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="type">
              <Form.Label>Propriétés</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter propriétés"
                value={proprietes}
                onChange={(e) => setProprietes(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="type">
              <Form.Label>Propriétés 2</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter propriétés"
                value={proprietes2}
                onChange={(e) => setProprietes2(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="type">
              <Form.Label>Propriétés 3</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter propriétés"
                value={proprietes3}
                onChange={(e) => setProprietes3(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="type">
              <Form.Label>Conseils</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter conseil"
                value={conseil}
                onChange={(e) => setConseil(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="type">
              <Form.Label>Conseils 2</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter conseil"
                value={conseil2}
                onChange={(e) => setConseil2(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="type">
              <Form.Label>Conseils 3</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter conseil"
                value={conseil3}
                onChange={(e) => setConseil3(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="type">
              <Form.Label>Précautions Adultes</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter precautions"
                value={precautions1}
                onChange={(e) => setPrecautions1(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="type">
              <Form.Label>Précautions Enfants1</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter precautions"
                value={precautions2}
                onChange={(e) => setPrecautions2(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="type">
              <Form.Label>Précautions Enfants2</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter precautions"
                value={precautions3}
                onChange={(e) => setPrecautions3(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary">
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default ProductEditScreen;
