import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Rating from 'react-rating';


import './CustomerReviews.css'


const CustomerReviews = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(` `)
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);
    return (
        <div className=" bg-dark text-white pb-5 pt-1 my-5">
            <div className="text-center pt-5 pb-3">
                <h1 style={{ fontSize: "40px" }}>Customer Reviews</h1>
            </div>
            <hr />
            <Carousel>
                {
                    reviews?.map(
                        review =>
                            <Carousel.Item key={review._id}>
                                <div className="d-flex justify-content-center text-center review-slider">
                                    <div className="w-50">
                                        <h3 className="color-white">{review?.name}</h3>
                                        <br />
                                        <p>  {review?.review}</p>

                                        <Rating className="star"
                                            initialRating={Number(review.rating)}
                                            emptySymbol="far fa-star icon-color"
                                            fullSymbol="fas fa-star icon-color"
                                            readonly></Rating>
                                    </div>
                                </div>
                            </Carousel.Item>
                    )
                }

            </Carousel>

        </div>
    );
};

export default CustomerReviews;