import { useState, useEffect } from "react";

export default function MovieForm(props) {
  const [loginStatus, setLoginStatus] = useState("");
  const [registerInput, setRegisterInput] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
    role: "",
    phoneNumber: "",
  });

  const registerInputHandler = (e) => {
    const { value, name } = e.target;
    const newInput = {
      ...registerInput,
    };
    newInput[name] = value;
    setRegisterInput(newInput);
  };
  const submit = (e) => {
    e.preventDefault();
    console.log(registerInput);
    props.submitHandler(registerInput);
  };

  return (
    <div className="my-7">
      <div className="relative flex grid grid-cols-1 divide-y text-center ">
        <div className="flex justify-center ">
          <form
            action=""
            onSubmit={submit}
            className="bg-gray-500 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2"
          >
            <div className="text-gray-700 md:flex md:items-center py-2 flex-col ">
              <label htmlFor="title" className="font-bold text-white mx-3">
                Username
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
                  name="username"
                  id="username"
                  value={registerInput.username}
                  onChange={registerInputHandler}
                />
              </div>
            </div>

            <div className="text-gray-700 md:flex md:items-center py-2 flex-col ">
              <label htmlFor="synopsis" className="font-bold text-white mx-3">
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
                  type="email"
                  name="email"
                  id="email"
                  value={registerInput.email}
                  onChange={registerInputHandler}
                />
              </div>
            </div>

            <div className="text-gray-700 md:flex md:items-center py-2 flex-col ">
              <label htmlFor="imageUrl" className="font-bold text-white mx-3">
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
                  value={registerInput.password}
                  onChange={registerInputHandler}
                />
              </div>
            </div>

            <div className="text-gray-700 md:flex md:items-center py-2 flex-col ">
              <label htmlFor="trailerUrl" className="font-bold text-white mx-3">
                Role
              </label>

              <div className="md:w-2/3 md:flex-grow">
              <select


className="w-full text-center rounded h-10"
type="text"
                  name="role"
                  id="role"
                  value={registerInput.role}
                  onChange={registerInputHandler}
>
<option value="" disabled>
    -- Select Role --
</option>
<option value="admin" >
    Admin
</option>
<option value="staff" >
    Staff
</option>



</select>
                
              </div>
            </div>

            <div className="text-gray-700 md:flex md:items-center py-2 flex-col ">
              <label htmlFor="trailerUrl" className="font-bold text-white mx-3">
                Address
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
                  name="address"
                  id="address"
                  value={registerInput.address}
                  onChange={registerInputHandler}
                />
              </div>
            </div>

            <div className="text-gray-700 md:flex md:items-center py-2 flex-col ">
              <label htmlFor="trailerUrl" className="font-bold text-white mx-3">
                Phone Number
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
                  name="phoneNumber"
                  id="phoneNumber"
                  value={registerInput.phoneNumber}
                  onChange={registerInputHandler}
                />
              </div>
            </div>

            <div className="text-gray-700 md:flex py-2">
              <div className="md:w-1/2 md:flex-grow">
                <button
                  type="submit"
                  className="
                  text-white
                  bg-red-800
                  hover:bg-red-700
                 
                  
                  font-bold
                  py-2
                  px-4
                  border border-white 
                  rounded
                "
                >
                  Submit
                </button>
              </div>
            </div>
            <div className="text-gray-700 md:flex py-2">
              <div className="md:w-1/2 md:flex-grow"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
