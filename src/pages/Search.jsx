import React from "react";
import { useLocation, useParams } from "react-router";

function Search() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  console.log(searchParams.get("q"));

  return <div>Search</div>;
}

export default Search;
