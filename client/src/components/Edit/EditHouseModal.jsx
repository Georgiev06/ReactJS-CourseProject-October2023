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

  const [errors, setErrors] = useState({
    title: '',
    pricePerMonth: '',
    address: '',
    imageUrl: '',
    category: '',
    description: ''
  });

  const titleValidator = () => {
    if (house.title.length < 4 || house.title.length > 21) {
      setErrors(state => ({
        ...state,
        title: 'The name of the house must be between 5 or 20 letters!'
      }));
    }
    else {
      if (errors.title) {
        setErrors(state => ({
          ...state,
          title: '',
        }));
      }
    }
  }

  const pricePerMonthValidator = () => {
    if (house.pricePerMonth < 50) {
      setErrors(state => ({
        ...state,
        pricePerMonth: 'Price per month should be more than $50!'
      }));
    }
    else {
      if (errors.pricePerMonth) {
        setErrors(state => ({
          ...state,
          pricePerMonth: '',
        }));
      }
    }
  }

  const addressValidator = () => {
    if (house.address.length < 10 || house.address.length > 90) {
      setErrors(state => ({
        ...state,
        address: 'Address should be between 10 and 90 characters!'
      }));
    }
    else {
      if (errors.address) {
        setErrors(state => ({
          ...state,
          address: '',
        }));
      }
    }
  }

  const imageUrlValidator = () => {
    if (house.imageUrl.length < 20 || house.imageUrl.length > 2048) {
      setErrors(state => ({
        ...state,
        imageUrl: 'ImageUrl should be between 20 and 2048 characters!'
      }));
    }
    else {
      if (errors.imageUrl) {
        setErrors(state => ({
          ...state,
          imageUrl: '',
        }));
      }
    }
  }

  const categoryValidator = () => {
    if (house.category.length < 4 || house.category.length > 40) {
      setErrors(state => ({
        ...state,
        category: 'Category should be between 4 and 40 letters!'
      }));
    }
    else {
      if (errors.category) {
        setErrors(state => ({
          ...state,
          category: '',
        }));
      }
    }
  }

  const descriptionValidator = () => {
    if (house.description.length < 20 || house.description.length > 220) {
      setErrors(state => ({
        ...state,
        description: 'Description should be between 20 and 220 letters long!'
      }));
    }
    else {
      if (errors.description) {
        setErrors(state => ({
          ...state,
          description: '',
        }));
      }
    }
  }

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
            className={errors.title !== '' ? 'block py-2.5 px-0 w-[30em] text-sm text-red-900 bg-transparent border-0 border-b-2 border-red-300 appearance-none dark:text-red dark:border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer' : 'block py-2.5 px-0 w-[30em] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'}
            placeholder=" "
            required=""
            value={house.title}
            onChange={onChange}
            onBlur={titleValidator}
          />
          {errors.title && (
            <p className="text-red-600">{errors.title}</p>
          )}
          <label
            htmlFor="floating_name"
            className={errors.title !== '' ? 'peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6' : 'peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'}
          >
            Title
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="number"
            name="pricePerMonth"
            className={errors.pricePerMonth !== '' ? 'block py-2.5 px-0 w-[30em] text-sm text-red-900 bg-transparent border-0 border-b-2 border-red-300 appearance-none dark:text-red dark:border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer' : 'block py-2.5 px-0 w-[30em] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'}
            placeholder=" "
            required=""
            value={house.pricePerMonth}
            onChange={onChange}
            onBlur={pricePerMonthValidator}
          />
          {errors.pricePerMonth && (
            <p className="text-red-600">{errors.pricePerMonth}</p>
          )}
          <label
            htmlFor="pricePerMonth"
            className={errors.pricePerMonth !== '' ? 'peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6' : 'peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'}
          >
            Price Per Month
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="string"
            name="address"
            className={errors.address !== '' ? 'block py-2.5 px-0 w-[30em] text-sm text-red-900 bg-transparent border-0 border-b-2 border-red-300 appearance-none dark:text-red dark:border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer' : 'block py-2.5 px-0 w-[30em] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'}
            placeholder=" "
            required=""
            value={house.address}
            onChange={onChange}
            onBlur={addressValidator}
          />
          {errors.address && (
            <p className="text-red-600">{errors.address}</p>
          )}
          <label
            htmlFor="address"
            className={errors.address !== '' ? 'peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6' : 'peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'}
          >
            Address
          </label>
        </div>
        {/* <div className="grid md:grid-cols-2 md:gap-6"> */}
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="string"
            name="imageUrl"
            className={errors.imageUrl !== '' ? 'block py-2.5 px-0 w-[30em] text-sm text-red-900 bg-transparent border-0 border-b-2 border-red-300 appearance-none dark:text-red dark:border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer' : 'block py-2.5 px-0 w-[30em] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'}
            placeholder=" "
            required=""
            value={house.imageUrl}
            onChange={onChange}
            onBlur={imageUrlValidator}
          />
          {errors.imageUrl && (
            <p className="text-red-600">{errors.imageUrl}</p>
            )}
          <label
            htmlFor="imageUrl"
            className={errors.imageUrl !== '' ? 'peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6' : 'peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'}
          >
            ImageUrl
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="category"
            className={errors.category !== '' ? 'block py-2.5 px-0 w-[30em] text-sm text-red-900 bg-transparent border-0 border-b-2 border-red-300 appearance-none dark:text-red dark:border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer' : 'block py-2.5 px-0 w-[30em] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'}
            placeholder=" "
            required=""
            value={house.category}
            onChange={onChange}
            onBlur={categoryValidator}
          />
          {errors.category && (
            <p className="text-red-600">{errors.category}</p>
          )}
          <label
            htmlFor="category"
            className={errors.category !== '' ? 'peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6' : 'peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'}
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
              className={errors.description !== '' ? 'block py-2.5 px-0 w-[30em] text-sm text-red-900 bg-transparent border-0 border-b-2 border-red-300 appearance-none dark:text-red dark:border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer' : 'block py-2.5 px-0 w-[30em] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'}
              placeholder=" "
              required=""
              value={house.description}
              onChange={onChange}
              onBlur={descriptionValidator}
            />
            {errors.description && (
            <p className="text-red-600">{errors.description}</p>
            )}
            <label
              htmlFor="description"
              className={errors.description !== '' ? 'peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6' : 'peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'}
            >
              Description
            </label>
          </div>
        </div>
        <button
          type="submit"
          disabled={Object.values(errors).some(x => x)}
          className=" p-2 md:p-3 w-[30em] mx-[0.2em] focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Save
        </button>
      </form>
    </div>
  );
}
