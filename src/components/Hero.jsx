import { Carousel } from "@material-tailwind/react";
import { img1,img2,img3,img4 } from "../assets";


function CarouselDefault() {
  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-black via-gray-800 to-black min-h-[00px] sm:min-h-[00px] md:min-h-[00px] lg:min-h-[650px] p-4"  section id="Home">
      <Carousel className="rounded-xl h-full w-full max-w-[90%] sm:max-w-[95%] md:max-w-[1000px] lg:max-w-[1200px] xl:max-w-[1300px] shadow-[0px_4px_12px_rgba(255,221,51,0.5)]">
        <img
          src={img4}
          alt="im1"
          className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] object-cover"
        />
        <img
          src={img2}
          alt="im2"
          className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] object-cover"
        />
        <img
          src={img1}
          alt="im3"
          className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] object-cover"
        />
      </Carousel>
    </div>
  );
}

export default CarouselDefault;
