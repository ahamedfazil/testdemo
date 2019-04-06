
export interface IDictionaryState{
    isFetched: boolean;
    isInitialised: boolean;
    name?:string;
    error?:any;
    items:DictionaryItem[]
}

export interface DictionaryItem {
    id:number;
    title: string;
}

