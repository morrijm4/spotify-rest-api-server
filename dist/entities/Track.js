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
const Album_1 = __importDefault(require("./Album"));
const Artist_1 = __importDefault(require("./Artist"));
const ExternalId_1 = __importDefault(require("./ExternalId"));
const ExternalUrl_1 = __importDefault(require("./ExternalUrl"));
let Track = class Track {
};
__decorate([
    type_graphql_1.Field(() => Album_1.default),
    __metadata("design:type", Album_1.default)
], Track.prototype, "album", void 0);
__decorate([
    type_graphql_1.Field(() => [Artist_1.default]),
    __metadata("design:type", Array)
], Track.prototype, "artists", void 0);
__decorate([
    type_graphql_1.Field(() => [String]),
    __metadata("design:type", Array)
], Track.prototype, "available_markets", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], Track.prototype, "disc_number", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], Track.prototype, "duration_ms", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Boolean)
], Track.prototype, "episode", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Boolean)
], Track.prototype, "explicit", void 0);
__decorate([
    type_graphql_1.Field(() => ExternalId_1.default),
    __metadata("design:type", ExternalId_1.default)
], Track.prototype, "external_ids", void 0);
__decorate([
    type_graphql_1.Field(() => ExternalUrl_1.default),
    __metadata("design:type", ExternalUrl_1.default)
], Track.prototype, "external_urls", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Track.prototype, "href", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Track.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Boolean)
], Track.prototype, "is_local", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Track.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], Track.prototype, "popularity", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Track.prototype, "preview_url", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Boolean)
], Track.prototype, "track", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], Track.prototype, "track_number", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Track.prototype, "type", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Track.prototype, "uri", void 0);
Track = __decorate([
    type_graphql_1.ObjectType()
], Track);
exports.default = Track;
//# sourceMappingURL=Track.js.map