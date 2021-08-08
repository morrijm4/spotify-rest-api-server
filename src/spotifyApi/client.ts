import SpotifyApi from "spotify-web-api-node";
import { PORT } from "../constants";

const spotifyApi = new SpotifyApi({
  redirectUri: `http://localhost:${PORT}/callback`,
  clientId: "d4688fb66e994c51808205b4df75ca64",
  clientSecret: "client-secret",
});

export default spotifyApi;
