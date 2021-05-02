import React, { useState } from "react";

import HeaderOption from "src/components/HeaderOption/HeaderOption";

const Dashboard = () => {
  const [query, setQuery] = useState({});

  return (
    <div>
      <HeaderOption setQuery={setQuery} />
    </div>
  );
};

export default Dashboard;
