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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const ExternalUrl_1 = __importDefault(require("./ExternalUrl"));
const Artist_1 = __importDefault(require("./Artist"));
const Image_1 = __importDefault(require("./Image"));
let Album = class Album {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Album.prototype, "album_type", void 0);
__decorate([
    type_graphql_1.Field(() => [Artist_1.default]),
    __metadata("design:type", Array)
], Album.prototype, "artists", void 0);
__decorate([
    type_graphql_1.Field(() => [String]),
    __metadata("design:type", Array)
], Album.prototype, "available_markets", void 0);
__decorate([
    type_graphql_1.Field(() => ExternalUrl_1.default),
    __metadata("design:type", ExternalUrl_1.default)
], Album.prototype, "external_urls", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Album.prototype, "href", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Album.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(() => [Image_1.default]),
    __metadata("design:type", Array)
], Album.prototype, "images", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Album.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Album.prototype, "release_date", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Album.prototype, "release_date_precision", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], Album.prototype, "total_tracks", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Album.prototype, "type", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Album.prototype, "uri", void 0);
Album = __decorate([
    type_graphql_1.ObjectType()
], Album);
exports.default = Album;
//# sourceMappingURL=Album.js.map