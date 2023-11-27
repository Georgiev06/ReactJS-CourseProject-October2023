import { useState, useEffect, useContext } from "react";

import * as houseService from "../../services/houseService";
import AuthContext from "../../contexts/authContext";
import { Link } from "react-router-dom";
import { pathToUrl } from "../../utils/pathUtils";

export default function DetailsHouseModal({
  hideDetailsHouseModal,
  houseId,
  deleteHouseClickHandler,
}) {
  const [houseDetails, setHouseDetails] = useState({});

  const { userId } = useContext(AuthContext);

  const isOwner = userId === houseDetails._ownerId;
  
  useEffect(() => {
    houseService
      .getOne(houseId)
      .then((result) => setHouseDetails(result))
      .catch((err) => console.log(err));
  }, [houseId]);

  const deleteHouseHendler = () => {
    deleteHouseClickHandler(houseId);
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={hideDetailsHouseModal}
    >
      <div className="relative">
        <button
          type="button"
          className="absolute top-1.5 right-2 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-toggle="crud-modal"
          onClick={hideDetailsHouseModal}
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
        <a
          href="#"
          className="flex flex-col p-5 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover w-full max-w-xl rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
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

            {isOwner && (
              <div>
                <div className="flex gap-0.2">
                  <button
                    type="button"
                    className="w-24 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    onClick={deleteHouseHendler}
                  >
                    Delete
                  </button>

                  <Link
                    type="button"
                    to={pathToUrl("/houses/:houseId/edit", { houseId })}
                    className="text-center w-24 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            )}
          </div>
        </a>
      </div>
    </div>
  );
}
