"use client"
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaHotel } from "react-icons/fa";
import { MdFlight } from "react-icons/md";
import { FaCar } from "react-icons/fa6";
import { GrBike } from "react-icons/gr";
import { IoIosDocument } from "react-icons/io";
import { HiOutlineSearch } from "react-icons/hi";
export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            {/* <section className='container mx-auto px-4'>
                <Navbar expand="lg" className="">
                    
                    <Container fluid>
                        <div className="nav_items flex  items-center justify-between  w-full ">
                            <div className="logo">

                                <div href="#" className='logo_box'>
                                    <img src="/logo/logo.png.webp" alt="" />
                                </div>
                            </div>
                            
                            <div className="nav_link">
                                <Nav
                                    className="me-auto my-2 my-lg-0 p-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <Nav> <Link href="#action1">Discover </Link></Nav>
                                    <Nav> <Link href="#action1">Discover </Link></Nav>

                                    <Nav> <Link href="#action1">Discover </Link></Nav>
                                </Nav>
                            </div>
                          
                            <div className="nav_button">
                                <div className="d-flex inner_button items-center gap-3">
                                    <svg viewBox="0 0 24 24" width="20px" height="20px" className="d Vb UmNoP" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M9.31 9.82h4.178c-.069-1.591-.356-2.993-.766-4.017-.237-.593-.501-1.023-.756-1.293-.211-.223-.38-.3-.5-.32h-.133c-.12.02-.289.097-.5.32-.255.27-.519.7-.756 1.293-.41 1.024-.697 2.426-.767 4.017m-.374-5.14q-.135.272-.252.566C8.194 6.472 7.88 8.07 7.81 9.82H5.055a6.39 6.39 0 0 1 3.88-5.14m2.301-1.989a7.883 7.883 0 0 0-7.726 7.88 7.88 7.88 0 0 0 7.884 7.885c.584 0 .871-.014 1.11-.074.124-.031.172-.049.213-.064.058-.02.099-.036.312-.073l-.26-1.477a4 4 0 0 0-.628.159c-.031.007-.132.029-.743.029-.121 0-.313-.06-.566-.327-.255-.27-.519-.699-.756-1.292-.41-1.025-.697-2.426-.767-4.017h4.203a4.7 4.7 0 0 1-.113.843 6 6 0 0 1-.112.413l-.012.04-.004.016c-.034.114-.089.298-.1.478l1.498.088v.006s.007-.035.044-.161l.012-.04c.038-.126.09-.298.136-.505.072-.313.134-.698.152-1.178h2.734a4.2 4.2 0 0 1-.195.949c-.055.16-.11.28-.166.403l-.004.01-.01.02c-.046.101-.132.288-.161.486l1.484.219-.005.026s.012-.032.057-.13l.008-.018c.056-.123.137-.3.216-.529.168-.49.31-1.168.31-2.186a7.88 7.88 0 0 0-7.72-7.879 2 2 0 0 0-.325 0m2.626 1.99q.134.271.252.565c.49 1.226.805 2.824.875 4.574h2.75a6.38 6.38 0 0 0-3.877-5.14M8.94 16.466a8 8 0 0 1-.256-.573c-.49-1.227-.805-2.824-.875-4.574H5.055a6.39 6.39 0 0 0 3.885 5.147"></path><path fillRule="evenodd" clipRule="evenodd" d="M20.489 12.343h-8.75v6.648h5.255l3.495 2.325zm-1.5 1.5v4.674l-1.542-1.026H13.24v-3.648z"></path></svg>
                                   
                                    <div className="lang_icon flex items-center gap-0">
                                        <div className="tz_line"></div> <span><Link href={""}>INR</Link></span>
                                    </div>
                                  
                                    <Link href={""} className='sign-in-button' variant="outline-success">Signin</Link>
                                </div>
                            </div>

                        </div>

                    </Container>
                </Navbar>
            </section> */}
            {/* ************************************************************************************************************ */}
            <section className='header_section'>
                <div className="container-fluid p-0">


                    <Navbar expand="lg" className="">
                        <Container fluid className='p-0'>
                            <Navbar.Brand href="#">
                                <div className="logo">
                                    <img src="/logo/logo.png.webp" alt="" />
                                </div>
                            </Navbar.Brand>
                            {/* *********************** */}
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            {/* ************************ */}
                            <Navbar.Collapse id="navbarScroll" className='justify-end navbar_link_item'>
                                {/* ******** */}
                                <Nav
                                    className="gap-5"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <Nav.Link href="#action1"><span><FaHotel /></span><span>Hotels</span></Nav.Link>
                                    <Nav.Link href="#action2"><span><MdFlight /></span><span>Flights</span></Nav.Link>
                                    <Nav.Link href="#action2"><span><FaCar /></span><span>cars</span></Nav.Link>
                                    <Nav.Link href="#action2"><span><GrBike /></span><span>bikes</span></Nav.Link>
                                    <Nav.Link href="#action2"><span><IoIosDocument /></span><span>blogs</span></Nav.Link>
                                    <NavDropdown title="More" id="navbarScrollingDropdown">
                                        <NavDropdown.Item href="#action3">More</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            Something else here
                                        </NavDropdown.Item>
                                    </NavDropdown>

                                    <div className="search_sign_button flex gap-2 items-center">



                                        <Link href={""} className='sign-in-button' variant="outline-success">Subscriber</Link>

                                    </div>

                                </Nav>
                                {/* ******** */}

                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </section>

        </>


    )
}
