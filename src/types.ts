import {ReactNode} from 'react';

export interface WithChildren {
  children?: ReactNode[] | ReactNode;
}

export interface OnClick {
  onClick?: () => void;
}