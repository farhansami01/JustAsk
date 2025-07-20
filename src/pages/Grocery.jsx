import react from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Grocery() {
  return (
    <Container>
      <h1>Grocery</h1>
      <Row>
        <Col md={4}>
          <h2>Fruits</h2>
          <p>Fresh and organic fruits for a healthy diet.</p>
        </Col>
        <Col md={4}>
          <h2>Vegetables</h2>
          <p>Farm-fresh vegetables delivered to your doorstep.</p>
        </Col>
        <Col md={4}>
          <h2>Dairy</h2>
          <p>High-quality dairy products for your family.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Grocery;
