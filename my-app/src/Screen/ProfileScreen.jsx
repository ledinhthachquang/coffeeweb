import React, {useState,useEffect} from 'react'
import {Link, useParams, useNavigate, useSearchParams} from 'react-router-dom'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'

import {getUserDetails, updateUserProfile} from '../action/userActions'
const ProfileScreen = () => {
    const [name, setName]=useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message,setMessage] =useState(null)
    const dispatch = useDispatch()
    let navigate = useNavigate();
    const userDetails = useSelector(state=>state.userDetails)
    const {loading, error, user} = userDetails
    const userLogin = useSelector(state=>state.userLogin)
    const { userInfo} = userLogin
    const userUpdateProfile = useSelector(state=>state.userUpdateProfile)
    const { success} = userUpdateProfile
    let [searchParams,setSearchParams] = useSearchParams();
   
    const Redirect = window.location.search?(String(searchParams)).split('=')[1]:'/';
    useEffect(()=>{
        if(!userInfo){
            navigate('/login')
        }else{
            if(!user.name){
                dispatch(getUserDetails('profile'))
            }else{
                setName(user.name)
                setEmail(user.email)
            }
        }
    },[userInfo,dispatch,navigate,Redirect,user])
    const submitHandler=(e)=>{
        e.preventDefault()
       
        if(password!==confirmPassword){
            setMessage("Mật khẩu không trùng với mật khẩu đã nhập")
        }else{
            setMessage(null)
            dispatch(updateUserProfile({id:user._id,name,email,password}))
            
        }
      
    }
  return (
    <Row>
    <Col md={3}>
 
        {message &&<Message variant='danger'>{message}</Message>} 
      
        {error &&<Message variant='danger'>{error}</Message>}
        {success&&<Message variant='success'>Đã cập nhật hồ sơ</Message> }
           {/* cai xoay xoay luc load*/}
        {loading && <Loader/>}
       <h1>Hồ sơ cá nhân</h1>
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
                Cập nhật hồ sơ
            </Button>
        </Form>
    </Col>
    <Col md={9}>

    </Col>
    </Row>
  )
}


export default ProfileScreen