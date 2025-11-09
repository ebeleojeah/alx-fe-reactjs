import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);
  const reset = () => setCount(0);

  return (
    <div
      style={{
        textAlign: 'center',
        padding: '40px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f0f8ff',
        borderRadius: '12px',
        maxWidth: '400px',
        margin: '30px auto',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>Simple Counter</h2>
      
      <p
        style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: count > 0 ? '#27ae60' : count < 0 ? '#e74c3c' : '#34495e',
          margin: '20px 0',
        }}
      >
        {count}
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button
          onClick={decrement}
          style={{
            padding: '12px 20px',
            fontSize: '1rem',
            backgroundColor: '#e74c3c',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: '0.3s',
          }}
          onMouseOver={e => e.target.style.backgroundColor = '#c0392b'}
          onMouseOut={e => e.target.style.backgroundColor = '#e74c3c'}
        >
          Decrement
        </button>

        <button
          onClick={reset}
          style={{
            padding: '12px 20px',
            fontSize: '1rem',
            backgroundColor: '#95a5a6',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Reset
        </button>

        <button
          onClick={increment}
          style={{
            padding: '12px 20px',
            fontSize: '1rem',
            backgroundColor: '#27ae60',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: '0.3s',
          }}
          onMouseOver={e => e.target.style.backgroundColor = '#219653'}
          onMouseOut={e => e.target.style.backgroundColor = '#27ae60'}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default Counter;