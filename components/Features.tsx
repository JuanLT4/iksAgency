import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <section id='services' className="flex-col flexCenter overflow-hidden py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={400}
            height={400}
            className="feature-phone img-transition hover-scale"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className='relative'>
            {/* <Image
              src="/ai-ai-svgrepo-com.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            /> */}
            <h2 className="bold-40 lg:bold-64">Our <span className='text-blue-400'>Features</span></h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem 
                key={feature.title}
                title={feature.title} 
                icon={feature.icon}
                description={feature.description}
                variant= {feature.variant}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
  variant?: string;
}

const FeatureItem = ({ title, icon, description, variant }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className={`rounded-full p-4 lg:p-7 ${variant == 'green' ? 'bg-green-50' : variant == 'orange' ? 'bg-orange-50' : variant == 'blue' ? 'bg-blue-400' : ''} img-transition hover-scale cursor-pointer`}>
        <Image src={icon} alt="map" width={40} height={40} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
      <span className='text-blue-400'>{title.substring(0,1)}</span>{title.substring(1,title.length)}
      </h2>
      <p className="regular-16 mt-5 rounded-md p-4 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  )
}

export default Features