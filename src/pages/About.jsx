import { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner';
import heroabout from '../assets/hero-about.webp';
import Accordion from '../components/Accordion';

export default function About() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('../data/a-propos.json');
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <Navigation />
      <HeroBanner image={heroabout} />
      <div className="about-content">
        {articles.map((article, index) => (
          <div key={`${article}-${index}`}>
            <Accordion title={article.title} content={article.content} ui="" />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
