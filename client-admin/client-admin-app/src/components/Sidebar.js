import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
export default function Sidebar() {
  const logout = () => {
    localStorage.clear();
  };

  return (
    <div className="bg-red-800 text-white w-40 text-center py-2 px-1 mr-1 border border-red-800">
      <div className="flex flex-row mx-2 my-2">
        <div>
          <img src={require("../pcLogo.png")}></img>
        </div>
      </div>
      <div className="flex flex-col px-2 py-2 px-1 mr-2 w-full justify-center">
        <div className="px-3 flex justify-center ">
          <img
            className="
              img-circle
              profile_img
              border-2 border-white
              rounded-full
              w-10
            "
            src="https://picsum.photos/400"
            alt="..."
          />
        </div>
        <div className="px-1">
          <span className="font-bold	">Welcome, {localStorage.getItem("username")}</span>
          <h2 className="font-semibold text-sm	">{localStorage.getItem("email")}</h2>

          <span
            className="
              inline-flex
              items-center
              justify-center
              px-2
              py-1
              text-xs
              font-bold
              w-full
              leading-none
              text-red-100
              bg-green-600
              rounded-full
            "
            >{localStorage.getItem("role")}</span
          >
        </div>
      </div>
      <nav className="text-left">
        <NavLink
          to={"/"}
          href=""
          className="block py-3 px-3 hover:bg-white hover:text-red-800"
        >
          <i className="fa-solid fa-film"></i> Movies
        </NavLink>

        <NavLink
          to={"/genres"}
          href=""
          className="block py-3 px-3 hover:bg-white hover:text-red-800"
        >
          <i className="fa fa-list"></i> Genres
        </NavLink>

        {localStorage.getItem("role") === 'admin' && <NavLink
          to={"/register"}
          href=""
          className="block py-3 px-3 hover:bg-white hover:text-red-800"
        >
          <i className="fa fa-pen"></i> Add User
        </NavLink>}
        
        <NavLink
          to={"/login"}
          onClick={logout}
          href=""
          className="block py-3 px-3 hover:bg-white hover:text-red-800"
        >
          <i className="fa fa-sign-out"></i> Logout
        </NavLink>
      </nav>
    </div>
  );
}
