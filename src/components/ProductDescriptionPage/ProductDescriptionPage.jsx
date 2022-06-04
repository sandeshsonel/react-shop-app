import { select } from "@redux-saga/core/effects";
import React from "react";

const images = [
  "https://images.asos-media.com/products/river-island-embroidered-slim-fit-t-shirt-in-white/22775850-1-white?$XXL$&wid=513&fit=constrain",
  "https://images.asos-media.com/products/river-island-embroidered-slim-fit-t-shirt-in-white/22775850-2?$XXL$&wid=513&fit=constrain",
  "https://images.asos-media.com/products/river-island-embroidered-slim-fit-t-shirt-in-white/22775850-3?$XXL$&wid=513&fit=constrain",
  "https://images.asos-media.com/products/river-island-embroidered-slim-fit-t-shirt-in-white/22775850-4?$XXL$&wid=513&fit=constrain",
];

const ProductDescriptionPage = () => {
  const [image, selectImage] = React.useState("");
  return (
    <div className="xl:flex xl:space-x-10 lg:flex lg:space-x-10">
      <div className="xl:flex xl:space-x-6 xl:flex-row lg:flex lg:space-x-6 lg:flex-row md:flex md:space-x-6 md:flex-row flex flex-col-reverse">
        <div>
          <ul className="w-10 xl:space-y-4 xl:mt-5 flex items-center xl:flex-col justify-center">
            <li>
              <button className="">
                <img
                  onClick={() =>
                    selectImage(
                      "https://images.asos-media.com/products/river-island-embroidered-slim-fit-t-shirt-in-white/22775850-1-white?$XXL$&wid=513&fit=constrain"
                    )
                  }
                  src="https://images.asos-media.com/products/river-island-embroidered-slim-fit-t-shirt-in-white/22775850-1-white?$S$&wid=40&fit=constrain"
                  alt=""
                />
              </button>
            </li>
            <li>
              <button className="focus:border-blue-500 focus:border outline-none">
                <img
                  onClick={() =>
                    selectImage(
                      "https://images.asos-media.com/products/river-island-embroidered-slim-fit-t-shirt-in-white/22775850-2?$XXL$&wid=513&fit=constrain"
                    )
                  }
                  src="https://images.asos-media.com/products/river-island-embroidered-slim-fit-t-shirt-in-white/22775850-2?$S$&wid=40&fit=constrain"
                  alt=""
                />
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  selectImage(
                    "https://images.asos-media.com/products/river-island-embroidered-slim-fit-t-shirt-in-white/22775850-3?$XXL$&wid=513&fit=constrain"
                  )
                }
                className="focus:border-blue-500 focus:border outline-none"
              >
                <img
                  src="https://images.asos-media.com/products/river-island-embroidered-slim-fit-t-shirt-in-white/22775850-1-white?$XXL$&wid=513&fit=constrain"
                  alt=""
                />
              </button>
            </li>
            <li>
              <button className="focus:border-blue-500 focus:border outline-none">
                <img
                  src="https://images.asos-media.com/products/river-island-embroidered-slim-fit-t-shirt-in-white/22775850-1-white?$XXL$&wid=513&fit=constrain"
                  alt=""
                />
              </button>
            </li>
          </ul>
        </div>
        <div className="product-carousels ">
          <div className="relative">
            <img className="w-full xl:w-auto" src={!image ? images[0] : image} alt="" />
          </div>
          <div className="relative">
            <div className="">
              <button className="absolute top-1/2 z-10 cursor-pointer -mt-11 focus:outline-none focus:border-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="39" viewBox="-2 -2 25 39" x="96" y="71">
                  <g fill="none" fill-rule="evenodd">
                    <path fill="#FFF" fill-rule="nonzero" d="M.586 17.556l16.971 16.971 3.415-3.415L7.417 17.557 20.972 4.001 17.557.586z" />
                    <path fill="#2D2D2D" d="M17.557 33.113l2.001-2.001L6.001 17.556 19.558 4.001 17.557 2 2 17.556z" />
                  </g>
                </svg>
              </button>
              <button className="absolute right-0 top-1/2 -mt-11 z-10 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="39" viewBox="-2 -2 25 39" x="144" y="119">
                  <g fill="none" fill-rule="evenodd">
                    <path fill="#FFF" fill-rule="nonzero" d="M20.972 17.557L4.001.586.586 4 14.14 17.556.586 31.112 4 34.527z" />
                    <path fill="#2D2D2D" d="M4.001 2L2 4.001l13.557 13.556L2 31.112l2.001 2.001 15.557-15.556z" />
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div>
          <h1 className="font-futura fon">River Island embroidered slim fit t-shirt in white</h1>
        </div>

        <div>
          <span>Colour: White</span>
        </div>
        <div>
          <span>Size:</span>
          <div>
            <select className="w-full border py-2 border-black outline-none" name="" id="">
              <option value="">Please Select</option>
              <option value="">2XS</option>
              <option value="">XS</option>
            </select>
          </div>
        </div>
        <div className="flex items-center space-x-5 mt-6">
          <div className="w-full">
            <button className="w-full bg-green-600 py-3 outline-none text-white font-bold uppercase text-sm">Add To Bag</button>
          </div>
          <div>
            <button className="bg-gray-200 rounded-full px-2 py-2">
              <svg className="w-6" xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
                <title>Heart</title>
                <path
                  d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescriptionPage;
