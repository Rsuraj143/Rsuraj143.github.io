import "./PricingCard.css"


import React from 'react'
import { Link } from "react-router-dom"

const PricingCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>- Basic -</h3>
                <span className="bar"></span>
                <p className="btc">$ 100</p>
                <p>- 3 Days -</p>
                <p>- 3 Page -</p>
                <p>- Featured -</p>
                <p>- Resonsive Design -</p>
                <Link to="/contact" className="btn" > PURCHASE NOW</Link>
            </div>
            <div className="card">
                <h3>- Premium -</h3>
                <span className="bar"></span>
                <p className="btc">$ 200</p>
                <p>- 2 Days -</p>
                <p>- 5 Page -</p>
                <p>- Featured -</p>
                <p>- Resonsive Design -</p>
                <Link to="/contact" className="btn" > PURCHASE NOW</Link>
            </div>
            <div className="card">
                <h3>- Bussiness -</h3>
                <span className="bar"></span>
                <p className="btc">$ 300</p>
                <p>- 5 Days -</p>
                <p>- 5 Page -</p>
                <p>- Featured -</p>
                <p>- Resonsive Design -</p>
                <Link to="/contact" className="btn" > PURCHASE NOW</Link>
            </div>           
        </div>
    </div>
  )
}

export default PricingCard