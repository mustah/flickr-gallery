import {failurePhotos, requestLoadMore, requestPhotos, resetSearch, successPhotos} from '../photosActions';
import {initialState, photosReducer, State} from '../photosReducer';
import {mockResponse} from '../mockdata/photosResponseTestData';

describe('photos reducer ', () => {

  describe('reset search', () => {

    it('resets initial state to same state', () => {
      expect(photosReducer(initialState, resetSearch())).toBe(initialState);
    });

    it('resets state to initial state', () => {
      const state: State = {...initialState, isFetching: true};
      expect(photosReducer(state, resetSearch())).toBe(initialState);
    });

    it('resets total', () => {
      const state: State = {...initialState, total: 100};
      expect(photosReducer(state, resetSearch())).toBe(initialState);
    });
  });

  describe('requestPhotos', () => {

    it('can request for more photos', () => {
      const state: State = {...initialState, total: 100};
      const expected: State = {...initialState, isFetching: true, text: 'car'};

      expect(photosReducer(state, requestPhotos('car'))).toEqual(expected);
    });

    it('requests for new photos with new text', () => {
      const state: State = {...initialState, text: 'car'};
      const expected: State = {...initialState, isFetching: true, text: 'sport'};

      expect(photosReducer(state, requestPhotos('sport'))).toEqual(expected);
    });
  });

  describe('loadMore', () => {

    it('loads more photos', () => {
      const state: State = {...initialState, text: 'car'};
      const expected: State = {...initialState, isLoadMore: true, text: 'car'};

      expect(photosReducer(state, requestLoadMore())).toEqual(expected);
    });

    it('removes any error message when loading more', () => {
      const state: State = {...initialState, text: 'car', errorMessage: 'whops'};
      const expected: State = {...initialState, isLoadMore: true, text: 'car'};

      expect(photosReducer(state, requestLoadMore())).toEqual(expected);
    });
  });

  describe('success photos response', () => {

    it('has single result', () => {
      const {photos: {total, photo}} = mockResponse;
      const expected: State = {...initialState, total, page: 2, items: [...photo]};

      expect(photosReducer(initialState, successPhotos(mockResponse))).toEqual(expected);
    });

    it('fetches next page', () => {
      const {photos: {total, photo}} = mockResponse;
      const expected: State = {...initialState, total, page: 3, items: [...photo, ...photo]};

      const nextState = photosReducer(initialState, successPhotos(mockResponse));

      expect(photosReducer(nextState, successPhotos(mockResponse))).toEqual(expected);
    });

    it('resets result reset search action is dispatched', () => {
      const state = photosReducer(initialState, successPhotos(mockResponse));

      expect(photosReducer(state, resetSearch())).toEqual(initialState);
    });

    it('resets result when new search text is not the same as the old one', () => {
      const {photos: {total, photo}} = mockResponse;
      const state: State = {...initialState, text: 'car', total, page: 2, items: [...photo]};
      const expected: State = {...initialState, isFetching: true, text: 'sports'};

      expect(photosReducer(state, requestPhotos('sports'))).toEqual(expected);
    });

    it('can have an error message after as success and will reset state', () => {
      const {photos: {total, photo}} = mockResponse;
      const state: State = {...initialState, text: 'car', total, page: 2, items: [...photo]};
      const expected: State = {...initialState, errorMessage: 'no photos'};

      expect(photosReducer(state, failurePhotos('no photos'))).toEqual(expected);
    });

    it('will clear all error messages when new request for photos is made', () => {
      const {photos: {total, photo}} = mockResponse;
      const state: State = {...initialState, text: 'car', total, page: 2, items: [...photo]};
      const expected: State = {...initialState, isFetching: true, text: 'superman'};

      expect(photosReducer(state, requestPhotos('superman'))).toEqual(expected);
    });
  });

});