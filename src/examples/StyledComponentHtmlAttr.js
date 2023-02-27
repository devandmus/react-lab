import React from 'react';
import styled, { css } from 'styled-components';

const Elem = styled.div`
  background-color: aliceblue;
`

const Wrapper = styled.div(({ counter }) => css`
  ${((counter % 2) === 0) && 'background: red;'}
  &[mycustomattribute] {
    color: green;
  }
  
  h1[mycustomattribute] {
    color: green;
  }
`);

const StyledComponentHtmlAttr = () => {
  const [counter, setCounter] = React.useState(0);
  const module = (counter % 2) === 0;

  return (
    <Wrapper counter={counter} $mycustomattribute="something" $thing>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>Click</button>
      <h1 mycustomattribute={module && 'true'}>Title</h1>
      <h2>Subtitle</h2>
      <p>Lorem Ipsum</p>
      {module && <Elem />}
    </Wrapper>
  );
};

export default StyledComponentHtmlAttr;
