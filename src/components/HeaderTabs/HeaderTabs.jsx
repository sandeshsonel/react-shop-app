import React from "react";

const HeaderTabs = () => {
  const [value, setValue] = React.useState(1);
  return (
    <div className="border-b xl:border-none">
      <div className="px-2">
        <ul style={{ scrollbarWidth: "4px" }} className="py-2 flex items-center space-x-3 xl:space-x-4 text-base xl:text-lg overflow-x-auto whitespace-nowrap">
          <li
            onClick={() => setValue(1)}
            className={value === 1 ? "bg-gray-100 px-2 py-1 rounded-md font-semibold cursor-pointer" : "px-2 py-1 cursor-pointer"}
          >
            Shirts
          </li>
          <li
            onClick={() => setValue(2)}
            className={value === 2 ? "bg-gray-100 px-2 py-1 rounded-md font-semibold cursor-pointer" : "px-2 py-1 cursor-pointer"}
          >
            T-Shirts
          </li>
          {/* <li
            onClick={() => setValue(3)}
            className={value === 3 ? "bg-gray-100 px-2 py-1 rounded-md font-semibold cursor-pointer" : "px-2 py-1 cursor-pointer"}
          >
            Sweatshirts
          </li>
          <li
            onClick={() => setValue(4)}
            className={value === 4 ? "bg-gray-100 px-2 py-1 rounded-md font-semibold cursor-pointer" : "px-2 py-1 cursor-pointer"}
          >
            Sweaters
          </li>
          <li
            onClick={() => setValue(5)}
            className={value === 5 ? "bg-gray-100 px-2 py-1 rounded-md font-semibold cursor-pointer" : "px-2 py-1 cursor-pointer"}
          >
            Jackets
          </li>
          <li
            onClick={() => setValue(6)}
            className={value === 6 ? "bg-gray-100 px-2 py-1 rounded-md font-semibold cursor-pointer" : "px-2 py-1 cursor-pointer"}
          >
            Blazers & Coats
          </li>
          <li
            onClick={() => setValue(7)}
            className={value === 7 ? "bg-gray-100 px-2 py-1 rounded-md font-semibold cursor-pointer" : "px-2 py-1 cursor-pointer"}
          >
            Suits
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default HeaderTabs;
