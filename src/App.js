import React, { useState, useTransition } from 'react';
import { Input } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';

import { useAppStyles } from './styles.js';
import SingleItemCard from './components/SingleItemCard.js';

const App = () => {
  const classes = useAppStyles();
  const [inputText, setInputText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isPending, startTransition] = useTransition();

  const onChange = (e) => {
    setInputText(e.target.value);
    startTransition(() => {
      setSearchQuery(e.target.value);
    });
  };

  return (
    <>
      <Input onChange={onChange} value={inputText} />
      {isPending && <CircularProgress className={classes.spinner} />}
      <SingleItemCard searchQuery={searchQuery} />
    </>
  );
};

export default App;
