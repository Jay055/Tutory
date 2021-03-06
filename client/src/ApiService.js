import axios from 'axios';
const baseURL = 'http://localhost:3001';

let apiService = {};

apiService.register = async (user) => {
  try {
    const { data } = await axios.post(
      `${baseURL}/register`,
      {
        user,
      },
      { withCredentials: true }
    );
    return data;
  } catch (err) {
    return Error(err);
  }
};

apiService.login = async (user) => {
  try {
    const { data } = await axios.post(
      `${baseURL}/login`,
      { user },
      { withCredentials: true }
    );
    return data;
  } catch (err) {
    return Error(err);
  }
};

apiService.profile = async (user) => {
  try {
    const { data } = await axios.get(
      `${baseURL}/profile`,

      { withCredentials: true }
    );

    return data;
  } catch (err) {
    return Error(err);
  }
};

apiService.logout = async () => {
  try {
    const { data } = await axios.get(
      `${baseURL}/logout`,

      { withCredentials: true }
    );

    return data;
  } catch (err) {
    return Error(err);
  }
};

// courses
apiService.createCourse = async (course) => {
  try {
    const { data } = await axios.post(
      `${baseURL}/createcourse`,
      { course },

      { withCredentials: true }
    );

    return data;
  } catch (err) {
    return Error(err);
  }
};

apiService.getTutorCourses = async () => {
  try {
    const { data } = await axios.get(
      `${baseURL}/tutor-courses`,

      { withCredentials: true }
    );

    return data;
  } catch (err) {
    return Error(err);
  }
};

// image
apiService.uploadImage = async (image) => {
  try {
    const { data } = await axios.post(
      `${baseURL}/upload-image`,
      { image },
      { withCredentials: true }
    );
    return data;
  } catch (err) {
    return Error(err);
  }
};

//  single course
apiService.getSingleCourse = async (slug) => {
  try {
    const { data } = await axios.get(
      `${baseURL}/single-course/${slug}`,

      { withCredentials: true }
    );
    return data;
  } catch (err) {
    return Error(err);
  }
};

// upload video
apiService.uploadVideo = async (video) => {
  try {
    const { data } = await axios.post(
      `${baseURL}/video-upload/`,

      video
      // { withCredentials: true }
    );
    return data;
  } catch (err) {
    return Error(err);
  }
};

//  add Lessons
apiService.addLesson = async (lesson, slug, id) => {
  try {
    const { data } = await axios.post(
      `${baseURL}/add-lesson/${slug}/${id}`,
      {
        lesson,
      },
      { withCredentials: true }
    );
    return data;
  } catch (err) {
    return Error(err);
  }
};

export default apiService;
