import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { Form, Button, Card } from 'react-bootstrap';
import Resizer from 'react-image-file-resizer';
import apiService from '../ApiService';

const CreateCourse = () => {
  const [title, setTitle] = useState('new title');
  const [language, setLanguage] = useState('English');
  const [image, setImage] = useState({});
  const [duration, setDuration] = useState('4 hours ');
  const [description, setDescription] = useState('new course');

  const history = useHistory();
  const onSubmit = async (e) => {
    e.preventDefault();
    const course = { title, language, image, duration, description };
    const response = await apiService.createCourse(course);
    try {
      history.push(`/tutorcourses`);
    } catch (err) {
      toast.error('Course could not be created. Please use another title');
    }
  };

  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        300,
        300,
        'JPEG',
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        'base64'
      );
    });

  const uploadImage = async (e) => {
    let file = e.target.files[0];
    // resize images

    const resizedImage = await resizeFile(file);

    const data = await apiService.uploadImage(resizedImage);

    try {
      // set image in the state
      setImage({ ...data });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='mt-4'>
      <h1> Create your course </h1>

      <Form onSubmit={onSubmit} className='mt-5'>
        <Form.Group className='mb-3' controlId='floatingTextarea'>
          <Form.Label>Course Title</Form.Label>
          <Form.Control
            type='title'
            placeholder='Course Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Form.Text className='text-muted'></Form.Text>
        </Form.Group>
        <Form.Group className='mb-3' controlId='floatingTextarea'>
          <Form.Label>Language</Form.Label>
          <Form.Control
            type='language'
            placeholder='Language'
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Description</Form.Label>

          <Form.Control
            as='textarea'
            rows={6}
            type='description'
            placeholder='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='floatingTextarea'>
          <Form.Label>Course Duration</Form.Label>
          <Form.Control
            type='duration'
            placeholder='Course duration'
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Upload Image </Form.Label>

          <Form.Control type='file' name='file' onChange={uploadImage} />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
      <Toaster />
    </div>
  );
};

export default CreateCourse;
