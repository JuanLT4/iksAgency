'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { CLOUD, TECHNOLOGY_TRANSFORMATION } from '@/constants';

const TechnologyTransformation = () => {
    return (
        <motion.section
            id="technology-transformation"
            className="py-24"
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
                        C<span className="text-blue-400">LOUD</span>
                    </h1>
                    <p className="regular-20 mt-6 text-gray-700 lg:text-center max-w-4xl">
                    Unlock the full potential of cloud computing with our end-to-end Cloud services. We architect, implement, and manage robust cloud solutions that drive agility, scalability, and cost-efficiency. Whether you're taking your first steps into the cloud or optimizing a complex multi-cloud environment, our experts ensure a seamless journey. With a focus on security, compliance, and performance, we help you harness the cloud to accelerate innovation and stay ahead in today's fast-paced business landscape.
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
                    {CLOUD.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-start p-6 bg-white rounded-lg shadow-lg transition-all hover:shadow-xl"
                        >
                            <h3 className={`bold-32 text-${service.variant}`}>{service.title.split(' ').map((palabra, index) => (
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
                        Learn More About Our Technology Services
                    </motion.button>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default TechnologyTransformation;
