"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const spotify_web_api_node_1 = __importDefault(require("spotify-web-api-node"));
const constants_1 = require("../constants");
const spotifyApi = new spotify_web_api_node_1.default({
    redirectUri: `http://localhost:${constants_1.PORT}/callback`,
    clientId: 'd4688fb66e994c51808205b4df75ca64',
    clientSecret: '6838f52488c64165ab53d1a9302a2e7b',
});
exports.default = spotifyApi;
//# sourceMappingURL=client.js.map