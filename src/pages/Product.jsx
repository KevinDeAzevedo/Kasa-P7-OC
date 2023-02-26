import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Slideshow from '../components/Slideshow';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Product() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [productPictures, setProductPictures] = useState([]);
  const [equipments, setEquipments] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('../data/logements.json');
        const data = await response.json();
        const foundProduct = data.find((product) => product.id === id);
        setProduct(foundProduct);
        setEquipments(foundProduct.equipments);
        setProductPictures(foundProduct.pictures);
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
        <div className="product-slideshow">
          slider
          {/* <Slideshow picture={productPictures} /> */}
        </div>
        <div className="product-header">
          <div className="product-header-status">
            <h1>{product.title}</h1>
            <p>Location</p>
            <div className="product-header-status-tags">
              <div>Paris</div>
              <div>Cozy</div>
            </div>
          </div>
          <div className="product-header-detail">
            <p>Alexandre Dumas</p>
            <div>Stars</div>
          </div>
        </div>
        <div className="product-specs">
          <div>Accordeon n°1</div>
          <div>Accordeon n°2</div>
        </div>
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
