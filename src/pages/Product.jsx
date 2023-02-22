import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Product() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [equipments, setEquipments] = useState([]);

  const array = ['One', 'Two', 'Three', 'Four']; // lenght = 3
  const [index, setIndex] = useState(0);

  function prevClick() {
    return index === 0 ? setIndex(array.length - 1) : setIndex(index - 1);
  }

  function nextClick() {
    return index >= array.length - 1 ? setIndex(0) : setIndex(index + 1);
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('../data/logements.json');
        const data = await response.json();
        const foundProduct = data.find((product) => product.id === id);
        setProduct(foundProduct);
        setEquipments(foundProduct.equipments);
      } catch (error) {
        console.error(error);
        navigate('*');
      }
    }
    fetchData();
  }, [id, navigate]);

  return (
    <div>
      <Navigation />
      <div className="product">
        <div className="product-slider">Carrousel</div>
        <div className="product-header">
          <h1>{product.title}</h1>
          <button onClick={prevClick}>Précédent</button>
          <div>
            {array[index]} {index + 1}/{array.length}
          </div>
          <button onClick={nextClick}>Suivant</button>
        </div>
        <div className="product-specs">Accordeons</div>
        {/* <ul>
          {equipments.map((equipment, index) => (
            <li key={`${equipment}-${index}`}>{equipment}</li>
          ))}
        </ul> */}
      </div>
      <Footer />
    </div>
  );
}
