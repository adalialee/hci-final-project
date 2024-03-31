import {Tooltip} from '@mui/material';
import React, {FunctionComponent} from 'react';

// takes in the values for the input placeholder and tooltip title, and useState value/setter
interface FilterInputProps {
  placeholder: string;
  value: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  tooltipTitle: string;
}

export const FilterInput: FunctionComponent<FilterInputProps> = ({placeholder, value, setInputValue, tooltipTitle}) => {

  // every time the input's updated
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <Tooltip title={tooltipTitle} placement="right">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}/>
    </Tooltip>
  );
};