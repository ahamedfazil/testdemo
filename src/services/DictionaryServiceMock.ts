import { IDictionaryItem, IDictionaryState } from "../models/IDictionary";
import { classToClass } from "class-transformer";
import { DictionaryService } from "./DictionaryService";

export class DictionaryServiceMock extends DictionaryService {
  // private static readonly engagementTypes: IDictionaryState = [];
  // private static readonly accountingFramework: IDictionaryState = [];
  // private static readonly categories: IDictionaryState = [];
  // private static readonly topics: IDictionaryState = [];
  // private static readonly ticketTypes: IDictionaryState = [];
  // private static readonly watchers: IDictionaryState = [];
  // private static readonly status: IDictionaryState = [];

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

  // async getAllEngagementTypes(): Promise<IDictionaryState>{
  //     return classToClass(DictionaryServiceMock.engagementTypes);
  // }
}
