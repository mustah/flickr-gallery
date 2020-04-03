import * as React from 'react';
import {CSSProperties} from 'react';
import {Buddy} from '../services/flickrService';

export const boxShadow =
  '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)';

const style: CSSProperties = {
  fontSize: 18,
  position: 'absolute',
  left: 8,
  bottom: 8,
  height: 64,
  width: 64,
  borderRadius: 64 / 2,
  boxShadow
};

export const OwnerAvatar = ({farm, server, owner}: Buddy) => (
  <img
    title={owner}
    src={`https://farm${farm}.staticflickr.com/${server}/buddyicons/${owner}.jpg`}
    alt="Owner"
    style={style}
  />
);