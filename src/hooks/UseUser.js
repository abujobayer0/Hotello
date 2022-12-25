import React, { useState } from "react";

const UseUser = () => {
  const [user, setUser] = useState([]);

  return [user, setUser];
};

export default UseUser;
