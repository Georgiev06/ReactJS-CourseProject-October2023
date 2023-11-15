import { useState, useEffect } from "react";

import * as houseService from "../../services/houseService";

export default function DetailsHouseModal({ hideDetailsHouseModal, houseId }) {
  const [houseDetails, setHouseDetails] = useState({});

  useEffect(() => {
    houseService
      .getOne(houseId)
      .then((result) => setHouseDetails(result))
      .catch((err) => console.log(err));
  }, [houseId]);

  return (
    <a
      href="#"
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={houseDetails.imageUrl}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {houseDetails.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Price Per Month: <strong>{houseDetails.pricePerMonth}</strong>
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Category: <strong>{houseDetails.category}</strong>
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Address: <strong>{houseDetails.address}</strong>
        </p>
      </div>
    </a>
  );
}
