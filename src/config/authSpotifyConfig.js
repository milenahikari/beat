export default {
  clientId: 'd42dae08f7a3434b8fda8b58da89d332',
  clientSecret: '8a8f7bf4a4c74e5183be19a3bb39586d',
  redirectUrl: 'musicapp:/oauth',
  scopes: [
    'user-read-email',
    'playlist-modify-public',
    'playlist-read-private',
    'playlist-read-collaborative',
    'user-read-private',
    'user-follow-read',
    'user-library-read',
  ],
  serviceConfiguration: {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
  },
};
