import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import apiService from '../ApiService';
import ReactPlayer from 'react-player';
import { Container, Card, Button, Alert, Row, Col } from 'react-bootstrap';

const ViewCourse = () => {
  const [singleCourse, setSingleCourse] = useState({});

  const history = useHistory();
  useEffect(() => {
    (async () => {
      const slug = history.location.pathname.split('/')[2];
      const response = await apiService.getSingleCourse(slug);

      setSingleCourse({ ...response });
    })();
  }, []);

  const {
    title,
    language,
    duration,
    description,
    chapters,
    updatedAt,
    createdAt,
  } = singleCourse;

  return (
    <>
      {singleCourse && chapters ? (
        <div>
          <div className='row'>
            <div className='col-md-8'>
              <Alert variant='info'>
                <h1>Title: {title}</h1>
              </Alert>

              <p>
                {' '}
                <span className='font-weight-bold'> Language:</span> {language}{' '}
              </p>
              <hr />
              <p>Description: {description}</p>
              <hr />
              <p>duration: {duration}</p>
              <hr />
              <p>created: {moment(createdAt).format('MM/DD/YYYY')}</p>
              <hr />
              <p> Last updated: {moment(updatedAt).format('MM/DD/YYYY')} </p>
              <hr />
            </div>
          </div>
          <div>
            <ReactPlayer
              controls
              // light
              url={chapters[0].video.Location}
            />
          </div>
          <div>
            <h3>Lessons </h3>
            <Row>
              {chapters.map((chapter) => (
                <Col>
                  <Card style={{ width: '18rem' }}>
                    Lesson {}
                    <ReactPlayer
                      controls
                      width='100%'
                      height='200px'
                      url={chapter.video.Location}
                    />
                    <Card.Img variant='top'></Card.Img>
                    <Card.Body>
                      <Card.Title>
                        {' '}
                        <p>{chapter.title}</p>
                      </Card.Title>
                      <Card.Text>
                        Motives of the lecture:
                        <br></br>
                        Quiz of the day.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      ) : (
        <p> Loading </p>
      )}
    </>
  );
};

export default ViewCourse;
