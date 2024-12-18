'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { DEMO } from '@/constants';

const Demo = () => {
    return (
        <motion.section
            id="demo"
            className="pb-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="max-container padding-container">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-start justify-center lg:items-center"
                >
                    <h1 className="bold-64 text-gray-900 leading-tight lg:text-center">
                    Demo <span className="text-blue-400"> and Extensions</span>
                    </h1>
                    <p className="regular-20 mt-6 text-gray-700 lg:text-center max-w-4xl">
                    Experience the full potential of our software solutions through our interactive Demos and customizable Extensions. We bring your unique challenges into focus with tailored demonstrations, proof-of-concept development, and seamless integrations. Our flexible approach allows you to extend and customize our core offerings, ensuring a perfect fit for your specific industry needs. From showcasing possibilities to delivering specialized functionalities, we help you maximize the value of your software investments.
                    </p>
                </motion.div>

                {/* Services Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3"
                >
                    {DEMO.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-start p-6 bg-white rounded-lg shadow-lg transition-all hover:shadow-xl"
                        >
                            <h3 className={`text-wrapper bold-32 text-${service.variant}`}>{service.title.split(' ').map((palabra, index) => (
                                <span key={index} className={index % 2 === 0 ? 'text-black' : 'text-blue-400'}>
                                    {palabra}
                                    {index < service.title.length - 1 && ' '} {/* Agrega espacio entre palabras */}
                                </span>
                            ))}</h3>
                            <p className="regular-16 mt-4 text-gray-600">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to Action Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mt-20 flex justify-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="btn_blue text-white px-8 py-5 text-lg rounded-md"
                    >
                        Learn More About Our Demo And Extensions Services
                    </motion.button>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Demo;
