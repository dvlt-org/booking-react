import "./components.css"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { useState } from "react";
import { format } from "date-fns";


export default function Header({ type }) {
    const [openOptions, setOpenOptions] = useState(false)

    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    })

    const [openDate, setOpenDate] = useState(false)

    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        }
    ])

    const handleOptions = (name, operation) => {
        setOptions(prev => ({ ...prev, [name]: operation === "d" ? options[name] - 1 : options[name] + 1 }))
    }


    return (
        <div className='header'>
            <div className="header-container">
                <div className="header-list">
                    <div className="header-list__item active">
                        <i className="fa-solid fa-bed"></i>
                        <span>Stays</span>
                    </div>
                    <div className="header-list__item">
                        <i className="fa-solid fa-plane"></i>
                        <span>Flights</span>
                    </div>
                    <div className="header-list__item">
                        <i className="fa-solid fa-car"></i>
                        <span>Car rentars</span>
                    </div>
                    <div className="header-list__item">
                        <i className="fa-solid fa-bed"></i>
                        <span>Attractions</span>
                    </div>
                    <div className="header-list__item">
                        <i className="fa-solid fa-taxi"></i>
                        <span>Airport taxis</span>
                    </div>
                </div>
                {
                    type !== "list" ? <>
                        <h1 className="header-title">
                            A lifetime of discounts ? It's Genius
                        </h1>
                        <p className="header-description">
                            Get rewarded for your travels - unlock instant savings of 10% or more with a free Booking account
                        </p>
                        <button className="header-button">Sign in / Login</button>
                        <div className="header-search">
                            <div className="header-search__item">
                                <i className="fa-solid fa-bed"></i>
                                <input type="text" placeholder="Where are you going ?" />
                            </div>
                            <div className="header-search__item">
                                <i className="fa-solid fa-calendar-days"></i>
                                <span onClick={() => setOpenDate(!openDate)}>
                                    {format(date[0].startDate, "dd,MM,yyyy")} to {format(date[0].endDate, "dd,MM,yyyy")}
                                </span>
                                {
                                    openDate
                                    &&
                                    <DateRange
                                        editableDateInputs={true}
                                        onChange={(item) => setDate([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={date}
                                        className="date"
                                        minDate={new Date()}
                                    />
                                }
                            </div>
                            <div className="header-search__item">
                                <i className="fa-solid fa-calendar-days"></i>
                                <span onClick={() => setOpenOptions(!openOptions)}>{options.adult} adults {options.children} children {options.room} room</span>
                                {
                                    openOptions && <div className="options">
                                        <div className="options-item">
                                            <span>Adult</span>
                                            <div className="options-item__buttons">
                                                <button disabled={options.adult <= 1} className="item-buttons__button" onClick={() => handleOptions("adult", "d")}>-</button>
                                                <span className="item-buttons__title">{options.adult}</span>
                                                <button className="item-buttons__button" onClick={() => handleOptions("adult", "i")}>+</button>
                                            </div>
                                        </div>
                                        <div className="options-item">
                                            <span>Children</span>
                                            <div className="options-item__buttons">
                                                <button disabled={options.children === 0} className="item-buttons__button" onClick={() => handleOptions("children", "d")}>-</button>
                                                <span className="item-buttons__title">{options.children}</span>
                                                <button className="item-buttons__button" onClick={() => handleOptions("children", "i")}>+</button>
                                            </div>
                                        </div>
                                        <div className="options-item">
                                            <span>Room</span>
                                            <div className="options-item__buttons">
                                                <button disabled={options.room <= 1} className="item-buttons__button" onClick={() => handleOptions("room", "d")}>-</button>
                                                <span className="item-buttons__title">{options.room}</span>
                                                <button className="item-buttons__button" onClick={() => handleOptions("room", "i")}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                            <button className="header-search__button">Search</button>
                        </div>
                    </> : null
                }
            </div>
        </div>
    )
}
