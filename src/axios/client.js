"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTag = exports.GetGoodSentencesLike = exports.GetGoodSentences = exports.UpdateCardCell = exports.AddCardCell = exports.AddCard = exports.GetCardCell = exports.GetCard = void 0;
var HttpClients_1 = __importDefault(require("./HttpClients"));
function GetCard(param) {
    return HttpClients_1.default.post("http://localhost:8085/seed/get_data", { param: param });
}
exports.GetCard = GetCard;
function GetCardCell(param) {
    return HttpClients_1.default.post("http://localhost:8085/seed/get_cell", { param: param });
}
exports.GetCardCell = GetCardCell;
function AddCard(param) {
    return HttpClients_1.default.post("http://localhost:8085/seed/add_card", { param: param });
}
exports.AddCard = AddCard;
function AddCardCell(param) {
    return HttpClients_1.default.post("http://localhost:8085/seed/add_cell", { param: param });
}
exports.AddCardCell = AddCardCell;
function UpdateCardCell(param) {
    return HttpClients_1.default.post("http://localhost:8085/seed/update_cell", { param: param });
}
exports.UpdateCardCell = UpdateCardCell;
function GetGoodSentences(param) {
    return HttpClients_1.default.post("http://localhost:8085/seed/good_sentences", { param: param });
}
exports.GetGoodSentences = GetGoodSentences;
function GetGoodSentencesLike(param) {
    return HttpClients_1.default.post("http://localhost:8085/seed/good_sentences_like", { param: param });
}
exports.GetGoodSentencesLike = GetGoodSentencesLike;
function GetTag(param) {
    return HttpClients_1.default.post("http://localhost:8085/seed/get_tag", { param: param });
}
exports.GetTag = GetTag;
exports.default = {
    GetCard: GetCard,
    GetCardCell: GetCardCell,
    AddCard: AddCard,
    AddCardCell: AddCardCell,
    GetTag: GetTag
};
//# sourceMappingURL=client.js.map