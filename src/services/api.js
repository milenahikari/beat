import axios from 'axios';

const token = 'BQBQwVLMSNpmwW8otOKk8sJpKg2SjXW7R58simucBuWGGMRnsN_d6iF7SDjzsXOhvnC-BegwGxKYgyfsYlDQSTbqaNoHgUskO7SoESWz1oa9GPVLg2wCYyEx4zNHnq1VFByxeRGIJnmZOyKS8j9NRFKef0oG2V8A2mZYoqPxR-i0v0Vg1Mx9enfZejtNX4gEL8ce5LWon7y9YSke_JVtkgShl2T6F_6qpdNKfXUQCm8k1XcfNs5VQ1p5BFyIMLxyHm5XgBd3aynRgCk';

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  headers: { Authorization: `Bearer ${token}` }
});

export default api;
