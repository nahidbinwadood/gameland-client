/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ProductsCard = ({ product }) => {
  const {price}=product
  const updatedPrice=price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  return (
    <div className=" border">
      <div>
        <img className="w-full" src={product.productImage} alt="" />
      </div>
      <div className="space-y-5 px-6 mt-6">
        <div className="text-center pb-2">
          <h2 className="font- text-2xl font-bold">
            {product.productName}
          </h2>
        </div>
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-2">
            <h2 className="font-bold text-xl">Category :</h2>
            <h2 className="font-semibold text-xl">{product.category}</h2>
          </div>
          <div className="flex items-center gap-2">
          <h2 className="font-bold text-xl">Price :</h2>
            <h2 className="text-xl text-[#782297] font-bold">{updatedPrice}<span>৳</span></h2>
          </div>
        </div>
        <div className="flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <h2 className="font-bold text-xl">Rating :</h2>
          <h2 className="text-xl font-medium">{product.ratings}</h2>
        </div>
        <div className="flex items-center gap-2  ">
          <h2 className="font-bold text-xl">Brand :</h2>
          <h2 className="text-xl font-medium">{product.brand}</h2>
        </div>
        </div>
        
        <div className="flex items-center gap-2">
          <h2 className="font-bold text-xl">Production Time :</h2>
          <h2 className="text-xl font-medium">
            {product.productCreationDateTime}
          </h2>
        </div>

        <div className="border"></div>
        <div className="space-y-2 h-32">
          <h2 className="font-bold text-xl">Description:</h2>
          <h2 className="text-lg text-gray-600 font-medium">
            {product.description}
          </h2>
        </div>
        <div className="border"></div>
        <div className="flex lg:justify-center py-4">
          <Link
             
            className="btn-details px-4 md:px-8  md:py-3 font-bold font-roboto"
          >
            Add to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
