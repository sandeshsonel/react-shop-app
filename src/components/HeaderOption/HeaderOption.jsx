import React, { useState, useEffect } from "react";

import category from "../../assets/data/category";

let mostlyInterestedIn = "womens";

const HeaderOption = ({ setQuery }) => {
  const [gender, setGender] = useState("mens");
  const [selectCatgory, setSelectCategory] = useState(mostlyInterestedIn === "mens" ? "Kurtas & Suits" : "t-shirts");

  useEffect(() => {
    setQuery({ gender, selectCatgory });
  }, [gender, selectCatgory]);

  return (
    <div className="flex sticky z-10 top-14 items-center space-x-3 px-3 xl:px-0">
      <div className="w-full">
        <select
          onChange={(e) => {
            setGender(e.target.value);
            e.target.value === "mens" ? setSelectCategory("t-shirts") : setSelectCategory("Kurtas & Suits");
          }}
          //   onChange={handleUserType}
          className="w-full border-2 outline-none cursor-pointer bg-white border-black py-2 uppercase font-semiBold"
          name=""
          id=""
        >
          <option value="mens">Mens</option>
          <option value="womens">Women</option>
        </select>
      </div>
      <div className="w-full">
        <select
          defaultValue={gender === "mens" ? "t-shirts" : "jeans"}
          onChange={(e) => setSelectCategory(e.target.value)}
          className="w-full border-2 outline-none cursor-pointer bg-white border-black py-2 uppercase font-semiBold"
          name=""
          id=""
        >
          {gender === "mens"
            ? category.mens.map((cat) => <option value={cat.value}>{cat.name}</option>)
            : category.womens.map((cat) => <option value={cat.value}>{cat.name}</option>)}
        </select>
      </div>
    </div>
  );
};

export default HeaderOption;
