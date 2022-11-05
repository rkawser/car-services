import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId}= useParams()
    return (
        <div>
            <h2>this is service detail page {serviceId} </h2>
        </div>
    );
};

export default ServiceDetail;