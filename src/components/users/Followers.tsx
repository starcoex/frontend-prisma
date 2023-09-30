import React from "react";
import { Params, useOutletContext } from "react-router-dom";

interface IFollowersContext {
  id: Readonly<Params<string>>;
}

function Followers() {
  const params = useOutletContext<IFollowersContext>();
  console.log(params.id);
  return <div>Followers</div>;
}

export default Followers;
