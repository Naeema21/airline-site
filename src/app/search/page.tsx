"use client";
import React from "react";

import { RouteCard } from "../component";
import { routesData } from "../utils/data";

const Search = () => {
  return (
    <div className="container mt-4">
      
      {/* search cards */}
      {routesData.map((routes, index) => (
        <RouteCard routes={routes} key={index} />
      ))}
    </div>
  );
};

export default Search;
