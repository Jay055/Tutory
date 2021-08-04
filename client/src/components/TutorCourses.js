import { useEffect, useState } from 'react';
import { Card, Button, Row, Col, CardGroup } from 'react-bootstrap';
import apiService from '../ApiService';
import { Link } from 'react-router-dom';

const TutorCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await apiService.getTutorCourses();
      setCourses(data);

  
    })();
  }, []);

  return (
    <Row>
      {courses ? (
        courses.map((course) => (
          <Col className='my-4'>
            <Card style={{ width: '18rem' }}>
              <Link to={`/viewcourse/${course.slug}`}>
                <Card.Img variant='top' src='/course.jpeg' />
              </Link>
              <Card.Body>
                <Card.Title>Title : {course.title}</Card.Title>
                <Card.Text>{course.description}</Card.Text>
                <Card.Text>Language: {course.language}</Card.Text>
                <Card.Text>Duration: {course.duration}</Card.Text>

                <Link to={`/lessonspage/${course.slug}`}>
                  <Button variant='primary'>Add lessons</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))
      ) : (
        <p> this works </p>
      )}
    </Row>
  );
};

export default TutorCourses;
