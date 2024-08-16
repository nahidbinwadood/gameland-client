import { useEffect, useState } from "react";
import ProductsCard from "../../../Components/ProductsCard";

const Properties = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  console.log(data);
  return (
    <div className="mt-20 container mx-auto">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold">Explore All Products</h2>
        <p>
          Discover our comprehensive selection of premium computer parts
          tailored for every gamer’s needs. From powerful processors to
          high-performance graphics cards and everything in between, GameLand
          offers a one-stop shop for building, upgrading, or customizing your
          gaming rig. Dive into our collection and find the perfect components
          to power up your next gaming adventure.{" "}
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((product, idx) => (
          <ProductsCard key={idx} product={product}></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default Properties;
