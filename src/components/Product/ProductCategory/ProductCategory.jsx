import React from "react";
import { Link } from "react-router-dom";
import mensCategory from "../../../assets/data/category";

const ProductCategory = (props) => {
  console.log("popo", props);
  const { match } = props;
  return (
    <div className="px-3 mt-16 pb-5">
      <div className={match.params.productCategory === "mens" ? "bg-blue-500" : "bg-pink-500"}></div>
      <div className="grid grid-cols-3 gap-3">
        {mensCategory.map((category) => (
          <Link to={`/${match.params.productCategory}/${category.name}`}>
            <div className="text-center border">
              <div>
                <img className="" src={category.image} alt="" />
              </div>
              <div className="py-2 text-sm uppercase font-semiBold ">
                <h1>{category.name}</h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
