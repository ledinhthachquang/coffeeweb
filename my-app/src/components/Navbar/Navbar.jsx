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
    <a href='/' className='no-deco'>
      <div className="app__navbar-logo">
        
        <div className='app__navbar-logo_content'>Hoàng Lê <div style={{display :'inline',color:'#DB9494'}}>Coffee</div> </div>
        <img src={images.sb} />
      </div></a>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a className='setColor' href="#about">Giới thiệu</a></li>
        <div />
        <li className="p__opensans"><a className='setColor' href="/product">Sản phẩm</a></li>
        <div />
        <li className="p__opensans"><a className='setColor' href="#products">Sản xuất</a></li>
        <div />
        <li className="p__opensans"><a className='setColor' href="#stage">Công đoạn</a></li>
        <div />
        <li className="p__opensans"><a className='setColor' href="#fb">Phản hồi</a></li>
      </ul>
      {userInfo ? (<NavDropdown title={userInfo.name} id='username'>
          
          <NavDropdown.Item href='/profile'>Hồ sơ</NavDropdown.Item>
          
          <NavDropdown.Item onClick={logoutHandler}>Đăng xuất</NavDropdown.Item>
          
      </NavDropdown>)//sua cai dropdown cho nay ne
      :(<div className="app__navbar-login">
      <a href="/login" className="p__opensans">Đăng nhập</a>
      <div />
      <a href="/cart" className="p__opensans custom__button">Giỏ hàng</a>
      </div>
      ) 
      }
     
      
        
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a className='setColor' href="/" onClick={() => setToggleMenu(false)}>Giới thiệu</a></li>
              <li><a className='setColor' href="#about" onClick={() => setToggleMenu(false)}>Sản phẩm</a></li>
              <li><a className='setColor'href="#products" onClick={() => setToggleMenu(false)}>Sản xuất</a></li>
              <li><a className='setColor' href="#stage" onClick={() => setToggleMenu(false)}>Công đoạn</a></li>
              <li><a className='setColor' href="#fb" onClick={() => setToggleMenu(false)}>Phản hồi</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
