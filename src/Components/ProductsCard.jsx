/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ProductsCard = ({ product }) => {
  const { price } = product;
  const updatedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <div className=" border">
      <div>
        <img className="w-full" src={product.productImage} alt="" />
      </div>
      <div className="space-y-5 px-6 mt-6">
        <div className="space-y-5 px-6 md:h-48">
          <div className="  pb-2">
            <h2 className="text-xl md:text-2xl font-bold">
              {product.productName}
            </h2>
          </div>
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-0 lg:flex-row items-center justify-between ">
            <div className="flex items-center gap-2">
              <h2 className="font-bold md:text-xl">Category :</h2>
              <h2 className="font-semibold text-lg md:text-xl">
                {product.category}
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <h2 className="font-bold text-lg md:text-xl">Rating :</h2>
              <h2 className="text-lg md:text-xl font-medium">
                {product.ratings}
              </h2>
            </div>
          </div>
          <div className="flex items-center justify-between ">
          <div className="flex items-center gap-2  ">
              <h2 className="font-bold text-lg md:text-xl">Brand :</h2>
              <h2 className="text-lg md:text-xl font-medium">
                {product.brand}
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <h2 className="font-bold md:text-xl">Price :</h2>
              <h2 className="text-lg md:text-xl text-[#782297] font-bold">
                {updatedPrice}
                <span>৳</span>
              </h2>
            </div>           
          </div>
          <div className="flex items-center gap-2">
            <h2 className="font-bold text-lg md:text-xl">Production Time :</h2>
            <h2 className="text-lg md:text-xl font-medium">
              {product.productCreationDateTime}
            </h2>
          </div>
        </div>

        <div className="border"></div>
        <div className="space-y-2 h-auto md:h-36 lg:h-28">
          <h2 className="font-bold text-lg md:text-xl">Description:</h2>
          <h2 className=" md:text-lg text-gray-600  ">{product.description}</h2>
        </div>
        <div className="border"></div>
        <div className="flex lg:justify-center py-4">
          <Link className="btn-details px-4 py-2 md:px-8  md:py-3 font-bold font-roboto">
            Add to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
