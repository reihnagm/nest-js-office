import Header from '@components/Header';
import Hero from '@components/Hero';
import Service from '@components/Service';
import Portfolio from '@components/Portfolio';
import AboutUs from '@components/AboutUs';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Service />
      <Portfolio />
      <AboutUs />
    </div>
  );
};

export default Home;