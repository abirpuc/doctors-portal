import React from 'react';
import flouride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {

    const servicesData = [
        {
            id: '1',
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: flouride,
        },
        {
            id: '2',
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: cavity,
        },
        {
            id: '3',
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: whitening,
        },
        
    ]

    return (
        <div>
            <div className='text-center mt-32'>
                <p className='text-primary text-xl uppercase'>Our service</p>
                <p className='text-2xl'>Services We Provided</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:mx-auto gap-8 mt-16'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service = {service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;