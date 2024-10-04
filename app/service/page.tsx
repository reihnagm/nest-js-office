

import React from 'react';

import Header from '@components/Header';
import Hero from '@components/Hero';
import Service from '@components/Service';


import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Service | MyWebsite",
  description: "Welcome to the Service of MyWebsite",
};

const ServicePage: React.FC = () => {

  return (
    <div>
      <Header />
      <Hero />
      <Service />
    </div>
  );
};

export default ServicePage;
