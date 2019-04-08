
export interface IDictionaryState{
    isFetched: boolean;
    isInitialised: boolean;
    name?:string;
    error?:any;
    items:IDictionary
}

export interface IDictionary {
    results: IDictionaryItem[];
}

export interface IDictionaryItem {
    id:number;
    title: string;
}

