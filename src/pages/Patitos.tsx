import Carousel from "framer-motion-carousel";
const Patitos = () => {
  return (
    <div className="mb-24">
      <div className="w-full md:h-98  sm:h-90 xs:h-83 xxs:h-80">
        <Carousel autoPlay={false} interval={5}  loop={true} >
          {[1,2,3,4,5,6,7].map((item, i) => (
            <img
              draggable="false"
              src={`public/assets/Patitos/${item}.png`}
              key={i}
              alt=""
              className="w-full md:h-98 sm:h-85 xs:h-83 xxs:h-80"
            />
          ))}
        </Carousel>
       <h1 className="text-4xl text-center font-black text-[#DA291C] mb-10 mt-10">
          Patitos
        </h1>
      </div>
    </div>
  );
};

export default Patitos;
