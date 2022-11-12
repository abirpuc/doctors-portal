import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const Dental = () => {
    return (
        <div className="hero mt-36 flex justify-between shadow-2xl">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} className="w-1/4 h-3/4 rounded-lg shadow-2xl" alt=""/>
                <div className='w-1/2 p-6'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Dental Service</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Dental;