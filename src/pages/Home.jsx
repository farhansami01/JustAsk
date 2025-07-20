import { Container, Row, Col, Carousel, Card, Button } from 'react-bootstrap';
import ProductCard from '../components/ProductCard.jsx';

function Home() {
  const products = [
    { id: 1, name: 'yphone', price: 90, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Asidas Shoes', price: 100, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'yphone Headphones', price: 30, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Grocery Pack', price: 27, image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'yphone Case', price: 15, image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'yphone Charger', price: 20, image: 'https://via.placeholder.com/150' },
    { id: 7, name: 'yphone Screen Protector', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 8, name: 'yphone Stand', price: 25, image: 'https://via.placeholder.com/150' },
    { id: 9, name: 'yphone Wallet', price: 35, image: 'https://via.placeholder.com/150' }
  ];

  return (
    <Container>
      {/* Carousel */}
      <Carousel className="my-3">
        <Carousel.Item>
          <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>

      {/* Products Section */}
      <h3 className="my-4">Top Picks for You</h3>
      <Row>
        {products.slice(0, 3).map((product) => (
          <Col key={product.id} md={4}>
            <ProductCard product={product} />




          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
