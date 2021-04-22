import React, { useState, useEffect } from "react";

import category from "../../assets/data/category";

let mostlyInterestedIn = "womens";

const HeaderOption = ({ setQuery }) => {
  const [type, setType] = useState("mens");
  const [selectCatgory, setSelectCategory] = useState(mostlyInterestedIn === "mens" ? "Kurtas & Suits" : "T-shirt");

  useEffect(() => {
    setQuery({ type, selectCatgory });
  }, [type, selectCatgory]);

  return (
    <div className="flex items-center space-x-3 px-3 xl:px-0">
      <div className="w-full">
        <select
          onChange={(e) => {
            setType(e.target.value);
            e.target.value === "mens" ? setSelectCategory("T-Shirts") : setSelectCategory("Kurtas & Suits");
          }}
          //   onChange={handleUserType}
          className="w-full border-2 outline-none rounded-md bg-white border-black py-2 uppercase font-semiBold"
          name=""
          id=""
        >
          <option value="mens">Mens</option>
          <option value="womens">Women</option>
        </select>
      </div>
      <div className="w-full">
        <select
          defaultValue={type === "mens" ? "t-shirts" : "jeans"}
          onChange={(e) => setSelectCategory(e.target.value)}
          className="w-full border-2 outline-none rounded-md bg-white border-black py-2 uppercase font-semiBold"
          name=""
          id=""
        >
          {type === "mens" ? category.mens.map((cat) => <option>{cat.name}</option>) : category.womens.map((cat) => <option>{cat.name}</option>)}
        </select>
      </div>
    </div>
  );
};

export default HeaderOption;
