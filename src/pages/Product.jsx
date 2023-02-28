import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Slideshow from '../components/Slideshow';
import Accordion from '../components/Accordion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Product() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [productPictures, setProductPictures] = useState([]);
  const [productTags, setProductTags] = useState([]);
  const [productHost, setProductHost] = useState([]);
  const [productDescription, setproductDescription] = useState();
  const [productEquipments, setproductEquipments] = useState([]);
  const stuff = (
    <ul>
      {productEquipments.map((equipment, index) => (
        <li key={`${equipment}-${index}`}>{equipment}</li>
      ))}
    </ul>
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('../data/logements.json');
        const data = await response.json();
        const foundProduct = data.find((product) => product.id === id);
        setProduct(foundProduct);
        setProductTags(foundProduct.tags);
        setProductHost(foundProduct.host);
        setProductPictures(foundProduct.pictures);
        setproductDescription(foundProduct.description);
        setproductEquipments(foundProduct.equipments);
      } catch (error) {
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
          <Slideshow picture={productPictures} />
        </div>
        <div className="product-header">
          <div className="product-header-status">
            <h1>{product.title}</h1>
            <p>{product.location}</p>
            <div className="product-header-status-tags">
              <ul>
                {productTags.map((tag, index) => (
                  <li key={`${tag}-${index}`}>{tag}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="product-header-detail">
            <div className="product-header-detail-host">
              <p>{productHost.name}</p>
              <div className="product-header-detail-host-avatar">
                <img src={productHost.picture} alt="Portrait de l'hôte" />
              </div>
            </div>
            <div>{product.rating}</div>
          </div>
        </div>
        <div className="product-specs">
          <Accordion title="Description" content={productDescription} />
          <Accordion title="Équipements" content={stuff} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
