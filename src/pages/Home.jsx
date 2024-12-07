import React from 'react'
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Featured from "../components/Featured"
import PropertyList from "../components/PropertyList"
import "./pages.css"

export default function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="home-container">
                <h1>Featured</h1>
                <Featured />
                <h1 style={{ width: "100%", maxWidth: "1024px", fontSize: "20px" }}>Browse by property type</h1>
                <PropertyList />
            </div>
        </div>
    )
}
