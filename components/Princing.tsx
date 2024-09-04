'use client'

import { PRICES } from '@/constants'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';

const Pricing = () => {
  return (
    <section id='pricing' className="flex-col flexCenter overflow-hidden py-24">
      <h2 className="bold-40 lg:bold-64 mb-24"><span className='text-blue-400'>Pricing</span></h2>

      <div className="max-container padding-container relative w-full flex justify-center gap-12">
        {PRICES.map((price) => {
          return (
            <ClientCard
              key={price.title}
              title={price.title}
              price={price.price}
              buttonText={price.buttonText}
              description={price.description}
              features={price.features} />
          )
        })}
      </div>
    </section>
  )
}

type ClientCard = {
  title: string;
  price: string;
  buttonText: string;
  features: string[];
  description: string;
}

const ClientCard = ({ title, price, buttonText, description, features }: ClientCard) => {
  return (
    <motion.div
      className="bg-white text-gray-900 shadow-lg rounded-lg overflow-hidden max-w-sm mx-auto transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-4xl font-semibold text-blue-400 mb-6">{price}</p>
        <p className="text-lg text-gray-600 mb-8">{description}</p>
        <ul className="text-lg mb-8 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-3">
              <svg
                className="w-6 h-6 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <button className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold shadow-md hover:bg-blue-600 transition-colors transform hover:scale-105">
          {buttonText}
        </button>
      </div>
    </motion.div>
  );
}

export default Pricing