import React from 'react';
import './HeroSection.css';
import Carousel from 'react-bootstrap/carousel';
import GreenBtn from '../GreenBtn/GreenBtn';

function HeroSection() {
  return (
    <div className='hero-section'>
        <Carousel>
            <Carousel.Item className='carousel-item1 vh-100'>
                <Carousel.Caption className='h-100 d-flex flex-column align-items-center justify-content-top'>
                    <div className="row h-100">
                        <div className='col-lg-6 d-flex flex-column align-items-start justify-content-center'>
                            <h1 className='text-capitalize text-start'>Find your ideal getaway</h1>
                            <p className='text-start'>With the help of our experts you could have your next dream vacation planned !</p>
                            <GreenBtn btnTitle='Checkout' btnLink='/holidays' />
                        </div>
                        <div className='col-lg-6 d-none d-lg-block'></div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carousel-item2 vh-100'>
                <Carousel.Caption className='h-100'>
                    <div className="row h-100">
                        <div className='col-lg-6 d-flex flex-column align-items-start justify-content-center'>
                            <h1 className='text-capitalize text-start'>Enjoy City Vibes</h1>
                            <p className='text-start'>Dive into the energy of bustling cities with our curated city breaks. Discover vibrant cultures, iconic landmarks, and unforgettable experiences in the world’s most exciting urban destinations.</p>
                            <GreenBtn btnTitle='Checkout' btnLink='/city-breaks' />
                        </div>
                        <div className='col-lg-6 d-none d-lg-block'></div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carousel-item3 vh-100'>
                <Carousel.Caption className='h-100'>
                    <div className="row h-100">
                        <div className='col-lg-6 d-none d-lg-block'></div>
                        <div className='col-lg-6 d-flex flex-column align-items-end justify-content-center'>
                            <h1 className='text-capitalize text-start'>Checkout the most beautiful places</h1>
                            <p className='text-start'>Explore stunning destinations around the globe, from breathtaking landscapes to picturesque spots. Discover the most beautiful places for your next unforgettable trip.</p>
                            <GreenBtn btnTitle='Checkout' btnLink='/destinations' />
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default HeroSection;