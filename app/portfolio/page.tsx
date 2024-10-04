import Header from '@components/Header';
import Hero from '@components/Hero';

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolios | MyWebsite",
  description: "Welcome to the Projects of MyWebsite",
};

const PortfolioPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
};

export default PortfolioPage;