import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Card from '../components/Card';

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
      <h1>Accueil</h1>
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
