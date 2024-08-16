import { useEffect, useState } from "react";
import ProductsCard from "../../../Components/ProductsCard";
import axios from "axios";

const Properties = () => {
  const [data, setData] = useState([]);
  const [brandName, setBrandName] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
  const [minPrice, maxPrice] = priceRange
    ? priceRange.split("-").map(Number)
    : [0, Infinity];
  const handleReset = () => {
    setBrandName("");
    setCategory("");
    setPriceRange("");
    setFilter("");
    setSearchText("");
    setSearch("");
    // window.location.reload();
  };

  const handleSearch = () => {
    console.log("searching text is", searchText);
    setSearch(searchText);
  };
  console.log(brandName, category, priceRange, filter, search);

  //pagination:
  // eslint-disable-next-line no-unused-vars
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()].map((e) => e + 1);

  const handlePaginationButton = (btn) => {
    setCurrentPage(btn);
  };

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `${
          import.meta.env.VITE_API_URL
        }/products?search=${search}&brandName=${brandName}&category=${category}&filter=${filter}&minPrice=${minPrice}&maxPrice=${maxPrice}&page=${currentPage}&size=${itemsPerPage}`
      );
      setData(data);
    };
    getData();
  }, [
    brandName,
    category,
    currentPage,
    filter,
    itemsPerPage,
    maxPrice,
    minPrice,
    priceRange,
    search,
  ]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `${
          import.meta.env.VITE_API_URL
        }/products-count?search=${search}&brandName=${brandName}&category=${category}&filter=${filter}&minPrice=${minPrice}&maxPrice=${maxPrice}`
      );
      setCount(data.count);
    };
    getData();
  }, [brandName, category, filter, maxPrice, minPrice, search]);
  return (
    <div className="my-10 md:my-20 container mx-auto px-4">
      {/* Title */}
      <div className="text-center space-y-5 pb-8">
        <h2 className="text-4xl font-bold">Explore All Products</h2>
        <p className="md:text-lg">
          Discover premium computer parts at GameLand, your one-stop shop for
          building or upgrading gaming rigs. Explore powerful processors,
          high-performance graphics cards, and more.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col lg:flex-row gap-5 items-center">
          <div className="flex flex-col md:flex-row items-center gap-5">
            <div>
              <select
                onChange={(e) => {
                  setBrandName(e.target.value);
                  setCurrentPage(1);
                }}
                value={brandName}
                name="brandName"
                id="brandName"
                className="border p-3 input input-bordered rounded-md"
              >
                <option value="default">Filter By Brand Name</option>
                <option value="Intel">Intel</option>
                <option value="AMD">AMD</option>
                <option value="Corsair">Corsair</option>
                <option value="G.Skill">G.Skill</option>
                <option value="MSI">MSI</option>
                <option value="ASUS">ASUS</option>
              </select>
            </div>
            <div>
              <select
                onChange={(e) => {
                  setCategory(e.target.value);
                  setCurrentPage(1);
                }}
                value={category}
                name="category"
                id="category"
                className="border p-3 input input-bordered rounded-md"
              >
                <option value="default">Filter By Category</option>
                <option value="Processor">Processor</option>
                <option value="Motherboard">Motherboard</option>
                <option value="RAM">Ram</option>
                <option value="Graphics Card">GraphicsCard</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row  items-center gap-5">
            <div>
              <select
                onChange={(e) => {
                  setPriceRange(e.target.value);
                  setCurrentPage(1);
                }}
                value={priceRange}
                name="priceRange"
                id="priceRange"
                className="border p-3 input input-bordered rounded-md"
              >
                <option value="default">Filter By Price</option>
                <option value="0-10000">0৳ - 10,000৳</option>
                <option value="10000-20000">10,000৳ - 20,000৳</option>
                <option value="20000-40000">20,000৳ - 40,000৳</option>
                <option value="40000-60000">40,000৳ - 60,000৳</option>
                <option value="60000-100000">60,000৳ - 100,000৳</option>
                <option value="100000-200000">100,000৳ - 200,000৳</option>
              </select>
            </div>
            <div>
              <select
                onChange={(e) => {
                  setFilter(e.target.value);
                  setCurrentPage(1);
                }}
                value={filter}
                name="filter"
                id="filter"
                className="border p-3 input input-bordered rounded-md"
              >
                <option value="default">Sort By</option>
                <option value="asc">{`Price(High>Low)`}</option>
                <option value="dsc">{`Price(Low>High)`}</option>
                <option value="new">Newest</option>
              </select>
            </div>
            <button onClick={handleReset} className="btn-grad font-semibold">
              Reset
            </button>
          </div>
        </div>
        <div   className="flex container mx-auto justify-center my-8  ">
          <div className="flex p-1  border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
            <input
              className="px-6 py-2 border-none text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              name="search"
              placeholder="Enter the product name"
              aria-label="Enter the product name"
            />

            <button
              onClick={() => handleSearch()}
              type="button"
              className="inline-block btn-grad rounded-lg bg-warning px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-warning-3 transition duration-150 ease-in-out hover:bg-warning-accent-300 hover:shadow-warning-2 focus:bg-warning-accent-300 focus:shadow-warning-2 focus:outline-none focus:ring-0 active:bg-warning-600 active:shadow-warning-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((product, idx) => (
          <ProductsCard key={idx} product={product}></ProductsCard>
        ))}
      </div>

      {/* Pagination Section */}

      <div className="flex flex-wrap gap-4 md:gap-0 justify-center mt-12">
        {/* Previous Button */}
        <button
          disabled={currentPage === 1}
          onClick={() => handlePaginationButton(currentPage - 1)}
          className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white"
        >
          <div className="flex items-center -mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>

            <span className="mx-1">previous</span>
          </div>
        </button>
        {/* Numbers */}
        {pages.map((btnNum) => (
          <button
            onClick={() => handlePaginationButton(btnNum)}
            key={btnNum}
            className={` ${
              currentPage === btnNum ? "bg-blue-500 text-white" : ""
            } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
          >
            {btnNum}
          </button>
        ))}
        {/* Next Button */}
        <button
          disabled={currentPage === numberOfPages}
          onClick={() => handlePaginationButton(currentPage + 1)}
          className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500"
        >
          <div className="flex items-center -mx-1">
            <span className="mx-1">Next</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Properties;
