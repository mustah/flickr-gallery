import React, {Dispatch} from 'react';
import {failurePhotos, requestPhotos, resetSearch, successPhotos} from './photosActions';
import {flickrService} from './services/flickrService';

interface Props {
  isLoadMore?: boolean;
  dispatch: Dispatch<any>;
  page: number;
  text: string;
}

const handleAsyncRequest = async (text: string, page: number, dispatch: Dispatch<any>): Promise<void> => {
  try {
    const response = await flickrService.searchPhotos(text, page);
    dispatch(successPhotos(response));
  } catch (error) {
    dispatch(failurePhotos('Ok, lets try again. Something went wrong.'))
  }
};

const useLoadMorePhotos = ({dispatch, isLoadMore, page, text}: Props): void => {
  React.useEffect(() => {
    const loadMore = async (text: string) => {
      await handleAsyncRequest(text, page, dispatch);
    };
    if (isLoadMore) {
      loadMore(text);
    }
    // eslint-disable-next-line
  }, [isLoadMore]);
};

export const useFetchPhotos = (props: Props): void => {
  const {dispatch, page, text} = props;

  React.useEffect(() => {
    const fetchPhotos = async (text: string) => {
      dispatch(requestPhotos(text));
      await handleAsyncRequest(text, page, dispatch);
    };

    if (text) {
      fetchPhotos(text);
    } else {
      dispatch(resetSearch());
    }
    // eslint-disable-next-line
  }, [text]);

  useLoadMorePhotos(props);
};

