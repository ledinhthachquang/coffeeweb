import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import Message from '../components/Message'
import {Row,Col,Image,ListGroup,Card,Button, Form} from 'react-bootstrap'
import { Link ,useParams, useNavigate, useSearchParams  } from 'react-router-dom'
import { addToCart , removeFromCart} from '../action/cartActions'
import './CartScreen.css'
const CartScreen = () => {
  const {id} = useParams();
  let navigate = useNavigate();
  let [searchParams] = useSearchParams();
  const qty=searchParams.get('qty');
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const {cartItems} = cart
  console.log(cartItems)
  useEffect(()=>{
      if(id){
        dispatch(addToCart(id,qty))
      }
  },[dispatch,id,qty])
  const removeFromCartHandler=(id)=>{dispatch(removeFromCart(id))}
  const checkoutHandler=(id)=>{navigate('/login?redirect=shipping')}
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"/>
    <Row>
      <Col md={8}>
        <h1>Giỏ hàng</h1>
        {cartItems.length===0?<Message>Không có sản phẩm trong giỏ của bạn <Link to="/">Trở về trang chủ</Link></Message>:(
          <ListGroup variant='flush'>
            {cartItems.map(item=>(
              <ListGroup.Item key={item.product}>
                <Row className='row'>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded/>
                  </Col>
                  <Col md={4}>
                    <Link to={`/product/${item.product}`} className='title'>{item.name}</Link>
                  </Col>
                  <Col md={2} className='price'>{(item.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} VND</Col>
                  <Col md={2}>
                    
                  <Form.Select value={item.qty} onChange={(e)=>dispatch(addToCart(item.product,Number(e.target.value)))}>
                      {
                      [...Array(item.countInStock).keys()].map((x)=>(
                        <option key={x+1} value={x+1}>
                          {x+1}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col md={2}>
                    <Button type='button'variant ='light' onClick={()=>
                    removeFromCartHandler(item.product)}><i className='fa-solid fa-trash'></i></Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )
        }
      </Col>
      <Col md={3}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Tổng: ({cartItems.reduce((acc, item)=>Number(acc)+Number(item.qty),0)}) Ly</h2>
              {cartItems.reduce((acc,item)=>Number(acc)+Number(item.qty)*Number(item.price),0).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} VND.
            </ListGroup.Item>
            <ListGroup.Item className='d-grid gap-2'>
              <Button onClick={checkoutHandler} className='btn btn-lg' type='button' disabled={cartItems.length===0}>Thanh toán</Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
      
    </Row>
    </>
  )
}

export default CartScreen