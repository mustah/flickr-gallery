import * as React from 'react';
import {CSSProperties} from 'react';
import {OnClick} from '../types';

interface Props extends OnClick {
  disabled?: boolean;
  style?: CSSProperties;
  text: string;
}

export const Button = ({text, ...props}: Props) => (
  <button {...props} className="SearchButton">{text}</button>
);