import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { Form, Button, Card } from 'react-bootstrap';

import apiService from '../ApiService';

const LessonsPage = () => {
  const [singleCourse, setSingleCourse] = useState({});
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState('');
  const [description, setDescription] = useState('');
  const [method, setMethod] = useState('');
  const [content, setContent] = useState('');
  const [video, setVideo] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const course = { title, language, image, duration, description };
    try {
      const response = await apiService.createCourse(course);

      history.push('/tutorcourses');
    } catch (err) {
      toast.error('Course could not be created. Please use another title');
    }
  };

  const history = useHistory();

  useEffect(() => {
    (async () => {
      const slug = history.location.pathname.split('/')[2];

      const data = await apiService.getSingleCourse(slug);
      setSingleCourse({ ...data });
    })();
  }, []);

  const uploadVideo = async (e) => {
    const formData = new FormData();
    formData.append('video', e.target.files[0]);

    const response = await apiService.uploadVideo(formData);

    setVideo({ ...response });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const lesson = { title, method, duration, video };
    
    const data = apiService.addLesson(
      lesson,
      singleCourse.slug,
      singleCourse._id
    );

    history.push('/tutorcourses');
  };

  const markdown = ` ## This is a react markdown form `;
  return (
    <div className='mt-4'>
      <h1> Welcome. Add lessons to your course "{singleCourse.title}" </h1>

      <Form onSubmit={onSubmit} className='mt-5'>
        <Form.Group className='mb-3' controlId='floatingTextarea'>
          <Form.Label>Lesson Title</Form.Label>
          <Form.Control
            type='title'
            placeholder='Lesson Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Form.Text className='text-muted'></Form.Text>
        </Form.Group>
        <Form.Group className='mb-3' controlId='floatingTextarea'>
          <Form.Label>Lesson Method</Form.Label>
          <Form.Control
            type='method'
            placeholder='Lesson method'
            value={method}
            onChange={(e) => setMethod(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='floatingTextarea'>
          <Form.Label>Lesson Duration</Form.Label>
          <Form.Control
            type='duration'
            placeholder='duration'
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </Form.Group>

        {/*  */}
        <Form.Group className='mb-3'>
          <Form.Label>Upload Video </Form.Label>

          <Form.Control
            type='file'
            name='file'
            accept='video/*'
            onChange={uploadVideo}
          />
        </Form.Group>
        {/*  */}

        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Quiz</Form.Label>

          <Form.Control
            as='textarea'
            rows={6}
            type='Quiz'
            placeholder='Content'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
      <Toaster />
    </div>
  );
};

export default LessonsPage;
