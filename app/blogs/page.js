import Footer from '@/component/Footer'
import Header from '@/component/Header'
import Blog_Detail_section from '@/Pages/Blogs/Blog_Banner/Blog_Detail_section'
import React from 'react'
import "../../style/responsive.css"
export default function page() {
    return (
        <>
            <div className='container  blog'>

                <Header />
            </div>

            <Blog_Detail_section />
            <Footer />
        </>
    )
}
