import "./components.css"

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <span className="navbar-container__logo">Booking</span>
                <div className="navbar-container__items">
                    <button className="container-items__button">Register</button>
                    <button className="container-items__button">Login</button>
                </div>
            </div>
        </div>
    )
}
