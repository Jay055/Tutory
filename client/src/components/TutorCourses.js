import { useEffect, useState } from 'react';
import { Card, Button, CardGroup } from 'react-bootstrap';
import apiService from '../ApiService';

const TutorCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getTutorCourses();
  }, []);

  const getTutorCourses = async () => {
    const data = await apiService.getTutorCourses();
    setCourses(data);
  };

  return (
    <div>
      {courses ? (
        courses.map((course) => (
          // <CardGroup>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src='course.jpeg' />
            <Card.Body>
              <Card.Title>Title : {course.title}</Card.Title>
              <Card.Text>{course.description}</Card.Text>
              <Card.Text>Language: {course.language}</Card.Text>
              <Card.Text>Duration: {course.duration}</Card.Text>
              <Button variant='primary'>Add lessons </Button>
            </Card.Body>
          </Card>
          // </CardGroup>
        ))
      ) : (
        <p> this works </p>
      )}
    </div>
  );
};

export default TutorCourses;
