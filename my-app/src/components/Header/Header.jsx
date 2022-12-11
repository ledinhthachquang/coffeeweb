import React from 'react'
import './Header.css'
import images from '../../constants/images';
const Header = () => {
  return (
    <div className='app__header app__bg app__wrapper4  section__padding'>
        <div className='app__content'>
            <h1 className='p__opensans app__content-h1'>
                Cà phê nguyên <br />chất
            </h1>
            <img src={images.spoon} alt="spoon_image" className="spoon__img" /> 
            <p className='p__opensans'>Hương vị chuẩn người Việt <br />
            Chất tận gốc,giá tại vườn</p>
        </div>
    </div>
  )
}

export default Header