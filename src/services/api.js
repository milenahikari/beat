import axios from 'axios';

const token = 'BQASrkxlXV4lnhafjQ5wVIqNHmyzkBZDG_zHpPL-jLcb9b0J6WBIuubUBQXsCOUwM0sJdZe0vUZ1UXPNsOHTAWYZFUAYmZzfrWfv0yqKzqx7fqTyY8KGcf59kk-ZgqJgmhscM8v3XmrVPQejj7z0w3drmIwYTOaSs7qxffMmMtluYKRl4RbDcWtD_nMCZbPFLL8NNuPFxqI9j16wtmvIYejDAl-a6ijire0B9KjEVhca9Xra9WfZMgZkUJ_hjcNv555unIaA5j3QUtg';

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  headers: { Authorization: `Bearer ${token}` }
});

export default api;
