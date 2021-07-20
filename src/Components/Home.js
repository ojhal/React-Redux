import React from 'react'
function Home() {
  return (
    <div>
      <div className="add-to-cart">
        <img src="https://icon-library.com/images/ecommerce-icon/ecommerce-icon-28.jpg" />
      </div>
      <h1>Home Component </h1>
      <div className="cart-wrapper">
        <div className="text-wrapper item">
          <span>
            I-phone
          </span>
          <br />
          <span>
            Price: $1000.00
          </span>

        </div>
        <br />
        <div className="btn-wrapper item">
          <button>Add to cart</button>

        </div>
      </div>
    </div>
  )
}
export default Home;