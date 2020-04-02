import {createAction} from 'typesafe-actions';
import {PhotosResponse} from './services/flickrService';

export const requestPhotos = createAction('REQUEST_PHOTOS')<string>();

export const successPhotos = createAction('SUCCESS_PHOTOS')<PhotosResponse>();

export const failurePhotos = createAction('FAILURE_PHOTOS')<string>();

export const resetSearch = createAction('RESET_SEARCH')();

export const requestLoadMore = createAction('REQUEST_LOAD_MORE')();
