import React from 'react';
import styled from 'styled-components';
import { useQueryClient } from 'react-query';
import { useRepoResults } from '../util/axios';

// eslint-disable-next-line react/prop-types
const ResultField = ({ inputValue, setInputValue }) => {
  const queryClient = useQueryClient();

  const { status, data, error } = useRepoResults(inputValue, 1);
  const onHandleList = name => {
    setInputValue(name);
  };

  const getDataByStatus = () => {
    switch (status) {
      case 'loading':
        return <div>Loading</div>;
      case 'error':
        return <span>Error: {error.message}</span>;
      default:
        return (
          <ul>
            <ResultHeader>추천 검색어</ResultHeader>
            {data?.map(item => {
              const { id, full_name, decription, updated_at, owner } = item;
              const { avatar_url } = owner;
              return (
                <SearchedItem key={id} value={full_name}>
                  {full_name}
                </SearchedItem>
              );
            })}
          </ul>
        );
    }
  };

  return data ? <Wrapper>{getDataByStatus()}</Wrapper> : null;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 660px;
  background-color: #ffffff;
  border-radius: 42px;
  lint-height: 25.6px;
`;

const SearchedItem = styled.li`
  padding: 5px 0px 5px 5px;
  margin-bottom: 5px;
  border-bottom: 1px solid #efefef;
  list-style: none;
  &:hover {
    background: #cae9ff;
    color: #ffffff;
  }
  cursor: pointer;
`;

const ResultHeader = styled.span`
  font-size: 0.8rem;
  color: #3b3b3b;
`;

export default ResultField;
