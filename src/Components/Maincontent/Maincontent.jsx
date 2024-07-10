import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/src/all';




gsap.registerPlugin(ScrollTrigger)

const Maincontent =()=> {


    useEffect(() => {

        gsap.fromTo(
            '.contentbox',
            {
                y: '200%',
                opacity: 0,
            },
            {
                y: '0',
                opacity: 1,
                duration: 1.5,
                ease: 'back.out',
                stagger: 1,
                scrollTrigger: {
                    trigger: '.contentbox',
                    start: 'top 90%', // Adjust this as needed
                    end: 'top 50%',
                    scrub: true,
                },
            }
        );
    }, []);
    return (
        <main className="pt-10 flex flex-col sm:flex-row justify-center items-center min-h-screen bg-white p-4 sm:p-8">
            <div className=" flex flex-col justify-center items-center p-4 rounded-lg max-w-sm mx-auto ">
                <div className='contentbox  p-7 rounded-lg flex flex-col justify-center items-center' style={{ marginBottom: '5rem' }}>
                    <h2 className="text-2xl mb-2">Contact Information</h2>
                    <p className="text-gray-700">Phone: (123) 456-7890</p>
                    <p className="text-gray-700">Email: contact@salon.com</p>
                </div>
                <div className='contentbox  p-7 rounded-lg flex flex-col justify-center items-center' style={{ marginBottom: '5rem' }} >
                    <h2 className="text-2xl mb-2">Address</h2>
                    <p className="text-gray-700">123 Main Street</p>
                    <p className="text-gray-700">City, State, ZIP Code</p>
                </div>
                <div className='contentbox  p-7 rounded-lg flex flex-col justify-center items-center'>
                    <h2 className="text-2xl mb-2">Salon Timings</h2>
                    <p className="text-gray-700">Monday : 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-700">Tuesday : 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-700">Wednesday : 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-700">Thursday : 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-700">Friday : 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-700">Saturday: 10:00 AM - 5:00 PM</p>
                    <p className="text-gray-700">Sunday: Closed</p>
                </div>
            </div>
        </main>

    )
}

export default Maincontent
