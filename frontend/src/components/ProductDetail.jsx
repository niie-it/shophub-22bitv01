import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export const ProductDetail = () => {
  const { id } = useParams(); // đọc :id từ URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Ví dụ với DummyJSON
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        const item = res.data;

        const mapped = {
          id: item.id,
          name: item.title,
          price: item.price,
          category: item.category,
          imageUrl: item.image,
          description: item.description,
        };

        setProduct(mapped);
      } catch (err) {
        setError('Failed to load product details.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p style={{ padding: '24px' }}>Loading product details...</p>;
  }

  if (error) {
    return <p style={{ padding: '24px', color: 'red' }}>{error}</p>;
  }

  if (!product) {
    return <p style={{ padding: '24px' }}>Product not found.</p>;
  }

  return (
    <section style={{ padding: '24px' }}>
      <Link to="/products" style={{ display: 'inline-block', marginBottom: '16px' }}>
        ← Back to Products
      </Link>

      <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
        <img
          src={product.imageUrl}
          alt={product.name}
          style={{ width: '280px', height: '280px', objectFit: 'cover', borderRadius: '8px' }}
        />
        <div>
          <h2>{product.name}</h2>
          <p style={{ color: '#757575' }}>{product.category}</p>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>${product.price}</p>
          <p style={{ marginTop: '12px' }}>{product.description}</p>
          <button
            style={{
              marginTop: '16px',
              padding: '10px 16px',
              backgroundColor: '#1976d2',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
};