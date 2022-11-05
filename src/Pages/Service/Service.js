import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
const {id,img,name,description } = service
    return (
        <div className='container col-lg-4 col-md-6 col-sm-12 g-4'>
            <Card className='w-100'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                       {description}
                    </Card.Text>
                    <Link to={`service/${id}`}><Button variant="primary">Go somewhere</Button></Link>
                   
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;