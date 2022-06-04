import React from "react";

import Header from "v2/components/Header/Header";
import BottomNavigation from "components/BottomNavigation";

const MyOrders = () => {
   return (
      <div>
         <Header>
            <span className="uppercase text-tiny font-medium">My Orders</span>
         </Header>

         <BottomNavigation />
      </div>
   );
};

export default MyOrders;
