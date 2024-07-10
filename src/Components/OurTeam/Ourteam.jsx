import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
import { Link } from 'react-router-dom';


const Ourteam = () => {

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



    const team = [
        {
            avatar: "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
            name: "Martiana dialan",
            title: "Salon Owner/Manager"
        },
        {
            avatar: "https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80",
            name: "Micheal colorand",
            title: "Hairstylist/Hairdresser"
        },
        {
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            name: "Brown Luis",
            title: "Barber"
        },
        {
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            name: "Lysa sandiago",
            title: "Nail Technician/Manicurist/Pedicurist"
        },
        {
            avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            name: "Daniel martin",
            title: "Esthetician/Beauty Therapist"
        },
        {
            avatar: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
            name: "Vicky tanson",
            title: "Massage Therapist"
        },
        {
            avatar: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
            name: "Vicky tanson",
            title: "Makeup Artist"
        },
    ]

    return (
        <section className="py-14">
            <div className='p-14'>

            </div>
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl mx-auto sm:text-center">
                    <h3 animate="true" className="text-gray-800 uppercase font-bold text-3xl font-semibold sm:text-4xl">
                        Our team
                    </h3>
                    <p panimate="true" className="text-gray-600 mt-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.
                    </p>
                </div>
                <div className="mt-12">
                    <ul ref={itemref} className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                        {
                            team.map((item, idx) => (
                                <li key={idx}>
                                    <div className="w-full h-60 sm:h-52 md:h-56">
                                        <img
                                            src={item.avatar}
                                            className="w-full h-full object-cover object-center shadow-md rounded-xl"
                                            alt=""
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <h4 className="text-lg text-gray-700 font-semibold">{item.name}</h4>
                                        <p className="text-indigo-600">{item.title}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div  className='flex justify-center' >
                <Link  to='/contact' className="block py-3 px-4 font-small text-center text-black  active:shadow-none rounded-lg shadow md:inline">
                    Make An Appointment
                </Link>
            </div>
        </section>
    )
}

export default Ourteam
