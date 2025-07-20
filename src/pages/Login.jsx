import react from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CustomCard from '../components/Card.jsx';

function Login() {
  return (
    <Container>
      <h1>Login</h1>
      <Row>
        <Col md={6}>
          <CustomCard
            title="User Login"
            text="Please enter your credentials to login."
            buttonText="Login"
          />
        </Col>
        <Col md={6}>
          <CustomCard
            title="Admin Login"
            text="Admin users please login here."
            buttonText="Login"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
