import SpotifyApi from 'spotify-web-api-node';
import spotifyApi from './client';

const getAccessToken = async (api: SpotifyApi = spotifyApi) => {
  return await api.clientCredentialsGrant().then(
    function (data) {
      return data.body['access_token'];
    },
    function (err) {
      console.log('Something went wrong when retrieving an access token', err);
      return err;
    }
  );
};

export default getAccessToken;
