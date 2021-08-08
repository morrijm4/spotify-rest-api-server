"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("./client"));
const getAccessToken = async (api = client_1.default) => {
    return await api.clientCredentialsGrant().then(function (data) {
        return data.body['access_token'];
    }, function (err) {
        console.log('Something went wrong when retrieving an access token', err);
        return err;
    });
};
exports.default = getAccessToken;
//# sourceMappingURL=getAccessToken.js.map