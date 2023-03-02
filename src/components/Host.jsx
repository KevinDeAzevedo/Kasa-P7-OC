export default function Host(props) {
  const { name, picture } = props;
  return (
    <div className="host">
      <p>{name}</p>
      <div className="host-avatar">
        <img src={picture} alt="Portrait de l'hôte" />
      </div>
    </div>
  );
}
