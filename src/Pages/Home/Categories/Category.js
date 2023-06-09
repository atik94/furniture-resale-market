import React from "react";
import { Link } from "react-router-dom";
const Category = ({ category }) => {
  const { _id, category_name } = category;
  return (
    <div className="card bg-indigo-400 shadow-xl">
      <div className="card-body">
        <Link to={`/category/${_id}`}>
          <p className="text-5xl">{category_name}</p>
        </Link>
      </div>
    </div>
  );
};

export default Category;
