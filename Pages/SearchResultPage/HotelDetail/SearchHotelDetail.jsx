"use client";
import React from "react";
import "../../../style/searchresult.css";
import HotelDetailContent from "./HotelDetailContent";
import { useQuery } from "@tanstack/react-query";
import { HotelDetail } from "@/app/Route/endpoints";
import { useSearchParams } from "next/navigation";
import AboutHotelDetail from "./AboutHotelDetail";
import NearByHotel from "./NearByHotel";
import HotelLocation from "./HotelLocation";
import SearchSidebar from "../SearchSidebar";
import Footer from "@/component/Footer";
import HotelFacilities from "./HotelFacilities";
export default function SearchHotelDetail() {
    const searchid = useSearchParams();
    const search = searchid.get("query");
    console.log(search, "searching........");

    // ********************
    const { data } = useQuery({
        queryKey: ["hotels", search],
        queryFn: () => HotelDetail(search),
    });

    console.log(data, "deatils");

    // ********************

    // ********************

    // ********************
    const hotel = data?.data?.property;
    const description = hotel?.description;

    const lat = hotel?.additional_data?.gps_coordinates?.latitude;
    const long = hotel?.additional_data?.gps_coordinates?.longitude;
    const near_by_places = hotel?.additional_data?.nearby_places;
    const prices = hotel?.additional_data?.all_offers;
    const name = hotel?.name;
    const facility = hotel?.additional_data;

    console.log(data, "datat..........<><>><>");

    return (
        <>
            <section className="hoteldetail">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="hoteldetail_banner pt-5">
                                <div className="content">
                                    <p className="m-0">
                                        ☆ ☆ ☆ ☆ ☆ 0 Review ( based on 0 reviews )
                                    </p>
                                    <h2 className="pb-4">{hotel?.name}</h2>
                                </div>
                                {/* ************** */}
                                <div className="banner_img">
                                    <div className="row">
                                        {hotel?.images?.slice(0, 1)?.map((item, it) => {
                                            console.log(item, "...item");

                                            return (
                                                <div className="col-12 col-lg-6" key={it}>
                                                    <div className="hotel_img">
                                                        <img
                                                            src={`${item}`}
                                                            className="rounded-2xl"
                                                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                                        />
                                                    </div>
                                                </div>
                                            );
                                        })}

                                        {/* ***************************** */}
                                        <div className="col-lg-6">
                                            <div className="row">
                                                {hotel?.images?.slice(1, 5)?.map((item, i) => {
                                                    console.log(item, "...item");
                                                    return (
                                                        <div
                                                            className={`col-lg-6 ${i >= 2 ? "mt-3" : ""}`}
                                                            key={i}
                                                        >
                                                            <div className="hotel_img">
                                                                <img src={`${item}`} className="rounded-2xl" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                                            </div>
                                                        </div>
                                                    );
                                                })}

                                                {/* ****************** */}
                                            </div>
                                        </div>
                                        {/* ************************ */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="row matrix_fix">
                    <div className="col-lg-8 pt-4">
                        <div className="content_box_detail my-5   rounded-2xl border border-gray-300">
                            <AboutHotelDetail detail={description} name={name} />

                            <HotelFacilities hotel_facility={facility} />

                            <NearByHotel places={near_by_places} />

                            <HotelLocation lat={lat} long={long} />
                        </div>
                    </div>
                    {/* ***************************** */}
                    <div className="col-lg-4">
                        <SearchSidebar prices_hotel={prices} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
