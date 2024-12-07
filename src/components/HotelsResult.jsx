import "./components.css"

export default function HotelsResult() {
    return (
        <div className='hResult'>
            <div className="hResult-item">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1" alt="" />
                <div className="hResult-item__title">
                    <h1 className="title-tower">Tower Street Apartement</h1>
                    <span className="title-m">500m from center</span>
                    <span className="title-taxi">Free airport taxi</span>
                    <span className="title-featured">
                        Entire studio • 1 bathroom • 21m² 1 full bed
                    </span>
                    <span className="title-calcel">Free cancellation </span>
                    <span className="title-subtitle">
                        You can cancel later, so lock in this great price today!
                    </span>
                </div>
                <div className="hResutl-item__details">
                    <div className="detail-rating">
                        <span>Excellent</span>
                        <button>8.9</button>
                    </div>
                    <div className="detail-titles">
                        <span className="detail-titles__price">$112</span>
                        <span className="detail-titles__fees">Includes taxes and fees</span>
                        <button>See availability</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
