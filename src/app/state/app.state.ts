import { ItemsState } from "@core/models/items.state";
import { itemsReducer } from "./reducers/items.redurecs";
import {ActionReducerMap} from '@ngrx/store';


export interface AppState {
  items: ItemsState;

}


export const ROOT_REDUCERS:ActionReducerMap<AppState> = {
  items: itemsReducer
};
