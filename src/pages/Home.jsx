import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../components/Navigation';

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
      <ul>
        {items.map((item) => (
          <NavLink to={`/logement/${item.id}`} key={item.id}>
            <li>{item.title}</li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
}
