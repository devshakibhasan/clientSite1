import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './Service.css';

const Service = ({service}) => {
    const {_id, name, img, description, price, quantity, supplier} = service;
    const navigate = useNavigate();

    const navigateToProductDetail = id =>{
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='service'>
             <Card className='productCard1 border-0'>
                <div>  <Card.Img variant="top" src={img} className='card-img' /></div>

                <Card.Body className='cardBody'>
                    <Card.Title> <a href=""><h2>{name}</h2></a> </Card.Title>
                    <Card.Title>   <p>Price: ${`${price}`}</p></Card.Title>
                    <Card.Text>
                        <p className='p'>{description}</p>
                    </Card.Text>

                    <Card.Text>
                        <p>Quantity: <small>{quantity}</small></p>
                    </Card.Text>
                    {/* <Card.Text>
                        <p>Supplier: <small>{supplier}</small></p>
                    </Card.Text> */}
                    <button onClick={() => navigateToProductDetail(_id)} className='btn btn-primary'>Update</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;