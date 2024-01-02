import { createContext } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from "../services/authService"
import * as houseService from "../services/houseService"
import usePersistedState from "../hooks/usePersistedState";

const AuthContext = createContext();

AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({
    children,
}) => {

    const navigate = useNavigate();

    const [auth, setAuth] = usePersistedState('auth', {});
  
    const loginSubmitHandler = async (values) => {
      const result = await authService.login(values.email, values.password);
  
      setAuth(result);
      
      localStorage.setItem('accessToken', result.accessToken);
  
      navigate("/");
    };
  
    const registerSubmitHandler = async (values) => {
      if (values.password === values.repeatPassword) {
        const result = await authService.register(values.email, values.password, values.repeatPassword);
  
        setAuth(result);
  
        localStorage.setItem('accessToken', result.accessToken);
      
        navigate("/");
      }
      else{
        throw new Error();
      }
    }
  
    const logoutHandler = () => {
      setAuth({});
  
      localStorage.removeItem('accessToken');
    }
  
    const createSubmitHandler = async (values) => {
      try {
        await houseService.create(values);
  
        navigate("/houses");
      } catch (error) {
        console.log(error);
      }
    };
  
    const values = { 
      createSubmitHandler,
      loginSubmitHandler,
      registerSubmitHandler,
      logoutHandler,
      username: auth.username || auth.email,
      email: auth.email,
      userId: auth._id,
      isAuthenticated: !!auth.email
    }

    return(
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;