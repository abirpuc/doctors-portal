import React from 'react';

const UserReview = ({ userReview }) => {
    const { img, name, location, review } = userReview
    return (
        <div className="card shadow-xl mt-6">
            <div className="card-body">
                <p>{review}</p>
                <div className="card-actions justify-start items-center mt-4">
                    <div className="avatar mr-4">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} />
                        </div>
                    </div>
                    <div>
                        <p>{name}</p>
                        <p>{location}</p>  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserReview;