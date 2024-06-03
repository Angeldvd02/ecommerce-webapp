"use client";
import React, { useState, useEffect } from "react";
import CardProducts from "@/components/CardProducts";

const Products = () => {
  return (
    <div className="sm:flex sm:flex-col md:flex-row md:grid md:grid-cols-4 mx-auto">
      <CardProducts />
    </div>
  );
};

export default Products;
