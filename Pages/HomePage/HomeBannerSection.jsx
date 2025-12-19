import Link from 'next/link'
import React from 'react'
import { FaHotel } from "react-icons/fa";
import { MdFlight } from "react-icons/md";
import { FaCar } from "react-icons/fa6";
import { GrBike } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
export default function
    () {
    return (
        <div>
            <section className=''>
                <div className="section_home_banner rounded-3xl flex items-center">
                    {/* *************************** box title */}
                    <div className="container">
                        <div className="row justify-center">
                            <div className="col-lg-10">
                                <div className="banner_box">
                                    <div className="title text-center">
                                        <h2>
                                            Find out how much you can save on your next hotel stay
                                        </h2>
                                        <h5>
                                            Book with us and you could <span className='bg-theme px-2'>save up to 80%</span>

                                        </h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ************************************************ */}
                    {/* ************************ search Box */}
                    <div className="search_container absolute  ps-32 pe-32 right-0 left-0">
                        <div className="search_container_box  bg-white rounded-2xl pb-4 w-full w-100">
                            {/* *************** */}
                            <div className="search_tab ps-3 pe-3 pt-4 pb-4">
                                <div className="tab_link flex justify-between ">
                                    <ul className='flex items-center gap-3'>
                                        <li ><Link href={""} className='button_bg text-white'>search all</Link></li>
                                        <li><Link href={""}><span><FaHotel /></span> <span>hotels</span></Link></li>
                                        <li><Link href={""}><span><MdFlight /></span> <span>flights</span></Link></li>
                                        <li><Link href={""}><span><FaCar /></span> <span>Things to do</span></Link></li>
                                        <li><Link href={""}><span><GrBike /></span> <span>Restaurant</span></Link></li>
                                    </ul>
                                    <div className="help_info">
                                        <p className='flex items-center gap-2'><span><FaUser /></span> <span>need some help ?</span></p>
                                    </div>
                                </div>
                            </div>
                            {/* ********************************** seacrh input >>>>>>>>> */}
                            <div className="search_box_input">
                                <form class="px-15 mx-auto  ">
                                    <div class="relative search_box">
                                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                            <CiSearch />
                                        </div>
                                        <input type="search" id="search" class="block w-full  bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:outline-none focus:ring-0 active:outline-none shadow-xs placeholder:text-body rounded-2xl" placeholder="Places to go, things to do, hotels..." required />
                                        <Link href={""} class="absolute top-7 end-5  bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5  text-xs px-3  focus:outline-none button_bg2">Search</Link>
                                    </div>
                                </form>

                            </div>



                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
