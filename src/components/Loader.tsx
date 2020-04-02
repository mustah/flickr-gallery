import React from 'react';
import oval from '../assets/oval.svg';
import {WithChildren} from '../types';

interface Props extends WithChildren {
  isFetching: boolean;
}

export const Loader = ({children, isFetching}: Props) =>
  isFetching
    ? <img src={oval} alt="loader" style={{marginTop: 24}}/>
    : <div>{children}</div>;

