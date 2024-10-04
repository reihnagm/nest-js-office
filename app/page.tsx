import Header from '@components/Header';
import Hero from '@components/Hero';
import Service from '@components/Service';
import Portfolio from '@components/Portfolio';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Service />
      <Portfolio />
    </div>
  );
};

export default Home;