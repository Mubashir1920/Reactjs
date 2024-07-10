import React, { useEffect, useRef } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import Stat from '../Stat/Stat';
import gsap from 'gsap';
import SplitType from 'split-type';

const Ourervices = () => {

    const itemref = useRef();

    useEffect(() => {

        let typeSplit = new SplitType('[animate]', {
            types: 'lines, words, chars',
            tagName: 'span'
        })
        let ptypeSplit = new SplitType('[panimate]', {
            types: 'lines, words, chars',
            tagName: 'span'
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

        gsap.from('[panimate] .line', {
            y: '100%',
            opacity: 0,
            duration: 0.4,
            ease: 'sine.out',
            stagger: 0.2,

        })

        const boxes = gsap.utils.toArray(itemref.current.children);


        boxes.map(box => {
            gsap.from(box, {
                opacity: 0,
                y: 200,
                duration: 1,
                delay: 0.5,
                ease: 'power2.out',
                stagger: 0.2,
            })
            gsap.to(box, {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 0.5,
                ease: 'power2.out',
                stagger: 0.2,
            })
        })
    }, [])
    const service = [
        {
            avatar: "https://plus.unsplash.com/premium_photo-1676677521624-a32fb02e3c05?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Haircut and Styling",
            description: "Our professional haircuts and styling services will leave you looking and feeling your best."
        },
        {
            avatar: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Hair Coloring",
            description: "Transform your look with our expert hair coloring services, offering a range of vibrant and natural shades."
        },
        {
            avatar: "https://plus.unsplash.com/premium_photo-1664537435460-35963d8e413e?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Men's Grooming",
            description: "Our comprehensive men's grooming services include haircuts, beard trims, and more."
        },
        {
            avatar: "https://plus.unsplash.com/premium_photo-1682092547445-236e0c102ca1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Nail Care",
            description: "Enjoy a relaxing manicure or pedicure with our top-notch nail care services."
        },
        {
            avatar: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Facials and Skincare",
            description: "Rejuvenate your skin with our range of facials and skincare treatments."
        },
        {
            avatar: "https://images.unsplash.com/photo-1639162906614-0603b0ae95fd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Massage Therapy",
            description: "Relax and unwind with our soothing massage therapy sessions."
        },
        {
            avatar: "https://images.unsplash.com/photo-1595550912256-b24059bb08e8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Makeup Services",
            description: "Look your best for any occasion with our professional makeup services."
        },
    ]



    return (
        <div className="py-14" >
            <div className='p-14'></div>
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl mx-auto sm:text-center">
                    <h3 animate="true" className="text-gray-800 uppercase font-bold text-3xl font-semibold sm:text-4xl">
                        Our Services
                    </h3>
                    <p panimate="true" className="text-gray-600 mt-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.
                    </p>
                </div>
                <Stat />
                <div className="mt-12">
                    <ul ref={itemref} className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                        {
                            service.map((item, idx) => (
                                <li key={idx}>

                                    <div className="w-full h-60 sm:h-52 md:h-56 rounded-3xl">

                                        <a href="#">
                                            <img
                                                src={item.avatar}
                                                className="w-full h-full object-cover object-center shadow-md rounded-xl rounded-t-lg"
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                    <div class="p-5">
                                        <a href="#">
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{item.name}</h5>
                                        </a>
                                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>

                                    </div>


                                </li>
                            ))
                        }
                    </ul>
                </div>

            </div>
            <div className='p-14'></div>
            <Testimonial />
        </div>
    )
}

export default Ourervices
