import React from 'react'
import './Introduce.css'
import { motion,useMotionValue, useTransform} from "framer-motion";
import images from '../../constants/images';
// import {useState} from 'react';
const Introduce = () => {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);

  return (
    <div className='app__intro ' id='about'>
        <main class="grid">
          <div className="v1_51">
              <motion.div 
            initial={{ y: "-1000", opacity: 0 }}
            animate={{ opacity: 1, fontSize: "108px", x: 20, y: 15 }}
            transition={{ type: "spring", duration: 0.5, delay: 0.2 }}
          >
            Giới thiệu
        </motion.div>
          </div>  
          <motion.div  className='img__wrapper' whileTap={{ scale: 0.9 }} drag='x' style={{ x, opacity }}>
             <img className='img__intro' src={images.vl1} alt="" />        
          </motion.div>
          
        {/* <div class="v1_52"></div>        */}
            
        <motion.div class="v1_55"
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 4px gray"
          }}
        >Hoàng Lê Coffee</motion.div>           
        
        <motion.p class="v1_58"
           whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 2px white"
          }}
        >Đối với Hoàng Lê Coffee, chất lượng không phải là 'được kiểm soát' mà là 'được xây dựng'. Đó là sự nỗ lực được lặp đi lặp lại mỗi ngày , liên quan đến tất cả mọi người, và nó là một phần tất yếu của mọi công đoạn sản xuất. Rất đơn giản, đó là cách làm việc duy nhất mà chúng tôi biết được!</motion.p> 
        
        <motion.button class="v1_61 btn green_button"
        whileHover={{
          scale: 1.1,
          backgroundColor: "#d62ba3"
        }}
        transition={{ duration: 0.5, yoyo: Infinity }}
        className="Button"
      >
        Xem thêm
      </motion.button>
        <a href="#" ></a>
        <div class="v1_62"></div>
        {/* <motion.button class="v1_61 btn green_button"
        style={{
          padding: "10px 30px",
          border: "none",
          marginTop: "20px"
        }}
        whileHover={{
          scale: 1.1
        }}
        whileTap={{
          scale: 0.9
        }}
      >
        Button
      </motion.button> */}
 
    </main>
    </div>
  )
}

export default Introduce