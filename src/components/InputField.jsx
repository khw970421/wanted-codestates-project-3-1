import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { BiSearchAlt2 } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
// eslint-disable-next-line react/prop-types
const InputField = ({ changeValue, onKeyPress, onChange, clickBtn }) => {
  const refContainer = useRef('');
  return (
    <InputContainer>
      <CustomInput
        type="text"
        onKeyPress={onKeyPress}
        placeholder="레포를 찾아봅시다."
        ref={refContainer}
        value={changeValue}
        onChange={onChange}
      />
      <IconContainer onClick={clickBtn}>
        <AiOutlineSearch size={22} />
      </IconContainer>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  position: relative;
`;

const CustomInput = styled.input`
  width: 600px;
  height: 46px;
  border-radius: 50px;
  padding: 10px 20px;
  box-sizing: border-box;
  position: absolute;
  border: 0px;
  box-shadow: 2px 2px 2px 2px gray;
  :focus {
    outline: none;
  }
`;

const IconContainer = styled.div`
  position: absolute;
  left: 550px;
  top: 12px;
`;

export default InputField;
