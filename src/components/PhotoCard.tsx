import React from 'react';
import {Photo} from '../services/flickrService';
import {Row} from './Layout';
import {OwnerAvatar} from './OwnerAvatar';

export const PhotoCard = ({farm, server, owner, id, secret, title}: Photo) => {
  return (
    <Row style={{alignItems: 'flex-end', border: '3px solid white', position: 'relative'}}>
      <OwnerAvatar {...{farm, owner, server}}/>
      <img
        src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`}
        alt={title}
        style={{height: 250, width: 350, objectFit: 'cover', overflow: 'hidden', fontSize: 18}}
        title={title}
      />
    </Row>
  );
};