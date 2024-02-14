import { useSelector } from "react-redux";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Cart = () => {
  const products = useSelector((state) => state.amazonReducer.products);

  return (
    <div className="w-full bg-gray-100 p-4">
      <div className="container mx-auto h-auto grid grid-cols-5 gap-8">
        <div className="w-full h-full bg-white px-4 col-span-4">
          <div className="font-titleFont flex items-center justify-between border-b-[1px] border-b-gray-400 py-3 font-medium">
            <h2 className="text-3xl">Shopping Cart</h2>
            <h4 className="text-xl">SubTotal</h4>
          </div>
          {/* Products start here */}
          <div>
            {products.map((item) => {
              return (
                <div
                  key={item.id}
                  className="w-full border-b-[1px] border-b-gray-300 py-4 flex items-center gap-6 justify-between"
                >
                  <div className="w-1/5">
                    <img
                      className="w-full h-44 object-contain"
                      src={item.image}
                      alt={item.image}
                    />
                  </div>
                  <div className="w-3/5">
                    <h2 className="font-semibold text-lg">{item.title}</h2>
                    <p className="pr-10 text-sm">{item.description}</p>
                    <p className="text-base">
                      Unit Price:{" "}
                      <span className="font-semibold">${item.price}</span>
                    </p>
                    <div className="bg-[#F0F2F2] flex justify-center items-center gap-1 w-24 py-1 text-center drop-shadow-lg rounded-md">
                      <p>qty:</p>
                      <p className="cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-300 duration-300">
                        -
                      </p>
                      <p>{item.quantity}</p>
                      <p className="cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-300 duration-300">
                        +
                      </p>
                    </div>
                    <button className="bg-red-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-700 active:bg-red-900 duration-300">
                      Delete Item
                    </button>
                  </div>
                  <div>
                    <p className="text-lg font-semibold font-titleFont">
                      ${item.price * item.quantity}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Products end here */}
        </div>
        <div className="w-full h-52 bg-white col-span-1 flex flex-col items-center justify-center p-4">
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
            <p className="font-semibold px-10 py-1 flex items-center justify-between">
              Total: <span className="text-lg font-bold">$40</span>
            </p>
          </div>
          <button className="w-full font-titleFont font-medium bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3">
            Proceed to buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
