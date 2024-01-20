import { NavLink } from "react-router-dom";

export default function CatalogItem({
  _id,
  title,
  description,
  imageUrl,
  detailsHouseClickHandler,
}) {
  const detailsHouseHandler = () => {
    detailsHouseClickHandler(_id);
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg h-[15em] w-full" src={imageUrl} alt="" />
      </a>

      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>

        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={detailsHouseHandler}
        >
          Details
        </button>
      </div>
    </div>
  );
}
