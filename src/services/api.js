import axios from 'axios';

const token = 'BQDy3813qEWxbuWnNyjvLLK3hEt71VSspSF5Gk7rodZH7gx3BMIQqeE_uiZaoZSCfySLAccadHTmAYbHxaJ4wXpecUHUfjXopCV5fk1DlQpptkCL5lAi9GvKQEYr83uXRn3pws-c0RAS8CkbglZ66Qi2s9hvB7GUbHrVWd9g-wUFEpE71dFKLSmdUCGSyqzVIz09hpK9YHqOJRe5L1-Vcyf0GwBJ8TG91gQYw_rNevxnW2QePUX1p0cTAyXaXh3tHOJe9CzOY9YghhU';

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  headers: { Authorization: `Bearer ${token}` }
});

export default api;
