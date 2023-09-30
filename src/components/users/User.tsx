import React from "react";
import { Link, Outlet, useParams, useSearchParams } from "react-router-dom";

function User() {
  const params = useParams();

  return (
    <div>
      User
      <hr />
      <Link to="followers">See followers</Link>
      <Outlet context={params} />
    </div>
  );
}

export default User;
