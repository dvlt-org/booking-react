import React, { useState } from 'react'
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Mail from "../components/Mail"
import Footer from "../components/Footer"
import "./pages.css"

export default function Hotel() {
  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];
  const handleMove = (direction) => {
    let newSlideNumber
    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
    }
    setSlideNumber(newSlideNumber)
  }

  return (
    <div className='hotel'>
      <Navbar />
      <Header type={"list"} />
      <div className="hotel-container">
        {
          open &&
          <div className="slider">
            <div className="sliderWrapper">
              <i className="fa-solid fa-arrow-left arrow" onClick={() => handleMove('l')}></i>
              <i className="fa-solid fa-xmark x-mark" onClick={() => setOpen(false)}></i>
              <img src={photos[slideNumber].src} alt={photos[slideNumber].src} />
              <i className="fa-solid fa-arrow-right arrow" onClick={() => handleMove('r')}></i>
            </div>
          </div>
        }
        <div className="hotel-wrapper">
          <button className="hotel-wrapper__button">Reserve or Buy Now !</button>
          <h1>Grand Hotel</h1>
          <div className="wrapper-titles">
            <i className="fa-solid fa-location-dot"></i>
            <span>Elton st 125 New york</span>
          </div>
          <span className='wrapper-titles__excellent'>Excellent location - 500m from center</span>
          <span className='wrapper-titles__taxi'>Book a stay over $114 at this property and get a free airport taxi</span>
          <div className="hotel-imgWrapper">
            {photos.map((item, index) => (
              <div key={item.src} className='imgWrapper-item'>
                <img src={item.src} alt={item.src} className='imgWrapper-img' onClick={() => {
                  setSlideNumber(index)
                  setOpen(true)
                }} />
              </div>
            ))}
          </div>
          <div className="hotel-details">
            <div className="hotelDetails-titles">
              <h1>Stay in the heart of Krakow</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis asperiores, nemo unde iusto esse laborum non enim minus sed voluptas provident! Voluptatum saepe dolorem sapiente asperiores quas quis repellendus provident.</p>
            </div>
            <div className="hotelDetails-price">
              <h1>Perfectly for a 9-night stay!</h1>
              <span>Located in the real heart of Stay, Lorem, ipsum dolor sit amet consectetur adipisicing elit</span>
              <div className="hotelDetails-price__titles">
                <span>$124</span>
                <p>(9 nights)</p>
              </div>
              <button>Reserve or Buy now !</button>
            </div>
          </div>
        </div>
      </div>
      <Mail />
      <Footer />
    </div>
  )
}
