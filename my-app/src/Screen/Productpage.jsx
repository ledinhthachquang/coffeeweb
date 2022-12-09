import React,{ useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import Coffee from '../components/Coffee/Coffee'
import {listProducts} from '../action/productActions'
import Message from '../components/Message'
import Loader from '../components/Loader'
const Productpage = () => {
  const dispatch = useDispatch()
  const productList = useSelector(state=>state.productList)
  const {loading,error,products } =productList
  useEffect(()=>{
    dispatch(listProducts())
  },[dispatch])
  
  return (
    <>
        <h1>Sản phẩm mới nhất</h1>
        {loading ? <Loader/>:error?<Message variant='danger'>{error}</Message>:<Row>
            {products.map(product =>(
                <Col sm={12} md={6} lg={4} xl={3}>
                    <Coffee product={product}/>
                </Col>
            ))}
        </Row>}
        
    </>
  )
}

export default Productpage