import React from 'react';
import './style.css';

export default function App() {
  const xyz = ['child', 'mind', 'component'];

  // const child= xyz.map (())

  return (
    <div>
      <div>
        {xyz
          .filter((xyz) => xyz.includes('c'))
          .map((filteredName) => (
            <li>{filteredName}</li>
          ))}
      </div>
    </div>
  );
}
