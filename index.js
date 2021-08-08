'use strict';
import Express from 'express';
import SpotifyApi from 'spotify-web-api-node';

const main = async () => {
  const spotifyApi = new SpotifyApi({
    clientId: 'd4688fb66e994c51808205b4df75ca64',
    clientSecret: '6838f52488c64165ab53d1a9302a2e7b',
  });

  const app = Express();

  const accessToken = await spotifyApi.clientCredentialsGrant().then(
    function (data) {
      return data.body['access_token'];
    },
    function (err) {
      console.log('Something went wrong when retrieving an access token', err);
      return err;
    }
  );
  spotifyApi.setAccessToken(accessToken);
  const findPlaylist = async api => {
    const playlist = await api.getPlaylist('4aRIy5QIt1j1HGoytyfTEj');
    console.log(playlist);
  };

  findPlaylist(spotifyApi);

  app.get('/', (req, res) => {
    res.send('Hello World');
  });
  app.listen(9000);
};
main().catch(e => {
  console.log(e);
});
