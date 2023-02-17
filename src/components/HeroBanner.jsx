export default function HeroBanner(props) {
  const { title, image } = props;
  return (
    <div className="hero-banner">
      <h1 className="hero-banner-title">{title}</h1>
      <div className="hero-banner-image">
        <img src={image} alt="Bandeau d'illustration de la page" />
      </div>
    </div>
  );
}
