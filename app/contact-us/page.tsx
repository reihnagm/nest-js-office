import Header from '../components/Header';
import Hero from '../components/Hero';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us | MyWebsite",
  description: "Welcome to the Contact Us of MyWebsite",
};

const ContactUs: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
};

export default ContactUs;