import React from 'react';
import styled from 'styled-components';

const StyledComponentClassStyled = styled.div`
  width: 100px;
  height: 100px;
  display: inline-block;

  &.red {
    background: red;
  }
  &.blue {
    background: blue;
  }
`;

const StyledComponentClass = () => {
  const data = ['red', 'blue'];

  return (
    <>
      {data.map(key => <StyledComponentClassStyled className={key} />)}
    </>
  );
};

export default StyledComponentClass;
