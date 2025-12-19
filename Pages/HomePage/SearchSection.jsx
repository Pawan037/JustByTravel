"use client"
import { React, useState } from 'react'
import { RiHomeLine } from "react-icons/ri";
import { RiHotelBedLine } from "react-icons/ri";
import { SlCamera } from "react-icons/sl";
import { IoRestaurantOutline } from "react-icons/io5";
export default function SearchSection() {
    const [data, setData] = useState({
        title: "",
        searchName: ""

    })
    return (
        <>
            <section className="">
                <div className="container">
                    <div className="row text-center justify-center">
                        <div className="col-lg-6">
                            <div className="search_section">
                                <div className="search_title">
                                    <h1 className="text-center">
                                        Find places to eat
                                    </h1>
                                </div>
                                {/* *************** */}
                                <div className="search_nav">
                                    <div className="search_tab_button flex items-center justify-between">
                                        <button>
                                            <span><RiHomeLine /></span>
                                            <span>Search All</span>
                                        </button>
                                        {/* ***** */}
                                        <button>
                                            <span>
                                                <RiHotelBedLine />
                                            </span>
                                            <span>Search All</span>
                                        </button>
                                        {/* ***** */}
                                        <button>
                                            <span>
                                                <SlCamera />
                                            </span>
                                            <span>Search All</span>
                                        </button>
                                        {/* ***** */}
                                        <button>
                                            <span>
                                                <IoRestaurantOutline />
                                            </span>
                                            <span>Search All</span>
                                        </button>
                                    </div>

                                </div>
                                {/* **************** imput */}
                                <div className="search_input">

                                    <form class="mx-auto">
                                        <label for="search" class="block mb-2.5 text-sm font-medium text-heading sr-only ">Search</label>
                                        <div class="relative">
                                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                                <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" /></svg>
                                            </div>
                                            <input type="search" id="search" class="block w-full ps-5 py-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" placeholder="Search" required />
                                            <button type="button" class="absolute end-1.5 top- text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5 focus:outline-none">Search</button>
                                        </div>
                                    </form>


                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
