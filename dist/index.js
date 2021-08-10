"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const getPlaylist_1 = require("./spotifyApi/getPlaylist");
const cors_1 = __importDefault(require("cors"));
const https_1 = __importDefault(require("https"));
const fs_1 = __importDefault(require("fs"));
const main = async () => {
    const app = express_1.default();
    const port = 4000;
    const privateKey = fs_1.default.readFileSync('../sslcert/key.pem', 'utf8');
    const certificate = fs_1.default.readFileSync('../sslcert/cert.pem', 'utf8');
    const options = {
        key: privateKey,
        cert: certificate
    };
    app.use(cors_1.default({
        origin: '*',
        // credentials: true,
    }));
    app.get('/playlist/:playlistId/:limit?/:offset?', async (req, res, next) => {
        if (!req.params.limit) {
            next();
            return;
        }
        const limit = parseInt(req.params.limit);
        const offset = (typeof req.params.offset === "undefined" ? 0 : parseInt(req.params.offset));
        const responce = await getPlaylist_1.getPlaylistTracks(req.params.playlistId, limit, offset);
        console.log('fetched playlist', req.params.playlistId);
        res.send(responce);
    });
    app.get('/playlist/:playlistId/', async (req, res) => {
        const responce = await getPlaylist_1.getPlaylistTracks(req.params.playlistId);
        console.log('fetched playlist', req.params.playlistId);
        res.send(responce);
    });
    const server = https_1.default.createServer(options, app);
    server.listen(port, () => {
        console.log('Started server on localhost:', port);
    });
};
main().catch(e => {
    console.log(e);
});
//# sourceMappingURL=index.js.map