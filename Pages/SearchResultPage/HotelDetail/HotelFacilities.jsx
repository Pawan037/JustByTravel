import React from 'react'

export default function HotelFacilities({ hotel_facility }) {


    return (
        <>

            <div className="container p-4">

                <div className="row">
                    <div className="title">
                        <h4>
                            Highlights Facilities
                        </h4>
                    </div>
                    <div className="facilities_section ">
                        <div className="hotel_detail_page">

                            <div className="facilities-wrap">
                                <div className="single-facilities">
                                    {/* <h6>
                                        <img decoding="async" src="https://gofly-wp.egenstheme.com/wp-content/uploads/2025/09/hotel-icon3.svg" alt="image" />
                                        Dining &amp; Beverage                                        </h6> */}
                                    <ul className="facilities-list">
                                        {
                                            hotel_facility?.reviews_breakdown?.slice(1, 7).map((item, i) => {
                                                console.log(item, "..");
                                                return <>


                                                    <li>
                                                        <svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24606 8.16939 1.23455 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z"></path>
                                                        </svg>
                                                        {item?.name}                                                 </li>

                                                </>
                                            })
                                        }
                                    </ul>
                                </div>
                                {/* *************************************************************************************** */}
                                <div className="single-facilities">
                                    {/* <h6>
                                        <img decoding="async" src="https://gofly-wp.egenstheme.com/wp-content/uploads/2025/09/hotel-icon3.svg" alt="image" />
                                        Dining &amp; Beverage                                        </h6> */}
                                    <ul className="facilities-list">
                                        {
                                            hotel_facility?.reviews_breakdown?.slice(7, 12).map((item, i) => {
                                                console.log(item, "..");
                                                return <>


                                                    <li>
                                                        <svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24606 8.16939 1.23455 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z"></path>
                                                        </svg>
                                                        {item?.name}                                                 </li>

                                                </>
                                            })
                                        }
                                    </ul>
                                </div>
                                {/* *************************************************************************************** */}
                                {/* *************************************************************************************** */}
                                <div className="single-facilities">
                                    {/* <h6>
                                        <img decoding="async" src="https://gofly-wp.egenstheme.com/wp-content/uploads/2025/09/hotel-icon3.svg" alt="image" />
                                        Dining &amp; Beverage                                        </h6> */}
                                    <ul className="facilities-list">
                                        {
                                            hotel_facility?.reviews_breakdown?.slice(13, 20).map((item, i) => {
                                                console.log(item, "..");
                                                return <>


                                                    <li>
                                                        <svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24606 8.16939 1.23455 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z"></path>
                                                        </svg>
                                                        {item?.name}                                                 </li>

                                                </>
                                            })
                                        }
                                    </ul>
                                </div>
                                {/* *************************************************************************************** */}
                                {/* *************************************************************************************** */}
                                {/* *************************************************************************************** */}
                                <div className="single-facilities">
                                    {/* <h6>
                                        <img decoding="async" src="https://gofly-wp.egenstheme.com/wp-content/uploads/2025/09/hotel-icon3.svg" alt="image" />
                                        Dining &amp; Beverage                                        </h6> */}
                                    <ul className="facilities-list">
                                        {
                                            hotel_facility?.reviews_breakdown?.slice(20, 26).map((item, i) => {
                                                console.log(item, "..");
                                                return <>


                                                    <li>
                                                        <svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24606 8.16939 1.23455 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z"></path>
                                                        </svg>
                                                        {item?.name}                                                 </li>

                                                </>
                                            })
                                        }
                                    </ul>
                                </div>
                                {/* *************************************************************************************** */}
                                {/* *************************************************************************************** */}
                            </div>

                        </div>


                    </div>
                </div>
            </div>



        </>
    )
}
