import React from 'react';
import {Row} from './Layout';

interface Props {
  total: number;
}

export const ResultSummary = ({total}: Props) => {
  if (total === 0) {
    return null;
  }
  return (
    <Row style={{justifyContent: 'flex-start', fontSize: 24, marginBottom: 16, marginTop: 16}}>
      Everyone's photos ({total})
    </Row>
  );
};