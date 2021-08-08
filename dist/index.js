"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const getPlaylist_1 = require("./spotifyApi/getPlaylist");
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const track_1 = require("./resolvers/track");
const cors_1 = __importDefault(require("cors"));
const client_1 = __importDefault(require("./spotifyApi/client"));
const main = async () => {
    const app = express_1.default();
    const port = 4000;
    app.use(cors_1.default({
        origin: '*',
        // credentials: true,
    }));
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: await type_graphql_1.buildSchema({
            resolvers: [track_1.TrackResolver],
            validate: false,
        }),
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({
        app,
        cors: false,
    });
    const scopes = [
        'ugc-image-upload',
        'user-read-playback-state',
        'user-modify-playback-state',
        'user-read-currently-playing',
        'streaming',
        'app-remote-control',
        'user-read-email',
        'user-read-private',
        'playlist-read-collaborative',
        'playlist-modify-public',
        'playlist-read-private',
        'playlist-modify-private',
        'user-library-modify',
        'user-library-read',
        'user-top-read',
        'user-read-playback-position',
        'user-read-recently-played',
        'user-follow-read',
        'user-follow-modify',
    ];
    app.get('/login', (req, res) => {
        res.redirect(client_1.default.createAuthorizeURL(scopes, 'alkwenf3l4knr3qfn'));
    });
    app.get('/callback', (req, res) => {
        const error = req.query.error;
        const code = req.query.code;
        const state = req.query.state;
        if (error) {
            console.error('Callback Error:', error);
            res.send(`Callback Error: ${error}`);
            return;
        }
        if (typeof code === 'string') {
            client_1.default
                .authorizationCodeGrant(code)
                .then(data => {
                const access_token = data.body['access_token'];
                const refresh_token = data.body['refresh_token'];
                const expires_in = data.body['expires_in'];
                client_1.default.setAccessToken(access_token);
                client_1.default.setRefreshToken(refresh_token);
                console.log('access_token:', access_token);
                console.log('refresh_token:', refresh_token);
                console.log(`Sucessfully retreived access token. Expires in ${expires_in} s.`);
                // res.send('Success! You can now close the window.');
                process.env.SPOTIFY_ACCESS_TOKEN = access_token;
                setInterval(async () => {
                    const data = await client_1.default.refreshAccessToken();
                    const access_token = data.body['access_token'];
                    console.log('The access token has been refreshed!');
                    console.log('access_token:', access_token);
                    client_1.default.setAccessToken(access_token);
                    process.env.SPOTIFY_ACCESS_TOKEN = access_token;
                }, (expires_in / 2) * 1000);
            })
                .catch(error => {
                console.error('Error getting Tokens:', error);
                res.send(`Error getting Tokens: ${error}`);
            });
        }
        else {
            const err = "TypeError: code cannot be of type 'QueryString.ParsedQs | string[] | QueryString.ParsedQs[] | undefined'";
            console.error(err);
            res.send(err);
            return;
        }
        res.redirect('http://localhost:3000/playlist');
    });
    app.get('/test', async (req, res) => {
        if (typeof process.env.SPOTIFY_ACCESS_TOKEN === 'string') {
            client_1.default.setAccessToken(process.env.SPOTIFY_ACCESS_TOKEN);
            const me = await client_1.default.getMe();
            console.log(me);
            res.send(me);
        }
        else {
            res.send('No user is logged in');
        }
    });
    app.get('/playlist/:playlistId/:limit?/:offset?', async (req, res, next) => {
        const limit = parseInt(req.params.limit);
        if (!limit) {
            next();
            return;
        }
        const responce = await getPlaylist_1.getPlaylistTracks(req.params.playlistId, parseInt(req.params.limit), parseInt(req.params.offset));
        res.send(responce);
    });
    app.get('/playlist/:playlistId/', async (req, res) => {
        const responce = await getPlaylist_1.getPlaylistTracks(req.params.playlistId);
        res.send(responce);
    });
    app.listen(port, () => {
        console.log('Started server on localhost:', port);
    });
};
main().catch(e => {
    console.log(e);
});
//# sourceMappingURL=index.js.map