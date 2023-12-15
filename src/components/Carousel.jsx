import { Carousel } from "@material-tailwind/react";
const CarouselDefault = () => {
  return (
    <Carousel
      className=" mt- sm:h-fit h-[100px] "
      autoplay={true}
      loop={true}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-1 left-2/4  flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-[2px] cursor-pointer rounded-2xl transition-all content-['']  ${
                activeIndex === i ? "w-4 bg-primary" : "w-2 bg-white"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="https://f.nooncdn.com/mpcms/EN0003/assets/98772ec4-a956-4f13-bf2b-050a5b034e35.png?format=avif"
        alt="image 1"
        className="h-full w-full object-covedr"
      />
      <img
        src="https://f.nooncdn.com/mpcms/EN0003/assets/a85cf465-f5d7-476e-8fb1-9e3af8d769fa.png?format=avif"
        alt="image 2"
        className="h-full w-full object-covedr"
      />
      <img
        src="https://f.nooncdn.com/mpcms/EN0003/assets/7bd86bfc-0461-48c9-aecc-fb54600ce369.png?format=avif"
        alt="image 3"
        className="h-full w-full object-covedr"
      />
    </Carousel>
  );
};

export default CarouselDefault;
