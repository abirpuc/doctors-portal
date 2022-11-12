import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const InfoCards = () => {
    const cardData = [
        {
            id: '1',
            name:'Opening Hours',
            description: 'Open time 9:00Am to 5:00Pm',
            icon: clock,
            bg:'bg-gradient-to-r from-secondary to-primary'
        },
        {
            id: '2',
            name:'Our Location',
            description: 'Noakhali Super Market 5th floor',
            text:'text-white',
            icon: marker,
            bg:'bg-accent'
        },
        {
            id: '3',
            name:'Contact Us now',
            description: '+880188377237238',
            icon: phone,
            bg:'bg-gradient-to-r from-secondary to-primary'
        },
        
    ]
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-12'>
           {
             cardData.map(card => <InfoCard
                key = {card.id}
                card = {card}
             ></InfoCard>)
           }
        </div>
    );
};

export default InfoCards;