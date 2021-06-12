import React, { useContext } from "react";
import { UserContext } from "../App";
function ComponentF() {
  const user = useContext(UserContext);
  return <div>{user} is a business man.</div>;
}

export default ComponentF;
