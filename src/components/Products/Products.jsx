import React from 'react';
import { FaStar } from 'react-icons/fa6';

const ProductsData = [
  {
    id: 1,
    img: '/women3.jpg',
    title: 'Women Ethnic',
    rating: 5.0,
    color: 'white',
    aosDelay: '0',
  },
  {
    id: 2,
    img: '/women2.jpg',
    title: 'Women western',
    rating: 4.5,
    color: 'red',
    aosDelay: '200',
  },
  {
    id: 3,
    img: '/women4.jpg',
    title: 'googles',
    rating: 4.7,
    color: 'brown',
    aosDelay: '400',
  },
  {
    id: 4,
    img: '/women3.jpg',
    title: 'Printed T-Shirt',
    rating: 4.4,
    color: 'Yellow',
    aosDelay: '600',
  },
  {
    id: 5,
    img: '/women2.jpg',
    title: 'Fashin T-Shirt',
    rating: 4.5,
    color: 'Pink',
    aosDelay: '800',
  },
];

const Products = ({ handleOrderPopup }) => {
  return (
    <div className="pt-14 pb-12 dark:bg-gray-800 dark:text-white">
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
        {/* Body Section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* Card Section */}
            {ProductsData.map(data => (
              <div
                key={data.id}
                className="space-y-3"
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
              >
                <img
                  src={data.img}
                  alt="img"
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                </div>
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span>{data.rating}</span>
                </div>
              </div>
            ))}
          </div>
          {/* View all button */}
          <div className="flex justify-center">
            <button
              className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md"
              onClick={handleOrderPopup}
            >
              View All Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
