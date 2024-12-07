import "./components.css"

export default function Mail() {
    return (
        <div className="mail">
            <h1>Save time, save money !</h1>
            <span>Sign up and we'll send the best deals to you</span>
            <div className="mail-input__container">
                <input type="text" placeholder="Your email" />
                <button>Subscribe</button>
            </div>
        </div>
    )
}
