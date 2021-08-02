import { Card, Button } from 'react-bootstrap';


const LessonsPage = () => {
  return (
    <div>
      Lessons Page
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src='course.jpeg' />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant='primary'>Add lessons </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LessonsPage;
