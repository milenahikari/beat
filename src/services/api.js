import axios from 'axios';

const token = 'BQCqq_8uUiEXj4gf3OsvAN2MxFpAZpLSVyDwopE6r4199JKggVdkRGnGhQdLgne5SeU-g5iebnHyQUepQZf8ptydhLQja7QY8zTcmiR2H_cIFDshtMEbo875zmBIl8cCXQgsyfM7kayFQsV9NcmE3thYFgn7nCmrltTSt3Xr15vBVyCwB0J-bmAs2I21ZVwl_ZLKdYZKK7Fs6J5dZum105yCfhR_-IyMo8kkrx1DXeld6qSwAa55Gsox-S539Og3lBtXTBUdAmyKS6Y';

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  headers: { Authorization: `Bearer ${token}` }
});

export default api;
