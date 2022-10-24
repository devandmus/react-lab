import React, { useState } from 'react';
import { nanoid } from 'nanoid'

const Element = ({ id, nano }) => {
  console.log(`Render ${id}`);
  const [n, setN] = useState(0);
  return (
    <div style={{
      display: 'flex',
      margin: '16px',
      background: 'grey',
    }}>
      <button onClick={() => setN(n + 1)}>{n}</button>
      <div>{`${id} ${nano ? 'nano' : ''}`}</div>
    </div>
  )
}

const NanoId = () => {
  const [n, setN] = useState(0);
  const data = [1,2,3];
  return (
    <>
      <button onClick={() => setN(n + 1)}>{n}</button>
      {data.map((id) => {
        const nano = nanoid();
        return (
          <>
            <Element id={id} key={id} />
            <Element id={nano} key={nano} nano />
          </>
        )
      })}
    </>
  );
};

export default NanoId;
