import axios from 'axios';

const token = 'BQCzkYhRYZPtlTKDiCEkxaPqdfgufau3BCJPhZmUpBy4hbVILrWztjySAPvyV2L_vdiGFyP1JowtqNSL2joK-cNNMcSvstqPuoxEzRHFtX6NURQBJNjxjvowhPMsJhxaAZZfgu1vhWYp0Wje53J6asIbtzEjLCjZX8SuPS2CEsyVq2Qpiv1oo_HBRdCHLyHiAX2eVr8WfmvvYSgkenKBp8MV3wC-uGl2AbRobDXdDBDinqpKb9xLlnyicKCA_4rBptzI5uM3BAVkcg8';

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  headers: { Authorization: `Bearer ${token}` }
});

export default api;
