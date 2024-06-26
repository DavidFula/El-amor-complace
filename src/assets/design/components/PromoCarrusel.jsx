import ImageProduct1 from "../images/image-product-1.jpg";

SwiperCore.use([Autoplay, Pagination]);

const PromoCarrusel = () => {
  return (
    <>
      <Swiper
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="swiper-container"
        >
          <SwiperSlide><img src={ImageProduct1} alt="Promoción 1" /></SwiperSlide>

          {/* Agrega más imágenes según sea necesario */}
        </Swiper>
    </>
  );
};

export default PromoCarrusel;