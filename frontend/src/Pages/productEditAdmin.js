import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import FormContainer from '../Components/FormContainer'
import { listProductDetails, updateProduct } from '../Actions/productActions'
import { PRODUCT_UPDATE_RESET } from '../Constants/productsConstants'

const ProductEditScreen = ({ match, history }) => {
  const productId = match.params.id

  const [name, setName] = useState('')
  const [metadesc, setMetadesc] = useState(0)
  const [image, setImage] = useState('')
  const [fiche, setFiche] = useState('')
  const [gammes, setGammes] = useState('')
  const [description, setDescription] = useState('')
  const [proprietes, setProprietes] = useState('')
  const [conseil, setConseil] = useState('')
  const [precautions, setPrecautions] = useState('')
  const [PPH, setPPH] = useState(0)
  const [PPC, setPPC] = useState(0)
  const [Colisage, setColisage] = useState(0)
  const [uploading, setUploading] = useState(false)

//    name: 'APIXOL 22®',
//         type:'Solution buvable Adultes',
//         metadesc: 'produits-phares',
//         image: '/products/apixol/ApixolAdsirop.png',
//           fiche:'test1',
//         gammes: 'Gastro-entérologie',
//         description: 'description APIXOL',
//         proprietes: 'Apixol solution buvable est à base d\'extraits de plantes riches en actifs naturels qui agissent en synergie pour désencombrer les bronches en cas de toux grasse et apaiser l’irritation des voies respiratoires en cas de toux sèche tout en renforçant les défenses naturelles de l’organisme',
//         conseil: 'Toux sèche,Toux grasse',
//         precautions: 'cuillère à soupe 3 à 4 fois par jour.',
//         PPH:55.30,
//         PPC:79.00,
//         Colisage:48

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const productUpdate = useSelector((state) => state.productUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET })
      history.push('/admin/productlist')
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(listProductDetails(productId))
      } else {
        setName(product.name)
        setMetadesc(product.metadesc)
        setImage(product.image)
        setFiche(product.fiche)
        setGammes(product.gammes)
        setDescription(product.description)
        setProprietes(product.proprietes)
        setConseil(product.conseil)
        setPrecautions(product.precautions)
        setPPH(product.PPH)
        setPPC(product.PPC)
        setColisage(product.Colisage)
      }
    }
  }, [dispatch, history, productId, product, successUpdate])

    const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const { data } = await axios.post('/api/upload', formData, config)

      setImage(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }


  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateProduct({
        _id: productId,
        name,
        metadesc,
        image,
       fiche
        ,gammes
        ,description
        ,proprietes
        ,conseil
        ,precautions
        ,PPH
        ,PPC
        ,Colisage
      })
    )
  }

  return (
    <>
      <Link to='/admin/productlist' className='btn btn-light my-3'>
        Retour
      </Link>
      <FormContainer>
        <h1>Modifier Produit</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='metadesc'>
              <Form.Label>metadesc</Form.Label>
              <Form.Control
                type='textS'
                placeholder='Enter metadesc'
                value={metadesc}
                onChange={(e) => setMetadesc(e.target.value)}
              ></Form.Control>
            </Form.Group>

                       <Form.Group controlId='image'>
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter image url'
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                ></Form.Control>
                <Form.File
                  id='image-file'
                  label='Choose File'
                  custom
                  onChange={uploadFileHandler}
                ></Form.File>
                {uploading && <Loader />}
              </Form.Group>

            
            {/* <Form.Group controlId='Fiche'>
              <Form.Label>Fiche</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter fiche url'
                value={fiche}
                onChange={(e) => setFiche(e.target.value)}
              ></Form.Control>
              <Form.File
                id='image-file'
                label='Choose File'
                custom
                onChange={uploadFileHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group> */}

            <Form.Group controlId='type'>
              <Form.Label>Gammes</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter gamme'
                value={gammes}
                onChange={(e) => setGammes(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='type'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='type'>
              <Form.Label>Propriétés</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter propriétés'
                value={proprietes}
                onChange={(e) => setProprietes(e.target.value)}
              ></Form.Control>
            </Form.Group>


            <Form.Group controlId='type'>
              <Form.Label>Conseils</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter conseil'
                value={conseil}
                onChange={(e) => setConseil(e.target.value)}
              ></Form.Control>
            </Form.Group>


            <Form.Group controlId='type'>
              <Form.Label>Précautions</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter precautions'
                value={precautions}
                onChange={(e) => setPrecautions(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='PPH'>
              <Form.Label>PPH</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter PPH'
                value={PPH}
                onChange={(e) => setPPH(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='PPC'>
              <Form.Label>PPC</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter PPC'
                value={PPC}
                onChange={(e) => setPPC(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='Colisage'>
              <Form.Label>Colisage</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter Colisage'
                value={Colisage}
                onChange={(e) => setColisage(e.target.value)}
              ></Form.Control>
            </Form.Group>

        

     

            <Button type='submit' variant='primary'>
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  )
}

export default ProductEditScreen
