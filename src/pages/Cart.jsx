import { useDispatch, useSelector } from "react-redux";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  decereseQuantaity,
  deleteItem,
  incereseQuantaity,
  resetCart,
} from "../redux/amazonSlice";
import { emptyCart } from "../assets";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.amazon.products);
  const [totalPrice, setTotalPrice] = useState("");
  useEffect(() => {
    let total = 0;
    products.map(
      (item) => {
        total += item.price * item.quantity;
        return setTotalPrice(total.toFixed(2));
      },
      [products]
    );
  });

  return (
    <div className="w-full bg-gray-100 p-4">
      {products.length > 0 ? (
        <div className="container mx-auto h-auto grid grid-cols-5 gap-8">
          <div className="w-full h-full bg-white px-4 col-span-5 mdl:col-span-3 lgl:col-span-4">
            <div className="font-titleFont flex items-center justify-between border-b-[1px] border-b-gray-400 py-3 font-medium">
              <h2 className="hidden mdl:text-3xl lgl:block">Shopping Cart</h2>
              <h4 className="text-xl">SubTotal</h4>
              <h5 className="font-bold lgl:hidden">${totalPrice}</h5>
            </div>
            {/* Products start here */}
            <div>
              {products.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="w-full border-b-[1px] border-b-gray-300 py-4 flex items-center gap-6 justify-between"
                  >
                    <div className="w-2/5 mdl:w-1/5">
                      <img
                        className="w-[80%] mdl:w-full h-44 object-contain"
                        src={item.image}
                        alt={item.image}
                      />
                    </div>
                    <div className="w-3/5">
                      <h2 className="font-semibold mb-1 text-sm mdl:text-lg">
                        {item.title}
                      </h2>
                      <p className="pr-10 text-sm hidden lgl:block">
                        {item.description}
                      </p>
                      <p className="mdl:text-base text-xs mb-1 mdl:mb-0">
                        Unit Price:{" "}
                        <span className="font-semibold">${item.price}</span>
                      </p>
                      <div className="bg-[#F0F2F2] flex justify-center items-center gap-1 w-24 py-1 text-center drop-shadow-lg rounded-md mb-1">
                        <p className="text-sm mdl:text-base">qty:</p>
                        <p
                          onClick={() => dispatch(decereseQuantaity(item.id))}
                          className="cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-300 duration-300"
                        >
                          -
                        </p>
                        <p>{item.quantity}</p>
                        <p
                          onClick={() => dispatch(incereseQuantaity(item.id))}
                          className="cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-300 duration-300"
                        >
                          +
                        </p>
                      </div>
                      <button
                        onClick={() => dispatch(deleteItem(item.id))}
                        className="bg-red-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-700 active:bg-red-900 duration-300"
                      >
                        Delete Item
                      </button>
                    </div>
                    <div className="hidden lgl:block">
                      <p className="text-lg font-semibold font-titleFont">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Products end here */}
            <div className="w-full py-2">
              <button
                onClick={() => dispatch(resetCart())}
                className="px-10 py-2 bg-red-500 rounded-lg text-white hover:bg-red-700 active:bg-red-900 duration-300 font-titleFont font-semibold text-lg tracking-wide"
              >
                Clear Cart
              </button>
            </div>
          </div>
          <div className="w-full h-52 bg-white col-span-5 mdl:col-span-2 lgl:col-span-1 flex flex-col items-center justify-center p-4">
            <div>
              <p className="flex gap-2 items-start text-sm">
                <span>
                  <CheckCircleIcon className="bg-white text-green-500 rounded-full" />
                </span>
                Your order qualifies for FREE shipping choose this option at
                checkout. See details...
              </p>
            </div>
            <div>
              <p className="font-semibold px-10 py-1 flex gap-2 items-center justify-between">
                Total: <span className="text-lg font-bold">{totalPrice}</span>
              </p>
            </div>
            <button className="w-full font-titleFont font-medium bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3">
              Proceed to buy
            </button>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center items-center gap-4 py-10"
        >
          <div>
            <img
              className="w-80 rounded-lg mx-auto p-4"
              src={emptyCart}
              alt="emptyCart"
            />
          </div>
          <div className="w-80 mdl:w-96 p-4 bg-white flex flex-col items-center rounded-md shadow-lg">
            <h1 className="font-titleFont mb-2 text-sm text-center mdl:text-xl font-bold">
              Your Cart Feels Lonely.
            </h1>
            <p className="text-[10xpx] text-sm text-center">
              Your Shopping Cart lives to serve. Give it purpose - fill it with
              books, electronics, videos etc. and make it happy.
            </p>
            <Link to="/">
              <button className="mt-6 bg-yellow-400 rounded-md cursor-pointer hover:bg-yellow-500 active:bg-yellow-700 px-4 mdl:px-8 py-2 font-titleFont font-semibold text-xs mdl:text-lg">
                Continue Shopping
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Cart;
