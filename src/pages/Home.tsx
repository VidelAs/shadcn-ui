import Carousel from "framer-motion-carousel";
const Home = () => {
  return (
    <div className="mb-24">
      <div className="md:w-full md:h-98 sm:w-full sm:h-90">
        <Carousel autoPlay={false} interval={5}  loop={true} >
          {[1, 2, 3,4,5,6].map((item, i) => (
            <img
              draggable="false"
              src={`./src/assets/Home/${item}.png`}
              key={i}
              alt=""
              className="md:w-full md:h-98 sm:w-full sm:h-85"
            />
          ))}
        </Carousel>
       <h1 className="text-4xl text-center font-black text-[#DA291C] mb-10 mt-10">
          Costa Rica
        </h1>
      </div>
    </div>
  );
};

export default Home;
