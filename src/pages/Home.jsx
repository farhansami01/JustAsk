import { Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard.jsx';

function Home() {
  const products = [
    { id: 1, name: 'Product 1', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 20, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 30, image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div>
      <h2>Home</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={4}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Home;
