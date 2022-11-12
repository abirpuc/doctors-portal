import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import UserReview from './UserReview';

const Testimonial = () => {

    const userReview = [
        {
            _id: "1",
            name: "Willson Herry",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people1,
            location: "california"
        },
        {
            _id: "2",
            name: "Willson Herry",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people2,
            location: "california"
        },
        {
            _id: "3",
            name: "Willson Herry",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people3,
            location: "california"
        },
        
    ]
    return (
        <section className='mt-12'>
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-primary text-2xl'>Testimonial</h1>
                    <p className='text-4xl mt-2'>What Our patients Says</p>
                </div>
                <figure className='w-48 h-40'>
                    <img src={quote} alt="" />
                </figure>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    userReview.map(review => <UserReview
                        key={review.id}
                        userReview = {review}
                    ></UserReview>)
                }
            </div>
        </section>
    );
};

export default Testimonial;