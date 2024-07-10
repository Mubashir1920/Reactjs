import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import classes from './Contact.module.css';
import axios from 'axios';

function Contact() {

    const servicesItems = ["Hair", "Nail", "Body", "Other"];

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        time: '00:00',
        date: ''
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }))
    }

    const submitformhandler = (e) => {
        e.preventDefault()
        window.alert('Form Submitted')
        const data = {
            data: form
        }
        axios.post('https://urbanedge-d4c2a-default-rtdb.firebaseio.com/appointments.json', data)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        setForm({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: '',
            time: '00:00',
            date: ''
        })

    }





    return (

        <div className={classes.contactbox} >
            <Header />
            <main className=" flex overflow-hidden">
                <div className="py-12 mt-10 flex-1 lg:flex lg:justify-center  ">
                    <div className="max-w-lg flex-1 mx-auto px-4 text-gray-600">
                        <div>
                            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                                Book Your Appointment
                            </h3>
                            <p className="mt-3">
                                We’d love to have you! Please fill out the form below.
                            </p>
                        </div>
                        <form
                            onSubmit={submitformhandler}
                            className="space-y-5 mt-12 lg:pb-12"
                        >
                            <div>
                                <label className="font-medium">
                                    Full name
                                </label>
                                <input
                                    type="text"
                                    name='name'
                                    onChange={handleInput}
                                    value={form.name}
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    onChange={handleInput}
                                    name='email'
                                    value={form.email}
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-medium">
                                    Phone number
                                </label>
                                <div className="relative mt-2">
                                    <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                                        <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                                            <option>PK</option>
                                            <option>US</option>
                                        </select>
                                    </div>
                                    <input
                                        type="number"
                                        onChange={handleInput}
                                        value={form.phone}
                                        name='phone'
                                        placeholder="+1 (555) 000-000"
                                        required
                                        className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                                    />
                                </div>
                            </div>
                            <label for="time" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select time:</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <input type="time"  onChange={handleInput} value={form.time} name='time' id="time" class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" min="09:00" max="18:00" required />
                            </div>
                            <div className="flex flex-col items-center">
                                <label htmlFor="date" className="mb-2 text-gray-700">Select a date:</label>
                                <input
                                    type="date"
                                    id="date"
                                    value={form.date}
                                    onChange={handleInput}
                                    name='date'
                                    className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {
                                    <p className="mt-4 text-gray-700">Selected Date: {form.date}</p>
                                }
                            </div>
                            <div>
                                <label className="font-medium">
                                    Services
                                </label>
                                <ul className="grid gap-y-2 gap-x-6 flex-wrap grid-cols-2 mt-3">
                                    {
                                        servicesItems.map((item, idx) => (
                                            <li key={idx} className="flex gap-x-3 text-sm">
                                                <div>
                                                    <input id={`service-${idx}`} value={form.service} type="checkbox"
                                                        onChange={handleInput} name='service' className="checkbox-item peer hidden" />
                                                    <label
                                                        htmlFor={`service-${idx}`}
                                                        className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                                                    >
                                                    </label>
                                                </div>
                                                <label htmlFor={`service-${idx}`} className="cursor-pointer">{item}</label>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div>
                                <label className="font-medium">
                                    Message
                                </label>
                                <textarea value={form.message}
                                    onChange={handleInput} name='message' required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"></textarea>
                            </div>
                            <button type='submit'
                                className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Contact


