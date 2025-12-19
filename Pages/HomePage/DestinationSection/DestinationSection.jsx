import React from 'react'

export default function
    () {
    return (
        <>
            <section className='destination_section mt-35'>

                <div className="destination_title">
                    <h2>
                        Trending Destinations
                    </h2>
                </div>
                {/* ************** */}
                <div className="container_fluid">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="destination_box">
                                <div className="destination_img ">
                                    <img src="/home/destination/des1.jpg" className='rounded-3xl' alt="" />
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="destination_box_right">
                                        <div className="destination_img ">
                                            <img src="/home/destination/des1.jpg" className='rounded-3xl' alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="destination_box">
                                        <div className="destination_img ">
                                            <img src="/home/destination/des1.jpg" className='rounded-3xl' alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ************************************** */}
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="destination_box_right">
                                        <div className="destination_img ">
                                            <img src="/home/destination/des1.jpg" className='rounded-3xl' alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="destination_box">
                                        <div className="destination_img ">
                                            <img src="/home/destination/des1.jpg" className='rounded-3xl' alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}
