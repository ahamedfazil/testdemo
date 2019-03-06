import C from './constants'
import { submitter} from './store/reducers'
//import { User } from './models/User'

const state = "";

const action = {
    type:C.ADD_SUBMITTER,
    payload: {
        "Full name": "Nigella Lawson",
         "Job Title": "Chef",
         "Department": "Audit",
         "Office Location": "London",
         "Office Number": 868,
         "Mobile Number": 7717719,
         "Other Number": 7242019
    }
}

const nextState = submitter(state,action)

console.log(`
    Initial state: ${state}
    action: ${JSON.stringify(action)}
    new state: ${JSON.stringify(nextState)}
`);
