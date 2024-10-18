import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://66ffb98d4da5bd237551b1b7.mockapi.io',  // Thay bằng URL của MockAPI của bạn
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;