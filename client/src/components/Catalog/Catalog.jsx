import { useEffect, useState } from "react";

import * as houseService from "../../services/houseService";

import CatalogItem from "./CatalogItem/CatalogItem";
import CreateHouseModal from "../Create/CreateHouseModal";
import DetailsHouseModal from "../Details/DetailsHouseModal";
import DeleteHouseModal from "../Delete/DeleteHouseModal";

export default function Catalog() {
  const [houses, setHouses] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    houseService
      .getAll()
      .then((result) => setHouses(result))
      .catch((err) => console.log(err));
  }, []);

  const detailsHouseClickHandler = async (houseId) => {
    setSelectedHouse(houseId);
    setShowDetailsModal(true);
  };

  const deleteHouseClickHandler = async (houseId) => {
    setSelectedHouse(houseId);
    setShowDeleteModal(true);
  };

  const deleteHouseHandler = async () => {
    const result = await houseService.remove(selectedHouse);

    setHouses((state) => state.filter((house) => house._id !== selectedHouse));

    setShowDeleteModal(false);
  };

  return (
    <div>
      <div className="absolute top-[15%] left-[8%]">
        <h2 className="text-center text-3xl font-bold leading-normal text-gray-600/50 dark:text-gray-500/50">
          About us
        </h2>

        <hr className="pl-[96em] max-w-sm mx-auto shadow-2xl mt-2" />
      </div>

      <div className="flex flex-wrap max-w-[80em] justify-center mx-auto gap-10">
        {showCreateModal && <CreateHouseModal />}

        {showDetailsModal && (
          <DetailsHouseModal
            hideDetailsHouseModal={() => setShowDetailsModal(false)}
            houseId={selectedHouse}
            deleteHouseClickHandler={deleteHouseClickHandler}
          />
        )}

        {showDeleteModal && (
          <DeleteHouseModal
            hideDeleteHouseModal={() => setShowDeleteModal(false)}
            deleteHouseHandler={deleteHouseHandler}
          />
        )}

        {houses.map((house) => (
          <CatalogItem
            key={house._id}
            _id={house._id}
            title={house.title}
            description={house.description}
            imageUrl={house.imageUrl}
            detailsHouseClickHandler={detailsHouseClickHandler}
          />
        ))}

        {houses.length === 0 && <h3 className="text-center">No houses yet</h3>}

        {/* <button
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={createHouseClickHandler}
        >
        Add new house
      </button> */}
      </div>
    </div>
  );
}
