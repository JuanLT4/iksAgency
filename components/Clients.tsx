import { CLIENTS } from '@/constants';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';
import Link from 'next/link';

const Clients = () => {
  return (
    <section id="clients" className="flex-col flexCenter overflow-hidden py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-20 flex w-full flex-col lg:w-[60%]"
        >
          <div className="relative">
            <h2 className="bold-40 lg:bold-64">
              Our <span className="text-blue-400">Clients</span>
            </h2>
          </div>
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2, // Stagger each ClientItem
                },
              },
            }}
            className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20"
          >
            {CLIENTS.map((client) => (
              <ClientItem
                key={client.title}
                title={client.title}
                icon={client.icon}
                description={client.description}
                variant={client.variant}
                href={client.href}
              />
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-1 lg:min-h-[900px]"
        >
          <Image
            src="/clients.jpeg"
            alt="phone"
            width={400}
            height={400}
            className="feature-phone2 rounded-full img-transition hover-scale"
          />
          <Image
            src="/clients.jpeg"
            alt="phone"
            width={400}
            height={400}
            className="feature-phone2 rounded-full img-transition hover-scale"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;

type ClientItem = {
  title: string;
  icon: any;
  description: string;
  variant?: string;
  href: string;
};

const ClientItem = ({ title, icon, description, variant, href }: ClientItem) => {
  return (
    <Link href={href}>
      <motion.li
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex w-full flex-1 flex-col items-start"
      >
        <div
          className={`rounded-full p-4 lg:p-7 ${variant === 'green'
              ? 'bg-green-50'
              : variant === 'orange'
                ? 'bg-orange-50'
                : variant === 'blue'
                  ? 'bg-blue-400'
                  : ''
            } img-transition hover-scale cursor-pointer icon-wrapper`}
        >
          {icon}
        </div>
        <h2 className="bold-20 lg:bold-32 mt-5 capitalize  img-transition hover-scale cursor-pointer text-wrapper">
          <span className="text-blue-400">{title.substring(0, 1)}</span>
          {title.substring(1)}
        </h2>
        <p className="regular-16 rounded-md p-4 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none img-transition hover-scale cursor-pointer">
          {description}
        </p>
      </motion.li>
    </Link>
  );
};
