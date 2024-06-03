import React from "react";
import Image from "next/image";

const CardProducts = ({ name, price, image }) => {
  return (
    <div className="border border-black rounded-md p-4 bg-red-500 w-64 m-2 mx-auto">
      <div className="">
        <Image src={image} width={300} height={300} alt={name} />
      </div>
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold">{name}</div>
        <div className="text-lg font-bold">$ {price}</div>
      </div>
    </div>
  );
};

export default CardProducts;
