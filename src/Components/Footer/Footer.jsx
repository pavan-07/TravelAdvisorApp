import React from 'react';
import Copyright from '../../Assets/Icons/c-circle.svg';

function Footer() {
  return (
    <div className='py-3'>
        <p className='mb-0'>
            Copyright
            <img src={Copyright} className='mx-1' alt="copyright" />
            TravelAdvisor.com 2024 - Aanchal and Pavan.
        </p>
    </div>
  )
}

export default Footer;