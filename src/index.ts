import 'reflect-metadata';
import Express from 'express';
import { getPlaylistTracks } from './spotifyApi/getPlaylist';
import cors from 'cors';
import spotifyApi from './spotifyApi/client';

const main = async () => {
  const app = Express();
  const port = 4000;

  app.use(
    cors({
      origin: '*',
      // credentials: true,
    })
  );


  app.get('/playlist/:playlistId/:limit?/:offset?', async (req, res, next) => { 
	  
    if (!req.params.limit) {
      next();
      return;
    }
    const limit = parseInt(req.params.limit); 
    const offset = (typeof req.params.offset === "undefined" ? 0 : parseInt(req.params.offset))
    const responce = await getPlaylistTracks(
      req.params.playlistId,
      limit,
      offset
    );

    console.log('fetched playlist', req.params.playlistId)
    res.send(responce);
  });

  app.get('/playlist/:playlistId/', async (req, res) => {
    const responce = await getPlaylistTracks(req.params.playlistId);

    console.log('fetched playlist', req.params.playlistId)
    res.send(responce);
  });

  app.listen(port, () => {
    console.log('Started server on localhost:', port);
  });
};

main().catch(e => {
  console.log(e);
})
