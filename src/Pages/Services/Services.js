import React from 'react';
import useServices from '../../Hooks/Useservices';
import Service from '../Service/Service';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
    const [services]=useServices({})
    return (
        <div id='service' className='my-5'>
            <h2 className='text-primary'>Our services</h2>
            <div className='row m-2'>
                {
                    services.map(service=> <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;