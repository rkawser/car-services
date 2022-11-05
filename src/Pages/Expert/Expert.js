import React from 'react';
import { Card } from 'react-bootstrap';
import Slider from 'react-slick';
import expert1 from '../../images/experts/expert-1.jpg';
import expert2 from '../../images/experts/expert-2.jpg';
import expert3 from '../../images/experts/expert-3.jpg';
import expert4 from '../../images/experts/expert-4.jpg';
import expert5 from '../../images/experts/expert-5.jpg';
import expert6 from '../../images/experts/expert-6.png';



const Expert = () => {
    const experts = [
        { id: 1, name: 'will smith', img: expert1 },
        { id: 2, name: 'chris rock', img: expert2 },
        { id: 3, name: 'swyane rock', img: expert3 },
        { id: 4, name: 'jems ken', img: expert4 },
        { id: 5, name: 'rolando', img: expert5 },
        { id: 6, name: 'tens ji', img: expert6 },
    ]
   const settings = {
        dots: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div id='expert'  className='container my-5'>
            <h2 className='my-3 text-primary'>Our Experts</h2>
            <Slider {...settings}>
                {
                    experts.map(expert => <Card key={expert.id} className='w-75'>
                        <Card.Img variant="top" src={expert.img} />
                        <Card.Body>
                            <Card.Title>{expert.name}</Card.Title>
                        </Card.Body>
                    </Card>)
                }
            </Slider>

        </div>
    );
};

export default Expert;