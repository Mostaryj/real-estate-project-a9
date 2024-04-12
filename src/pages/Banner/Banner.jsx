import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

const Banner = () => {
  return (
    <div className="mt-8">
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
            className="absolute w-full h-[450px] rounded-lg opacity-80"
          />
          <h1 className="relative text-5xl text-center   font-pop mt-32 ml-20 font-bold ">
            Enjoy your vacations <br />
            with us.
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="image/banner11.jpg"
            alt=""
            className="absolute w-full h-[450px] rounded-lg"
          />
          <h1 className="relative text-5xl text-center text-white  font-pop mt-32 ml-20 font-bold ">
            Enjoy your vacations <br />
            with us.
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="image/banner3.jpg"
            alt=""
            className="absolute w-full h-[450px] rounded-lg"
          />
          <h1 className="relative text-5xl text-center   font-pop mt-32 ml-20 font-bold ">
            Enjoy your vacations <br />
            with us.
          </h1>
         
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="image/banner1.jpg"
            alt=""
            className=" w-full h-[450px] rounded-lg"
          />
         
         
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
