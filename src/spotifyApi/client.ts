import SpotifyApi from 'spotify-web-api-node';
import { PORT } from '../constants';

const spotifyApi = new SpotifyApi({
  redirectUri: `http://localhost:${PORT}/callback`,
  clientId: 'd4688fb66e994c51808205b4df75ca64',
  clientSecret: '6838f52488c64165ab53d1a9302a2e7b',
});

export default spotifyApi;
