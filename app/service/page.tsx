import Header from '../components/Header';
import Hero from '../components/Hero';

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service | MyWebsite",
  description: "Welcome to the Service of MyWebsite",
};

const Services: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
};

export default Services;