import React from 'react'
import './Feedback.css'
import images from '../../constants/images';
const Feedback = () => {
  return (
   <div class='app__feedback' id='fb'>
    <div class='app__feedback-head'>
        <img class='img__rs1' src={images.rs1} alt="" />
        <div class="v1__51">Phản hồi từ người tiêu dùng</div>
        <img class='img__rs2' src={images.rs1} alt="" />
    </div>
   <div className='app__feedback-content'>
//   Mới thêm class để nó tác động lên ảnh Carson Hugn
        <div className='app__feedback-wrap image-border d1'>
          <div className='app__feedback-content-img'>
            <h2 class="name1">Carson Hugn</h2>   
            <img className='img__fb main-image' src={images.img} alt="wait"/>
          </div>     
          <p class="text2">“Là người sành điệu uống cà phê, lướt Web 24h mục Địa Điểm Uống Cà Phê Ngon, rất ấn tượng với bài viết về HOANG LE COFFEE Sở hữu bí quyết rang xay và chế biến Cà Phê Nguyên Chất độc nhất vô nhị,  nhóm chúng tôi quyết ghé xem sao, cà phê ngon thật, quán độc đáo lạ, giá rẻ, cả chưa từng trải nghiệm ở đâu,… sẽ ghé lần sau”. </p>     
        </div>
        
        <div className='app__feedback-wrap d2'>
            <p class="text3">“Khám phá chuỗi không gian cà phê kết hợp văn hóa Tây Nguyên đẳng cấp và duy nhất, thật lạ và hay, cả nhóm chúng tôi cùng nhảy múa điệu Xoang của người dân tộc, bên ly CÀ PHÊ NGUYÊN CHẤT THƯỢNG HẠNG ngất ngây, mong các bạn xây dựng thêm nhiều không gian cà phê Tây Nguyên nữa trên cả nước” </p> 
            <div className='app__feedback-content-img'>
                <h1 class="name3">Executive Chef</h1>
                <h2 class="name2">Jane Cooper</h2>            
                <img className='img__fb' src={images.img2} alt="" />
            </div>
        </div>

   </div>
     
   </div>
  )
}

export default Feedback
