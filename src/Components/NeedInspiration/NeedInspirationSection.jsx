import React from 'react';
import './NeedInspirationSection.css';
import Container from 'react-bootstrap/Container';

function NeedInspirationSection() {
  return (
    <div className='need-inspiration-section py-5 position-relative'>
        <div className='bg-shape position-absolute'></div>
        <Container>
            <div className="row">
                <div className='col-md-4 z-2'>
                    <h2 className='text-start text-light text-capitalize fw-semibold'>Contact us</h2>
                    <p className='text-start text-light'>Feel free to email us at: traveladvisor@gmail.com or call us at 0964673647 to book your next dream vacation.</p>
                    
                </div>
            </div>
        </Container>
    </div>
  )
}

export default NeedInspirationSection;