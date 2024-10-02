// app/page.tsx
import Header from './components/Header';
import Hero from './components/Hero';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
};

export default Home;