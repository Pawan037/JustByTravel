"use client"
import React, { useState } from "react";

export default function SearchSidebar() {
    const data = [
        {
            liname: "Air Conditioning",
            nmber: "06",
        },
        {
            liname: "Air Conditioning",
            nmber: "06",
        },
        {
            liname: "Air Conditioning",
            nmber: "06",
        },
        {
            liname: "Air Conditioning",
            nmber: "06",
        },
        {
            liname: "Air Conditioning",
            nmber: "06",
        },
        {
            liname: "Air Conditioning",
            nmber: "06",
        },
        {
            liname: "Air Conditioning",
            nmber: "06",
        },
        {
            liname: "Air Conditioning",
            nmber: "06",
        },
        {
            liname: "Air Conditioning",
            nmber: "06",
        },
        {
            liname: "Air Conditioning",
            nmber: "06",
        },
        {
            liname: "Air Conditioning",
            nmber: "06",
        },
        {
            liname: "Air Conditioning",
            nmber: "06",
        },
        {
            liname: "Air Conditioning",
            nmber: "06",
        },
        {
            liname: "Air Conditioning",
            nmber: "06",
        },
    ];
    const [show, setshow] = useState(false)
    const visible = show ? data.length : 5;
    console.log(visible, data?.length, "ppkpkpkp");

    return (
        <>
            <div className="package-sidebar-area">
                <div className="sidebar-wrapper">
                    <div className="title-area">
                        <h5>Filter</h5>
                        <span id="clear-filters">Clear All</span>
                    </div>

                    <div className="single-widgets">
                        {/* ***************************** */}
                        <div className="widget-title">
                            <h5>Category</h5>
                        </div>
                        {/* ******************************************* */}
                        <div className="checkbox-container two hotel-category">
                            <ul>
                                <li>
                                    <label className="containerss">
                                        <input
                                            type="checkbox"
                                            name="category[]"
                                            value="apartments-condos"
                                        />
                                        <span className="checkmark"></span>
                                        <strong>
                                            <span>Apartments &amp; Condos</span> <span>03</span>
                                        </strong>
                                    </label>
                                </li>
                                <li>
                                    <label className="containerss">
                                        <input
                                            type="checkbox"
                                            name="category[]"
                                            value="boutique-hotels"
                                        />
                                        <span className="checkmark"></span>
                                        <strong>
                                            <span>Boutique Hotels</span> <span>07</span>
                                        </strong>
                                    </label>
                                </li>
                                <li>
                                    <label className="containerss">
                                        <input
                                            type="checkbox"
                                            name="category[]"
                                            value="bungalows"
                                        />
                                        <span className="checkmark"></span>
                                        <strong>
                                            <span>Bungalows</span> <span>05</span>
                                        </strong>
                                    </label>
                                </li>
                                <li>
                                    <label className="containerss">
                                        <input
                                            type="checkbox"
                                            name="category[]"
                                            value="cabins-cottages"
                                        />
                                        <span className="checkmark"></span>
                                        <strong>
                                            <span>Cabins &amp; Cottages</span> <span>07</span>
                                        </strong>
                                    </label>
                                </li>
                                <li>
                                    <label className="containerss">
                                        <input
                                            type="checkbox"
                                            name="category[]"
                                            value="luxury-hotels"
                                        />
                                        <span className="checkmark"></span>
                                        <strong>
                                            <span>Luxury Hotels</span> <span>08</span>
                                        </strong>
                                    </label>
                                </li>
                                <li>
                                    <label className="containerss">
                                        <input
                                            type="checkbox"
                                            name="category[]"
                                            value="luxury-villas"
                                        />
                                        <span className="checkmark"></span>
                                        <strong>
                                            <span>Luxury Villas</span> <span>06</span>
                                        </strong>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* ********************************************************************* */}
                    <div className="single-widgets">
                        <div className="widget-title">
                            <h5>Tags</h5>
                        </div>
                        <ul className="tour-type hotel">
                            <li data-value="premium-hotel">Premium Hotel</li>
                            <li data-value="resort-room">Resort Room</li>
                            <li data-value="standard-room">Standard Room</li>
                            <li data-value="vip-hotel">VIP Hotel</li>
                        </ul>
                    </div>

                    {/* ********************************************************************************** */}
                    <div className="single-widgets">
                        <div className="widget-title">
                            <h5>Pricing</h5>
                        </div>
                        <div className="range-wrap">
                            <div className="row">
                                <div className="col-sm-12">
                                    <form>
                                        <input type="hidden" name="min-value" value="" />
                                        <input type="hidden" name="max-value" value="" />
                                    </form>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div
                                        id="slider-range-hotel"
                                        className="noUi-target noUi-ltr noUi-horizontal noUi-background"
                                    >
                                        <div className="noUi-base">
                                            <div
                                                className="noUi-origin noUi-connect"
                                                style={{ left: "0%" }}
                                            >
                                                <div className="noUi-handle noUi-handle-lower"></div>
                                            </div>
                                            <div
                                                className="noUi-origin noUi-background"
                                                style={{ left: "100%" }}
                                            >
                                                <div className="noUi-handle noUi-handle-upper"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-labels">
                                <div className="caption">
                                    <span id="slider-range-value1">$39</span>
                                </div>
                                <div className="caption">
                                    <span id="slider-range-value2">$300</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* *********************************************************************** */}
                    <div className="single-widgets">
                        <div className="widget-title">
                            <h5>Amenities</h5>
                        </div>
                        <div className="checkbox-container two hotel-amenity">
                            <ul className="experience" style={{ height: "auto" }}>

                                {
                                    data?.map((item, i) => {
                                        if (i >= visible) return null;
                                        return (
                                            <>
                                                <li>
                                                    <label className="containerss">
                                                        <input
                                                            type="checkbox"
                                                            name="amenity[]"
                                                            value="babysitting-services"
                                                        />
                                                        <span className="checkmark"></span>
                                                        <strong>
                                                            <span>{item?.liname}</span> <span>{item?.nmber}</span>
                                                        </strong>
                                                    </label>
                                                </li>


                                            </>
                                        )

                                    })
                                }


                            </ul>
                            <span className="expand" onClick={() => setshow(true)} >
                                See More +
                            </span>
                        </div>
                    </div>
                    {/* ******************************************************************** */}
                    <div class="single-widgets">
                        <div class="widget-title">
                            <h5>Discount &amp; Offer</h5>
                        </div>
                        <div class="checkbox-container two hotel-offer">
                            <ul style={{ height: "auto" }}>
                                <li>
                                    <label class="containerss">
                                        <input
                                            type="checkbox"
                                            name="offer[]"
                                            value="last-minutes-deal"
                                        />
                                        <span class="checkmark"></span>
                                        <strong>
                                            <span>Last Minutes Deal</span> <span>08</span>
                                        </strong>
                                    </label>
                                </li>
                                <li>
                                    <label class="containerss">
                                        <input
                                            type="checkbox"
                                            name="offer[]"
                                            value="special-offer"
                                        />
                                        <span class="checkmark"></span>
                                        <strong>
                                            <span>Special Offer</span> <span>02</span>
                                        </strong>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
