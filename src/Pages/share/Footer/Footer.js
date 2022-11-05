import React from 'react';

const Footer = () => {

    const date = new Date()
    const year = date.getFullYear()

    return (
        <div>
            <h5>this footer {year}</h5>
        </div>
    );
};

export default Footer;