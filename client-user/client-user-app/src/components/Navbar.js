import React from "react";
import { useEffect, useState } from "react";
import { a, NavLink } from "react-router-dom";
export default function Navbar() {



    const logout = () => {
        localStorage.clear()
    }

    return (

        <div className="bg-red-800 grow  text-white w-full text-center py-2 px-1 mr-1 border border-red-800">

            <nav className="grow flex h-24 flex-wrap content-center justify-between flex">


                <ul className=" navbar-nav items-center justify-start flex flex-wrap pl-0 list-style-none mr-auto float-left">
                <NavLink  hrefLang="" to={`/`}>  <li className=" h-auto">
                        <img className="h-24" src={require("../pcLogo.png")}></img>
                    </li></NavLink>
                  
                    <li className="flex flex-wrap items-center mx-1">
                        <div className="h-full justify-center w-ful px-2 float-left">
                            <input

                                className="w-full px-5 py-1 rounded text-black"
                                type="text"
                                placeholder="Search by Title"
                            />
                        </div>
                    </li>
                    <li

                        className="
                                    nav-item
                                    mr-2
                                    px-2
                                    rounded-lg
                                    h-1/3
                                    text-center
                                    hover:bg-red-600
                                    "
                    >

                        <NavLink to={`/`}
                            className="nav-link py-1 font-bold text-white focus:text-gray-300 p-0"
                            href="#"
                        ><i className="fa-solid fa-house"></i> Home </NavLink>
                    </li>

                    <li

                        className="
                                    nav-item
                                    mr-2
                                    px-2
                                    rounded-lg
                                    h-1/3
                                    text-center
                                    hover:bg-red-600
                                    "
                    >

                        <NavLink to={`/`}
                            className="nav-link py-1 font-bold text-white focus:text-gray-300 p-0"
                            href="#"
                        ><i className="fa-solid fa-tv"></i> TV Shows </NavLink>
                    </li>
                    <li

                        className="
                                nav-item
                                px-2
                                mx-1
                                h-1/3
                                rounded-lg
                                hover:bg-red-600
                                "
                    >
                        <a
                            className="nav-link font-bold text-white focus:text-gray-300 p-0"
                            href="#"
                        ><i className="fa-solid fa-film"></i>  Movies</a
                        >
                    </li>
                </ul>

            </nav>

        </div >
    )



}