import React, { useEffect,useState } from "react";
import {useDispatch,useSelector} from 'react-redux'
import  {listProducts} from '../Actions/productActions'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import Product from '../Components/Product' 
import C1 from '../Components/Caroussel'
import '../App.css'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import { pathologie } from '../Components/Datas';
import Checkbox1 from '../Components/checkbox'
import SearchBox from "../Components/Searchbox";
import {Route} from 'react-router-dom'




const ProductsPage = ({match}) => {
  const dispatch = useDispatch()
    const productList= useSelector(state=>state.productList)
    const {loading , error ,products}=productList
    const keyword = match.params.keyword
    useEffect(() => {
      dispatch(listProducts(keyword))
    }, [dispatch,keyword])
 
    
    const [filters,setFilters]=useState({
      pathologie:[],
    })

    const showFilteredResults=(filters)=>{
        const variables = {
            filters: filters
        }
        listProducts(variables)
    }

    const handleFilters =(filters,category)=>{
      console.log('filters',filters)
      const newFilters = {...filters}
      
      newFilters[category] = filters
      console.log('newfilters',newFilters)
      showFilteredResults(newFilters)
    }
    return (
        <div id="Products">
            <C1 id="Carousel"/>
            <h2 className="h1-responsive font-weight-bold text-center my-5">

                    Des produits adaptés a tous <span className="green-text">vos besoins</span>
                </h2>

             <>
         <Row>
             <Col lg='3' className='shadow p-3 mb-5 bg-white rounded"'>
               <Route render={({ history }) => <SearchBox history={history} />} />
               <Checkbox1  list={pathologie}
                        handleFilters={filters => handleFilters(filters, "pathologie")}/>
             </Col>
             <Col lg='8'>
                 {loading ?<Loader/> :error ? <Message variant ='danger'>{error}</Message> :
                   
              <Row>
                   
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>}
          </Col>
         </Row>
        </>
        </div>
    )
}

export default ProductsPage
