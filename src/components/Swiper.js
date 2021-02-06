import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper';

// Import Swiper styles
import "swiper/swiper-bundle.css"

SwiperCore.use([Pagination,Navigation,Autoplay])
function App() {
  return (
    <div className="text-center text-success">
    <Swiper pagination navigation autoplay loop>
      <SwiperSlide>
        hi
      </SwiperSlide>
            <SwiperSlide>
        hello
      </SwiperSlide>
      <SwiperSlide>
        hey
      </SwiperSlide>

    </Swiper>
    </div>
  );
}

export default Swiper;
