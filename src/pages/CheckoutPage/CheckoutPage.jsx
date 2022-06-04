import React, { Component } from "react";

import countryNames from "../../assets/data/countryNames";

class CheckoutPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      country: "",
    };
  }

  generateCountryNameOptions = () => {
    let array = [];
    for (let i = 0; i < countryNames.length; i++) {
      array.push(<option value={countryNames[i].name}>{countryNames[i].name}</option>);
    }
    return array;
  };

  render() {
    return (
      <div className="mt-16">
        <div className="">
          <form>
            <div className="px-3 py-3">
              <label className="uppercase font-semiBold text-base">Delivery Country:</label>
              <div className="flex items-center space-x-2 mt-1">
                <div className="w-full">
                  <select
                    onChange={(e) => this.setState({ country: e.target.value })}
                    required
                    className="w-full py-2 border border-black bg-white outline-none"
                    name=""
                    id=""
                  >
                    <option selected disabled>
                      Please select
                    </option>
                    {this.generateCountryNameOptions()}
                  </select>
                </div>
              </div>
            </div>
            <div>
              <div className="px-3 py-3">
                <div className="flex items-center justify-between">
                  <span className="font-semiBold uppercase text-xl">My Bag</span>
                  <span>View</span>
                </div>
                <div className="grid grid-cols-4 gap-3 mt-6">
                  <img
                    className=""
                    src="https://images.asos-media.com/products/burton-menswear-t-shirts-with-floral-and-camo-splice-in-grey/22627707-1-grey?$l$"
                    alt=""
                  />
                  <img src="https://images.asos-media.com/products/burton-menswear-t-shirts-with-floral-and-camo-splice-in-grey/22627707-1-grey?$l$" alt="" />
                </div>
                <div className="flex items-center justify-between mt-5">
                  <span>2 items</span>
                  <span>189.75</span>
                </div>
              </div>
            </div>
            <div>
              <div className="px-3 py-3">
                <div className="flex items-center justify-between">
                  <span className="font-semiBold uppercase text-xl">Email Address</span>
                </div>
                <div className="mt-6">
                  <span>snlsandesh@gmail.com</span>
                </div>
              </div>
            </div>
            <div>
              <div className="px-3 py-3">
                <div className="flex items-center justify-between">
                  <span className="font-semiBold uppercase text-xl">Delivery Address</span>
                </div>
                <div className="mt-6">
                  <a className="uppercase w-full py-2 border-2 font-semiBold text-base">Postal Address</a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CheckoutPage;
