import React, {useState,useEffect} from 'react'
import {Link, useParams, useNavigate, useSearchParams} from 'react-router-dom'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import {login} from '../action/userActions'
const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    let navigate = useNavigate();
    const userLogin = useSelector(state=>state.userLogin)
    const {loading, error, userInfo} = userLogin
    let [searchParams,setSearchParams] = useSearchParams();
    const Redirect = window.location.search?(String(searchParams)).split('=')[1]:'/';
    useEffect(()=>{
        if(userInfo){
            navigate(Redirect)
        }
    },[userInfo,navigate,Redirect])
    const submitHandler=(e)=>{
        e.preventDefault()

        dispatch(login(email,password))
    }
  return (//custom form dang nhap cho nay ne
    <FormContainer>
        {error &&<Message variant='danger'>{error}</Message>}
        {loading && <Loader/>}
       <h1>Đăng nhập</h1>
        <Form onSubmit={submitHandler}>
            <Form.Group controlId='email'>
                <Form.Label>Email</Form.Label>
                 <Form.Control type="text" placeholder='Nhập email' value={email}
                 onChange={e=>setEmail(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group controlId='password'>
                <Form.Label>Mật khẩu</Form.Label>
                 <Form.Control type="password" placeholder='Nhập mật khẩu' value={password}
                 onChange={e=>setPassword(e.target.value)}></Form.Control>
            </Form.Group>
            <Button type='submit' variant='primary'>
                Đăng nhập
            </Button>
        </Form>
        <Row className='py-3'>
            <Col>
            Chưa có tài khoản?<Link to={Redirect ? `/register?redirect=${Redirect}`:`/register`}>Đăng ký</Link>
            </Col>
        </Row>
    </FormContainer>
  )
}
export default LoginScreen