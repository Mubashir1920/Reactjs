import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Aboutus = () => {

    const imgRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
          imgRef.current,
          { y: 10 },
          {
            y: -10,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
          }
        );
      }, []);


    return (
        <section className="py-14">
            <div className='pt-16' ></div>
            <div className="max-w-screen-xl mx-auto px-4  gap-x-12 justify-between md:flex md:px-8">
                <div className="max-w-xl">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        About Us
                    </h3>
                    <p className="mt-3 text-gray-600">
                        We pride ourselves on using the highest quality products and the latest techniques in the industry. Whether you’re here for a stylish haircut, a transformative color treatment, or a relaxing spa service, you can trust that you’re in expert hands.
                    </p>
                    <p className="mt-3 text-gray-600">
                        At <strong>Urban Edge</strong> , our mission is to elevate your natural beauty and boost your confidence. We believe that everyone deserves to look and feel their best, and we are committed to making that a reality for each of our clients. Thank you for choosing us as your beauty destination – we can’t wait to welcome you!
                    </p>
                </div>
                <div className="flex-none mt-4 md:mt-0">

                    <img ref={imgRef} class="rounded-full w-96 h-96" src="https://images.unsplash.com/photo-1695527081793-91a2d4b5b103?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image description" />

                </div>
            </div>
            <div className='pt-16' ></div>
            <div className='pt-16' ></div>
            <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
                <div className="max-w-xl md:mx-auto">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Connect With Us!
                    </h3>
                    <p className="mt-3 text-gray-600">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.
                    </p>
                </div>
                <div className="flex gap-3 items-center mt-4 md:justify-center">
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Aboutus
