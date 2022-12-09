import React,{ useState,useEffect} from 'react'
import {Link, useParams, useNavigate } from 'react-router-dom'
import {Row,Col,Image,ListGroup,Card,Button, ListGroupItem, Form} from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import {listProductDetails} from '../action/productActions'
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'

const mystyle = {
  width:"70%"
};


function Productscreen (){ 
  const [qty,setQty] =useState(1);
  const {id} = useParams();
  let navigate = useNavigate();
  const dispatch  = useDispatch()
  const productDetails = useSelector(state=>state.productDetails)
  const {loading,error,product} = productDetails
  useEffect(()=>{
    dispatch(listProductDetails(id))
  },[dispatch,id])
  const addToCartHandler=()=>{
    navigate(`/cart/${id}?qty=${qty}`)
  }
  

  return (
    <>
    <Link className='btn btn-dark my-3' to ='/product'>Go Back</Link>
    {loading?<Loader/>:error?<Message variant='danger'>{error}</Message>:<Row>
      <Col md={8}>
        <Card style={mystyle}>
        <Image src={product.image} alt={product.name} fluid/>
        </Card>
      </Col>
      <Col md={3}>
        <ListGroup variant='flush'>
            <ListGroup.Item>
              <h1>{product.name}</h1>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} đánh giá`}/>
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>Giá:{product.price} VND</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Mô tả:{product.description}
            </ListGroup.Item>
        </ListGroup>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <Row>
                <Col>
                  Giá Tiền:
                </Col>
                <Col>
                  <strong>
                    {(product.price)} VND
                  </strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>
                  Tình trạng:
                </Col>
                <Col>
                  <strong>
                    {product.countInStock > 0? 'Còn hàng':"Hết hàng"} 
                  </strong>
                </Col>
              </Row>
            </ListGroup.Item>
            {product.countInStock>0&&(
              <ListGroup.Item>
                <Row>
                  <Col>Qty</Col>
                  <Col>
                  
                    <Form.Select value={qty} onChange={(e)=>setQty(e.target.value)}>
                      {
                      [...Array(product.countInStock).keys()].map((x)=>(
                        <option key={x+1} value={x+1}>
                          {x+1}
                        </option>
                      ))}
                    </Form.Select>
                    
                  </Col>
                </Row>

              </ListGroup.Item>
            )}
            <ListGroup.Item className='d-grid gap-2'>
              <Button onClick={addToCartHandler} className='btn btn-lg' type='button' disabled={product.countInStock===0}>Thêm vào giỏ</Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>}
    
    </>
  ) 
}

export default Productscreen