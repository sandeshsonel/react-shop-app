import React, { useState } from "react";

import Header from "v2/components/Header/Header";
import SearchBar from "components/SearchBar";
import InputSelect from "components/InputSelect";
import BottomNavigation from "components/BottomNavigation";

import categoryOptions from "assets/data/category";

const Home = () => {
   const [gender, setGender] = useState("mens");
   const [selectCategory, setSelectCategory] = useState("");

   console.log(categoryOptions[gender], categoryOptions[gender][0].value, {
      selectCategory,
      gender,
   });

   return (
      <div>
         <div>
            <Header>
               <div className="flex items-center space-x-2">
                  <div>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10"
                        viewBox="0 0 512 512"
                     >
                        <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm2 96a72 72 0 11-72 72 72 72 0 0172-72zm-2 288a175.55 175.55 0 01-129.18-56.6C135.66 329.62 215.06 320 256 320s120.34 9.62 129.18 55.39A175.52 175.52 0 01256 432z" />
                     </svg>
                  </div>
                  <span className="text-sm xl:text-tiny font-medium">User</span>
               </div>
            </Header>
            <div className="px-3 xl:px-0 mt-3">
               <SearchBar />
            </div>
         </div>
         <div className="flex items-center space-x-3 py-3 px-3 xl:px-0">
            <InputSelect
               value={gender}
               handleChange={(e) => setGender(e.target.value)}
               options={[
                  { name: "Mens", value: "mens" },
                  { name: "Womens", value: "womens" },
               ]}
               style="w-full h-10"
            />

            <InputSelect
               value={selectCategory}
               defaultValue={gender === "mens" ? "t-shirts" : "jeans"}
               handleChange={(e) => setSelectCategory(e.target.value)}
               placeholder="Category"
               options={categoryOptions[gender]}
               style="w-full h-10"
            />
         </div>
         <BottomNavigation />
      </div>
   );
};

export default Home;
