import React from 'react'
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Featured from "../components/Featured"
import PropertyList from "../components/PropertyList"
import FeaturedProperty from "../components/FeaturedProperty"
import "./pages.css"

export default function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="home-container">
                <h1 className='title'>Featured</h1>
                <Featured />
                <h1 className='title'>Browse by property type</h1>
                <PropertyList />
                <h1 className='title'>Homes guests love</h1>
                <FeaturedProperty />
            </div>
        </div>
    )
}
