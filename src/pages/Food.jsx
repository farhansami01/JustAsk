import react from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Food() {
  return (
    <Container>
      <h1>Food</h1>
      <Row>
        <Col md={4}>
          <h2>Vegetarian</h2>
          <p>Explore delicious vegetarian recipes.</p>
        </Col>
        <Col md={4}>
          <h2>Non-Vegetarian</h2>
          <p>Discover mouth-watering non-vegetarian dishes.</p>
        </Col>
        <Col md={4}>
          <h2>Desserts</h2>
          <p>Satisfy your sweet tooth with our dessert recipes.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Food;
