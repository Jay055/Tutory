import axios from 'axios';
const baseURL = 'http://localhost:3001';

let apiService = {};

apiService.register = async (user) => {
  try {
    const { data } = await axios.post(`${baseURL}/register`, {
      user,
    });
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
      `${BASE_URL}/profile`,

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
      `${BASE_URL}/logout`,

      { withCredentials: true }
    );

    return data;
  } catch (err) {
    return Error(err);
  }
};

export default apiService;
