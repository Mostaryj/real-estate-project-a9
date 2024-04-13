import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import 'animate.css';


const Banner = () => {
  return (
    <div className="mt-8 ">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <img
            src="image/banner22.jpg"
            alt=""
            className="absolute w-full h-[450px] rounded-lg "
          />
          <h1 className="relative text-5xl text-center   font-pop mt-32 ml-20 font-bold text-white opacity-100   bg-clip-text animate__animated animate__pulse animate__delay-2s">
            Enjoy your vacations <br />
            with us.
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="image/banner11.jpg"
            alt=""
            className="absolute w-full h-[450px] rounded-lg "
          />
          <h1 className="relative text-5xl text-center text-white  font-pop mt-32 ml-20 font-bold animate__animated animate__pulse animate__delay-2s">
            Enjoy your vacations <br />
            with us.
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="image/banner3.jpg"
            alt=""
            className="absolute w-full h-[450px] rounded-lg "
          />
          <h1 className="relative text-5xl text-center   font-pop mt-32 ml-20 font-bold text-white animate__animated animate__pulse animate__delay-2s">
            Enjoy your vacations <br />
            with us.
          </h1>
         
        </SwiperSlide>
        <SwiperSlide>
          {/* <img
            src="image/banner1.jpg"
            alt=""
            className=" w-full h-[450px] rounded-lg"
          /> */}
         

         <div className="hero h-[450px]" style={{backgroundImage: 'url(image/banner1.jpg)'}}>
  <div className="hero-overlay bg-opacity-40"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold animate__animated animate__pulse animate__delay-2s">  Enjoy your vacations <br />
            with us.</h1>
    
    </div>
  </div>
</div>
         
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
