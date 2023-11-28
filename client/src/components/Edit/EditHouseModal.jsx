import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as houseService from "../../services/houseService"

export default function EditHouseModal() {

  const navigate = useNavigate();
  const { houseId } = useParams();
  const [house, setHouse] =  useState({
    title: '',
    pricePerMonth: '',
    address: '',
    imageUrl: '',
    category: '',
    description: '',
  });

  useEffect(() => {
    houseService.getOne(houseId)
    .then(result => {
        setHouse(result);
    })
  }, [houseId])

  const editHouseSubmitHandler = async (e) => {
    e.preventDefault();

    const values = Object.fromEntries(new FormData(e.currentTarget));

    try {
        await houseService.edit(houseId, values);

        navigate('/houses');
    } catch (err) {
        // Error notification
        console.log(err);
    }
  }

  const onChange = (e) => {
    setHouse(state => ({
      ...state,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div>
      <h2 className="text-center text-3xl font-bold leading-normal text-gray-600/50 dark:text-gray-500/50">
        Edit House
      </h2>
      <hr className="pl-[96em] max-w-sm mx-auto shadow-2xl mt-2" />

      <form
        className="flex flex-col justify-between p-4 md:p-5 mx-[46em] mt-20"
        onSubmit={editHouseSubmitHandler}
      >
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="title"
            name="title"
            className="block py-2.5 px-0 w-[30em] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
            value={house.title}
            onChange={onChange}
          />
          <label
            htmlFor="floating_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="number"
            name="pricePerMonth"
            className="block py-2.5 px-0 w-[30em] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
            value={house.pricePerMonth}
            onChange={onChange}
          />
          <label
            htmlFor="pricePerMonth"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Price Per Month
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="string"
            name="address"
            className="block py-2.5 px-0 w-[30em] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
            value={house.address}
            onChange={onChange}
          />
          <label
            htmlFor="address"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Address
          </label>
        </div>
        {/* <div className="grid md:grid-cols-2 md:gap-6"> */}
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="string"
            name="imageUrl"
            className="block py-2.5 px-0 w-[30em] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
            value={house.imageUrl}
            onChange={onChange}
          />
          <label
            htmlFor="imageUrl"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            ImageUrl
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="category"
            className="block py-2.5 px-0 w-[30em] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
            value={house.category}
            onChange={onChange}
          />
          <label
            htmlFor="category"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Category
          </label>
        </div>
        {/* </div> */}
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="string"
              name="description"
              className="block py-2.5 px-0 w-[30em] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
              value={house.description}
              onChange={onChange}
            />
            <label
              htmlFor="description"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Description
            </label>
          </div>
        </div>
        <button
          type="submit"
          className=" p-2 md:p-3 w-[30em] mx-[0.2em] focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Save
        </button>
      </form>
    </div>
  );
}
