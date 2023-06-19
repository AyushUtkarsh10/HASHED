import React from "react";

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

import logo from "../../images/logo.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer">Market</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Exchange</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Tutorials</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Wallets</p>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">For any queries/suggestions, feel free to connect with me</p>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full gradient-bg-footer">
      <a href="https://github.com/AyushUtkarsh10">
                <p className="text-white text-base py-2"><FaGithub className="text-white" /></p>
           </a>
       <a href="https://www.linkedin.com/in/ayushutkarsh10/">
              <p className="text-white text-base py-2"><FaLinkedin className="text-white" /></p>
           </a>
       <a href="mailto:ayushutkarsh1012@gmail.com">
              <p className="text-white text-base py-2"><FaEnvelope className="text-white" /></p>
           </a>
      </div>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">HA$HED 2023</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;