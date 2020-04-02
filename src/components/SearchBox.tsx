import React from 'react';
import {Button} from './Button';
import {Row} from './Layout';
import './SearchBox.css';

interface Props {
  disabled?: boolean;
  onSearch: (text: string) => void;
}

export const SearchBox = ({disabled, onSearch}: Props) => {
  const [value, setState] = React.useState<string>('');

  const onChange = (ev: any) => {
    ev.preventDefault();
    setState(ev.target.value);
  };

  const handleEnter = (ev: any) => {
    if (ev.key === 'Enter') {
      search();
    }
  };

  const search = () => onSearch(value);

  return (
    <Row className="SearchBox">
      <input
        autoFocus={true}
        type="textfield"
        className="SearchBox-input"
        value={value}
        onChange={onChange}
        onKeyDown={handleEnter}
      />
      <Button text="Search" disabled={disabled} onClick={search}/>
    </Row>
  );
};
