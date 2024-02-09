import { useEffect, useRef, useState } from "react";
import SideNavContent from "./SideNavContent";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

const HeaderBottom = () => {
  const ref = useRef();
  const [sideBar, setSideBar] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        setSideBar(false);
      }
    });
  }, [ref, sideBar]);

  return (
    <div className="w-full px-4 h-[36px] bg-amazon_light text-white flex items-center ">
      {/* {============ ListItems start ============} */}
      <ul className="flex items-center gap-2 text-[10px] md:text-sm tracking-wide overflow-auto">
        <li
          onClick={() => {
            setSideBar(!sideBar);
          }}
          className="headerHover gap-1"
        >
          <MenuIcon />
          <span className="hidden mdl:inline">All</span>
        </li>
        <li className="headerHover">Today's Deal</li>
        <li className="headerHover">Customer Service</li>
        <li className="headerHover">Gift cards</li>
        <li className="headerHover">Registry</li>
        <li className="headerHover">Sell</li>
      </ul>
      {/* {============ ListItems End ============} */}
      {/* {============ SideBar Start ============} */}
      {sideBar && (
        <div className="w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50">
          <div className="w-full mdl:h-full h-auto overflow-auto relative">
            <motion.div
              ref={ref}
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 100 }}
              transition={{ duration: 0.5 }}
              className="w-[250px] mdl:w-[350px] h-full bg-white border border-black"
            >
              <div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4">
                <AccountCircleIcon />
                <h3 className="font-titleFont font-bold text-lg tracking-wide">
                  Hello, Sign In
                </h3>
              </div>
              <SideNavContent
                title="Digital Content & Devices"
                one="Amazon Music"
                two="Kindle E-store and Books"
                three="Amazon Appstore"
              />
              <SideNavContent
                title="Shop by Department"
                one="Electronics"
                two="Computers"
                three="Home"
              />
              <SideNavContent
                title="programs & Features"
                one="Gift Cards"
                two="Amazon Live"
                three="International shopping"
              />
              <SideNavContent
                title="Help & Settings"
                one="Your Account"
                two="Customer Service"
                three="Contact Us"
              />
              <span
                onClick={() => {
                  setSideBar(false);
                }}
                className="cursor-pointer absolute top-0 left-[260px] mdl:left-[360px] w-10 h-10 text-black flex items-center justify-center border bg-gray-200 hover:bg-red-500 hover:text-white duration-300"
              >
                <CloseIcon />
              </span>
            </motion.div>
          </div>
        </div>
      )}
      {/* {============ SideBar End ============} */}
    </div>
  );
};

export default HeaderBottom;
