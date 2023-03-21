import HttpClient from './HttpClients'
export function GetCard(param: any) {
    return HttpClient.post(`http://localhost:8085/seed/get_data`, { param })
}
export function GetCardCell(param: any) {
    return HttpClient.post(`http://localhost:8085/seed/get_cell`, { param })
}
export function AddCard(param: any) {
    return HttpClient.post(`http://localhost:8085/seed/add_card`, { param })
}
export function AddCardCell(param: any) {
    return HttpClient.post(`http://localhost:8085/seed/add_cell`, { param })
}
export function UpdateCardCell(param: any) {
    return HttpClient.post(`http://localhost:8085/seed/update_cell`, { param })
}
export function GetGoodSentences(param: any) {
    return HttpClient.post(`http://localhost:8085/seed/good_sentences`, { param })
}
export function GetGoodSentencesLike(param: any) {
    return HttpClient.post(`http://localhost:8085/seed/good_sentences_like`, { param })
}
export function GetTag(param: any) {
    return HttpClient.post(`http://localhost:8085/seed/get_tag`, { param })
}
export default {
    GetCard,
    GetCardCell,
    AddCard,
    AddCardCell,
    GetTag
}
