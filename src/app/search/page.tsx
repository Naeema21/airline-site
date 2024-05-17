"use client";
import React from "react";

import { RouteCard } from "../component";
import { routesData } from "../utils/data";
import SearchEngine from "../container/searchEngine";

const Search = () => {
  return (
    <div>
      <div className="container ">
        <SearchEngine />
      </div>
      <div className="container mt-4">


        {/* search cards */}
        {routesData.map((routes, index) => (
          <RouteCard routes={routes} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Search;
