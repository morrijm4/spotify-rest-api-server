"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const getPlaylist_1 = require("./spotifyApi/getPlaylist");
const cors_1 = __importDefault(require("cors"));
const main = async () => {
    const app = express_1.default();
    const port = 4000;
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
    app.listen(port, () => {
        console.log('Started server on localhost:', port);
    });
};
main().catch(e => {
    console.log(e);
});
//# sourceMappingURL=index.js.map