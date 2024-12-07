import React, { useState } from 'react'
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import HotelsResult from "../components/HotelsResult"
import "./pages.css"
import { useLocation } from 'react-router-dom'
import format from 'date-fns/format'
import { DateRange } from "react-date-range"

export default function Hotels() {
  const location = useLocation()
  const [date, setDate] = useState(location.state.date)
  const [options, setOptions] = useState(location.state.options)
  const [city, setCity] = useState(location.state.city)
  const [openDate, setOpenDate] = useState(false)

  const handleOptions = (name, event) => {
    setOptions(prev => (
      {
        ...prev,
        [name]: event.target.value
      }
    ))
  }
  return (
    <div className="hotels">
      <Navbar />
      <Header type={"list"} />
      <div className='hotels-wrapper'>
        <div className="hotels-container">
          <div className="hotels-search">
            <h1 className='title'>Search</h1>
            <span className='hotels-search__title'>Destination</span>
            <input type="text" className='hotels-search__input' placeholder={city} />
            <span className='hotels-search__title'>Check in Date</span>
            <span className='hotels-search__date' onClick={() => setOpenDate(!openDate)}>{format(date[0].startDate, "dd,MM,yyyy")} to {format(date[0].endDate, "dd,MM,yyyy")}</span>
            {openDate && <DateRange onChange={(item) => setDate([item.selection])} ranges={date} />}
            <div className="hotels-search__options">
              <span className='search-options__title'>Options</span>
              <div className="search-options__wrapper">
                <div className='search-options__item'>
                  <span className='hotels-search__title'>Min price per night</span>
                  <input type="number" placeholder={city} onChange={(e) => setCity(e.target.value)} />
                </div>
                <div className='search-options__item'>
                  <span className='hotels-search__title'>Max price per night</span>
                  <input type="number" />
                </div>
                <div className='search-options__item'>
                  <span className='hotels-search__title'>Adult</span>
                  <input onChange={(e) => { handleOptions("adult", e) }} min={1} type="number" placeholder={options.adult} />
                </div>
                <div className='search-options__item'>
                  <span className='hotels-search__title'>Children</span>
                  <input onChange={(e) => { handleOptions("children", e) }} min={0} type="number" placeholder={options.children} />
                </div>
                <div className='search-options__item'>
                  <span className='hotels-search__title' >Room</span>
                  <input onChange={(e) => { handleOptions("room", e) }} min={1} type="number" placeholder={options.room} />
                </div>
              </div>
            </div>
          </div>
          <div className="hotels-result">
            <HotelsResult />
            <HotelsResult />
            <HotelsResult />
            <HotelsResult />
            <HotelsResult />
            <HotelsResult />
            <HotelsResult />
            <HotelsResult />
            <HotelsResult />
          </div>
        </div>
      </div>
    </div >
  )
}
