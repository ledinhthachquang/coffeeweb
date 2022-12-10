import React from 'react'
import './Order.css'
import images from '../../constants/images'
const Order = () => {
  return (
    <div className='app__menu section__padding'>
        <div class="heading ">
        <img src={images.hd} alt="" />
             <div className='headtext__cormorant'>Món uống hôm nay</div>
         </div>

   <div class="box-container">

    <div className='app__card'>
    <div class="box">
         <img src={images.m1} alt=""/>
         {/* <h3>love you coffee</h3> */}

         <div className='card_info'>
            <h1>love you coffee</h1> 
	    	      <div className='card_button'><a href="/product">Đặt ngay</a> </div>	  
         </div>

      </div>
    </div>
      
    <div className='app__card'>
    <div class="box">
         <img src={images.m2} alt=""/>
         {/* <h3>Cappuccino</h3> */}
         <div className='card_info'>
            <h1>Cappuccino</h1> 
	    	      <div className='card_button'><a href="/product">Đặt ngay</a> </div>	  
         </div>
      </div>
    </div>

    <div className='app__card'>
    <div class="box">
         <img src={images.m3} alt=""/>
         {/* <h3>Mocha coffee</h3> */}
         <div className='card_info'>
            <h1>Mocha coffee</h1> 
	    	      <div className='card_button'><a href="/product">Đặt ngay</a> </div>	  
         </div>
      </div>
    </div>

    <div className='app__card'>
    <div class="box">
         <img src={images.m4} alt=""/>
         {/* <h3>Frappuccino</h3> */}
         <div className='card_info'>
            <h1>Frappuccino</h1> 
	    	      <div className='card_button'><a href="/product">Đặt ngay</a> </div>	  
         </div>
      </div>
    </div>

    <div className='app__card'>
    <div class="box">
         <img src={images.m5} alt=""/>
         {/* <h3>black coffee</h3> */}
         <div className='card_info'>
            <h1>Black coffee</h1> 
	    	      <div className='card_button'><a href="/product">Đặt ngay</a> </div>	  
         </div>
      </div>
    </div>

    <div className='app__card'>
    <div class="box">
         <img src={images.m6} alt=""/>
         {/* <h3>love heart coffee</h3> */}
         <div className='card_info'>
            <h1>love heart coffee</h1> 
	    	      <div className='card_button'><a href="/product">Đặt ngay</a> </div>	  
         </div>
      </div>
    </div>
   </div>
    </div>
  )
}

export default Order