import { Action } from 'redux';
import keys from '../constants/ActionTypeKey';
import {IDictionaryItem, IDictionary} from '../models/IDictionary';

export interface IGetDictionaryActionInProgress extends Action {
    readonly type: keys.GET_CURRENT_DICTIONARY_INPROGRESS;

}

export interface IGetDictionaryActionSuccess extends Action{
    type:keys.GET_CURRENT_DICTIONARY_SUCCESS;
    payload:{
        newItems: IDictionary;
    }
}

export interface IGetDictionaryActionError extends Action{
    readonly type: keys.GET_CURRENT_DICTIONARY_ERROR;
    payload:{
        error:Error;
    }
}