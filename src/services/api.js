import axios from 'axios';

const token = 'BQCizZeUtI5hNv4WF2ZDUWzKsN6S1B3MoeVTNlWcEiNFfSyWCealo_BLq4RBxpl5KDIHBdNtmrpjiyvPpo0c3rU5wt2E2wwM_U9vXougElX8tu7KuNejM4_t_m8mXlzDjpR2-imdWMudnC39ZRQxd4DtNyQ7lANhE4bYL2ayT4d7DBQsYwRJtUbzWbuwiEBa6TWzl7k3uLbclzLb5XOYBb6_-qS5RRDmheE5V9zWy8JiBnvMyNJ3FrL3day-nNCz8rvNKnY5lffDMuk';

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  headers: { Authorization: `Bearer ${token}` }
});

export default api;
