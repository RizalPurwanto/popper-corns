import { useState, useEffect } from "react";

export default function GenreForm(props) {
  const [genreInput, setGenreInput] = useState({
    name: "",
  });

  console.log(props.genre, "INI GENRES ")

  const genreInputHandler = (e) => {
    const { value, name } = e.target;
    const newInput = {
      ...genreInput,
    };

    newInput[name] = value;
    setGenreInput(newInput);
  };

  useEffect(() => {
    if (props.genre) {
        setGenreInput({
            name: props.genre,
           

        })
        
        
        // setCastRow(
        //     movieInput.casts.map(el => {
        //         return {
        //             name: el.name,
        //             profilePict: el.profilePict
        //         }
        //     })
        // )
    }
}, [props.genre])

  const submit = (e) => {
    e.preventDefault();
    console.log(genreInput);
    props.submitHandler(genreInput);
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
                Genre Name
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
                  name="name"
                  id="name"
                  value={genreInput.name}
                  onChange={genreInputHandler}
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
