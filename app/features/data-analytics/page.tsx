'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { DATA_ANALYTICS } from '@/constants';

const DataAnalytics = () => {
    return (
        <motion.section
            id="data-analytics"
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
                    Data <span className="text-blue-400"> Analytics</span>
                    </h1>
                    <p className="regular-20 mt-6 text-gray-700 lg:text-center max-w-4xl">
                    Turn data into your most valuable asset with our advanced Data Analytics services. We empower organizations to make data-driven decisions with confidence, providing real-time insights, predictive modeling, and intuitive visualizations. Our comprehensive approach covers everything from big data management to governance and quality assurance, ensuring you can trust the data driving your business forward. Discover hidden patterns, forecast trends, and optimize operations with our powerful analytics solutions.
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
                    {DATA_ANALYTICS.map((service, idx) => (
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
                        Learn More About Our Data Analytics Services
                    </motion.button>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default DataAnalytics;
