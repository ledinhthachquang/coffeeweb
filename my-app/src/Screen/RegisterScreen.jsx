import React, {useState,useEffect} from 'react'
import {Link, useParams, useNavigate, useSearchParams} from 'react-router-dom'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import {register} from '../action/userActions'
const RegisterScreen = () => {
    const [name, setName]=useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message,setMessage] =useState(null)
    const dispatch = useDispatch()
    let navigate = useNavigate();
    const userRegister = useSelector(state=>state.userRegister)
    const {loading, error, userInfo} = userRegister
    let [searchParams,setSearchParams] = useSearchParams();
   
    const Redirect = window.location.search?(String(searchParams)).split('=')[1]:'/';
    useEffect(()=>{
        if(userInfo){
            navigate('/')
        }
    },[userInfo,navigate,Redirect])
    const submitHandler=(e)=>{
        e.preventDefault()
       
        if(password!==confirmPassword){
            setMessage("Mật khẩu không trùng với mật khẩu đã nhập")
        }else{
            setMessage(null)
            
            dispatch(register(name,email,password))
        }
      
    }
  return (//custom form dang nhap cho nay ne
    <FormContainer>
         {/* cai nay hien loi neu nhap 2 mat khau ko trung */}
        {message &&<Message variant='danger'>{message}</Message>} 
          {/* cai nay hien loi neu nhap user trung */}
        {error &&<Message variant='danger'>{error}</Message>}
           {/* cai xoay xoay luc load*/}
        {loading && <Loader/>}
       <h1>Đăng Ký</h1>
        <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
                <Form.Label>Username</Form.Label>
                 <Form.Control type="text" placeholder='Nhập username' value={name}
                 onChange={e=>setName(e.target.value)}></Form.Control>
            </Form.Group>
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
            <Form.Group controlId='confirmPassword'>
                <Form.Label>Nhập lại mật khẩu</Form.Label>
                 <Form.Control type="password" placeholder='Xác nhận lại mật khẩu' value={confirmPassword}
                 onChange={e=>setConfirmPassword(e.target.value)}></Form.Control>
            </Form.Group>
            <Button type='submit' variant='primary'>
                Đăng ký
            </Button>
        </Form>
        <Row className='py-3'>
            <Col>
            Đã có tài khoản?<Link to={Redirect ? `/login?redirect=${Redirect}`:`/login`}>Đăng nhập</Link>
            </Col>
        </Row>
    </FormContainer>
  )
}
export default RegisterScreen
