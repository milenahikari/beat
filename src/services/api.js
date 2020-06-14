import axios from 'axios';

const token = 'BQBEaqhr5WYLCUPKAMkkjsRISuLCrer9IjfaqO7Np7AT1UUcnX6mftu6uJfuYhSsLLWSz28GyEQexOQQ0fY7FHw024gmV9jNlTso_Vcc0v-Yo-3hcijdDwHFG-XwSbaWtsZYkQSpVvGl8dVO3sZ9ebAKLyJa1Sj-NV6yqmiM2AT0nNrn2Ze8kOgPVtuJ0KpxSmBYy45ABgEUfTxHG9IApsUYk5QKipcZYtqC6gfiITm8JXhd9H_odNGRPgdAdhL3-7w21wdgUbNzOUw';

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  headers: { Authorization: `Bearer ${token}` }
});

export default api;
