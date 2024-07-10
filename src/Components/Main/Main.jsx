import React, { useEffect } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
import backgroundImg from '../../assets/Saloon-Bg.jpg';
import { Link } from 'react-router-dom';



function Main() {

    useEffect(() => {
        const typeSplit = new SplitType('[animate]', {
            types: 'lines, words, chars',
            tagName: 'span'
        });
        const pSplit = new SplitType('[panim]', {
            types: 'lines, words, chars',
            tagName: 'span'
        });

        gsap.from('[panim] .line', {
            y: '100%',
            opacity: 0,
            duration: 1,
            ease: 'power4.out',
            stagger: 0.25,
        })


        gsap.from('[animate] .word', {
            y: '0',
            opacity: 0,
            duration: 0.5,
            ease: 'power3.out',
            stagger: 0.25,
        });
        gsap.to('[animate] .word', {
            y: '-100%',
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            stagger: 0.25,
        });
    }, []);

    return (

        <div>
            <div className=" relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImg})` }}>
                <div className="pt-16 absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center">
                    <div className="text-center text-gray-800 ">
                        <h1 className="text-3xl sm:text-5xl  md:text-6xl lg:text-6xl xl:text-7xl font-bold uppercase" animate="true">
                            Raw. Bold. Silky Hair.
                        </h1>
                        <p className="text-lg md:text-xl mb-1" panim="true">Own Your Look. Own Your Edge</p>
                        <p className="text-lg md:text-xl mb-1" panim="true">Get the look you love at our  salon.</p>
                        <Link to='/contact' >
                            <button
                                className="mt-6 px-6 py-3.5 bg-white text-black font-bold rounded-lg duration-150 hover:bg-gray-100 active:bg-gray-200  ">
                                Book Now
                            </button>

                        </Link>
                    </div>
                </div>
            </div>

        </div>




    )
}

export default Main
