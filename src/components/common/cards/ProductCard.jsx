import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

export function ProductCard({ image, title, price, id }) {
  //   console.log(image);
  return (
    <Card className="max-w-sm">
      <Link to={`product/${id}`}>
        <img
          src={
            image ||
            "https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1"
          }
          alt={title || "product image"}
          className="h-[250px]"
        />
      </Link>
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title || "Unknown"}
        </h5>
      </a>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-gray-900 dark:text-white">
          ${price ? price : "unknown"}
        </span>
        <a
          href="#"
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Add to cart
        </a>
      </div>
    </Card>
  );
}
