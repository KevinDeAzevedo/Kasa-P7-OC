import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Card from '../components/Card';
import HeroBanner from '../components/HeroBanner';
import herohome from '../assets/hero-home.webp';

export default function Home() {
  const [items, setItems] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch('./data/logements.json');
      const data = await response.json();
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
      <div className="list">
        {items.map((item) => (
          <NavLink to={`/logement/${item.id}`} key={item.id}>
            <Card title={item.title} image={item.cover} />
          </NavLink>
        ))}
      </div>
    </div>
  );
}
