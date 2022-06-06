import React, { useState } from 'react';
import { Input } from '@material-ui/core';

import SingleItemCard from './components/SingleItemCard.js';

const App = () => {
  const [inputText, setInputText] = useState('');

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <>
      <Input onChange={onChange} value={inputText} />
      <SingleItemCard searchQuery={inputText} />
    </>
  );
};

export default App;
