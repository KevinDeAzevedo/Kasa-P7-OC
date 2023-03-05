import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner';
import heroabout from '../assets/hero-about.webp';
import Accordion from '../components/Accordion';

export default function About() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('../data/a-propos.json');
        const data = await response.json();
        setIsLoading(false);
        setArticles(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <Helmet>
        <title>Kasa | À propos</title>
        <meta name="description" content="Page à propos" />
      </Helmet>
      <Navigation />
      <main>
        <HeroBanner image={heroabout} />
        {isLoading ? (
          <p>Chargement...</p>
        ) : (
          <section className="about-content">
            {articles.map((article, index) => (
              <article key={`${article}-${index}`}>
                <Accordion
                  title={article.title}
                  content={article.content}
                  ui=""
                />
              </article>
            ))}
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
