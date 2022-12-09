import React, { useState, useRef, useEffect } from 'react';
const Navbar = () => {
  return (
    <>
    <nav>
        <div class="nav">
          <input type="checkbox" class="nav__checkbox" id="nav-toggle" aria-label="checkBox"/>
  
          <label for="nav-toggle" class="nav__button">
            <i class="fa-solid fa-bars"></i>

          </label>
          <div class="nav__background"></div>
          <div class = "Subtract">
            <div class = "Rectangle18"></div>
            <div class = "Rectangle17"></div>
          </div>
          <div class = "select_bar">
         
          </div>
        </div>      
      </nav>
       <header>
       <div class='button_border'>
         <p>Đăng nhập</p> 
       </div>
       <div class="header__logo">
         <p>Hoàng Lê <div id = "text_highlight">Coffee</div></p>
         
       </div>
       <div class ='bar_1'>
       <a id='bar_1'>Các chi nhánh</a>
       </div>
       <div class ='bar_2'>
       <a id='bar_1'>Thông tin sản phẩm</a>
       </div>
       <div class ='bar_3'>
       <a id='bar_1'>Đặt Hàng</a>
       </div>
        
          
       <div class="header__text">
         <h1>Cà phê nguyên chất</h1>
 
         <p>Hương vị chuẩn người Việt </p>
         <p>chất tận gốc giá cả tại vườn</p>
      
       </div>      

     </header>
    </>
  );
};

export default Navbar;