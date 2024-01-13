import { useContext, useState } from "react";
import AuthContext from "../../contexts/authContext";
import { useForm } from "../../hooks/useForm";

export default function Register() {
  const { registerSubmitHandler } = useContext(AuthContext);

  const { values, changeHandler, onSubmit } = useForm(
    {
      email: '',
      password: '',
      repeatPassword: '',
    },
    registerSubmitHandler
  );

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    repeatPassword: '',
  });

  const emailValidator = () => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    console.log(emailRegex.test(values.email))
    if (!emailRegex.test(values.email)) {
      setErrors(state => ({
        ...state,
        email: 'Please enter a valid email address!'
      }));
    }
    else {
      if (errors.email) {
        setErrors(state => ({
          ...state,
          email: '',
        }));
      }
    }
  }

  const passwordValidator = () => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    console.log(passwordRegex.test(values.password))
    console.log(values.password)

    if (!passwordRegex.test(values.password)) {
      setErrors(state => ({
        ...state,
        password: 'Your password must contain minimum eight characters, at least one letter, one number and one special character!'
      }));
    }
    else {
      if (errors.password) {
        setErrors(state => ({
          ...state,
          password: '',
        }));
      }
    }
  }

  return (
    <div>
      <div className="absolute top-[15%] left-[9.5%]">
        <h2 className="text-center text-3xl font-bold leading-normal text-gray-600/50 dark:text-gray-500/50">
          Register
        </h2>

        <hr className="pl-[96em] max-w-sm mx-auto shadow-2xl mt-2" />
      </div>

      <form className="max-w-sm mx-auto" onSubmit={onSubmit}>
        <div className="mb-5">
          <label
            htmlFor="email-address-icon"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
            <input
              type="text"
              id="email-address-icon"
              name="email"
              className={errors.email !== '' ? 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500' : 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'}
              placeholder="name@mail.com"
              onChange={changeHandler}
              value={values.email}
              onBlur={emailValidator}
            />
          </div>
          {errors.email && (
            <p className="text-red-600">{errors.email}</p>
            )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className={errors.password !== '' ? 'shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light' : 'shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'}
            required=""
            onChange={changeHandler}
            value={values.password}
            onBlur={passwordValidator}
          />
          {errors.password && (
            <p className="text-red-600">{errors.password}</p>
            )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="repeat-password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Repeat password
          </label>
          <input
            type="password"
            id="repeatPassword"
            name="repeatPassword"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required=""
            onChange={changeHandler}
            value={values.repeatPassword}
          />
          {values.password.length > 0 &&
        values.repeatPassword.length > 0 &&
        values.password !== values.repeatPassword ? (
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            <span className="font-medium">Oops!</span> Passwords don't match!
          </p>
        ) : (
          ""
        )}
        </div>
        <button
          type="submit"
          disabled={Object.values(errors).some(x => x)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Register new account
        </button>
      </form>
    </div>
  );
}
