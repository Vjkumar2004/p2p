import React from 'react'
import './App.css'

function FrondPage() {
  return (
    <div className="banner-container">
      <div className="banner">
        <h1>Booking Now</h1>
        <button>Delivery Now</button>
        <form className="detailsForm">
          <input type="text" className="city" placeholder="City" />
          <input type="text" className="from" placeholder="Moving from" />
          <input type="text" className="to" placeholder="Moving to" />
        </form>
        <video autoPlay loop muted className="banner-vdo">
          <source src='../src/assets/banner-video.mp4' type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='services'>
        <h1>Our <span style={{ color: 'red' }}>Services</span></h1>
      </div>
      <div className='service'>
        <div className='card1'>
          <div className='img-wrapper'>
            <img src='../src/assets/auto.jpg' />
          </div>
        </div>
        <div className='card2'>
          <div className='img-wrapper'>
            <img src='../src/assets/lorry.jpg' />
          </div>
        </div>
        <div className='card3'>
          <div className='img-wrapper'>
            <img src='../src/assets/image3.jpg' />
          </div>
        </div>
        <div className='card4'>
          <div className='img-wrapper'>
            <img src='../src/assets/image4.jpg' />
          </div>
        </div>
      </div>
      <div className='populer-city'>
        <h1>Populer <span style={{ color: 'red' }}>Cities</span></h1>
        <div className='city-cards'>
          <div className='city-card'>
            <img src='../src/assets/sivakasi.jpg' alt='Sivakasi' />
            <div className='city-name'>Sivakasi</div>
          </div>
          <div className='city-card'>
            <img src='../src/assets/madurai.jpg' alt='Madurai' />
            <div className='city-name'>Madurai</div>
          </div>
          <div className='city-card'>
            <img src='../src/assets/theni.jpg' alt='Theni' />
            <div className='city-name'>Theni</div>
          </div>
          <div className='city-card'>
            <img src='../src/assets/coimbatore.jpg' alt='Coimbatore' />
            <div className='city-name'>Coimbatore</div>
          </div>
          <div className='city-card'>
            <img src='../src/assets/chennai.jpg' alt='Chennai' />
            <div className='city-name'>Chennai</div>
          </div>
        </div>
      </div>

    </div>
  );

}

export default FrondPage