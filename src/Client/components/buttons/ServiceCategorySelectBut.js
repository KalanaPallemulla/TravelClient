import React from "react";
import { Link } from "react-router-dom";

export default function ServiceCategorySelectBut({ content }) {
  return (
    <div className="flex justify-end pt-2 pr-2">
      <button className="flex justify-center py-2 px-4  rounded-full bg-sitetheme-blue text-white  hover:bg-white hover:text-sitetheme-blue border hover:border-sitetheme-blue">
        <Link to="/#"> {content} </Link>
      </button>
    </div>
  );
}
