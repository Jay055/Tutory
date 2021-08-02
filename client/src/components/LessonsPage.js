import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { Form, Button, Card } from 'react-bootstrap';

import apiService from '../ApiService';
const LessonsPage = () => {
  const [title, setTitle] = useState('');
  const [language, setLanguage] = useState('');
  const [image, setImage] = useState('');
  const [duration, setDuration] = useState('');
  const [description, setDescription] = useState('');

  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const course = { title, language, image, duration, description };
    try {
      const response = await apiService.createCourse(course);

      history.push('/lessonspage');
    } catch (err) {
      toast.error('Course could not be created. Please use another title');
    }
  };

  const markdown = ` ## This is a react markdown form `;
  return (
    <div className='mt-4'>
      <h1> Add lessons to your course </h1>

      <Form onSubmit={handleSubmit} className='mt-5'>
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
          <Form.Label>Method</Form.Label>
          <Form.Control
            type='method'
            placeholder='method'
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='floatingTextarea'>
          <Form.Label>Duration</Form.Label>
          <Form.Control
            type='duration'
            placeholder='duration'
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='floatingTextarea'>
          <Form.Label>Video</Form.Label>
          <Form.Control
            type='Video'
            placeholder='Video'
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='floatingTextarea'>
          <Form.Label>Lesson Duration</Form.Label>
          <Form.Control
            type='duration'
            placeholder='lesson duration'
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Quiz</Form.Label>

          <Form.Control
            as='textarea'
            rows={6}
            type='Quiz'
            placeholder='Quiz'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
