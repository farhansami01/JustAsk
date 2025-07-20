import react from 'react';
import { Card, Button } from 'react-bootstrap';

function CustomCard({ title, text, buttonText }) {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary">{buttonText}</Button>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
