import { IDictionaryItem, IDictionary } from '../models/IDictionary';
import { classToClass } from 'class-transformer';
import { DictionaryService } from './DictionaryService';

export class DictionaryServiceMock extends DictionaryService {
    // private static readonly engagementTypes: IDictionary = [];
    // private static readonly accountingFramework: IDictionary = [];
    // private static readonly categories: IDictionary = [];
    // private static readonly topics: IDictionary = [];
    // private static readonly ticketTypes: IDictionary = [];
    // private static readonly watchers: IDictionary = [];
    // private static readonly status: IDictionary = [];

constructor() {
    super();
    // let engagementType = new IDictionaryItem();
    // engagementType.id = 1;
    // engagementType.value = "EU PIE"
    // DictionaryServiceMock.engagementTypes.push(engagementType);

    // engagementType = new IDictionaryItem();
    // engagementType.id = 2;
    // engagementType.value = "AQR"
    // DictionaryServiceMock.engagementTypes.push(engagementType);

    // engagementType = new IDictionaryItem();
    // engagementType.id = 1;
    // engagementType.value = "Significant Other"
    // DictionaryServiceMock.engagementTypes.push(engagementType);
}

// async getAllEngagementTypes(): Promise<IDictionary>{
//     return classToClass(DictionaryServiceMock.engagementTypes);
// }

}