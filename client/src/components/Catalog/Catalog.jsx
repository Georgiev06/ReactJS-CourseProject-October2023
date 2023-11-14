import { useEffect, useState } from "react";

import * as houseService from "../../services/houseService";

import CatalogItem from "./CatalogItem/CatalogItem";
import CreateHouseModal from "../CreateHouse/CreateHouseModal";

export default function Catalog() {

  const [houses, setHouses] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);

  useEffect(() => {
    houseService
      .getAll()
      .then((result) => setHouses(result))
      .catch((err) => console.log(err));
  }, []);

  const createHouseClickHandler = () => {
    setShowCreateModal(true);
  };

  const hideCreateHouseModal = () => {
    setShowCreateModal(false);
  };

  const createHouseHandler = async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    //TODO: Fix the ptoblem with the data...
    const newHouse = await houseService.create(data);

    setHouses(state => [...state, newHouse])

    setShowCreateModal(false);
  } 

  return (
      <div>
      {showCreateModal && <CreateHouseModal hideCreateHouseModal={hideCreateHouseModal} createHouseHandler={createHouseHandler}/>}

      {houses.map((house) => (
        <CatalogItem
          key={house._id}
          _id={house._id}
          title={house.title}
          description={house.description}
          imageUrl={house.imageUrl}
        />
      ))}

      <button
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={createHouseClickHandler}
      >
        Add new house
      </button>

    </div>
  );
}
