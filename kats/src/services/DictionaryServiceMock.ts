import { DictionaryItem } from '../models/DictionaryItem';
import { classToClass } from 'class-transformer';
import { DictionaryService } from './DictionaryService';

export class DictionaryServiceMock extends DictionaryService {
    private static readonly engagementTypes: DictionaryItem[] = [];
    private static readonly accountingFramework: DictionaryItem[] = [];
    private static readonly categories: DictionaryItem[] = [];
    private static readonly topics: DictionaryItem[] = [];
    private static readonly ticketTypes: DictionaryItem[] = [];
    private static readonly watchers: DictionaryItem[] = [];
    private static readonly status: DictionaryItem[] = [];

constructor() {
    super();
    let engagementType = new DictionaryItem();
    engagementType.id = 1;
    engagementType.value = "EU PIE"
    DictionaryServiceMock.engagementTypes.push(engagementType);

    engagementType = new DictionaryItem();
    engagementType.id = 2;
    engagementType.value = "AQR"
    DictionaryServiceMock.engagementTypes.push(engagementType);

    engagementType = new DictionaryItem();
    engagementType.id = 1;
    engagementType.value = "Significant Other"
    DictionaryServiceMock.engagementTypes.push(engagementType);
}

// async getAllEngagementTypes(): Promise<DictionaryItem[]>{
//     return classToClass(DictionaryServiceMock.engagementTypes);
// }

}