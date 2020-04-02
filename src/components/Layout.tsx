import React, {CSSProperties} from 'react';
import {OnClick, WithChildren} from '../types';

interface Props<T = Element> extends WithChildren, OnClick {
  className?: string;
  style?: CSSProperties;
}

const flexStyle: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
};

export const Row = ({children, className, onClick, style}: Props) => (
  <div className={className} onClick={onClick} style={{...flexStyle, flexDirection: 'row', ...style}}>
    {children}
  </div>
);

export const Column = ({children, className, onClick, style}: Props) => (
  <div className={className} onClick={onClick} style={{...flexStyle, flexDirection: 'column', ...style}}>
    {children}
  </div>
);
