import React from 'react';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import appointment from '../../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <section style={{background: `url(${appointment})`}} className="py-12 mt-10">
            <div className='text-center'>
                <p className='text-secondary text-xl'>Contact Us</p>
                <p className='text-3xl text-white'>Stay Connection With Us</p>
                <form >
                    <input className="w-80 h-12 p-2 rounded-md mt-6 mb-2" type="text" placeholder='Your Email' /><br />
                    <input className="w-80 h-12 p-2 rounded-md my-2" type="text" placeholder='Subject' /><br />
                    <input className="w-80 h-40 p-2 rounded-md mt-2 mb-9" type="text" placeholder='Write Your Message' /><br />
                    <PrimaryButton > Submit </PrimaryButton>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;