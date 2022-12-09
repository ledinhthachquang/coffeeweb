import React from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import images from '../../constants/images'
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 500;
    } else {
      current.scrollLeft += 500;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <h1 className="headtext__cormorant">Các công đoạn </h1>
        <ul className='app__list'>
        <li><p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Thu hoạch coffe</p></li>
        <li><p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Sơ chế và làm sạch</p></li>
        <li><p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Phối trộn coffe</p></li>
        <li><p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Rang coffe</p></li>
        <li><p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Xay coffe</p></li>
        <li><p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Đóng gói coffe</p></li>
        </ul>
        {/* <button type="button" className="custom__button">View More</button> */}
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04, images.gallery05, images.gallery06].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
