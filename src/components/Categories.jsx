import { useState } from "react";
import armchair from "../assets/icons/armchair.png";
import automotive from "../assets/icons/automotive.png";
import cream from "../assets/icons/cream.png";
import creative from "../assets/icons/creative.png";
import grocery from "../assets/icons/grocery.png";
import decoration from "../assets/icons/house-decoration.png";
import laptop from "../assets/icons/laptop.png";
import perfume from "../assets/icons/perfume.png";
import smartphone from "../assets/icons/smartphone.png";
import all from "../assets/icons/grid.png";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Categories = () => {
  const [path] = useState([
    "/",
    "smartphones",
    "laptops",
    "fragrances",
    "automotive",
    "lighting",
    "skincare",
    "home-decoration",
    "furniture",
    "groceries",
  ]);
  const [categories] = useState([
    "All",
    "Phones",
    "Laptops",
    "Fragrances",
    "Automotive",
    "Lighting",
    "Skincare",
    "Decoration",
    "Furniture",
    "Groceries",
  ]);
  const [icon] = useState([
    all,
    smartphone,
    laptop,
    perfume,
    automotive,
    creative,
    cream,
    decoration,
    armchair,
    grocery,
  ]);

  return (
    <div className="flex justify-between gap-8 overflow-y-scroll h-[53px] w-full px-2   m-1 bg-gray-200">
      {categories &&
        categories.map((item, index) => {
          return (
            <Link
              key={index}
              to={path[index]}
              className="flex flex-col text-[3px] justify-center p-[5px] pb-0 items-center hover:cursor-pointer"
            >
              <img src={icon[index]} width={20} className="w-5" />
              <span className="text-[12px] ">{item}</span>
            </Link>
          );
        })}
    </div>
  );
};

export default Categories;
