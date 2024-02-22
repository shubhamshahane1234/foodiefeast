import React from "react";
import { useContext } from "react";
import userContext from "./../utils/userContext";
const Grocery = () => {
  const userInfo = useContext(userContext);
  return <div>{userInfo?.name}</div>;
};

export default Grocery;
