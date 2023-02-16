import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Product = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [equipments, setEquipments] = useState([]);

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
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Navigation />
      <h1>{product.title}</h1>
      <ul>
        {equipments.map((equipment, index) => (
          <li key={`${equipment}-${index}`}>{equipment}</li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
