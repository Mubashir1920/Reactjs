import React from "react";
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';


function Footer() {
  const footerNavs = [
    {
      href: "/services",
      name: "Services",
    },
    {
      href: "/team",
      name: "Our Team",
    },
    {
      href: "/contact",
      name: "Appointment",
    },
    {
      href: "#",
      name: "License",
    },
    {
      href: "#",
      name: "Privacy",
    },
    {
      href: "/aboutus",
      name: "About us",
    },
  ];
  return (
    <footer className="w-full pt-10">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="justify-between sm:flex">
          <div className="space-y-6">
            <Link to='/' ><img src={Logo} className="w-40" /></Link> 
            <p className="max-w-md">
              Sharpen your edge with modern cuts and bold styles at Urban Edge Salon.
            </p>
            <ul className="flex flex-wrap items-center gap-4 text-sm sm:text-base">
              {footerNavs.map((item, idx) => (
                <li className="text-gray-800 hover:text-gray-500 duration-150">
                  <Link key={idx} to={item.href}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
        <div className="mt-10 py-10 border-t md:text-center">
          <p>© 2024 Urban Edge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
