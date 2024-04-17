// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "animate.css";

const Banner = () => {
  return (
    <div className="mt-8 ">



<div className="carousel w-full md:h-[450px] rounded-lg  ">
  <div id="slide1" className="carousel-item relative w-full">
    <img  src="image/banner22.jpg" className="w-full " />
   
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
   
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <h1 className="relative md:text-5xl text-xl text-center   font-pop top-1/2  font-bold text-white opacity-100   ">
            Enjoy your vacations <br />
            with us.
          </h1>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img  src="image/banner11.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <h1 className="relative md:text-5xl text-xl text-center   font-pop top-1/2  font-bold text-white opacity-100   ">
            Enjoy your vacations <br />
            with us.
          </h1>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="image/banner3.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <h1 className="relative md:text-5xl text-xl text-center   font-pop top-1/2  font-bold text-white opacity-100   ">
            Enjoy your vacations <br />
            with us.
          </h1>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="image/banner1.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <h1 className="relative md:text-5xl text-xl text-center   font-pop top-1/2  font-bold text-white opacity-100   ">
            Enjoy your vacations <br />
            with us.
          </h1>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>




      {/* <Swiper
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
          <h1 className="relative md:text-5xl text-3xl text-center   font-pop mt-32 sm:ml-20 font-bold text-white opacity-100   bg-clip-text animate__animated animate__pulse animate__delay-2s">
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
          <h1 className="relative md:text-5xl text-3xl text-center text-white  font-pop mt-32 sm:ml-20 font-bold animate__animated animate__pulse animate__delay-2s">
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
          <h1 className="relative md:text-5xl text-3xl text-center   font-pop mt-32 sm:ml-20 font-bold text-white animate__animated animate__pulse animate__delay-2s">
            Enjoy your vacations <br />
            with us.
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-[450px]"
            style={{ backgroundImage: "url(image/banner1.jpg)" }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="">
                <h1 className="mb-5 md:text-5xl text-3xl font-bold animate__animated animate__pulse animate__delay-2s">
                  {" "}
                  Enjoy your vacations <br />
                  with us.
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper> */}
    </div>
  );
};

export default Banner;
