import { Action } from 'redux';
import keys from '../constants/ActionTypeKey';
import {DictionaryItem} from '../models/IDictionary';

export interface IGetDictionaryInProgress extends Action {
    readonly type: keys.GET_CURRENT_DICTIONARY_INPROGRESS;

}

export interface IGetDictionarySuccess extends Action{
    type:keys.GET_CURRENT_DICTIONARY_SUCCESS;
    payload:{
        newItem: DictionaryItem;
    }
}

export interface IGetDictionaryError extends Action{
    readonly type: keys.GET_CURRENT_DICTIONARY_ERROR;
    payload:{
        error:Error;
    }
}