import HttpClient from './HttpClients'
export function GetData(param: any) {
    return HttpClient.get(`http://localhost:8085/seed/get_data`, { param })
}
export default {
    GetData
}
