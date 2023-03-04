import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Card from '../components/Card';
import HeroBanner from '../components/HeroBanner';
import Footer from '../components/Footer';
import herohome from '../assets/hero-home.webp';

export default function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await fetch('./data/logements.json');
      const data = await response.json();
      setIsLoading(false);
      setItems(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navigation />
      <HeroBanner title={'Chez vous, partout et ailleurs'} image={herohome} />
      {isLoading ? (
        <p>Chargement...</p>
      ) : (
        <div className="list">
          {items.map((item) => (
            <NavLink to={`/logement/${item.id}`} key={item.id}>
              <Card title={item.title} image={item.cover} />
            </NavLink>
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
}
