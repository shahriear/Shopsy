import React from 'react';
import Slider from 'react-slick';

const ImageList = [
  {
    id: 1,
    img: '/women.png',
    title: "Upto 50% off on all  women's wear",
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quidem magnam, praesentium perferendis veniam quia doloribus maiores quasi mollitia voluptatem tempora odit, culpa corporis, quos expedita eius quam suscipit. Nisi!,',
  },
  {
    id: 2,
    img: '/shopping.png',
    title: "Upto 30% off on all  Men's wear",
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quidem magnam, praesentium perferendis veniam quia doloribus maiores quasi mollitia voluptatem tempora odit, culpa corporis, quos expedita eius quam suscipit. Nisi!,',
  },
  {
    id: 3,
    img: '/sale.png',
    title: 'Upto 20% off on all Products Sale',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quidem magnam, praesentium perferendis veniam quia doloribus maiores quasi mollitia voluptatem tempora odit, culpa corporis, quos expedita eius quam suscipit. Nisi!,',
  },
];
const Hero = ({ handleOrderPopup }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinity: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out',
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100  flex justify-center items-center dark:bg-gray-950 dark:text-white">
      {/* Background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rotate-45 -z-9"></div>
      {/* Hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map(data => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 ">
                  <h1
                    data-aos="zoom-out"
                    data-aos-once="true"
                    data-aos-duration="500"
                    className="text-5xl sm:text-6xl  lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                  >
                    <button
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full "
                      onClick={handleOrderPopup}
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className=" relative z-10"
                  >
                    <img
                      src={data.img}
                      alt="image"
                      className=" w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto lg:scale-120"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
