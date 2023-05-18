import React, { useEffect } from "react";
import { useLoaderData, useLocation } from "react-router-dom";

const ProductsDetails = () => {
  const product = useLoaderData();
  const loc = useLocation();

  useEffect(() => {
    loc.state = product.name;
  }, [product]);

  useEffect(() => {
    if (loc.state) {
      document.title = `HeroVerse - ${loc.state}`;
    }
  }, [loc.pathname]);

  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  );
};

export default ProductsDetails;
