"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlaylist = exports.getPlaylistTrack = exports.getPlaylistTracks = void 0;
const client_1 = __importDefault(require("./client"));
const getAccessToken_1 = __importDefault(require("./getAccessToken"));
const getPlaylistTracks = async (playlistId, limit = 100, offset = 0) => {
    client_1.default.setAccessToken(await getAccessToken_1.default());
    const playlist = await client_1.default.getPlaylist(playlistId);
    return playlist.body.tracks.items.slice(offset, limit);
};
exports.getPlaylistTracks = getPlaylistTracks;
const getPlaylistTrack = async (pos = 0, playlistId) => {
    const tracks = await exports.getPlaylistTracks(playlistId);
    if (pos < 0 || pos >= tracks.length) {
        console.log('Error, track is out of bounds');
    }
    return tracks[pos].track;
};
exports.getPlaylistTrack = getPlaylistTrack;
const getPlaylist = async (playlistId) => {
    client_1.default.setAccessToken(await getAccessToken_1.default());
    const playlist = await client_1.default.getPlaylist(playlistId);
    return playlist;
};
exports.getPlaylist = getPlaylist;
//# sourceMappingURL=getPlaylist.js.map