import react from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Fashion() {
  return (
    <Container>
      <h1>Fashion</h1>
      <Row>
        <Col md={4}>
          <h2>Men's Fashion</h2>
          <p>Explore the latest trends in men's fashion.</p>
        </Col>
        <Col md={4}>
          <h2>Women's Fashion</h2>
          <p>Discover the newest styles in women's fashion.</p>
        </Col>
        <Col md={4}>
          <h2>Kids' Fashion</h2>
          <p>Find trendy outfits for kids of all ages.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Fashion;
