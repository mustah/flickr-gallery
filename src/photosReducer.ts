import {ActionType, getType} from 'typesafe-actions';
import * as actions from './photosActions';
import {Photo} from './services/flickrService';

export interface State {
  isFetching: boolean;
  isLoadMore: boolean;
  items: Photo[];
  page: number;
  total: number;
  text: string;
  errorMessage?: string;
}

export const initialState: State = {
  items: [],
  isFetching: false,
  isLoadMore: false,
  page: 1,
  total: 0,
  text: '',
};

export const photosReducer = (state: State, action: ActionType<typeof actions>): State => {
  switch (action.type) {
    case getType(actions.requestPhotos):
      return {
        ...initialState,
        isFetching: true,
        text: action.payload
      };
    case getType(actions.successPhotos):
      const {photos: {photo, total}} = action.payload;
      return {
        ...state,
        isFetching: false,
        isLoadMore: false,
        items: [...state.items, ...photo],
        page: state.page + 1,
        total,
      };
    case getType(actions.requestLoadMore):
      return {
        ...state,
        isLoadMore: true,
        errorMessage: undefined,
      };
    case getType(actions.failurePhotos):
      return {
        ...initialState,
        errorMessage: action.payload
      };
    case getType(actions.resetSearch):
      return initialState;
    default:
      return state;
  }
};
