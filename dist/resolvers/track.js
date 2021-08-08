"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Track_1 = __importDefault(require("../entities/Track"));
const getPlaylist_1 = require("../spotifyApi/getPlaylist");
let TrackResolver = class TrackResolver {
    async getTrack(trackNum, playlistId) {
        const track = await getPlaylist_1.getPlaylistTrack(trackNum, playlistId);
        return track.track;
    }
    async getTracks(playlistId) {
        const tracks = await getPlaylist_1.getPlaylistTracks(playlistId);
        console.log(typeof tracks);
        return tracks.items[0].track;
    }
};
__decorate([
    type_graphql_1.Query(() => Track_1.default),
    __param(0, type_graphql_1.Arg('track', () => type_graphql_1.Int)),
    __param(1, type_graphql_1.Arg('playlistId', () => String)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], TrackResolver.prototype, "getTrack", null);
__decorate([
    type_graphql_1.Query(() => Track_1.default),
    __param(0, type_graphql_1.Arg('playlistId', () => String)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TrackResolver.prototype, "getTracks", null);
TrackResolver = __decorate([
    type_graphql_1.Resolver(Track_1.default)
], TrackResolver);
exports.TrackResolver = TrackResolver;
//# sourceMappingURL=track.js.map