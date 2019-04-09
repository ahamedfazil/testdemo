import { DictionaryService } from '../services/DictionaryService'


let svc

export default {
    getDictionary: (apiCall) => apiCall(svc)
}