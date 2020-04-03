import React from 'react';
import './App.css';
import {Button} from './components/Button';
import {Column, Row} from './components/Layout';
import {Loader} from './components/Loader';
import {PhotoCard} from './components/PhotoCard';
import {ResultSummary} from './components/ResultSummary';
import {SearchBox} from './components/SearchBox';
import {useFetchPhotos} from './fetchPhotosHook';
import {requestLoadMore} from './photosActions';
import {initialState, photosReducer} from './photosReducer';

export const App = () => {
  const [text, setSearchText] = React.useState<string>('');
  const [state, dispatch] = React.useReducer(photosReducer, initialState);

  const {canLoadMore, isFetching, isLoadMore, items, page, total, errorMessage} = state;

  useFetchPhotos({dispatch, isLoadMore, page, text});

  const handleLoadMore = () => dispatch(requestLoadMore());

  return (
    <div className="App">
      <SearchBox onSearch={setSearchText} disabled={isFetching}/>

      <Loader isFetching={isFetching}>
        <Column>
          <ResultSummary total={total}/>

          <Row>
            {items.map((photo, index) => <PhotoCard {...photo} key={`${photo.id}-${index}`}/>)}
          </Row>

          <Loader isFetching={isLoadMore}>
            {canLoadMore && <Button text="Load more" onClick={handleLoadMore} style={{margin: '24px', width: 210}}/>}
          </Loader>

          <Row style={{color: '#ff5544'}}>{errorMessage && errorMessage}</Row>

        </Column>
      </Loader>

    </div>
  );
};
