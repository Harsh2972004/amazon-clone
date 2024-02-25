import { middleList } from "../../constants/items";
import FooterMiddleList from "./FooterMiddleList";
import { logo, bdFlag } from "../../assets";

const FooterMiddle = () => {
  return (
    <div className="w-full bg-amazon_light text-white">
      {/* {========= Top Start ==========} */}
      <div className="w-full border-b-[1px] border-gray-500 p-10">
        <div className="max-w-5xl mx-auto text-gray-300">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-6 place-items-center items-start">
            {middleList.map((item) => {
              return (
                <FooterMiddleList
                  key={item._id}
                  title={item.title}
                  listItem={item.listItem}
                />
              );
            })}
          </div>
        </div>
      </div>
      {/* {========= Top End ==========} */}
      {/* {========= Bottom Start ==========} */}
      <div className="w-full flex gap-6 items-center justify-center py-6">
        <div>
          <img className="w-16 mdl:w-24 pt-3" src={logo} alt="logo" />
        </div>
        <div className="flex gap-2 text-sm mdl:text-lg">
          <p className="flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1">
            English
          </p>
        </div>
        <div className="flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1">
          <p className="text-sm mdl:text-lg px-1">India</p>
        </div>
      </div>
      {/* {========= Bottom End ==========} */}
    </div>
  );
};

export default FooterMiddle;
