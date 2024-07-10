import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const OurGallery = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const slides = [
        {
            src: "https://img.freepik.com/premium-photo/modern-beauty-salon-interior_896558-4779.jpg",
            alt: "Modern beauty salon interior"
        },
        {
            src: "https://img.freepik.com/free-photo/vintage-chairs-barbershop_155003-10155.jpg",
            alt: "Vintage chairs in a barbershop"
        },
        {
            src: "https://img.freepik.com/premium-photo/interior-small-modern-beauty-salon_260036-385.jpg",
            alt: "Interior of a small modern beauty salon"
        },
        {
            src: "https://img.freepik.com/premium-photo/interior-small-modern-beauty-salon_260036-385.jpg",
            alt: "Interior of a small modern beauty salon"
        }
    ];



    return (
        <div>
            <section className="py-14">
                <div className='pt-16'></div>
                <div className='pt-16'></div>
                <div className="max-w-screen-xl mx-auto md:px-8">
                    <div className="items-center  gap-x-12 sm:px-4 md:px-0 lg:flex">
                        <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">

                            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                                Urban Edge Elegance
                            </p>
                            <p className="mt-3 text-gray-600">
                                Step into our Gallery Page and immerse yourself in the refined beauty of our salon interior. Here, you’ll find a collection of images showcasing our thoughtfully designed spaces, luxurious decor, and the serene ambiance we’ve created for our clients. Each photo captures the essence of our commitment to style, comfort, and elegance. Explore the visual journey through our salon and get inspired by the sophisticated environment we take pride in.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="max-w-screen-lg mx-auto mt-10">
                <Slider {...settings}>
                    {slides.map(slide => {
                        return (
                            <div className="p-4">
                                <div className="bg-blue-500 h-96 flex items-center justify-center text-white text-2xl">
                                    <img
                                        src={slide.src}
                                        alt={slide.alt}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        )
                    })}

                </Slider>
            </div>
            <div className='pt-16'></div>
            <div className='pt-16'></div>
        </div>
    )
}

export default OurGallery
