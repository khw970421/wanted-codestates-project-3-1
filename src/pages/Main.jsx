import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import InputField from '../components/InputField';
import ResultField from '../components/ResultField';
import { debounce } from '../util/index';
import { QueryClientProvider, QueryClient } from 'react-query';
const queryClient = new QueryClient();

const Main = () => {
  const [changeValue, setChangeValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const searchInput = val => {
    setInputValue(val);
  };
  const clickKey = e => {
    if (e.code === 'Enter') searchInput(e.target.value);
  };
  const onChange = e => {
    setChangeValue(e.target.value);
  };
  const clickBtn = () => {
    searchInput(changeValue);
  };
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <InputField
          changeValue={changeValue}
          onChange={onChange}
          onKeyPress={clickKey}
          clickBtn={clickBtn}
        />
        <br />
        <ResultField inputValue={inputValue} setInputValue={setInputValue} />
      </Container>
    </QueryClientProvider>
  );
};

const Container = styled.section`
  width: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 0px;
`;

export default Main;
