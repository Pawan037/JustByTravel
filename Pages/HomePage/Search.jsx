"use client";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { FaHotel, FaUser } from "react-icons/fa";
import { MdFlight } from "react-icons/md";
import { FaCar } from "react-icons/fa6";
import { GrBike } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { searching, Setactive } from "@/app/Redux/Reducer";
import { useQuery } from "@tanstack/react-query";
import { SearchLocation } from "@/app/Route/endpoints";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Search() {
    //    **********************************************************************
    const [location, setLocation] = useState("")
    const [searchcontetn, setContent] = useState("")
    // ********************************************************************************

    const reverseGeocode = useCallback(async (lat, lng) => {
        try {
            // Using OpenStreetMap Nominatim API (free, no key required)
            const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=10&addressdetails=1`,
                {
                    headers: {
                        'User-Agent': 'JustBuyTravel/1.0'
                    }
                }
            );
            const data = await response.json();
            if (data && data.address) {
                // Try to get city name from various fields
                const city =
                    data.address.city ||
                    data.address.town ||
                    data.address.village ||
                    data.address.municipality ||
                    data.address.county ||
                    data.address.state ||
                    data.address.country;
                if (city) {
                    return city;
                }
            }
            // Fallback: return coordinates as location string
            return `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
        } catch (error) {
            console.error("Reverse geocoding error:", error);
            return null;
        }
    }, []);

    //    **********************************************************************


    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const { latitude, longitude } = position.coords;
            console.log(`Current location: ${latitude}, ${longitude}`);
            // Get city name from coordinates
            const cityName = await reverseGeocode(latitude, longitude);
            if (cityName) {
                setLocation(cityName);
                console.log(`Location resolved to: ${cityName}`);
                console.log(cityName, "................");
                localStorage.setItem("search", cityName)
                await doSearch(cityName);

            } else {
                // If reverse geocoding fails, use coordinates or fallback
                const coordLocation = `${latitude.toFixed(2)}, ${longitude.toFixed(2)}`;
                setLocation(coordLocation);
                await doSearch(coordLocation);
            }
            // setLocationFetching(false);
        },
        (err) => {
            console.error("Geolocation error:", err);
            // Fallback to default search on error
            doSearch("New York");
            // setLocationFetching(false);
        },
        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 60000, // Cache for 1 minute
        }
    );


    //    ********************************************************************** 
    const doSearch = useCallback(async (locOverride) => {
        // setError("");
        // setLoading(true);
        // setResults(null);
        try {
            const params = new URLSearchParams({
                location: locOverride || location || "New York",
                adults: adults.toString(),
                num: "100"
            });
            if (checkin) params.append("checkin", checkin);
            if (checkout) params.append("checkout", checkout);
            const res = await fetch(`${API_BASE}/api/hotels/search?${params.toString()}`);
            const json = await res.json();
            if (!json.success) {
                throw new Error(json.message || "Failed to fetch hotels");
            }
            // setResults(json.data);
        } catch (err) {
            // setError(err.message);
        } finally {
            // setLoading(false);
        }
    }, [location]);
    //    **********************************************************************

    const router = useRouter();
    const searchParams = useSearchParams();
    const query = searchParams.get("query") || "";

    const [searchContent, setSearchContent] = useState(query);

    useEffect(() => {
        setSearchContent(query);
    }, [query]);

    const handleSearch = () => {
        if (!searchContent) return;

        router.push(`/search?query=${searchContent}`);
    };
    return (
        <section className="Search_section pb-20">
            <div className="container">
                <div className="search_container">
                    <div className="search_container_box bg-white rounded-2xl pb-4 w-full">
                        <div className="search_tab ps-5 pe-5 pt-4 pb-4">
                            <div className="tab_link flex justify-between">
                                <ul className="flex items-center gap-3 p-0">
                                    <li>
                                        <Link href={""} className="button_bg text-white">
                                            search all
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={""}>
                                            <FaHotel /> hotels
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={""}>
                                            <MdFlight /> flights
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={""}>
                                            <FaCar /> Things to do
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={""}>
                                            <GrBike /> Restaurant
                                        </Link>
                                    </li>
                                </ul>
                                <div className="help_info">
                                    <p className="flex items-center gap-2">
                                        <FaUser /> need some help ?
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="search_box_input">
                            <form
                                className="px-15 mx-auto"
                                onSubmit={(e) => {
                                    e.preventDefault();


                                }}
                            >
                                <div className="relative search_box">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none icon_search">
                                        <CiSearch />
                                    </div>
                                    <input
                                        type="text"
                                        value={searchContent}
                                        onChange={(e) => setSearchContent(e.target.value)}
                                        className="block w-full bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:outline-none focus:ring-0 placeholder:text-body"
                                        placeholder="Places to go, things to do, hotels..."

                                    />
                                    <button
                                        type="submit"
                                        onClick={() => handleSearch()}
                                        className="absolute top-2 end-3 bg-brand hover:bg-brand-strong box-border border border-transparent shadow-xs font-medium leading-5 text-xs px-3 focus:outline-none button_bg2"
                                    >
                                        Search
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
