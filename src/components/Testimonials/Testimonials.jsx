import React from 'react';
import Slider from 'react-slick';

const testimonialData = [
  {
    id: 1,
    name: 'Victor',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati perspiciatis cumque rerum assumenda, voluptatem dolore sint fuga quisquam fugit et molestias.',
    img: 'https://picsum.photos//101/101',
  },
  {
    id: 2,
    name: 'Satya Nadella',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati perspiciatis cumque rerum assumenda, voluptatem dolore sint fuga quisquam fugit et molestias.',
    img: 'https://picsum.photos//102/102',
  },
  {
    id: 3,
    name: 'Virat Kohli',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati perspiciatis cumque rerum assumenda, voluptatem dolore sint fuga quisquam fugit et molestias.',
    img: 'https://picsum.photos//101/101',
  },
  {
    id: 4,
    name: 'Shuvo',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati perspiciatis cumque rerum assumenda, voluptatem dolore sint fuga quisquam fugit et molestias.',
    img: 'https://picsum.photos//104/104',
  },
  {
    id: 5,
    name: 'Sachin Tendulkar',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati perspiciatis cumque rerum assumenda, voluptatem dolore sint fuga quisquam fugit et molestias.',
    img: 'https://picsum.photos//103/103',
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10  dark:bg-gray-800 dark:text-white">
      <div className="container">
        {/* Header Section */}
        <div className="text-center max-w-[600px] mb-10 mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, sed
            accusantium.
          </p>
        </div>
        {/* Testimonials Card */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {testimonialData.map(data => (
              <div className="my-6" key={data.id}>
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-700 bg-primary/10 relative">
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt="img"
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div>
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light dark:text-white">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0 dark:text-slate-500">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
