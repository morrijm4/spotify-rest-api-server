import 'reflect-metadata';
import express from 'express';
import { getPlaylistTracks } from './spotifyApi/getPlaylist';
import cors from 'cors';
import spotifyApi from './spotifyApi/client';
import https from 'https';
import fs from 'fs';

const main = async () => {
  const app = express();
  const port = 4000;
  
  const privateKey = fs.readFileSync('../sslcert/key.pem', 'utf8')
  const certificate = fs.readFileSync('../sslcert/cert.pem', 'utf8')
 
  const options = {
    key: privateKey,
    cert: certificate
  };

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

  const server = https.createServer(options, app);

  server.listen(port, () => {
    console.log('Started server on localhost:', port);
  });
};

main().catch(e => {
  console.log(e);
})
