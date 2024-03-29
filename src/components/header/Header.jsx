import { useState } from "react";
import { logo } from "../../assets/index";
import { allItems } from "../../constants/items";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HeaderBottom from "./HeaderBottom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const products = useSelector((state) => state.amazon.products);
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="w-full sticky top-0 z-50">
      <div className="w-full bg-amazon_blue text-white px-4 py-3 grid grid-cols-[60%_20%_20%] mdl:flex items-center mdl:gap-4">
        {/* {=========== IMAGE START ===========} */}
        <Link to="/">
          <div className="headerHover">
            <img className="w-[86px] lg:w-24 mt-2" src={logo} alt="logo" />
          </div>
        </Link>
        {/* {=========== IMAGE END ===========} */}
        {/* {=========== DELIVERY START ===========} */}
        <div className="headerHover hidden mdl:inline-flex">
          <LocationOnIcon />
          <p className="text-sm text-lightText font-light flex flex-col">
            Delivery to{" "}
            <span className="text-xs lg:text-sm font-semibold -mt-1 text-whiteText">
              India
            </span>
          </p>
        </div>
        {/* {=========== DELIVERY END ===========} */}
        {/* {=========== SEARCH START ===========} */}
        <div className="h-10 rounded-md order-4 mdl:order-none mt-2.5 mdl:mt-0 col-span-full flex mdl:flex-grow relative">
          <span
            onClick={() => {
              setShowAll(!showAll);
            }}
            className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md"
          >
            All
            <span>
              <ArrowDropDownIcon />
            </span>
          </span>
          {showAll && (
            <div>
              <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex-col gap-1 z-50">
                {allItems.map((item) => {
                  return (
                    <li
                      className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200"
                      key={item._id}
                    >
                      {item.title}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          <input
            className="h-full text-base text-amazon_blue flex-grow border-none outline-none px-2"
            type="text"
          />
          <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
            <SearchIcon />
          </span>
        </div>
        {/* {=========== SEARCH END ===========} */}
        {/* {=========== SIGNIN START ===========} */}
        <div className="flex flex-col items-start justify-center headerHover">
          <p className="text-xs text-white mdl:text-lightText font-light">
            Hello, Sign in
          </p>
          <p className="text-sm font-semibold -mt-1 text-whiteText hidden mdl:inline-flex">
            accounts & Lists{" "}
            <span>
              <ArrowDropDownIcon />
            </span>
          </p>
        </div>
        {/* {=========== SIGNIN END ===========} */}
        {/* {=========== RETURN START ===========} */}
        <div className="hidden lg:flex flex-col items-start justify-center headerHover">
          <p className="text-xs text-lightText font-light">Return</p>
          <p className="text-sm font-semibold -mt-1 text-whiteText">& Orders</p>
        </div>
        {/* {=========== RETURN END ===========} */}
        {/* {=========== CART START ===========} */}
        <Link to="/cart">
          <div className="flex items-start justify-center headerHover relative">
            <ShoppingCartIcon />
            <p className="text-xs font-semibold mt-3 text-whiteText">
              Cart{" "}
              <span className="absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex items-center justify-center">
                {products.length > 0 ? products.length : 0}
              </span>
            </p>
          </div>
        </Link>
        {/* {=========== CART END ===========} */}
      </div>
      <HeaderBottom />
    </div>
  );
};

export default Header;
