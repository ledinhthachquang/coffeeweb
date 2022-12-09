import React from 'react'
import './Products.css'
import images from '../../constants/images';

const Products = () => {
  return (
    <div className='app__products ' id='products'>
      <div className='app__products-title app__wrapper'>
      <h1 >Các sản phẩm nổi bật</h1>
        <img src={images.rs} alt="" />
      </div>
        
      <div className='app__products-intro1  section__padding '>
     
      <img src={images.i2} alt="Cà phê Robusta" class="mobile-img-2 product-img img2"/>
      <div className='app__products-content'>
          <p class="product-name p__opensans">Cà phê Robusta </p>
          <p class = "about-text t2 ">
            Robusta là loại cà phê được dùng làm nguyên liệu chủ yếu cho cà phê pha ở Việt Nam. 
            Gần 90% diện tích cà phê ở Việt Nam được trồng là cà phê Robusta, đặc biệt là vùng Tây nguyên, Buôn Ma Thuột và Việt Nam là nước xuất khẩu Robusta lớn nhất thế giới.
            Robusta có gốc từ robust, có ý nghĩa là mạnh. Như vậy, Robusta có nghĩa là một loại cà phê có vị mạnh, giàu caffeine.
          </p>
      </div>
      </div>
      <div className='app__products-c'>
      <div className='app__products-intro2  section__padding '>
        <div className='app__products-content heading3'>
        <p class="product-name p__opensans">Cà phê Arabica</p>
          <p class = "about-text t3 ">
            Arabica là dòng cà phê với hương trái cây tự nhiên, hương hoa, vị mật ong, thể chất cân bằng và hậu vị ngọt.
            Ở Việt Nam dòng cafe có tên gọi khác là cà phê Chè. Thành phần caffeine trong hạt cà phê này chỉ chiếm từ 1 đến 2 %, thấp hơn nhiều so với Robusta.
          </p>
        </div>
      
          <img src={images.i3} alt="Cà phê Arabica" class="mobile-img-3 product-img img3"/>
      </div>

      <div className='app__products-intro3  section__padding '>
      <img src={images.i4} alt="Cà phê Liberia" class="mobile-img-4 product-img img4"/>
        <div className='app__products-content'>
        <p class=" product-name p__opensans heading4">Cà phê Liberia</p>
          <p class = "about-text t4 ">
            Cà phê Liberia hay còn gọi là cà phê Mít. Cây cao cà phê Mít cao từ 2m -5m. 
            Một đặc điểm rất dễ nhận dạng của loại cà phê này là: thân, lá và quả đều to, khác biệt hẳn các loại cà phê khác. 
            Ngay từ tên gọi: cà phê Mít chúng ta có thể dự đoán được xuất phát tên gọi rồi đó. 
            Cây cà phê Mít có lá to, xanh đậm, cây nhìn xa như cây mít nên gọi là cà phê mít là vì vậy.
          </p>
        </div>  
      </div>
      </div>
  
      <div className='app__products-footer'>
      <img src={images.rs1} alt="" />
      {/* <div class="v1_623"></div> */}
      </div>
      
     </div>
  )
}

export default Products