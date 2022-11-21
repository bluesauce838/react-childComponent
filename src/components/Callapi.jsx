import React from 'react';
import { useState, useEffect } from 'react';

function Githubuser({ name, url }) {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}

function Callapi() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/moonhighway`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  if (data) return <Githubuser name={(data.name, data.url)} />;
  return <pre> {JSON.stringify(data, null, 2)} </pre>;

  return (
    <div>
      <h1>are you advent</h1>
    </div>
  );
}
export default Callapi;
