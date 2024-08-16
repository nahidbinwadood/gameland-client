// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Carousel from "./Carousel";
import bg1 from "../../../assets/banner1.jpg";
import bg2 from "../../../assets/banner2.jpg";
import bg3 from "../../../assets/banner3.jpg";
import bg4 from "../../../assets/banner4.jpg";
import bg5 from "../../../assets/banner5.jpg";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Carousel
            image={bg1}
            text="Welcome to GameLand: Your PC Upgrade Hub"
            paragraph="Explore our curated selection of top-tier computer components designed to take your gaming experience to the next level. From processors to graphics cards, GameLand has everything you need to build the ultimate gaming rig"
          ></Carousel>
        </SwiperSlide>
        <SwiperSlide>
          <Carousel
            image={bg2}
            text="Unleash Your Gaming Potential"
            paragraph="At GameLand, we believe every gamer deserves the best. Dive into our collection of high-performance PC parts and build a machine that can handle any challenge, no matter how intense."
          ></Carousel>
        </SwiperSlide>
        <SwiperSlide>
          <Carousel
            image={bg3}
            text="Level Up Your Gaming Setup"
            paragraph="Looking for the perfect parts to boost your PC’s performance? GameLand offers a wide range of components tailored for gamers. Upgrade today and experience gaming like never before."
          ></Carousel>
        </SwiperSlide>
        <SwiperSlide>
          <Carousel
            image={bg4}
            text="Precision Performance for Gamers"
            paragraph="GameLand is your go-to destination for premium computer parts. Whether you’re a casual player or a competitive gamer, our products ensure you have the power and speed to dominate any game."
          ></Carousel>
        </SwiperSlide>
        <SwiperSlide>
          <Carousel
            image={bg5}
            text="Your Dream Gaming Rig Starts Here"
            paragraph="Build the gaming PC you’ve always wanted with GameLand. We provide everything from cutting-edge processors to advanced cooling solutions, all in one place, so you can create a rig that’s truly yours"
          ></Carousel>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
