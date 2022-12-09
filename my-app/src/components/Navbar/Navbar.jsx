import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';
import {useDispatch,useSelector}  from 'react-redux'
import {NavDropdown} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {logout} from '../../action/userActions'

const Navbar = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector(state=>state.userLogin)
  const logoutHandler=()=>{
    dispatch(logout())
  }
  const {userInfo}= userLogin
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const[color,setColor] =React.useState(false)
  const changeColor = () => {
    if(window.scrollY >= 20){
        setColor(true)
    }else setColor(false)
}
window.addEventListener('scroll',changeColor)
  return (
    <div className={color ? 'header header_bg' : 'header'}>
    <nav className="app__navbar ">
      <div className="app__navbar-logo">
        <h1 className='app__navbar-logo_content'>Hoàng Lê <div style={{display :'inline',color:'#DB9494'}}>Coffee</div> </h1>
        <img src={images.sb} />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="/">Giới thiệu</a></li>
        <div />
        <li className="p__opensans"><a href="/product">Sản phẩm</a></li>
        <div />
        <li className="p__opensans"><a href="#about">Sản xuất</a></li>
        <div />
        <li className="p__opensans"><a href="#menu">Công đoạn</a></li>
        <div />
        <li className="p__opensans"><a href="#menu">Phản hồi</a></li>
      </ul>
      {userInfo ? (<NavDropdown title={userInfo.name} id='username'>
          
          <NavDropdown.Item href='/profile'>Hồ sơ</NavDropdown.Item>
          
          <NavDropdown.Item onClick={logoutHandler}>Đăng xuất</NavDropdown.Item>
          
      </NavDropdown>)//sua cai dropdown cho nay ne
      :(<div className="app__navbar-login">
      <a href="/login" className="p__opensans">Đăng nhập</a>
      </div>) }
     
     
        <a href="/cart" className="p__opensans custom__button">Giỏ hàng</a>
      
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="/" onClick={() => setToggleMenu(false)}>Giới thiệu</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>Sản phẩm</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Sản xuất</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Công đoạn</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Phản hồi</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
