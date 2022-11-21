import React from 'react';
import './style.css';
import Callapi from './components/Callapi.jsx';

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
        <Callapi />
      </div>
    </div>
  );
}
