import { SET_EMAIL, SET_USERNAME, SET_ROLE } from "../store/actionType";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2"
import { doLogin } from "../store/actions/loginAction";
export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState("");
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  const loginInputHandler = (e) => {
    const { value, name } = e.target;
    const newInput = {
      ...loginInput,
    };
    newInput[name] = value;
    setLoginInput(newInput);
  };

  const submitHanlder = async (e) => {
    e.preventDefault();
    //console.log(loginInput);
    dispatch(doLogin(loginInput))
      .then((response) => {
        if (!response.ok) {
          return response.json().then(err => Promise.reject(err));

        }
        return response.json();
      })
      .then((data) => {
        //console.log("ok, LOGIN", data);
        dispatch({ type: SET_EMAIL, payload: data.email });
        dispatch({ type: SET_USERNAME, payload: data.username });
        dispatch({ type: SET_ROLE, payload: data.role });

        //console.log();
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("id", data.id);
        localStorage.setItem("email", data.email);
        localStorage.setItem("username", data.username);
        localStorage.setItem("role", data.role);
        navigate("/");
      })
      .catch((error) => {
        //console.log(error);
        if (typeof error.message == 'object') {
          Swal.fire(error.message.join(', '))
        } else {
          Swal.fire(error.message)
        }
      });
  };


  return (
    <div className="mt-3">
      <div className="relative flex grid grid-cols-1 divide-y text-center ">
        <div className="flex justify-center ">
          <form
            action=""
            onSubmit={submitHanlder}
            className="bg-red-800 shadow-md border border-gray-200 rounded-xl px-8 pt-6 pb-8 mb-4 mt-4 w-1/3"
          >
            <div className="flex justify-center ">
              <div className="w-1/2">
                <img className="w-full" src={require("../pcLogo.png")} alt="" />
              </div>
            </div>

            <div className="text-gray-700 md:flex md:items-center py-2 flex-col ">
              <label htmlFor="email" className="font-bold text-white mx-3">
                Email
              </label>

              <div className="md:w-2/3 md:flex-grow">
                <input
                  className="
                  w-full
                  h-10
                  px-3
                  text-base
                  placeholder-gray-600
                  border
                  rounded-lg
                  focus:shadow-outline
                "
                  type="text"
                  name="email"
                  id="email"
                  value={loginInput.email}
                  onChange={loginInputHandler}
                />
              </div>
            </div>

            <div className="text-gray-700 md:flex md:items-center flex-col py-2">
              <label htmlFor="email" className="font-bold text-white mx-3">
                Password
              </label>
              <div className="md:w-2/3 md:flex-grow">
                <input
                  className="
                  w-full
                  h-10
                  px-3
                  text-base
                  placeholder-gray-600
                  border
                  rounded-lg
                  focus:shadow-outline
                "
                  type="password"
                  name="password"
                  id="password"
                  value={loginInput.password}
                  onChange={loginInputHandler}
                />
              </div>
            </div>

            <div className="text-gray-700 md:flex py-2">
              <div className="md:w-1/2 md:flex-grow">
                <button
                  type="submit"
                  className="
                  bg-white
                  text-red-800
                  hover:bg-red-700
                  hover:text-white
                  text-white
                  font-bold
                  py-2
                  px-4
                  border border-white 
                  rounded
                "
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
