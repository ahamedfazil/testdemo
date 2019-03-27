import { DictionaryService } from '../../services/DictionaryService'


const svc = new DictionaryService().getAllEngagementTypes();

export default {
    getDictionary: (apiCall) => apiCall(svc)
}